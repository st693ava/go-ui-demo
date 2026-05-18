import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as v, S as y, T as b, U as x, V as S, W as C, X as w, Y as T, Z as E, _ as D, _t as O, a as ee, at as k, b as te, c as A, ct as ne, d as re, dt as j, et as M, f as ie, ft as ae, g as N, gt as P, h as F, ht as I, i as oe, it as se, j as ce, k as L, l as le, lt as ue, m as R, mt as de, n as fe, nt as pe, o as me, ot as he, p as z, pt as B, q as ge, r as _e, rt as ve, s as ye, st as be, t as xe, tt as Se, u as V, ut as Ce, v as H, vt as U, w as we, x as W, y as G, yt as Te, z as Ee } from "./go-ui-vue.runtime.esm-bundler-Duu92TUG.js";
//#region node_modules/vue-sonner/lib/index.js
var De = 1, Oe = new class {
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
		let { message: t, ...n } = e, r = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : De++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
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
			else if (Ae(e) && !e.ok) {
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
		let n = t?.id || De++, r = this.toasts.find((e) => e.id === n), i = t?.dismissible === void 0 ? !0 : t.dismissible;
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
function ke(e, t) {
	let n = t?.id || De++;
	return Oe.create({
		message: e,
		id: n,
		type: "default",
		...t
	}), n;
}
var Ae = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", je = Object.assign(ke, {
	success: Oe.success,
	info: Oe.info,
	warning: Oe.warning,
	error: Oe.error,
	custom: Oe.custom,
	message: Oe.message,
	promise: Oe.promise,
	dismiss: Oe.dismiss,
	loading: Oe.loading
}, {
	getHistory: () => Oe.toasts,
	getToasts: () => Oe.getActiveToasts()
});
function Me(e) {
	return e.label !== void 0;
}
var Ne = 3, Pe = "24px", Fe = "16px", Ie = 4e3, Le = 356, Re = 14, ze = 45, Be = 200;
function Ve() {
	let e = k(!1);
	return s(() => {
		let t = () => {
			e.value = document.hidden;
		};
		return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
	}), { isDocumentHidden: e };
}
function He(...e) {
	return e.filter(Boolean).join(" ");
}
function Ue(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
function We(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? Fe : Pe;
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
var Ge = [
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
], Ke = [
	"aria-label",
	"data-disabled",
	"data-close-button-position"
], qe = /* @__PURE__ */ W({
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
		let r = e, i = n, a = k(null), c = k(null), l = k(!1), u = k(!1), d = k(!1), f = k(!1), m = k(!1), h = k(0), g = k(0), _ = k(r.toast.duration || r.duration || Ie), y = k(null), b = k(null), x = z(() => r.index === 0), S = z(() => r.index + 1 <= r.visibleToasts), w = z(() => r.toast.type), T = z(() => r.toast.dismissible !== !1), E = z(() => r.toast.class || ""), ee = z(() => r.descriptionClass || ""), te = z(() => {
			let e = r.toast.position || r.position, t = r.heights.filter((t) => t.position === e).findIndex((e) => e.toastId === r.toast.id);
			return t >= 0 ? t : 0;
		}), A = z(() => {
			let e = r.toast.position || r.position;
			return r.heights.filter((t) => t.position === e).reduce((e, t, n) => n >= te.value ? e : e + t.height, 0);
		}), ne = z(() => te.value * r.gap + A.value || 0), re = z(() => r.toast.closeButton ?? r.closeButton), j = z(() => r.toast.duration || r.duration || Ie), M = k(0), ie = k(0), ae = k(null), oe = z(() => r.position.split("-")), se = z(() => oe.value[0]), le = z(() => oe.value[1]), ue = z(() => typeof r.toast.title != "string"), de = z(() => typeof r.toast.description != "string"), { isDocumentHidden: fe } = Ve(), pe = z(() => w.value && w.value === "loading");
		p(() => {
			l.value = !0, _.value = j.value;
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
		function me() {
			u.value = !0, h.value = ne.value, setTimeout(() => {
				i("removeToast", r.toast);
			}, Be);
		}
		function he() {
			if (pe.value || !T.value) return {};
			me(), r.toast.onDismiss?.(r.toast);
		}
		function ge(e) {
			e.button !== 2 && (pe.value || !T.value || (y.value = /* @__PURE__ */ new Date(), h.value = ne.value, e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (d.value = !0, ae.value = {
				x: e.clientX,
				y: e.clientY
			})));
		}
		function _e() {
			if (f.value || !T.value) return;
			ae.value = null;
			let e = Number(b.value?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(b.value?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), n = (/* @__PURE__ */ new Date()).getTime() - (y.value?.getTime() || 0), i = a.value === "x" ? e : t, o = Math.abs(i) / n;
			if (Math.abs(i) >= ze || o > .11) {
				h.value = ne.value, r.toast.onDismiss?.(r.toast), a.value === "x" ? c.value = e > 0 ? "right" : "left" : c.value = t > 0 ? "down" : "up", me(), f.value = !0;
				return;
			} else b.value?.style.setProperty("--swipe-amount-x", "0px"), b.value?.style.setProperty("--swipe-amount-y", "0px");
			m.value = !1, d.value = !1, a.value = null;
		}
		function ve(e) {
			if (!ae.value || !T.value || (window?.getSelection()?.toString()?.length ?? !1)) return;
			let t = e.clientY - ae.value.y, n = e.clientX - ae.value.x, i = r.swipeDirections ?? Ue(r.position);
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
		}), ce(() => {
			b.value && i("removeToast", r.toast);
		}), s((e) => {
			if (r.toast.promise && w.value === "loading" || r.toast.duration === Infinity || r.toast.type === "loading") return;
			let t;
			r.expanded || r.interacting || fe.value ? (() => {
				if (ie.value < M.value) {
					let e = (/* @__PURE__ */ new Date()).getTime() - M.value;
					_.value -= e;
				}
				ie.value = (/* @__PURE__ */ new Date()).getTime();
			})() : _.value !== Infinity && (M.value = (/* @__PURE__ */ new Date()).getTime(), t = setTimeout(() => {
				r.toast.onAutoClose?.(r.toast), me();
			}, _.value)), e(() => {
				clearTimeout(t);
			});
		}), C(() => r.toast.delete, (e) => {
			e !== void 0 && e && (me(), r.toast.onDismiss?.(r.toast));
		}, { deep: !0 });
		function ye() {
			d.value = !1, a.value = null, ae.value = null;
		}
		return (e, t) => (o(), D("li", {
			tabindex: "0",
			ref_key: "toastRef",
			ref: b,
			class: I(B(He)(r.class, E.value, e.classes?.toast, e.toast.classes?.toast, e.classes?.[w.value], e.toast?.classes?.[w.value])),
			"data-sonner-toast": "",
			"data-rich-colors": e.toast.richColors ?? e.defaultRichColors,
			"data-styled": !(e.toast.component || e.toast?.unstyled || e.unstyled),
			"data-mounted": l.value,
			"data-promise": !!e.toast.promise,
			"data-swiped": m.value,
			"data-removed": u.value,
			"data-visible": S.value,
			"data-y-position": se.value,
			"data-x-position": le.value,
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
			style: O({
				"--index": e.index,
				"--toasts-before": e.index,
				"--z-index": e.toasts.length - e.index,
				"--offset": `${u.value ? h.value : ne.value}px`,
				"--initial-height": e.expandByDefault ? "auto" : `${g.value}px`,
				...e.style,
				...r.toast.style
			}),
			onDragend: ye,
			onPointerdown: ge,
			onPointerup: _e,
			onPointermove: ve
		}, [re.value && !e.toast.component && w.value !== "loading" ? (o(), D("button", {
			key: 0,
			"aria-label": e.closeButtonAriaLabel || "Close toast",
			"data-disabled": pe.value,
			"data-close-button": "true",
			"data-close-button-position": e.closeButtonPosition,
			class: I(B(He)(e.classes?.closeButton, e.toast?.classes?.closeButton)),
			onClick: he
		}, [e.icons?.close ? (o(), F(Ee(e.icons?.close), { key: 0 })) : v(e.$slots, "close-icon", { key: 1 })], 10, Ke)) : N("v-if", !0), e.toast.component ? (o(), F(Ee(e.toast.component), L({ key: 1 }, e.toast.componentProps, {
			onCloseToast: he,
			isPaused: e.$props.expanded || e.$props.interacting || B(fe)
		}), null, 16, ["isPaused"])) : (o(), D(V, { key: 2 }, [
			w.value !== "default" || e.toast.icon || e.toast.promise ? (o(), D("div", {
				key: 0,
				"data-icon": "",
				class: I(B(He)(e.classes?.icon, e.toast?.classes?.icon))
			}, [e.toast.icon ? (o(), F(Ee(e.toast.icon), { key: 0 })) : (o(), D(V, { key: 1 }, [w.value === "loading" ? v(e.$slots, "loading-icon", { key: 0 }) : w.value === "success" ? v(e.$slots, "success-icon", { key: 1 }) : w.value === "error" ? v(e.$slots, "error-icon", { key: 2 }) : w.value === "warning" ? v(e.$slots, "warning-icon", { key: 3 }) : w.value === "info" ? v(e.$slots, "info-icon", { key: 4 }) : N("v-if", !0)], 64))], 2)) : N("v-if", !0),
			R("div", {
				"data-content": "",
				class: I(B(He)(e.classes?.content, e.toast?.classes?.content))
			}, [R("div", {
				"data-title": "",
				class: I(B(He)(e.classes?.title, e.toast.classes?.title))
			}, [ue.value ? (o(), F(Ee(e.toast.title), P(L({ key: 0 }, e.toast.componentProps)), null, 16)) : (o(), D(V, { key: 1 }, [H(U(e.toast.title), 1)], 64))], 2), e.toast.description ? (o(), D("div", {
				key: 0,
				"data-description": "",
				class: I(B(He)(e.descriptionClass, ee.value, e.classes?.description, e.toast.classes?.description))
			}, [de.value ? (o(), F(Ee(e.toast.description), P(L({ key: 0 }, e.toast.componentProps)), null, 16)) : (o(), D(V, { key: 1 }, [H(U(e.toast.description), 1)], 64))], 2)) : N("v-if", !0)], 2),
			e.toast.cancel ? (o(), D("button", {
				key: 1,
				style: O(e.toast.cancelButtonStyle || e.cancelButtonStyle),
				class: I(B(He)(e.classes?.cancelButton, e.toast.classes?.cancelButton)),
				"data-button": "",
				"data-cancel": "",
				onClick: t[0] ||= (t) => {
					B(Me)(e.toast.cancel) && T.value && (e.toast.cancel.onClick?.(t), me());
				}
			}, U(B(Me)(e.toast.cancel) ? e.toast.cancel?.label : e.toast.cancel), 7)) : N("v-if", !0),
			e.toast.action ? (o(), D("button", {
				key: 2,
				style: O(e.toast.actionButtonStyle || e.actionButtonStyle),
				class: I(B(He)(e.classes?.actionButton, e.toast.classes?.actionButton)),
				"data-button": "",
				"data-action": "",
				onClick: t[1] ||= (t) => {
					B(Me)(e.toast.action) && (e.toast.action.onClick?.(t), !t.defaultPrevented && me());
				}
			}, U(B(Me)(e.toast.action) ? e.toast.action?.label : e.toast.action), 7)) : N("v-if", !0)
		], 64))], 46, Ge));
	}
}), Je = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ye = {}, Xe = {
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
function Ze(e, t) {
	return o(), D("svg", Xe, t[0] ||= [R("line", {
		x1: "18",
		y1: "6",
		x2: "6",
		y2: "18"
	}, null, -1), R("line", {
		x1: "6",
		y1: "6",
		x2: "18",
		y2: "18"
	}, null, -1)]);
}
var Qe = /* @__PURE__ */ Je(Ye, [["render", Ze]]), $e = ["data-visible"], et = { class: "sonner-spinner" }, tt = /* @__PURE__ */ W({
	__name: "Loader",
	props: { visible: { type: Boolean } },
	setup(e) {
		let t = Array(12).fill(0);
		return (e, n) => (o(), D("div", {
			class: "sonner-loading-wrapper",
			"data-visible": e.visible
		}, [R("div", et, [(o(!0), D(V, null, f(B(t), (e) => (o(), D("div", {
			key: `spinner-bar-${e}`,
			class: "sonner-loading-bar"
		}))), 128))])], 8, $e));
	}
}), nt = {}, rt = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function it(e, t) {
	return o(), D("svg", rt, t[0] ||= [R("path", {
		"fill-rule": "evenodd",
		d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var at = /* @__PURE__ */ Je(nt, [["render", it]]), ot = {}, st = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function ct(e, t) {
	return o(), D("svg", st, t[0] ||= [R("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var lt = /* @__PURE__ */ Je(ot, [["render", ct]]), ut = {}, dt = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function ft(e, t) {
	return o(), D("svg", dt, t[0] ||= [R("path", {
		"fill-rule": "evenodd",
		d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var pt = /* @__PURE__ */ Je(ut, [["render", ft]]), mt = {}, ht = {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
};
function gt(e, t) {
	return o(), D("svg", ht, t[0] ||= [R("path", {
		"fill-rule": "evenodd",
		d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
		"clip-rule": "evenodd"
	}, null, -1)]);
}
var _t = /* @__PURE__ */ Je(mt, [["render", gt]]), vt = ["aria-label"], yt = [
	"data-sonner-theme",
	"dir",
	"data-theme",
	"data-rich-colors",
	"data-y-position",
	"data-x-position"
], bt = typeof window < "u" && typeof document < "u";
function xt() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var St = /* @__PURE__ */ W({
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
		gap: { default: Re },
		visibleToasts: { default: Ne },
		closeButton: {
			type: Boolean,
			default: !1
		},
		toastOptions: { default: () => ({}) },
		class: { default: "" },
		style: {},
		offset: { default: Pe },
		mobileOffset: { default: Fe },
		dir: { default: "auto" },
		swipeDirections: {},
		icons: {},
		containerAriaLabel: { default: "Notifications" }
	},
	setup(e) {
		let n = e, r = S(), i = k([]), a = z(() => n.id ? i.value.filter((e) => e.toasterId === n.id) : i.value.filter((e) => !e.toasterId));
		function c(e, t) {
			return a.value.filter((n) => !n.position && t === 0 || n.position === e);
		}
		let l = z(() => {
			let e = a.value.filter((e) => e.position).map((e) => e.position);
			return e.length > 0 ? Array.from(new Set([n.position].concat(e))) : [n.position];
		}), d = z(() => {
			let e = {};
			return l.value.forEach((t) => {
				e[t] = i.value.filter((e) => e.position === t);
			}), e;
		}), p = k([]), m = k({}), h = k(!1);
		s(() => {
			l.value.forEach((e) => {
				e in m.value || (m.value[e] = !1);
			});
		});
		let g = k(n.theme === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : n.theme), _ = k(null), y = k(null), b = k(!1), x = n.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
		function C(e) {
			i.value.find((t) => t.id === e.id)?.delete || Oe.dismiss(e.id), i.value = i.value.filter(({ id: t }) => t !== e.id), setTimeout(() => {
				i.value.find((t) => t.id === e.id) || (p.value = p.value.filter((t) => t.toastId !== e.id));
			}, Be + 50);
		}
		function w(e) {
			b.value && !e.currentTarget?.contains?.(e.relatedTarget) && (b.value = !1, y.value &&= (y.value.focus({ preventScroll: !0 }), null));
		}
		function T(e) {
			e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || b.value || (b.value = !0, y.value = e.relatedTarget);
		}
		function E(e) {
			e.target && e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || (h.value = !0);
		}
		s((e) => {
			e(Oe.subscribe((e) => {
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
			bt && (document.addEventListener("keydown", t), e(() => {
				document.removeEventListener("keydown", t);
			}));
		});
		function ee(e) {
			let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
			m.value[n] = !0;
		}
		function te(e) {
			if (!h.value) {
				let t = e.currentTarget, n = t.getAttribute("data-y-position") + "-" + t.getAttribute("data-x-position");
				m.value[n] = !1;
			}
		}
		function A() {
			Object.keys(m.value).forEach((e) => {
				m.value[e] = !1;
			});
		}
		function ne() {
			h.value = !1;
		}
		function re(e) {
			p.value = e;
		}
		function j(e) {
			let t = p.value.findIndex((t) => t.toastId === e.toastId);
			if (t !== -1) p.value[t] = e;
			else {
				let t = p.value.findIndex((t) => t.position === e.position);
				t === -1 ? p.value.unshift(e) : p.value.splice(t, 0, e);
			}
		}
		return (e, t) => (o(), D(V, null, [N(" Remove item from normal navigation flow, only available via hotkey "), R("section", {
			"aria-label": `${e.containerAriaLabel} ${B(x)}`,
			tabIndex: -1,
			"aria-live": "polite",
			"aria-relevant": "additions text",
			"aria-atomic": "false"
		}, [(o(!0), D(V, null, f(l.value, (t, i) => (o(), D("ol", L({
			key: t,
			ref_for: !0,
			ref_key: "listRef",
			ref: _,
			"data-sonner-toaster": "",
			"data-sonner-theme": g.value,
			class: n.class,
			dir: e.dir === "auto" ? xt() : e.dir,
			tabIndex: -1,
			"data-theme": e.theme,
			"data-rich-colors": e.richColors,
			"data-y-position": t.split("-")[0],
			"data-x-position": t.split("-")[1],
			style: {
				"--front-toast-height": `${p.value[0]?.height || 0}px`,
				"--width": `${B(Le)}px`,
				"--gap": `${e.gap}px`,
				...e.style,
				...B(r).style,
				...B(We)(e.offset, e.mobileOffset)
			}
		}, { ref_for: !0 }, e.$attrs, {
			onBlur: w,
			onFocus: T,
			onMouseenter: ee,
			onMousemove: ee,
			onMouseleave: te,
			onDragend: A,
			onPointerdown: E,
			onPointerup: ne
		}), [(o(!0), D(V, null, f(c(t, i), (r, i) => (o(), F(qe, {
			key: r.id,
			heights: p.value,
			icons: e.icons,
			index: i,
			toast: r,
			defaultRichColors: e.richColors,
			duration: e.toastOptions?.duration ?? e.duration,
			class: I(e.toastOptions?.class ?? ""),
			descriptionClass: e.toastOptions?.descriptionClass,
			invert: e.invert,
			visibleToasts: e.visibleToasts,
			closeButton: e.toastOptions?.closeButton ?? e.closeButton,
			interacting: h.value,
			position: t,
			closeButtonPosition: e.toastOptions?.closeButtonPosition ?? e.closeButtonPosition,
			style: O(e.toastOptions?.style),
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
			"onUpdate:heights": re,
			"onUpdate:height": j,
			onRemoveToast: C
		}, {
			"close-icon": u(() => [v(e.$slots, "close-icon", {}, () => [G(Qe)])]),
			"loading-icon": u(() => [v(e.$slots, "loading-icon", {}, () => [G(tt, { visible: r.type === "loading" }, null, 8, ["visible"])])]),
			"success-icon": u(() => [v(e.$slots, "success-icon", {}, () => [G(at)])]),
			"error-icon": u(() => [v(e.$slots, "error-icon", {}, () => [G(_t)])]),
			"warning-icon": u(() => [v(e.$slots, "warning-icon", {}, () => [G(pt)])]),
			"info-icon": u(() => [v(e.$slots, "info-icon", {}, () => [G(lt)])]),
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
		]))), 128))], 16, yt))), 128))], 8, vt)], 2112));
	}
});
//#endregion
//#region src/wc/face.ts
function Ct(e) {
	return [...e.querySelectorAll(":scope > option")].map((e) => ({
		value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
		label: e.textContent?.trim() ?? "",
		disabled: e.hasAttribute("disabled")
	}));
}
function wt(e) {
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
		options: Ct(e)
	};
}
var Tt = "[role=\"checkbox\"],[role=\"switch\"],[role=\"radio\"],input,textarea,button,[tabindex]";
function Et(e, t) {
	let n = fe(e, { shadowRoot: !1 });
	class r extends n {
		static formAssociated = !0;
		#e;
		#t = !1;
		constructor() {
			super(), this.#e = this.attachInternals(), this.addEventListener("click", (e) => {
				e.target === this && (this.hasAttribute("disabled") || this.querySelector(Tt)?.click());
			});
		}
		connectedCallback() {
			if (!this.#t) {
				let e = wt(this);
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
function Dt(e, t) {
	let n = fe(e, { shadowRoot: !1 });
	class r extends n {
		#e = !1;
		connectedCallback() {
			if (!this.#e) {
				let e = wt(this);
				this._light = e, this._options = e.options, this.#e = !0;
			}
			super.connectedCallback();
		}
	}
	return customElements.define(t, r), r;
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function Ot(e, t) {
	let n = be();
	return s(() => {
		n.value = e();
	}, {
		...t,
		flush: t?.flush ?? "sync"
	}), se(n);
}
function kt(e, t, n = {}) {
	let r, i, a, o = !0, s = () => {
		o = !0, a();
	};
	C(e, s, {
		flush: "sync",
		...n
	});
	let c = typeof t == "function" ? t : t.get, l = typeof t == "function" ? void 0 : t.set, u = E((e, t) => (i = e, a = t, {
		get() {
			return o &&= (r = c(r), !1), i(), r;
		},
		set(e) {
			l?.(e);
		}
	}));
	return u.trigger = s, u;
}
function At(t, n) {
	return e() ? (pe(t, n), !0) : !1;
}
function jt() {
	let e = /* @__PURE__ */ new Set(), t = (t) => {
		e.delete(t);
	};
	return {
		on: (n) => {
			e.add(n);
			let r = () => t(n);
			return At(r), { off: r };
		},
		off: t,
		trigger: (...t) => Promise.all(Array.from(e).map((e) => e(...t))),
		clear: () => {
			e.clear();
		}
	};
}
function Mt(e) {
	let t = !1, n, r = _(!0);
	return ((...i) => (t ||= (n = r.run(() => e(...i)), !0), n));
}
var Nt = /* @__PURE__ */ new WeakMap(), Pt = (...t) => {
	let n = t[0], r = y()?.proxy ?? e();
	if (r == null && !b()) throw Error("injectLocal must be called in setup");
	return r && Nt.has(r) && n in Nt.get(r) ? Nt.get(r)[n] : a(...t);
};
function Ft(t, n) {
	let r = y()?.proxy ?? e();
	if (r == null) throw Error("provideLocal must be called in setup");
	Nt.has(r) || Nt.set(r, Object.create(null));
	let i = Nt.get(r);
	return i[t] = n, l(t, n);
}
function It(e, t) {
	let n = t?.injectionKey || Symbol(e.name || "InjectionState"), r = t?.defaultValue;
	return [(...t) => {
		let r = e(...t);
		return Ft(n, r), r;
	}, () => Pt(n, r)];
}
var Lt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var Rt = (e) => e !== void 0, zt = (e) => e != null, Bt = Object.prototype.toString, Vt = (e) => Bt.call(e) === "[object Object]", Ht = () => {}, Ut = /* @__PURE__ */ Wt();
function Wt() {
	var e, t;
	return Lt && !!(!((e = window) == null || (e = e.navigator) == null) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function Gt(...e) {
	if (e.length !== 1) return ue(...e);
	let t = e[0];
	return typeof t == "function" ? se(E(() => ({
		get: t,
		set: Ht
	}))) : k(t);
}
function Kt(e, t) {
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
var qt = (e) => e();
function Jt(e, t = {}) {
	let n, r, i = Ht, a = (e) => {
		clearTimeout(e), i(), i = Ht;
	}, o;
	return (s) => {
		let c = j(e), l = j(t.maxWait);
		return n && a(n), c <= 0 || l !== void 0 && l <= 0 ? (r &&= (a(r), void 0), Promise.resolve(s())) : new Promise((e, u) => {
			i = t.rejectOnCancel ? u : e, o = s, l && !r && (r = setTimeout(() => {
				n && a(n), r = void 0, e(o());
			}, l)), n = setTimeout(() => {
				r && a(r), r = void 0, e(s());
			}, c);
		});
	};
}
function Yt(e = qt, t = {}) {
	let { initialState: n = "active" } = t, r = Gt(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: he(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function Xt(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Zt(e) {
	return Array.isArray(e) ? e : [e];
}
function Qt(e) {
	let t = Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}
var $t = /-(\w)/g, en = Qt((e) => e.replace($t, (e, t) => t ? t.toUpperCase() : ""));
function tn(e) {
	return e || y();
}
function nn(e) {
	if (!Lt) return e;
	let t = 0, n, r, i = () => {
		--t, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
	};
	return ((...a) => (t += 1, r || (r = _(!0), n = r.run(() => e(...a))), At(i), n));
}
/* @__NO_SIDE_EFFECTS__ */
function rn(e, t) {
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
function an(e) {
	return M(e) ? ve(new Proxy({}, {
		get(t, n, r) {
			return B(Reflect.get(e.value, n, r));
		},
		set(t, n, r) {
			return M(e.value[n]) && !M(r) ? e.value[n].value = r : e.value[n] = r, !0;
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
	})) : ve(e);
}
function on(e) {
	return an(z(e));
}
function K(e, ...t) {
	let n = t.flat(), r = n[0];
	return on(() => Object.fromEntries(typeof r == "function" ? Object.entries(Ce(e)).filter(([e, t]) => !r(j(t), e)) : Object.entries(Ce(e)).filter((e) => !n.includes(e[0]))));
}
function sn(e, t = 1e4) {
	return E((n, r) => {
		let i = j(e), a, o = () => setTimeout(() => {
			i = j(e), r();
		}, j(t));
		return At(() => {
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
function cn(e, t = 200, n = {}) {
	return Kt(Jt(t, n), e);
}
function ln(e, t, n = {}) {
	let { eventFilter: r = qt, ...i } = n;
	return C(e, Kt(r, t), i);
}
function un(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active", ...a } = n, { eventFilter: o, pause: s, resume: c, isActive: l } = Yt(r, { initialState: i });
	return {
		stop: ln(e, t, {
			...a,
			eventFilter: o
		}),
		pause: s,
		resume: c,
		isActive: l
	};
}
function dn(e, t, ...[n]) {
	let { flush: r = "sync", deep: i = !1, immediate: a = !0, direction: o = "both", transform: s = {} } = n || {}, c = [], l = "ltr" in s && s.ltr || ((e) => e), u = "rtl" in s && s.rtl || ((e) => e);
	return (o === "both" || o === "ltr") && c.push(un(e, (e) => {
		c.forEach((e) => e.pause()), t.value = l(e), c.forEach((e) => e.resume());
	}, {
		flush: r,
		deep: i,
		immediate: a
	})), (o === "both" || o === "rtl") && c.push(un(t, (t) => {
		c.forEach((e) => e.pause()), e.value = u(t), c.forEach((e) => e.resume());
	}, {
		flush: r,
		deep: i,
		immediate: a
	})), () => {
		c.forEach((e) => e.stop());
	};
}
function fn(e, t) {
	tn(t) && ce(e, t);
}
function pn(e, t, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, a = be(!1), o;
	function s() {
		o &&= (clearTimeout(o), void 0);
	}
	function c() {
		a.value = !1, s();
	}
	function l(...n) {
		i && e(), s(), a.value = !0, o = setTimeout(() => {
			a.value = !1, o = void 0, e(...n);
		}, j(t));
	}
	return r && (a.value = !0, Lt && l()), At(c), {
		isPending: he(a),
		start: l,
		stop: c
	};
}
function mn(e, t, n) {
	return C(e, t, {
		...n,
		immediate: !0
	});
}
function hn(e, t, n) {
	return C(e, t, {
		...n,
		once: !0
	});
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
function gn(e = {}) {
	let { inheritAttrs: t = !0, name: n = "ReusableTemplate" } = e, r = be(), i = W({
		name: `${n}.define`,
		setup(e, { slots: t }) {
			return () => {
				r.value = t.default;
			};
		}
	}), a = W({
		inheritAttrs: t,
		name: `${n}.reuse`,
		props: e.props,
		setup(n, { attrs: i, slots: a }) {
			return () => {
				if (!r.value) throw Error("[VueUse] Failed to find the definition of reusable template");
				let o = r.value?.call(r, {
					...e.props == null ? _n(i) : n,
					$slots: a
				});
				return t && o?.length === 1 ? o[0] : o;
			};
		}
	});
	return /* @__PURE__ */ rn({
		define: i,
		reuse: a
	}, [i, a]);
}
function _n(e) {
	let t = {};
	for (let n in e) t[en(n)] = e[n];
	return t;
}
var vn = Lt ? window : void 0, yn = Lt ? window.document : void 0;
Lt && window.navigator, Lt && window.location;
function bn(e) {
	let t = j(e);
	return t?.$el ?? t;
}
function xn(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = z(() => {
		let t = Zt(j(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return mn(() => [
		n.value?.map((e) => bn(e)) ?? [vn].filter((e) => e != null),
		Zt(j(n.value ? e[1] : e[0])),
		Zt(B(n.value ? e[2] : e[1])),
		j(n.value ? e[3] : e[2])
	], ([e, n, r, i], a, o) => {
		if (!e?.length || !n?.length || !r?.length) return;
		let s = Vt(i) ? { ...i } : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
function Sn() {
	let e = be(!1), t = y();
	return t && p(() => {
		e.value = !0;
	}, t), e;
}
/* @__NO_SIDE_EFFECTS__ */
function Cn(e) {
	let t = Sn();
	return z(() => (t.value, !!e()));
}
function wn(e, t, n = {}) {
	let { window: r = vn, ...i } = n, a, o = /* @__PURE__ */ Cn(() => r && "MutationObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = C(z(() => {
		let t = Zt(j(e)).map(bn).filter(zt);
		return new Set(t);
	}), (e) => {
		s(), o.value && e.size && (a = new MutationObserver(t), e.forEach((e) => a.observe(e, i)));
	}, {
		immediate: !0,
		flush: "post"
	}), l = () => a?.takeRecords(), u = () => {
		c(), s();
	};
	return At(u), {
		isSupported: o,
		stop: u,
		takeRecords: l
	};
}
function Tn(e, t, n = {}) {
	let { window: r = vn, document: i = r?.document, flush: a = "sync" } = n;
	if (!r || !i) return Ht;
	let o, c = (e) => {
		o?.(), o = e;
	}, l = s(() => {
		let n = bn(e);
		if (n) {
			let { stop: e } = wn(i, (e) => {
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
	return At(u), u;
}
function En(e) {
	return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Dn(...e) {
	let t, n, r = {};
	e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
	let { target: i = vn, eventName: a = "keydown", passive: o = !1, dedupe: s = !1 } = r, c = En(t);
	return xn(i, a, (e) => {
		e.repeat && j(s) || c(e) && n(e);
	}, o);
}
function On(e = {}) {
	let { window: t = vn, deep: n = !0, triggerOnRemoval: r = !1 } = e, i = e.document ?? t?.document, a = () => {
		let e = i?.activeElement;
		if (n) for (var t; e?.shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
		return e;
	}, o = be(), s = () => {
		o.value = a();
	};
	if (t) {
		let e = {
			capture: !0,
			passive: !0
		};
		xn(t, "blur", (e) => {
			e.relatedTarget === null && s();
		}, e), xn(t, "focus", s, e);
	}
	return r && Tn(o, s, { document: i }), s(), o;
}
var kn = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function An() {
	let e = b() ? Pt(kn, null) : null;
	return typeof e == "number" ? e : void 0;
}
function jn(e, t = {}) {
	let { window: n = vn, ssrWidth: r = /* @__PURE__ */ An() } = t, i = /* @__PURE__ */ Cn(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), a = be(typeof r == "number"), o = be(), c = be(!1);
	return s(() => {
		if (a.value) {
			a.value = !i.value, c.value = j(e).split(",").some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), i = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || i);
				return n && a && (a = r >= Xt(n[1])), i && a && (a = r <= Xt(i[1])), t ? !a : a;
			});
			return;
		}
		i.value && (o.value = n.matchMedia(j(e)), c.value = o.value.matches);
	}), xn(o, "change", (e) => {
		c.value = e.matches;
	}, { passive: !0 }), z(() => c.value);
}
function Mn(e) {
	return JSON.parse(JSON.stringify(e));
}
function Nn(e) {
	let t = y(), n = kt(() => null, () => e ? bn(e) : t.proxy.$el);
	return g(n.trigger), p(n.trigger), n;
}
function Pn(e, t, n = {}) {
	let { window: r = vn, ...i } = n, a, o = /* @__PURE__ */ Cn(() => r && "ResizeObserver" in r), s = () => {
		a &&= (a.disconnect(), void 0);
	}, c = C(z(() => {
		let t = j(e);
		return Array.isArray(t) ? t.map((e) => bn(e)) : [bn(t)];
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
	return At(l), {
		isSupported: o,
		stop: l
	};
}
var Fn = "focusin", In = "focusout", Ln = ":focus-within";
function Rn(e, t = {}) {
	let { window: n = vn } = t, r = z(() => bn(e)), i = be(!1), a = z(() => i.value), o = On(t);
	if (!n || !o.value) return { focused: a };
	let s = { passive: !0 };
	return xn(r, Fn, () => i.value = !0, s), xn(r, In, () => {
		var e, t;
		return i.value = ((e = r.value) == null || (t = e.matches) == null ? void 0 : t.call(e, Ln)) ?? !1;
	}, s), { focused: a };
}
function zn(e, n, r, i = {}) {
	var a, o;
	let { clone: s = !1, passive: c = !1, eventName: l, deep: u = !1, defaultValue: d, shouldEmit: f } = i, p = y(), m = r || p?.emit || (p == null || (a = p.$emit) == null ? void 0 : a.bind(p)) || (p == null || (o = p.proxy) == null || (o = o.$emit) == null ? void 0 : o.bind(p?.proxy)), h = l;
	n ||= "modelValue", h ||= `update:${n.toString()}`;
	let g = (e) => s ? typeof s == "function" ? s(e) : Mn(e) : e, _ = () => Rt(e[n]) ? g(e[n]) : d, v = (e) => {
		f ? f(e) && m(h, e) : m(h, e);
	};
	if (c) {
		let r = k(_()), i = !1;
		return C(() => e[n], (e) => {
			i || (i = !0, r.value = g(e), t(() => i = !1));
		}), C(r, (t) => {
			!i && (t !== e[n] || u) && v(t);
		}, { deep: u }), r;
	} else return z({
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
var Bn = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Vn = (e) => e === "", Hn = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), Un = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wn = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Gn = (e) => {
	let t = Wn(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Kn = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
}, qn = ({ name: e, iconNode: t, absoluteStrokeWidth: n, "absolute-stroke-width": r, strokeWidth: i, "stroke-width": a, size: o = Kn.width, color: s = Kn.stroke, ...c }, { slots: l }) => we("svg", {
	...Kn,
	...c,
	width: o,
	height: o,
	stroke: s,
	"stroke-width": Vn(n) || Vn(r) || n === !0 || r === !0 ? Number(i || a || Kn["stroke-width"]) * 24 / Number(o) : i || a || Kn["stroke-width"],
	class: Hn("lucide", c.class, ...e ? [`lucide-${Un(Gn(e))}-icon`, `lucide-${Un(e)}`] : ["lucide-icon"]),
	...!l.default && !Bn(c) && { "aria-hidden": "true" }
}, [...t.map((e) => we(...e)), ...l.default ? [l.default()] : []]), Jn = (e, t) => (n, { slots: r, attrs: i }) => we(qn, {
	...i,
	...n,
	iconNode: t,
	name: e
}, r), Yn = Jn("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]), Xn = Jn("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Zn = Jn("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Qn = Jn("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), $n = Jn("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), er = Jn("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), tr = Jn("chevrons-up-down", [["path", {
	d: "m7 15 5 5 5-5",
	key: "1hf1tw"
}], ["path", {
	d: "m7 9 5-5 5 5",
	key: "sgt6xg"
}]]), nr = Jn("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), rr = Jn("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), ir = Jn("ellipsis", [
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
]), ar = Jn("info", [
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
]), or = Jn("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), sr = Jn("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), cr = Jn("octagon-x", [
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
]), lr = Jn("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), ur = Jn("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), dr = Jn("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), fr = Jn("triangle-alert", [
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
]), pr = Jn("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region node_modules/ohash/dist/shared/ohash.D__AXeF1.mjs
function mr(e) {
	return typeof e == "string" ? `'${e}'` : new hr().serialize(e);
}
var hr = /* @__PURE__ */ function() {
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
function gr(e, t) {
	return e === t || mr(e) === mr(t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/arrays.js
function _r(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function vr(e, t, n) {
	let r = e.findIndex((e) => gr(e, t)), i = e.findIndex((e) => gr(e, n));
	if (r === -1 || i === -1) return [];
	let [a, o] = [r, i].sort((e, t) => e - t);
	return e.slice(a, o + 1);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/browser.js
var yr = typeof document < "u";
//#endregion
//#region node_modules/reka-ui/dist/shared/clamp.js
function br(e, t = -Infinity, n = Infinity) {
	return Math.min(n, Math.max(t, e));
}
function xr(e, t) {
	let n = e, r = t.toString(), i = r.indexOf("."), a = i >= 0 ? r.length - i : 0;
	if (a > 0) {
		let e = 10 ** a;
		n = Math.round(n * e) / e;
	}
	return n;
}
function Sr(e, t, n, r) {
	t = Number(t), n = Number(n);
	let i = (e - (Number.isNaN(t) ? 0 : t)) % r, a = xr(Math.abs(i) * 2 >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i, r);
	return Number.isNaN(t) ? !Number.isNaN(n) && a > n && (a = Math.floor(xr(n / r, r)) * r) : a < t ? a = t : !Number.isNaN(n) && a > n && (a = t + Math.floor(xr((n - t) / r, r)) * r), a = xr(a, r), a;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/createContext.js
function q(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = a(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (l(r, e), e)];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/getActiveElement.js
function Cr() {
	let e = document.activeElement;
	if (e == null) return null;
	for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
	return e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function wr(e, t, n) {
	let r = n.originalEvent.target, i = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/nullish.js
function Tr(e) {
	return e == null;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/isValueEqualOrExist.js
function Er(e, t) {
	return Tr(e) ? !1 : Array.isArray(e) ? e.some((e) => gr(e, t)) : gr(e, t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/renderSlotFragments.js
function Dr(e) {
	return e ? e.flatMap((e) => e.type === V ? Dr(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useArrowNavigation.js
var Or = ["INPUT", "TEXTAREA"];
function kr(e, t, n, r = {}) {
	if (!t || r.enableIgnoredElement && Or.includes(t.nodeName)) return null;
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
	return v || _ ? b = Ar(y, t, {
		goForward: _ ? m : c === "ltr" ? d : f,
		loop: s
	}) : h ? b = y.at(0) || null : g && (b = y.at(-1) || null), u && b?.focus(), b;
}
function Ar(e, t, n, r = e.includes(t) ? e.length : e.length + 1) {
	if (--r === 0) return null;
	let i = e.indexOf(t), a;
	if (a = i === -1 ? n.goForward ? 0 : e.length - 1 : n.goForward ? i + 1 : i - 1, !n.loop && (a < 0 || a >= e.length)) return null;
	let o = e[(a + e.length) % e.length];
	return o ? o.hasAttribute("disabled") && o.getAttribute("disabled") !== "false" ? Ar(e, o, n, r) : o : null;
}
//#endregion
//#region node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [jr, Mr] = /* @__PURE__ */ q("ConfigProvider");
//#endregion
//#region node_modules/defu/dist/defu.mjs
function Nr(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Pr(e, t, n = ".", r) {
	if (!Nr(t)) return Pr(e, {}, n, r);
	let i = { ...t };
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (Array.isArray(a) && Array.isArray(i[t]) ? i[t] = [...a, ...i[t]] : Nr(a) && Nr(i[t]) ? i[t] = Pr(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : i[t] = a));
	}
	return i;
}
function Fr(e) {
	return (...t) => t.reduce((t, n) => Pr(t, n, "", e), {});
}
var Ir = Fr(), Lr = nn(() => {
	let e = k(/* @__PURE__ */ new Map()), n = k(), r = z(() => {
		for (let t of e.value.values()) if (t) return !0;
		return !1;
	}), i = jr({ scrollBody: k(!0) }), a = null, o = () => {
		document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = n.value ?? "", Ut && a?.(), n.value = void 0;
	};
	return C(r, (e, s) => {
		if (!Lt) return;
		if (!e) {
			s && o();
			return;
		}
		n.value === void 0 && (n.value = document.body.style.overflow);
		let c = window.innerWidth - document.documentElement.clientWidth, l = {
			padding: c,
			margin: 0
		}, u = i.scrollBody?.value ? typeof i.scrollBody.value == "object" ? Ir({
			padding: i.scrollBody.value.padding === !0 ? c : i.scrollBody.value.padding,
			margin: i.scrollBody.value.margin === !0 ? c : i.scrollBody.value.margin
		}, l) : l : {
			padding: 0,
			margin: 0
		};
		c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.documentElement.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Ut && (a = xn(document, "touchmove", (e) => Br(e), { passive: !1 })), t(() => {
			r.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
		});
	}, {
		immediate: !0,
		flush: "sync"
	}), e;
});
function Rr(e) {
	let t = Math.random().toString(36).substring(2, 7), n = Lr();
	n.value.set(t, e ?? !1);
	let r = z({
		get: () => n.value.get(t) ?? !1,
		set: (e) => n.value.set(t, e)
	});
	return fn(() => {
		n.value.delete(t);
	}), r;
}
function zr(e) {
	let t = window.getComputedStyle(e);
	if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
	{
		let t = e.parentNode;
		return !(t instanceof Element) || t.tagName === "BODY" ? !1 : zr(t);
	}
}
function Br(e) {
	let t = e || window.event, n = t.target;
	return n instanceof Element && zr(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/utils.mjs
function Vr(e, t) {
	return e - t * Math.floor(e / t);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/GregorianCalendar.mjs
var Hr = 1721426;
function Ur(e, t, n, r) {
	t = Gr(e, t);
	let i = t - 1, a = -2;
	return n <= 2 ? a = 0 : Wr(t) && (a = -1), Hr - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + a + r);
}
function Wr(e) {
	return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Gr(e, t) {
	return e === "BC" ? 1 - t : t;
}
function Kr(e) {
	let t = "AD";
	return e <= 0 && (t = "BC", e = 1 - e), [t, e];
}
var qr = {
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
}, Jr = class {
	fromJulianDay(e) {
		let t = e, n = t - Hr, r = Math.floor(n / 146097), i = Vr(n, 146097), a = Math.floor(i / 36524), o = Vr(i, 36524), s = Math.floor(o / 1461), c = Vr(o, 1461), l = Math.floor(c / 365), [u, d] = Kr(r * 400 + a * 100 + s * 4 + l + +(a !== 4 && l !== 4)), f = t - Ur(u, d, 1, 1), p = 2;
		t < Ur(u, d, 3, 1) ? p = 0 : Wr(d) && (p = 1);
		let m = Math.floor(((f + p) * 12 + 373) / 367);
		return new ha(u, d, m, t - Ur(u, d, m, 1) + 1);
	}
	toJulianDay(e) {
		return Ur(e.era, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		return qr[Wr(e.year) ? "leapyear" : "standard"][e.month - 1];
	}
	getMonthsInYear(e) {
		return 12;
	}
	getDaysInYear(e) {
		return Wr(e.year) ? 366 : 365;
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
}, Yr = {
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
function Xr(e, t) {
	return t = Ni(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function Zr(e, t) {
	return t = Ni(t, e.calendar), e = pi(e), t = pi(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function Qr(e, t) {
	return ei(e.calendar, t.calendar) && Xr(e, t);
}
function $r(e, t) {
	return ei(e.calendar, t.calendar) && Zr(e, t);
}
function ei(e, t) {
	return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function ti(e, t) {
	return Xr(e, ai(t));
}
var ni = {
	sun: 0,
	mon: 1,
	tue: 2,
	wed: 3,
	thu: 4,
	fri: 5,
	sat: 6
};
function ri(e, t, n) {
	let r = e.calendar.toJulianDay(e), i = n ? ni[n] : yi(t), a = Math.ceil(r + 1 - i) % 7;
	return a < 0 && (a += 7), a;
}
function ii(e) {
	return Ai(Date.now(), e);
}
function ai(e) {
	return ji(ii(e));
}
function oi(e, t) {
	return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function si(e, t) {
	return ci(e) - ci(t);
}
function ci(e) {
	return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
var li = null, ui = !1;
function di() {
	return li ??= new Intl.DateTimeFormat().resolvedOptions().timeZone, li;
}
function fi() {
	return ui;
}
function pi(e) {
	return e.subtract({ days: e.day - 1 });
}
function mi(e) {
	return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function hi(e) {
	return pi(e.subtract({ months: e.month - 1 }));
}
var gi = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map();
function vi(e) {
	if (Intl.Locale) {
		let t = gi.get(e);
		return t || (t = new Intl.Locale(e).maximize().region, t && gi.set(e, t)), t;
	}
	let t = e.split("-")[1];
	return t === "u" ? void 0 : t;
}
function yi(e) {
	let t = _i.get(e);
	if (!t) {
		if (Intl.Locale) {
			let n = new Intl.Locale(e);
			if ("getWeekInfo" in n && (t = n.getWeekInfo(), t)) return _i.set(e, t), t.firstDay;
		}
		let n = vi(e);
		if (e.includes("-fw-")) {
			let n = e.split("-fw-")[1].split("-")[0];
			t = n === "mon" ? { firstDay: 1 } : n === "tue" ? { firstDay: 2 } : n === "wed" ? { firstDay: 3 } : n === "thu" ? { firstDay: 4 } : n === "fri" ? { firstDay: 5 } : n === "sat" ? { firstDay: 6 } : { firstDay: 0 };
		} else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: n && Yr[n] || 0 };
		_i.set(e, t);
	}
	return t.firstDay;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/conversion.mjs
function bi(e) {
	return e = Ni(e, new Jr()), xi(Gr(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function xi(e, t, n, r, i, a, o) {
	let s = /* @__PURE__ */ new Date();
	return s.setUTCHours(r, i, a, o), s.setUTCFullYear(e, t - 1, n), s.getTime();
}
function Si(e, t) {
	if (t === "UTC") return 0;
	if (e > 0 && t === di() && !fi()) return new Date(e).getTimezoneOffset() * -6e4;
	let { year: n, month: r, day: i, hour: a, minute: o, second: s } = wi(e, t);
	return xi(n, r, i, a, o, s, 0) - Math.floor(e / 1e3) * 1e3;
}
var Ci = /* @__PURE__ */ new Map();
function wi(e, t) {
	let n = Ci.get(t);
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
	}), Ci.set(t, n));
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
var Ti = 864e5;
function Ei(e, t, n, r) {
	return (n === r ? [n] : [n, r]).filter((n) => Di(e, t, n));
}
function Di(e, t, n) {
	let r = wi(n, t);
	return e.year === r.year && e.month === r.month && e.day === r.day && e.hour === r.hour && e.minute === r.minute && e.second === r.second;
}
function Oi(e, t, n = "compatible") {
	let r = Mi(e);
	if (t === "UTC") return bi(r);
	if (t === di() && n === "compatible" && !fi()) {
		r = Ni(r, new Jr());
		let e = /* @__PURE__ */ new Date(), t = Gr(r.era, r.year);
		return e.setFullYear(t, r.month - 1, r.day), e.setHours(r.hour, r.minute, r.second, r.millisecond), e.getTime();
	}
	let i = bi(r), a = Si(i - Ti, t), o = Si(i + Ti, t), s = Ei(r, t, i - a, i - o);
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
function ki(e, t, n = "compatible") {
	return new Date(Oi(e, t, n));
}
function Ai(e, t) {
	let n = Si(e, t), r = new Date(e + n), i = r.getUTCFullYear(), a = r.getUTCMonth() + 1, o = r.getUTCDate(), s = r.getUTCHours(), c = r.getUTCMinutes(), l = r.getUTCSeconds(), u = r.getUTCMilliseconds();
	return new _a(i < 1 ? "BC" : "AD", i < 1 ? -i + 1 : i, a, o, t, n, s, c, l, u);
}
function ji(e) {
	return new ha(e.calendar, e.era, e.year, e.month, e.day);
}
function Mi(e, t) {
	let n = 0, r = 0, i = 0, a = 0;
	if ("timeZone" in e) ({hour: n, minute: r, second: i, millisecond: a} = e);
	else if ("hour" in e && !t) return e;
	return t && ({hour: n, minute: r, second: i, millisecond: a} = t), new ga(e.calendar, e.era, e.year, e.month, e.day, n, r, i, a);
}
function Ni(e, t) {
	if (ei(e.calendar, t)) return e;
	let n = t.fromJulianDay(e.calendar.toJulianDay(e)), r = e.copy();
	return r.calendar = t, r.era = n.era, r.year = n.year, r.month = n.month, r.day = n.day, Ui(r), r;
}
function Pi(e, t, n) {
	return e instanceof _a ? e.timeZone === t ? e : Ii(e, t) : Ai(Oi(e, t, n), t);
}
function Fi(e) {
	let t = bi(e) - e.offset;
	return new Date(t);
}
function Ii(e, t) {
	return Ni(Ai(bi(e) - e.offset, t), e.calendar);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/manipulation.mjs
var Li = 36e5;
function Ri(e, t) {
	let n = e.copy(), r = "hour" in n ? Zi(n, t) : 0;
	zi(n, t.years || 0), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e), n.month += t.months || 0, Bi(n), Hi(n), n.day += (t.weeks || 0) * 7, n.day += t.days || 0, n.day += r, Vi(n), n.calendar.balanceDate && n.calendar.balanceDate(n), n.year < 1 && (n.year = 1, n.month = 1, n.day = 1);
	let i = n.calendar.getYearsInEra(n);
	if (n.year > i) {
		let e = n.calendar.isInverseEra?.(n);
		n.year = i, n.month = e ? 1 : n.calendar.getMonthsInYear(n), n.day = e ? 1 : n.calendar.getDaysInMonth(n);
	}
	n.month < 1 && (n.month = 1, n.day = 1);
	let a = n.calendar.getMonthsInYear(n);
	return n.month > a && (n.month = a, n.day = n.calendar.getDaysInMonth(n)), n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day)), n;
}
function zi(e, t) {
	e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Bi(e) {
	for (; e.month < 1;) zi(e, -1), e.month += e.calendar.getMonthsInYear(e);
	let t = 0;
	for (; e.month > (t = e.calendar.getMonthsInYear(e));) e.month -= t, zi(e, 1);
}
function Vi(e) {
	for (; e.day < 1;) e.month--, Bi(e), e.day += e.calendar.getDaysInMonth(e);
	for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, Bi(e);
}
function Hi(e) {
	e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Ui(e) {
	e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), Hi(e);
}
function Wi(e) {
	let t = {};
	for (let n in e) typeof e[n] == "number" && (t[n] = -e[n]);
	return t;
}
function Gi(e, t) {
	return Ri(e, Wi(t));
}
function Ki(e, t) {
	let n = e.copy();
	return t.era != null && (n.era = t.era), t.year != null && (n.year = t.year), t.month != null && (n.month = t.month), t.day != null && (n.day = t.day), Ui(n), n;
}
function qi(e, t) {
	let n = e.copy();
	return t.hour != null && (n.hour = t.hour), t.minute != null && (n.minute = t.minute), t.second != null && (n.second = t.second), t.millisecond != null && (n.millisecond = t.millisecond), Yi(n), n;
}
function Ji(e) {
	e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Xi(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Xi(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Xi(e.minute, 60);
	let t = Math.floor(e.hour / 24);
	return e.hour = Xi(e.hour, 24), t;
}
function Yi(e) {
	e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Xi(e, t) {
	let n = e % t;
	return n < 0 && (n += t), n;
}
function Zi(e, t) {
	return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, Ji(e);
}
function Qi(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "era": {
			let t = e.calendar.getEras(), a = t.indexOf(e.era);
			if (a < 0) throw Error("Invalid era: " + e.era);
			a = ea(a, n, 0, t.length - 1, r?.round), i.era = t[a], Ui(i);
			break;
		}
		case "year":
			i.calendar.isInverseEra?.(i) && (n = -n), i.year = ea(e.year, n, -Infinity, 9999, r?.round), i.year === -Infinity && (i.year = 1), i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
			break;
		case "month":
			i.month = ea(e.month, n, 1, e.calendar.getMonthsInYear(e), r?.round);
			break;
		case "day":
			i.day = ea(e.day, n, 1, e.calendar.getDaysInMonth(e), r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return e.calendar.balanceDate && e.calendar.balanceDate(i), Ui(i), i;
}
function $i(e, t, n, r) {
	let i = e.copy();
	switch (t) {
		case "hour": {
			let t = e.hour, a = 0, o = 23;
			if (r?.hourCycle === 12) {
				let e = t >= 12;
				a = e ? 12 : 0, o = e ? 23 : 11;
			}
			i.hour = ea(t, n, a, o, r?.round);
			break;
		}
		case "minute":
			i.minute = ea(e.minute, n, 0, 59, r?.round);
			break;
		case "second":
			i.second = ea(e.second, n, 0, 59, r?.round);
			break;
		case "millisecond":
			i.millisecond = ea(e.millisecond, n, 0, 999, r?.round);
			break;
		default: throw Error("Unsupported field " + t);
	}
	return i;
}
function ea(e, t, n, r, i = !1) {
	if (i) {
		e += Math.sign(t), e < n && (e = r);
		let i = Math.abs(t);
		e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i, e > r && (e = n);
	} else e += t, e < n ? e = r - (n - e - 1) : e > r && (e = n + (e - r - 1));
	return e;
}
function ta(e, t) {
	let n;
	return n = t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0 ? Oi(Ri(Mi(e), {
		years: t.years,
		months: t.months,
		weeks: t.weeks,
		days: t.days
	}), e.timeZone) : bi(e) - e.offset, n += t.milliseconds || 0, n += (t.seconds || 0) * 1e3, n += (t.minutes || 0) * 6e4, n += (t.hours || 0) * 36e5, Ni(Ai(n, e.timeZone), e.calendar);
}
function na(e, t) {
	return ta(e, Wi(t));
}
function ra(e, t, n, r) {
	switch (t) {
		case "hour": {
			let t = 0, i = 23;
			if (r?.hourCycle === 12) {
				let n = e.hour >= 12;
				t = n ? 12 : 0, i = n ? 23 : 11;
			}
			let a = Mi(e), o = Ni(qi(a, { hour: t }), new Jr()), s = [Oi(o, e.timeZone, "earlier"), Oi(o, e.timeZone, "later")].filter((t) => Ai(t, e.timeZone).day === o.day)[0], c = Ni(qi(a, { hour: i }), new Jr()), l = [Oi(c, e.timeZone, "earlier"), Oi(c, e.timeZone, "later")].filter((t) => Ai(t, e.timeZone).day === c.day).pop(), u = bi(e) - e.offset, d = Math.floor(u / Li), f = u % Li;
			return u = ea(d, n, Math.floor(s / Li), Math.floor(l / Li), r?.round) * Li + f, Ni(Ai(u, e.timeZone), e.calendar);
		}
		case "minute":
		case "second":
		case "millisecond": return $i(e, t, n, r);
		case "era":
		case "year":
		case "month":
		case "day": return Ni(Ai(Oi(Qi(Mi(e), t, n, r), e.timeZone), e.timeZone), e.calendar);
		default: throw Error("Unsupported field " + t);
	}
}
function ia(e, t, n) {
	let r = Mi(e), i = qi(Ki(r, t), t);
	return i.compare(r) === 0 ? e : Ni(Ai(Oi(i, e.timeZone, n), e.timeZone), e.calendar);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/string.mjs
var aa = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/, oa = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function sa(e) {
	let t = e.match(aa);
	if (!t) throw oa.test(e) ? Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`) : Error("Invalid ISO 8601 date string: " + e);
	let n = new ha(ca(t[1], 0, 9999), ca(t[2], 1, 12), 1);
	return n.day = ca(t[3], 1, n.calendar.getDaysInMonth(n)), n;
}
function ca(e, t, n) {
	let r = Number(e);
	if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
	return r;
}
function la(e) {
	return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function ua(e) {
	let t = Ni(e, new Jr()), n;
	return n = t.era === "BC" ? t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${n}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function da(e) {
	return `${ua(e)}T${la(e)}`;
}
function fa(e) {
	let t = Math.sign(e) < 0 ? "-" : "+";
	e = Math.abs(e);
	let n = Math.floor(e / 36e5), r = Math.floor(e % 36e5 / 6e4), i = Math.floor(e % 36e5 % 6e4 / 1e3), a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return i !== 0 && (a += `:${String(i).padStart(2, "0")}`), a;
}
function pa(e) {
	return `${da(e)}${fa(e.offset)}[${e.timeZone}]`;
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/CalendarDate.mjs
function ma(e) {
	let t = typeof e[0] == "object" ? e.shift() : new Jr(), n;
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
var ha = class e {
	constructor(...e) {
		let [t, n, r, i, a] = ma(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, Ui(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day) : new e(this.calendar, this.year, this.month, this.day);
	}
	add(e) {
		return Ri(this, e);
	}
	subtract(e) {
		return Gi(this, e);
	}
	set(e) {
		return Ki(this, e);
	}
	cycle(e, t, n) {
		return Qi(this, e, t, n);
	}
	toDate(e) {
		return ki(this, e);
	}
	toString() {
		return ua(this);
	}
	compare(e) {
		return oi(this, e);
	}
}, ga = class e {
	constructor(...e) {
		let [t, n, r, i, a] = ma(e);
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Ui(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return Ri(this, e);
	}
	subtract(e) {
		return Gi(this, e);
	}
	set(e) {
		return Ki(qi(this, e), e);
	}
	cycle(e, t, n) {
		switch (e) {
			case "era":
			case "year":
			case "month":
			case "day": return Qi(this, e, t, n);
			default: return $i(this, e, t, n);
		}
	}
	toDate(e, t) {
		return ki(this, e, t);
	}
	toString() {
		return da(this);
	}
	compare(e) {
		let t = oi(this, e);
		return t === 0 ? si(this, Mi(e)) : t;
	}
}, _a = class e {
	constructor(...e) {
		let [t, n, r, i, a] = ma(e), o = e.shift(), s = e.shift();
		this.calendar = t, this.era = n, this.year = r, this.month = i, this.day = a, this.timeZone = o, this.offset = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, Ui(this);
	}
	copy() {
		return this.era ? new e(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new e(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
	}
	add(e) {
		return ta(this, e);
	}
	subtract(e) {
		return na(this, e);
	}
	set(e, t) {
		return ia(this, e, t);
	}
	cycle(e, t, n) {
		return ra(this, e, t, n);
	}
	toDate() {
		return Fi(this);
	}
	toString() {
		return pa(this);
	}
	toAbsoluteString() {
		return this.toDate().toISOString();
	}
	compare(e) {
		return this.toDate().getTime() - Pi(e, this.timeZone).toDate().getTime();
	}
}, va = [
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
], ya = [
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
], ba = [
	1867,
	1911,
	1925,
	1988,
	2018
], xa = [
	"meiji",
	"taisho",
	"showa",
	"heisei",
	"reiwa"
];
function Sa(e) {
	let t = va.findIndex(([t, n, r]) => e.year < t || e.year === t && e.month < n || e.year === t && e.month === n && e.day < r);
	return t === -1 ? va.length - 1 : t === 0 ? 0 : t - 1;
}
function Ca(e) {
	let t = ba[xa.indexOf(e.era)];
	if (!t) throw Error("Unknown era: " + e.era);
	return new ha(e.year + t, e.month, e.day);
}
var wa = class extends Jr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = Sa(t);
		return new ha(this, xa[n], t.year - ba[n], t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Ca(e));
	}
	balanceDate(e) {
		let t = Ca(e), n = Sa(t);
		xa[n] !== e.era && (e.era = xa[n], e.year = t.year - ba[n]), this.constrainDate(e);
	}
	constrainDate(e) {
		let t = xa.indexOf(e.era), n = ya[t];
		if (n != null) {
			let [r, i, a] = n, o = r - ba[t];
			e.year = Math.max(1, Math.min(o, e.year)), e.year === o && (e.month = Math.min(i, e.month), e.month === i && (e.day = Math.min(a, e.day)));
		}
		if (e.year === 1 && t >= 0) {
			let [, n, r] = va[t];
			e.month = Math.max(n, e.month), e.month === n && (e.day = Math.max(r, e.day));
		}
	}
	getEras() {
		return xa;
	}
	getYearsInEra(e) {
		let t = xa.indexOf(e.era), n = va[t], r = va[t + 1];
		if (r == null) return 9999 - n[0] + 1;
		let i = r[0] - n[0];
		return (e.month < r[1] || e.month === r[1] && e.day < r[2]) && i++, i;
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Ca(e));
	}
	getMinimumMonthInYear(e) {
		let t = Ta(e);
		return t ? t[1] : 1;
	}
	getMinimumDayInMonth(e) {
		let t = Ta(e);
		return t && e.month === t[1] ? t[2] : 1;
	}
	constructor(...e) {
		super(...e), this.identifier = "japanese";
	}
};
function Ta(e) {
	if (e.year === 1) return va[xa.indexOf(e.era)];
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/BuddhistCalendar.mjs
var Ea = -543, Da = class extends Jr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = Gr(t.era, t.year);
		return new ha(this, n - Ea, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Oa(e));
	}
	getEras() {
		return ["BE"];
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Oa(e));
	}
	balanceDate() {}
	constructor(...e) {
		super(...e), this.identifier = "buddhist";
	}
};
function Oa(e) {
	let [t, n] = Kr(e.year + Ea);
	return new ha(t, n, e.month, e.day);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/TaiwanCalendar.mjs
var ka = 1911;
function Aa(e) {
	return e.era === "minguo" ? e.year + ka : 1 - e.year + ka;
}
function ja(e) {
	let t = e - ka;
	return t > 0 ? ["minguo", t] : ["before_minguo", 1 - t];
}
var Ma = class extends Jr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), [n, r] = ja(Gr(t.era, t.year));
		return new ha(this, n, r, t.month, t.day);
	}
	toJulianDay(e) {
		return super.toJulianDay(Na(e));
	}
	getEras() {
		return ["before_minguo", "minguo"];
	}
	balanceDate(e) {
		let [t, n] = ja(Aa(e));
		e.era = t, e.year = n;
	}
	isInverseEra(e) {
		return e.era === "before_minguo";
	}
	getDaysInMonth(e) {
		return super.getDaysInMonth(Na(e));
	}
	getYearsInEra(e) {
		return e.era === "before_minguo" ? 9999 : 9999 - ka;
	}
	constructor(...e) {
		super(...e), this.identifier = "roc";
	}
};
function Na(e) {
	let [t, n] = Kr(Aa(e));
	return new ha(t, n, e.month, e.day);
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/calendars/PersianCalendar.mjs
var Pa = 1948320, Fa = [
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
], Ia = class {
	fromJulianDay(e) {
		let t = e - Pa, n = 1 + Math.floor((33 * t + 3) / 12053), r = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)), i = Math.floor(r < 216 ? r / 31 : (r - 6) / 30), a = r - Fa[i] + 1;
		return new ha(this, n, i + 1, a);
	}
	toJulianDay(e) {
		let t = Pa - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
		return t += Fa[e.month - 1], t += e.day, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInMonth(e) {
		return e.month <= 6 ? 31 : e.month <= 11 || Vr(25 * e.year + 11, 33) < 8 ? 30 : 29;
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
}, La = 78, Ra = 80, za = class extends Jr {
	fromJulianDay(e) {
		let t = super.fromJulianDay(e), n = t.year - La, r = e - Ur(t.era, t.year, 1, 1), i;
		r < Ra ? (n--, i = Wr(t.year - 1) ? 31 : 30, r += i + 155 + 90 + 10) : (i = Wr(t.year) ? 31 : 30, r -= Ra);
		let a, o;
		if (r < i) a = 1, o = r + 1;
		else {
			let e = r - i;
			e < 155 ? (a = Math.floor(e / 31) + 2, o = e % 31 + 1) : (e -= 155, a = Math.floor(e / 30) + 7, o = e % 30 + 1);
		}
		return new ha(this, n, a, o);
	}
	toJulianDay(e) {
		let [t, n] = Kr(e.year + La), r, i;
		return Wr(n) ? (r = 31, i = Ur(t, n, 3, 21)) : (r = 30, i = Ur(t, n, 3, 22)), e.month === 1 ? i + e.day - 1 : (i += r + Math.min(e.month - 2, 5) * 31, e.month >= 8 && (i += (e.month - 7) * 30), i += e.day - 1, i);
	}
	getDaysInMonth(e) {
		return e.month === 1 && Wr(e.year + La) || e.month >= 2 && e.month <= 6 ? 31 : 30;
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
}, Ba = 1948440, Va = 1948439, Ha = 1300, Ua = 1600, Wa = 460322;
function Ga(e, t, n, r) {
	return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function Ka(e, t, n) {
	let r = Math.floor((30 * (n - t) + 10646) / 10631), i = Math.min(12, Math.ceil((n - (29 + Ga(t, r, 1, 1))) / 29.5) + 1);
	return new ha(e, r, i, n - Ga(t, r, i, 1) + 1);
}
function qa(e) {
	return (14 + 11 * e) % 30 < 11;
}
var Ja = class {
	fromJulianDay(e) {
		return Ka(this, Ba, e);
	}
	toJulianDay(e) {
		return Ga(Ba, e.year, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = 29 + e.month % 2;
		return e.month === 12 && qa(e.year) && t++, t;
	}
	getMonthsInYear() {
		return 12;
	}
	getDaysInYear(e) {
		return qa(e.year) ? 355 : 354;
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
}, Ya = class extends Ja {
	fromJulianDay(e) {
		return Ka(this, Va, e);
	}
	toJulianDay(e) {
		return Ga(Va, e.year, e.month, e.day);
	}
	constructor(...e) {
		super(...e), this.identifier = "islamic-tbla";
	}
}, Xa = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=", Za, Qa;
function $a(e) {
	return Wa + Qa[e - Ha];
}
function eo(e, t) {
	let n = e - Ha, r = 1 << 11 - (t - 1);
	return (Za[n] & r) === 0 ? 29 : 30;
}
function to(e, t) {
	let n = $a(e);
	for (let r = 1; r < t; r++) n += eo(e, r);
	return n;
}
function no(e) {
	return Qa[e + 1 - Ha] - Qa[e - Ha];
}
var ro = class extends Ja {
	constructor() {
		if (super(), this.identifier = "islamic-umalqura", Za ||= new Uint16Array(Uint8Array.from(atob(Xa), (e) => e.charCodeAt(0)).buffer), !Qa) {
			Qa = new Uint32Array(Ua - Ha + 1);
			let e = 0;
			for (let t = Ha; t <= Ua; t++) {
				Qa[t - Ha] = e;
				for (let n = 1; n <= 12; n++) e += eo(t, n);
			}
		}
	}
	fromJulianDay(e) {
		let t = e - Ba, n = $a(Ha), r = $a(Ua);
		if (t < n || t > r) return super.fromJulianDay(e);
		{
			let e = Ha - 1, n = 1, r = 1;
			for (; r > 0;) {
				e++, r = t - $a(e) + 1;
				let i = no(e);
				if (r === i) {
					n = 12;
					break;
				} else if (r < i) {
					let t = eo(e, n);
					for (n = 1; r > t;) r -= t, n++, t = eo(e, n);
					break;
				}
			}
			return new ha(this, e, n, t - to(e, n) + 1);
		}
	}
	toJulianDay(e) {
		return e.year < Ha || e.year > Ua ? super.toJulianDay(e) : Ba + to(e.year, e.month) + (e.day - 1);
	}
	getDaysInMonth(e) {
		return e.year < Ha || e.year > Ua ? super.getDaysInMonth(e) : eo(e.year, e.month);
	}
	getDaysInYear(e) {
		return e.year < Ha || e.year > Ua ? super.getDaysInYear(e) : no(e.year);
	}
}, io = 347997, ao = 1080, oo = 24 * ao, so = 29, co = 12 * ao + 793, lo = so * oo + co;
function uo(e) {
	return Vr(e * 7 + 1, 19) < 7;
}
function fo(e) {
	let t = Math.floor((235 * e - 234) / 19), n = 12084 + 13753 * t, r = t * 29 + Math.floor(n / 25920);
	return Vr(3 * (r + 1), 7) < 3 && (r += 1), r;
}
function po(e) {
	let t = fo(e - 1), n = fo(e);
	return fo(e + 1) - n === 356 ? 2 : +(n - t === 382);
}
function mo(e) {
	return fo(e) + po(e);
}
function ho(e) {
	return mo(e + 1) - mo(e);
}
function go(e) {
	let t = ho(e);
	switch (t > 380 && (t -= 30), t) {
		case 353: return 0;
		case 354: return 1;
		case 355: return 2;
	}
}
function _o(e, t) {
	if (t >= 6 && !uo(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
	let n = go(e);
	return t === 2 ? n === 2 ? 30 : 29 : t === 3 ? n === 0 ? 29 : 30 : t === 6 ? uo(e) ? 30 : 0 : 30;
}
var vo = class {
	fromJulianDay(e) {
		let t = e - io, n = t * oo / lo, r = Math.floor((19 * n + 234) / 235) + 1, i = mo(r), a = Math.floor(t - i);
		for (; a < 1;) r--, i = mo(r), a = Math.floor(t - i);
		let o = 1, s = 0;
		for (; s < a;) s += _o(r, o), o++;
		o--, s -= _o(r, o);
		let c = a - s;
		return new ha(this, r, o, c);
	}
	toJulianDay(e) {
		let t = mo(e.year);
		for (let n = 1; n < e.month; n++) t += _o(e.year, n);
		return t + e.day + io;
	}
	getDaysInMonth(e) {
		return _o(e.year, e.month);
	}
	getMonthsInYear(e) {
		return uo(e.year) ? 13 : 12;
	}
	getDaysInYear(e) {
		return ho(e.year);
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
		t.year !== e.year && (uo(t.year) && !uo(e.year) && t.month > 6 ? e.month-- : !uo(t.year) && uo(e.year) && t.month > 6 && e.month++);
	}
	constructor() {
		this.identifier = "hebrew";
	}
}, yo = 1723856, bo = 1824665, xo = 5500;
function So(e, t, n, r) {
	return e + 365 * t + Math.floor(t / 4) + 30 * (n - 1) + r - 1;
}
function Co(e, t) {
	let n = Math.floor(4 * (t - e) / 1461), r = 1 + Math.floor((t - So(e, n, 1, 1)) / 30);
	return [
		n,
		r,
		t + 1 - So(e, n, r, 1)
	];
}
function wo(e) {
	return Math.floor(e % 4 / 3);
}
function To(e, t) {
	return t % 13 == 0 ? wo(e) + 5 : 30;
}
var Eo = class {
	fromJulianDay(e) {
		let [t, n, r] = Co(yo, e), i = "AM";
		return t <= 0 && (i = "AA", t += xo), new ha(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "AA" && (t -= xo), So(yo, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		return To(e.year, e.month);
	}
	getMonthsInYear() {
		return 13;
	}
	getDaysInYear(e) {
		return 365 + wo(e.year);
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
}, Do = class extends Eo {
	fromJulianDay(e) {
		let [t, n, r] = Co(yo, e);
		return t += xo, new ha(this, "AA", t, n, r);
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
}, Oo = class extends Eo {
	fromJulianDay(e) {
		let [t, n, r] = Co(bo, e), i = "CE";
		return t <= 0 && (i = "BCE", t = 1 - t), new ha(this, i, t, n, r);
	}
	toJulianDay(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), So(bo, t, e.month, e.day);
	}
	getDaysInMonth(e) {
		let t = e.year;
		return e.era === "BCE" && (t = 1 - t), To(t, e.month);
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
function ko(e) {
	switch (e) {
		case "buddhist": return new Da();
		case "ethiopic": return new Eo();
		case "ethioaa": return new Do();
		case "coptic": return new Oo();
		case "hebrew": return new vo();
		case "indian": return new za();
		case "islamic-civil": return new Ja();
		case "islamic-tbla": return new Ya();
		case "islamic-umalqura": return new ro();
		case "japanese": return new wa();
		case "persian": return new Ia();
		case "roc": return new Ma();
		default: return new Jr();
	}
}
//#endregion
//#region node_modules/@internationalized/date/dist/private/DateFormatter.mjs
var Ao = /* @__PURE__ */ new Map(), jo = class {
	constructor(e, t = {}) {
		this.formatter = No(e, t), this.options = t;
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
		return Lo() && (this.resolvedHourCycle ||= Ro(e.locale, this.options), e.hourCycle = this.resolvedHourCycle, e.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), e.calendar === "ethiopic-amete-alem" && (e.calendar = "ethioaa"), e;
	}
}, Mo = {
	true: { ja: "h11" },
	false: {}
};
function No(e, t = {}) {
	if (typeof t.hour12 == "boolean" && Fo()) {
		t = { ...t };
		let n = Mo[String(t.hour12)][e.split("-")[0]], r = t.hour12 ? "h12" : "h23";
		t.hourCycle = n ?? r, delete t.hour12;
	}
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (Ao.has(n)) return Ao.get(n);
	let r = new Intl.DateTimeFormat(e, t);
	return Ao.set(n, r), r;
}
var Po = null;
function Fo() {
	return Po ??= new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		hour12: !1
	}).format(new Date(2020, 2, 3, 0)) === "24", Po;
}
var Io = null;
function Lo() {
	return Io ??= new Intl.DateTimeFormat("fr", {
		hour: "numeric",
		hour12: !1
	}).resolvedOptions().hourCycle === "h12", Io;
}
function Ro(e, t) {
	if (!t.timeStyle && !t.hour) return;
	e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
	let n = No(e, {
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
function zo(e, t = di()) {
	return Vo(e) ? e.toDate() : e.toDate(t);
}
function Bo(e) {
	return e instanceof ga;
}
function Vo(e) {
	return e instanceof _a;
}
function Ho(e) {
	return Bo(e) || Vo(e);
}
function Uo(e) {
	if (e instanceof Date) {
		let t = e.getFullYear(), n = e.getMonth() + 1;
		return new Date(t, n, 0).getDate();
	} else return e.set({ day: 100 }).day;
}
function Wo(e, t) {
	return e.compare(t) < 0;
}
function Go(e, t) {
	return e.compare(t) > 0;
}
function Ko(e, t) {
	return e.compare(t) <= 0;
}
function qo(e, t) {
	return e.compare(t) >= 0;
}
function Jo(e, t, n) {
	return qo(e, t) && Ko(e, n);
}
function Yo(e, t, n) {
	return Go(e, t) && Wo(e, n);
}
function Xo(e, t, n) {
	let r = ri(e, n, "sun");
	return t > r ? e.subtract({ days: r + 7 - t }) : t === r ? e : e.subtract({ days: r - t });
}
function Zo(e, t, n) {
	let r = ri(e, n, "sun"), i = t === 0 ? 6 : t - 1;
	return r === i ? e : r > i ? e.add({ days: 7 - r + i }) : e.add({ days: i - r });
}
function Qo(e, t, n, r, i) {
	if (n === void 0 && r === void 0 && i === void 0) return !0;
	let a = e.add({ days: 1 });
	if ((r?.(a) || n?.(a)) && !i?.(a)) return !1;
	let o = t;
	for (; a.compare(o) < 0;) if (a = a.add({ days: 1 }), (r?.(a) || n?.(a)) && !i?.(a)) return !1;
	return !0;
}
function $o(e) {
	let { defaultValue: t, defaultPlaceholder: n, granularity: r = "day", locale: i = "en" } = e;
	if (Array.isArray(t) && t.length) return t.at(-1).copy();
	if (t && !Array.isArray(t)) return t.copy();
	if (n) return n.copy();
	let a = /* @__PURE__ */ new Date(), o = a.getFullYear(), s = a.getMonth() + 1, c = a.getDate(), l = [
		"hour",
		"minute",
		"second"
	], u = ko(new jo(i).resolvedOptions().calendar);
	return l.includes(r ?? "day") ? Ni(new ga(o, s, c, 0, 0, 0), u) : Ni(new ha(o, s, c), u);
}
//#endregion
//#region node_modules/reka-ui/dist/date/utils.js
function es(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
function ts(e) {
	let t = e.querySelector("[data-selected]");
	if (t) return t.focus();
	let n = e.querySelector("[data-today]");
	if (n) return n.focus();
	let r = e.querySelector("[data-reka-calendar-day]");
	if (r) return r.focus();
}
//#endregion
//#region node_modules/reka-ui/dist/date/calendar.js
function ns(e, t) {
	let n = [], r = e.add({ days: 1 }), i = t;
	for (; r.compare(i) < 0;) n.push(r), r = r.add({ days: 1 });
	return n;
}
function rs(e) {
	let { dateObj: t, weekStartsOn: n, fixedWeeks: r, locale: i } = e, a = Uo(t), o = Array.from({ length: a }, (e, n) => t.set({ day: n + 1 })), s = pi(t), c = mi(t), l = Xo(s, n, i), u = Zo(c, n, i), d = ns(l.subtract({ days: 1 }), s), f = ns(c, u.add({ days: 1 })), p = d.length + o.length + f.length;
	if (r && p < 42) {
		let e = 42 - p, n = f.at(-1);
		n ||= mi(t);
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
		rows: es(m, 7)
	};
}
function is(e) {
	let { dateObj: t, numberOfMonths: n = 1, pagedNavigation: r = !1 } = e;
	return n && r ? Array.from({ length: Math.floor(12 / n) }, (e, r) => pi(t.set({ month: r * n + 1 }))) : Array.from({ length: 12 }, (e, n) => pi(t.set({ month: n + 1 })));
}
function as(e) {
	let { numberOfMonths: t, dateObj: n, ...r } = e, i = [];
	if (!t || t === 1) return i.push(rs({
		...r,
		dateObj: n
	})), i;
	i.push(rs({
		...r,
		dateObj: n
	}));
	for (let e = 1; e < t; e++) {
		let t = n.add({ months: e });
		i.push(rs({
			...r,
			dateObj: t
		}));
	}
	return i;
}
function os({ start: e, end: t }) {
	let n = [];
	if (!e || !t) return n;
	let r = hi(e);
	for (; r.compare(t) <= 0;) n.push(r), r = hi(r.add({ years: 1 }));
	return n;
}
function ss(e) {
	return (1 - ri(new ha(2025, 1, 6), e) + 7) % 7;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useDateFormatter.js
function cs(e, t = {}) {
	let n = k(e);
	function r() {
		return n.value;
	}
	function i(e) {
		n.value = e;
	}
	function a(e, r) {
		return new jo(n.value, {
			...t,
			...r
		}).format(e);
	}
	function o(e, t = !0) {
		return Ho(e) && t ? a(zo(e), {
			dateStyle: "long",
			timeStyle: "long"
		}) : a(zo(e), { dateStyle: "long" });
	}
	function s(e, r = {}) {
		return new jo(n.value, {
			...t,
			month: "long",
			year: "numeric",
			...r
		}).format(e);
	}
	function c(e, r = {}) {
		return new jo(n.value, {
			...t,
			month: "long",
			...r
		}).format(e);
	}
	function l() {
		let e = ai(di());
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
			label: c(zo(e.set({ month: t }))),
			value: t
		}));
	}
	function u(e, r = {}) {
		return new jo(n.value, {
			...t,
			year: "numeric",
			...r
		}).format(e);
	}
	function d(e, r) {
		return Vo(e) ? new jo(n.value, {
			...t,
			...r,
			timeZone: e.timeZone
		}).formatToParts(zo(e)) : new jo(n.value, {
			...t,
			...r
		}).formatToParts(zo(e));
	}
	function f(e, r = "narrow") {
		return new jo(n.value, {
			...t,
			weekday: r
		}).format(e);
	}
	function p(e) {
		let r = new jo(n.value, {
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
function ls(e) {
	let t = jr({ dir: k("ltr") });
	return z(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useEmitAsProps.js
function us(e) {
	let t = y(), n = t?.type.emits, r = {};
	return n?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), n?.forEach((t) => {
		r[Te(de(t))] = (...n) => e(t, ...n);
	}), r;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFilter.js
function ds(e) {
	let t = z(() => B(e)), n = z(() => new Intl.Collator("en", {
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
var fs = 0;
function ps() {
	s((e) => {
		if (!Lt) return;
		let t = document.querySelectorAll("[data-reka-focus-guard]");
		document.body.insertAdjacentElement("afterbegin", t[0] ?? ms()), document.body.insertAdjacentElement("beforeend", t[1] ?? ms()), fs++, e(() => {
			fs === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((e) => e.remove()), fs--;
		});
	});
}
function ms() {
	let e = document.createElement("span");
	return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFormControl.js
function hs(e) {
	return z(() => j(e) ? !!bn(e)?.closest("form") : !0);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardExpose.js
function J() {
	let e = y(), t = k(), n = z(() => r());
	g(() => {
		n.value !== r() && ae(t);
	});
	function r() {
		return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : bn(t);
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
function gs(e) {
	let t = y(), n = Object.keys(t?.type.props ?? {}).reduce((e, n) => {
		let r = (t?.type.props[n]).default;
		return r !== void 0 && (e[n] = r), e;
	}, {}), r = ue(e);
	return z(() => {
		let e = {}, i = t?.vnode.props ?? {};
		return Object.keys(i).forEach((t) => {
			e[de(t)] = i[t];
		}), Object.keys({
			...n,
			...e
		}).reduce((e, t) => (r.value[t] !== void 0 && (e[t] = r.value[t]), e), {});
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useForwardPropsEmits.js
function Y(e, t) {
	let n = gs(e), r = t ? us(t) : {};
	return z(() => ({
		...n.value,
		...r
	}));
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useGraceArea.js
function _s(e, t) {
	let n = sn(!1, 300);
	At(() => {
		n.value = !1;
	});
	let r = k(null), i = jt();
	function a() {
		r.value = null, n.value = !1;
	}
	function o(e, t) {
		if (!t) return;
		let i = e.currentTarget, a = {
			x: e.clientX,
			y: e.clientY
		}, o = ys(a, vs(a, i.getBoundingClientRect()), 1), s = bs(t.getBoundingClientRect());
		r.value = Ss([...o, ...s]), n.value = !0;
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
				}, c = e.value?.contains(o) || t.value?.contains(o), l = !xs(s, r.value), u = !!o.closest("[data-grace-area-trigger]");
				c ? a() : (l || u) && (a(), i.trigger());
			};
			e.value?.ownerDocument.addEventListener("pointermove", o), n(() => e.value?.ownerDocument.removeEventListener("pointermove", o));
		}
	}), {
		isPointerInTransit: n,
		onPointerExit: i.on
	};
}
function vs(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function ys(e, t, n = 5) {
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
function bs(e) {
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
function xs(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function Ss(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Cs(t);
}
function Cs(e) {
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
var ws = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, Ts = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Ds = {}, Os = 0, ks = function(e) {
	return e && (e.host || ks(e.parentNode));
}, As = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = ks(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, js = function(e, t, n, r) {
	var i = As(t, Array.isArray(e) ? e : [e]);
	Ds[n] || (Ds[n] = /* @__PURE__ */ new WeakMap());
	var a = Ds[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (Ts.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				Ts.set(e, c), a.set(e, l), o.push(e), c === 1 && i && Es.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Os++, function() {
		o.forEach(function(e) {
			var t = Ts.get(e) - 1, i = a.get(e) - 1;
			Ts.set(e, t), a.set(e, i), t || (Es.has(e) || e.removeAttribute(r), Es.delete(e)), i || e.removeAttribute(n);
		}), Os--, Os || (Ts = /* @__PURE__ */ new WeakMap(), Ts = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Ds = {});
	};
}, Ms = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ws(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), js(r, i, n, "aria-hidden")) : function() {
		return null;
	};
};
//#endregion
//#region node_modules/reka-ui/dist/shared/useHideOthers.js
function Ns(e) {
	let t;
	C(() => bn(e), (e) => {
		let n = !1;
		try {
			n = !!e?.closest("[popover]:not(:popover-open)");
		} catch {}
		e && !n ? t = Ms(e) : t && t();
	}), m(() => {
		t && t();
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useId.js
var Ps = 0;
function Fs(e, t = "reka") {
	if (e) return e;
	let n;
	return n = "useId" in xe ? c?.() : jr({ useId: void 0 }).useId?.() ?? `${++Ps}`, t ? `${t}-${n}` : n;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useKbd.js
function Is() {
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
function Ls(e) {
	let t = jr({ locale: k("en") });
	return z(() => e?.value || t.locale?.value || "en");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useSize.js
function Rs(e) {
	let t = k(), n = z(() => t.value?.width ?? 0), r = z(() => t.value?.height ?? 0);
	return p(() => {
		let n = bn(e);
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
function zs(e, t) {
	let n = k(e);
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
function Bs(e) {
	let t = sn("", 1e3);
	return {
		search: t,
		handleTypeaheadSearch: (n, r) => {
			if (t.value += n, e) e(n);
			else {
				let e = Cr(), n = r.map((e) => ({
					...e,
					textValue: e.value?.textValue ?? e.ref.textContent?.trim() ?? ""
				})), i = n.find((t) => t.ref === e), a = Hs(n.map((e) => e.textValue), t.value, i?.textValue), o = n.find((e) => e.textValue === a);
				return o && o.ref.focus(), o?.ref;
			}
		},
		resetTypeahead: () => {
			t.value = "";
		}
	};
}
function Vs(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Hs(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Vs(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/usePresence.js
function Us(e, n) {
	let r = k({}), i = k("none"), a = k(e), o = e.value ? "mounted" : "unmounted", s, c = n.value?.ownerDocument.defaultView ?? vn, { state: l, dispatch: u } = zs(o, {
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
		if (Lt) {
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
			let t = i.value, o = Ws(n.value);
			e ? (u("MOUNT"), d("enter"), o === "none" && d("after-enter")) : o === "none" || o === "undefined" || r.value?.display === "none" ? (u("UNMOUNT"), d("leave"), d("after-leave")) : a && t !== o ? (u("ANIMATION_OUT"), d("leave")) : (u("UNMOUNT"), d("after-leave"));
		}
	}, { immediate: !0 });
	let f = (e) => {
		let t = Ws(n.value), r = t.includes(CSS.escape(e.animationName)), i = l.value === "mounted" ? "enter" : "leave";
		if (e.target === n.value && r && (d(`after-${i}`), u("ANIMATION_END"), !a.value)) {
			let e = n.value.style.animationFillMode;
			n.value.style.animationFillMode = "forwards", s = c?.setTimeout(() => {
				n.value?.style.animationFillMode === "forwards" && (n.value.style.animationFillMode = e);
			});
		}
		e.target === n.value && t === "none" && u("ANIMATION_END");
	}, p = (e) => {
		e.target === n.value && (i.value = Ws(n.value));
	}, h = C(n, (e, t) => {
		e ? (r.value = getComputedStyle(e), e.addEventListener("animationstart", p), e.addEventListener("animationcancel", f), e.addEventListener("animationend", f)) : (u("ANIMATION_END"), s !== void 0 && c?.clearTimeout(s), t?.removeEventListener("animationstart", p), t?.removeEventListener("animationcancel", f), t?.removeEventListener("animationend", f));
	}, { immediate: !0 }), g = C(l, () => {
		let e = Ws(n.value);
		i.value = l.value === "mounted" ? e : "none";
	});
	return m(() => {
		h(), g();
	}), { isPresent: z(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Ws(e) {
	return e && getComputedStyle(e).animationName || "none";
}
//#endregion
//#region node_modules/reka-ui/dist/Presence/Presence.js
var Gs = /* @__PURE__ */ W({
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
		let { present: r, forceMount: i } = Ce(e), a = k(), { isPresent: o } = Us(r, a);
		n({ present: o });
		let s = t.default({ present: o.value });
		s = Dr(s || []);
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
		return () => i.value || r.value || o.value ? we(t.default({ present: o.value })[0], { ref: (e) => {
			let t = bn(e);
			return t?.hasAttribute === void 0 || (t?.hasAttribute("data-reka-popper-content-wrapper") ? a.value = t.firstElementChild : a.value = t), t;
		} }) : null;
	}
}), Ks = /* @__PURE__ */ W({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: t, slots: n }) {
		return () => {
			if (!n.default) return null;
			let e = Dr(n.default()), r = e.findIndex((e) => e.type !== le);
			if (r === -1) return e;
			let i = e[r];
			delete i.props?.ref;
			let a = i.props ? L(t, i.props) : t, o = ie({
				...i,
				props: {}
			}, a);
			return e.length === 1 ? o : (e[r] = o, e);
		};
	}
}), qs = [
	"area",
	"img",
	"input"
], X = /* @__PURE__ */ W({
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
		return typeof r == "string" && qs.includes(r) ? () => we(r, t) : r === "template" ? () => we(Ks, t, { default: n.default }) : () => we(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function Js() {
	let e = k();
	return {
		primitiveElement: e,
		currentElement: z(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : bn(e))
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Collapsible/CollapsibleRoot.js
var [Ys, Xs] = /* @__PURE__ */ q("CollapsibleRoot"), Zs = /* @__PURE__ */ W({
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
		let r = e, i = zn(r, "open", n, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), { disabled: a, unmountOnHide: s } = Ce(r);
		return Xs({
			contentId: "",
			disabled: a,
			open: i,
			unmountOnHide: s,
			onOpenToggle: () => {
				a.value || (i.value = !i.value);
			}
		}), t({ open: i }), J(), (e, t) => (o(), F(B(X), {
			as: e.as,
			"as-child": r.asChild,
			"data-state": B(i) ? "open" : "closed",
			"data-disabled": B(a) ? "" : void 0
		}, {
			default: u(() => [v(e.$slots, "default", { open: B(i) })]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-state",
			"data-disabled"
		]));
	}
}), Qs = /* @__PURE__ */ W({
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
		let r = e, i = n, a = Ys();
		a.contentId ||= Fs(void 0, "reka-collapsible-content");
		let s = k(), { forwardRef: c, currentElement: l } = J(), d = k(0), f = k(0), m = z(() => a.open.value), h = k(m.value), g = k();
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
		let _ = z(() => h.value && a.open.value);
		return p(() => {
			requestAnimationFrame(() => {
				h.value = !1;
			});
		}), xn(l, "beforematch", (e) => {
			requestAnimationFrame(() => {
				a.onOpenToggle(), i("contentFound");
			});
		}), (e, t) => (o(), F(B(Gs), {
			ref_key: "presentRef",
			ref: s,
			present: e.forceMount || B(a).open.value,
			"force-mount": !0
		}, {
			default: u(({ present: t }) => [G(B(X), L(e.$attrs, {
				id: B(a).contentId,
				ref: B(c),
				"as-child": r.asChild,
				as: e.as,
				hidden: t ? void 0 : B(a).unmountOnHide.value ? "" : "until-found",
				"data-state": _.value ? void 0 : B(a).open.value ? "open" : "closed",
				"data-disabled": B(a).disabled?.value ? "" : void 0,
				style: {
					"--reka-collapsible-content-height": `${f.value}px`,
					"--reka-collapsible-content-width": `${d.value}px`
				}
			}), {
				default: u(() => [!B(a).unmountOnHide.value || t ? v(e.$slots, "default", { key: 0 }) : N("v-if", !0)]),
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
}), $s = /* @__PURE__ */ W({
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
		J();
		let n = Ys();
		return (e, r) => (o(), F(B(X), {
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"as-child": t.asChild,
			"aria-controls": B(n).contentId,
			"aria-expanded": B(n).open.value,
			"data-state": B(n).open.value ? "open" : "closed",
			"data-disabled": B(n).disabled?.value ? "" : void 0,
			disabled: B(n).disabled?.value,
			onClick: B(n).onOpenToggle
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
function ec({ type: e, defaultValue: t, modelValue: n }) {
	let r = n || t;
	return n !== void 0 || t !== void 0 ? Array.isArray(r) ? "multiple" : "single" : e ?? "single";
}
function tc({ type: e, defaultValue: t, modelValue: n }) {
	return e || ec({
		type: e,
		defaultValue: t,
		modelValue: n
	});
}
function nc({ type: e, defaultValue: t }) {
	return t === void 0 ? e === "single" ? void 0 : [] : t;
}
function rc(e, t) {
	let n = z(() => tc(e)), r = zn(e, "modelValue", t, {
		defaultValue: nc(e),
		passive: e.modelValue === void 0,
		deep: !0
	});
	function i(e) {
		if (n.value === "single") r.value = gr(e, r.value) ? void 0 : e;
		else {
			let t = Array.isArray(r.value) ? [...r.value || []] : [r.value].filter(Boolean);
			if (Er(t, e)) {
				let n = t.findIndex((t) => gr(t, e));
				t.splice(n, 1);
			} else t.push(e);
			r.value = t;
		}
	}
	return {
		modelValue: r,
		changeModelValue: i,
		isSingle: z(() => n.value === "single")
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Accordion/AccordionRoot.js
var [ic, ac] = /* @__PURE__ */ q("AccordionRoot"), oc = /* @__PURE__ */ W({
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
		let n = e, r = t, { dir: i, disabled: a, unmountOnHide: s } = Ce(n), c = ls(i), { modelValue: l, changeModelValue: d, isSingle: f } = rc(n, r), { forwardRef: p, currentElement: m } = J();
		return ac({
			disabled: a,
			direction: c,
			orientation: n.orientation,
			parentElement: m,
			isSingle: f,
			collapsible: n.collapsible,
			modelValue: l,
			changeModelValue: d,
			unmountOnHide: s
		}), (e, t) => (o(), F(B(X), {
			ref: B(p),
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: B(l) })]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), sc = /* @__PURE__ */ function(e) {
	return e.Open = "open", e.Closed = "closed", e;
}(sc || {}), [cc, lc] = /* @__PURE__ */ q("AccordionItem"), uc = /* @__PURE__ */ W({
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
		let n = e, r = ic(), i = z(() => r.isSingle.value ? n.value === r.modelValue.value : Array.isArray(r.modelValue.value) && r.modelValue.value.includes(n.value)), a = z(() => r.disabled.value || n.disabled), s = z(() => a.value ? "" : void 0), c = z(() => i.value ? sc.Open : sc.Closed);
		t({
			open: i,
			dataDisabled: s
		});
		let { currentRef: l, currentElement: d } = J();
		lc({
			open: i,
			dataState: c,
			disabled: a,
			dataDisabled: s,
			triggerId: "",
			currentRef: l,
			currentElement: d,
			value: z(() => n.value)
		});
		function f(e) {
			let t = e.target;
			if (Array.from(r.parentElement.value?.querySelectorAll("[data-reka-collection-item]") ?? []).findIndex((e) => e === t) === -1) return null;
			kr(e, t, r.parentElement.value, {
				arrowKeyOptions: r.orientation,
				dir: r.direction.value,
				focus: !0
			});
		}
		return (e, t) => (o(), F(B(Zs), {
			"data-orientation": B(r).orientation,
			"data-disabled": s.value,
			"data-state": c.value,
			disabled: a.value,
			open: i.value,
			as: n.as,
			"as-child": n.asChild,
			"unmount-on-hide": n.unmountOnHide ?? B(r).unmountOnHide.value,
			onKeydown: ye(f, [
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
}), dc = /* @__PURE__ */ W({
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
		let t = e, n = ic(), r = cc();
		return J(), (e, i) => (o(), F(B(Qs), {
			role: "region",
			"as-child": t.asChild,
			as: e.as,
			"force-mount": t.forceMount,
			"aria-labelledby": B(r).triggerId,
			"data-state": B(r).dataState.value,
			"data-disabled": B(r).dataDisabled.value,
			"data-orientation": B(n).orientation,
			style: {
				"--reka-accordion-content-width": "var(--reka-collapsible-content-width)",
				"--reka-accordion-content-height": "var(--reka-collapsible-content-height)"
			},
			onContentFound: i[0] ||= (e) => B(n).changeModelValue(B(r).value.value)
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
}), fc = /* @__PURE__ */ W({
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
		let t = e, n = ic(), r = cc();
		return J(), (e, i) => (o(), F(B(X), {
			as: t.as,
			"as-child": t.asChild,
			"data-orientation": B(n).orientation,
			"data-state": B(r).dataState.value,
			"data-disabled": B(r).dataDisabled.value
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
}), pc = /* @__PURE__ */ W({
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
		let t = e, n = ic(), r = cc();
		r.triggerId ||= Fs(void 0, "reka-accordion-trigger");
		function i() {
			let e = n.isSingle.value && r.open.value && !n.collapsible;
			r.disabled.value || e || n.changeModelValue(r.value.value);
		}
		return (e, a) => (o(), F(B($s), {
			id: B(r).triggerId,
			ref: B(r).currentRef,
			"data-reka-collection-item": "",
			as: t.as,
			"as-child": t.asChild,
			"aria-disabled": B(r).disabled.value || void 0,
			"aria-expanded": B(r).open.value || !1,
			"data-disabled": B(r).dataDisabled.value,
			"data-orientation": B(n).orientation,
			"data-state": B(r).dataState.value,
			disabled: B(r).disabled.value,
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
}), [mc, hc] = /* @__PURE__ */ q("DialogRoot"), gc = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "open", t, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), i = k(), a = k(), { modal: o } = Ce(n);
		return hc({
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
			open: B(r),
			close: () => r.value = !1
		});
	}
}), _c = /* @__PURE__ */ W({
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
		J();
		let n = mc();
		return (e, r) => (o(), F(B(X), L(t, {
			type: e.as === "button" ? "button" : void 0,
			onClick: r[0] ||= (e) => B(n).onOpenChange(!1)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["type"]));
	}
}), vc = "dismissableLayer.pointerDownOutside", yc = "dismissableLayer.focusOutside";
function bc(e, t) {
	if (!(t instanceof Element)) return !1;
	let n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), i = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
	return !!(n && (r === n || i.indexOf(r) < i.indexOf(n)));
}
function xc(e, t, n = !0) {
	let r = t?.value?.ownerDocument ?? globalThis?.document, i = k(!1), a = k(() => {});
	return s((o) => {
		if (!Lt || !j(n)) return;
		let s = async (n) => {
			let o = n.target;
			if (!(!t?.value || !o)) {
				if (bc(t.value, o)) {
					i.value = !1;
					return;
				}
				if (n.target && !i.value) {
					let t = { originalEvent: n };
					function i() {
						wr(vc, e, t);
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
		j(n) && (i.value = !0);
	} };
}
function Sc(e, n, r = !0) {
	let i = n?.value?.ownerDocument ?? globalThis?.document, a = k(!1);
	return s((o) => {
		if (!Lt || !j(r)) return;
		let s = async (r) => {
			if (!n?.value) return;
			await t(), await t();
			let i = r.target;
			!n.value || !i || bc(n.value, i) || r.target && !a.value && wr(yc, e, { originalEvent: r });
		};
		i.addEventListener("focusin", s), o(() => i.removeEventListener("focusin", s));
	}), {
		onFocusCapture: () => {
			j(r) && (a.value = !0);
		},
		onBlurCapture: () => {
			j(r) && (a.value = !1);
		}
	};
}
//#endregion
//#region node_modules/reka-ui/dist/DismissableLayer/DismissableLayer.js
var Cc = /* @__PURE__ */ ve({
	layersRoot: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	originalBodyPointerEvents: void 0,
	branches: /* @__PURE__ */ new Set()
}), wc = /* @__PURE__ */ W({
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
		let r = e, i = n, { forwardRef: a, currentElement: c } = J(), l = z(() => c.value?.ownerDocument ?? globalThis.document), d = z(() => Cc.layersRoot), f = z(() => c.value ? Array.from(d.value).indexOf(c.value) : -1), p = z(() => Cc.layersWithOutsidePointerEventsDisabled.size > 0), m = z(() => {
			let e = Array.from(d.value), [t] = [...Cc.layersWithOutsidePointerEventsDisabled].slice(-1), n = e.indexOf(t);
			return f.value >= n;
		}), h = xc(async (e) => {
			let n = [...Cc.branches].some((t) => t?.contains(e.target));
			!m.value || n || (i("pointerDownOutside", e), i("interactOutside", e), await t(), e.defaultPrevented || i("dismiss"));
		}, c), g = Sc((e) => {
			[...Cc.branches].some((t) => t?.contains(e.target)) || (i("focusOutside", e), i("interactOutside", e), e.defaultPrevented || i("dismiss"));
		}, c);
		return Dn("Escape", (e) => {
			f.value === d.value.size - 1 && (i("escapeKeyDown", e), e.defaultPrevented || i("dismiss"));
		}), s((e) => {
			c.value && (r.disableOutsidePointerEvents && (Cc.layersWithOutsidePointerEventsDisabled.size === 0 && (Cc.originalBodyPointerEvents = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Cc.layersWithOutsidePointerEventsDisabled.add(c.value)), d.value.add(c.value), e(() => {
				r.disableOutsidePointerEvents && Cc.layersWithOutsidePointerEventsDisabled.size === 1 && !Tr(Cc.originalBodyPointerEvents) && (l.value.body.style.pointerEvents = Cc.originalBodyPointerEvents);
			}));
		}), s((e) => {
			e(() => {
				c.value && (d.value.delete(c.value), Cc.layersWithOutsidePointerEventsDisabled.delete(c.value));
			});
		}), (e, t) => (o(), F(B(X), {
			ref: B(a),
			"as-child": e.asChild,
			as: e.as,
			"data-dismissable-layer": "",
			style: O({ pointerEvents: p.value ? m.value ? "auto" : "none" : void 0 }),
			onFocusCapture: B(g).onFocusCapture,
			onBlurCapture: B(g).onBlurCapture,
			onPointerdownCapture: B(h).onPointerDownCapture
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
}), Tc = Mt(() => k([]));
function Ec() {
	let e = Tc();
	return {
		add(t) {
			let n = e.value[0];
			t !== n && n?.pause(), e.value = Dc(e.value, t), e.value.unshift(t);
		},
		remove(t) {
			e.value = Dc(e.value, t), e.value[0]?.resume();
		}
	};
}
function Dc(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/utils.js
var Oc = "focusScope.autoFocusOnMount", kc = "focusScope.autoFocusOnUnmount", Ac = {
	bubbles: !1,
	cancelable: !0
};
function jc(e, { select: t = !1 } = {}) {
	let n = Cr();
	for (let r of e) if (Lc(r, { select: t }), Cr() !== n) return !0;
}
function Mc(e) {
	let t = Nc(e);
	return [Pc(t, e), Pc(t.reverse(), e)];
}
function Nc(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Pc(e, t) {
	for (let n of e) if (!Fc(n, { upTo: t })) return n;
}
function Fc(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Ic(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Lc(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = Cr();
		e.focus({ preventScroll: !0 }), e !== n && Ic(e) && t && e.select();
	}
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/FocusScope.js
var Rc = /* @__PURE__ */ W({
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
		let r = e, i = n, { currentRef: a, currentElement: c } = J(), l = k(null), d = Ec(), f = /* @__PURE__ */ ve({
			paused: !1,
			pause() {
				this.paused = !0;
			},
			resume() {
				this.paused = !1;
			}
		});
		s((e) => {
			if (!Lt) return;
			let t = c.value;
			if (!r.trapped) return;
			function n(e) {
				if (f.paused || !t) return;
				let n = e.target;
				t.contains(n) ? l.value = n : Lc(l.value, { select: !0 });
			}
			function i(e) {
				if (f.paused || !t) return;
				let n = e.relatedTarget;
				n !== null && (t.contains(n) || Lc(l.value, { select: !0 }));
			}
			function a(e) {
				let n = l.value;
				n !== null && e.some((e) => e.removedNodes.length > 0) && (t.contains(n) || Lc(t));
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
			let r = Cr();
			if (!n.contains(r)) {
				let e = new CustomEvent(Oc, Ac);
				n.addEventListener(Oc, (e) => i("mountAutoFocus", e)), n.dispatchEvent(e), e.defaultPrevented || (jc(Nc(n), { select: !0 }), Cr() === r && Lc(n));
			}
			e(() => {
				n.removeEventListener(Oc, (e) => i("mountAutoFocus", e));
				let e = new CustomEvent(kc, Ac), t = (e) => {
					i("unmountAutoFocus", e);
				};
				n.addEventListener(kc, t), n.dispatchEvent(e), setTimeout(() => {
					e.defaultPrevented || Lc(r ?? document.body, { select: !0 }), n.removeEventListener(kc, t), d.remove(f);
				}, 0);
			});
		});
		function p(e) {
			if (!r.loop && !r.trapped || f.paused) return;
			let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = Cr();
			if (t && n) {
				let t = e.currentTarget, [i, a] = Mc(t);
				i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r.loop && Lc(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r.loop && Lc(a, { select: !0 })) : n === t && e.preventDefault();
			}
		}
		return (e, t) => (o(), F(B(X), {
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
}), zc = "menu.itemSelect", Bc = ["Enter", " "], Vc = [
	"ArrowDown",
	"PageUp",
	"Home"
], Hc = [
	"ArrowUp",
	"PageDown",
	"End"
], Uc = [...Vc, ...Hc], Wc = {
	ltr: [...Bc, "ArrowRight"],
	rtl: [...Bc, "ArrowLeft"]
}, Gc = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
};
function Kc(e) {
	return e ? "open" : "closed";
}
function qc(e) {
	return e === "indeterminate";
}
function Jc(e) {
	return qc(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Yc(e) {
	let t = Cr();
	for (let n of e) if (n === t || (n.focus(), Cr() !== t)) return;
}
function Xc(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e].x, s = t[e].y, c = t[a].x, l = t[a].y;
		s > r != l > r && n < (c - o) * (r - s) / (l - s) + o && (i = !i);
	}
	return i;
}
function Zc(e, t) {
	return t ? Xc({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Qc(e) {
	return e.pointerType === "mouse";
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var $c = /* @__PURE__ */ W({
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
		let n = e, r = t, i = mc(), { forwardRef: a, currentElement: s } = J();
		return i.titleId ||= Fs(void 0, "reka-dialog-title"), i.descriptionId ||= Fs(void 0, "reka-dialog-description"), p(() => {
			i.contentElement = s, Cr() !== document.body && (i.triggerElement.value = Cr());
		}), (e, t) => (o(), F(B(Rc), {
			"as-child": "",
			loop: "",
			trapped: n.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: u(() => [G(B(wc), L({
				id: B(i).contentId,
				ref: B(a),
				as: e.as,
				"as-child": e.asChild,
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				role: "dialog",
				"aria-describedby": B(i).descriptionId,
				"aria-labelledby": B(i).titleId,
				"data-state": B(Kc)(B(i).open.value)
			}, e.$attrs, {
				onDismiss: t[0] ||= (e) => B(i).onOpenChange(!1),
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
}), el = /* @__PURE__ */ W({
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
		let n = e, r = t, i = mc(), a = us(r), { forwardRef: s, currentElement: c } = J();
		return Ns(c), (e, t) => (o(), F($c, L({
			...n,
			...B(a)
		}, {
			ref: B(s),
			"trap-focus": B(i).open.value,
			"disable-outside-pointer-events": !0,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (e.preventDefault(), B(i).triggerElement.value?.focus());
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
}), tl = /* @__PURE__ */ W({
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
		let n = e, r = us(t);
		J();
		let i = mc(), a = k(!1), s = k(!1);
		return (e, t) => (o(), F($c, L({
			...n,
			...B(r)
		}, {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				e.defaultPrevented || (a.value || B(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, s.value = !1;
			},
			onInteractOutside: t[1] ||= (e) => {
				e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (s.value = !0));
				let t = e.target;
				B(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && s.value && e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), nl = /* @__PURE__ */ W({
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
		let n = e, r = t, i = mc(), a = us(r), { forwardRef: s } = J();
		return (e, t) => (o(), F(B(Gs), { present: e.forceMount || B(i).open.value }, {
			default: u(() => [B(i).modal.value ? (o(), F(el, L({
				key: 0,
				ref: B(s)
			}, {
				...n,
				...B(a),
				...e.$attrs
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)) : (o(), F(tl, L({
				key: 1,
				ref: B(s)
			}, {
				...n,
				...B(a),
				...e.$attrs
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), rl = /* @__PURE__ */ W({
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
		J();
		let n = mc();
		return (e, r) => (o(), F(B(X), L(t, { id: B(n).descriptionId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), il = /* @__PURE__ */ W({
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
		let t = mc();
		return Rr(!0), J(), (e, n) => (o(), F(B(X), {
			as: e.as,
			"as-child": e.asChild,
			"data-state": B(t).open.value ? "open" : "closed",
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
}), al = /* @__PURE__ */ W({
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
		let t = mc(), { forwardRef: n } = J();
		return (e, r) => B(t)?.modal.value ? (o(), F(B(Gs), {
			key: 0,
			present: e.forceMount || B(t).open.value
		}, {
			default: u(() => [G(il, L(e.$attrs, {
				ref: B(n),
				as: e.as,
				"as-child": e.asChild
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["as", "as-child"])]),
			_: 3
		}, 8, ["present"])) : N("v-if", !0);
	}
}), ol = /* @__PURE__ */ W({
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
		let t = Sn();
		return (e, n) => B(t) || e.forceMount ? (o(), F(re, {
			key: 0,
			to: e.to,
			disabled: e.disabled,
			defer: e.defer
		}, [v(e.$slots, "default")], 8, [
			"to",
			"disabled",
			"defer"
		])) : N("v-if", !0);
	}
}), sl = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), cl = /* @__PURE__ */ W({
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
		let t = e, n = mc();
		return J(), (e, r) => (o(), F(B(X), L(t, { id: B(n).titleId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), ll = /* @__PURE__ */ W({
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
		let t = e, n = mc(), { forwardRef: r, currentElement: i } = J();
		return n.contentId ||= Fs(void 0, "reka-dialog-content"), p(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (o(), F(B(X), L(t, {
			ref: B(r),
			type: e.as === "button" ? "button" : void 0,
			"aria-haspopup": "dialog",
			"aria-expanded": B(n).open.value || !1,
			"aria-controls": B(n).open.value ? B(n).contentId : void 0,
			"data-state": B(n).open.value ? "open" : "closed",
			onClick: B(n).onOpenToggle
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
}), [ul, dl] = /* @__PURE__ */ q("AlertDialogContent"), fl = /* @__PURE__ */ W({
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
		let r = e, i = us(n);
		J();
		let a = k();
		return dl({ onCancelElementChange: (e) => {
			a.value = e;
		} }), (e, n) => (o(), F(B(nl), L({
			...r,
			...B(i)
		}, {
			role: "alertdialog",
			onPointerDownOutside: n[0] ||= A(() => {}, ["prevent"]),
			onInteractOutside: n[1] ||= A(() => {}, ["prevent"]),
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
}), pl = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(rl), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ml = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(al), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), hl = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gl = /* @__PURE__ */ W({
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
		return J(), (e, t) => (o(), F(B(gc), L(B(n), { modal: !0 }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), _l = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(cl), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vl = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(ll), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), yl = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n } = J(), r = z(() => 1 / t.ratio * 100);
		return (e, t) => (o(), D("div", {
			style: O(`position: relative; width: 100%; padding-bottom: ${r.value}%`),
			"data-reka-aspect-ratio-wrapper": ""
		}, [G(B(X), L({
			ref: B(n),
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
}), bl = "data-reka-collection-item";
function xl(e = {}) {
	let { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`, i;
	if (n) {
		let e = k(/* @__PURE__ */ new Map());
		i = {
			collectionRef: k(),
			itemMap: e
		}, l(r, i);
	} else i = a(r);
	let o = (e = !1) => {
		let t = i.collectionRef.value;
		if (!t) return [];
		let n = Array.from(t.querySelectorAll(`[${bl}]`)), r = Array.from(i.itemMap.value.values()).sort((e, t) => n.indexOf(e.ref) - n.indexOf(t.ref));
		return e ? r : r.filter((e) => e.ref.dataset.disabled !== "");
	}, c = /* @__PURE__ */ W({
		name: "CollectionSlot",
		inheritAttrs: !1,
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = Js();
			return C(a, () => {
				i.collectionRef.value = a.value;
			}), () => we(Ks, {
				ref: r,
				...n
			}, t);
		}
	}), u = /* @__PURE__ */ W({
		name: "CollectionItem",
		inheritAttrs: !1,
		props: { value: { validator: () => !0 } },
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: a } = Js();
			return s((t) => {
				if (a.value) {
					let n = Se(a.value);
					i.itemMap.value.set(n, {
						ref: a.value,
						value: e.value
					}), t(() => i.itemMap.value.delete(n));
				}
			}), () => we(Ks, {
				...n,
				[bl]: "",
				ref: r
			}, t);
		}
	});
	return {
		getItems: o,
		reactiveItems: z(() => Array.from(i.itemMap.value.values())),
		itemMapSize: z(() => i.itemMap.value.size),
		CollectionSlot: c,
		CollectionItem: u
	};
}
//#endregion
//#region node_modules/reka-ui/dist/VisuallyHidden/VisuallyHidden.js
var Sl = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(X), {
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
}), Cl = /* @__PURE__ */ W({
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
		let t = e, { primitiveElement: n, currentElement: r } = Js();
		return C(z(() => t.checked ?? t.value), (e, t) => {
			if (!r.value) return;
			let n = r.value, i = window.HTMLInputElement.prototype, a = Object.getOwnPropertyDescriptor(i, "value").set;
			if (a && e !== t) {
				let t = new Event("input", { bubbles: !0 }), r = new Event("change", { bubbles: !0 });
				a.call(n, e), n.dispatchEvent(t), n.dispatchEvent(r);
			}
		}), (e, r) => (o(), F(Sl, L({
			ref_key: "primitiveElement",
			ref: n
		}, {
			...t,
			...e.$attrs
		}, { as: "input" }), null, 16));
	}
}), wl = /* @__PURE__ */ W({
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
		let t = e, n = z(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), r = z(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
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
		return (e, i) => (o(), D(V, null, [N(" We render single input if it's required "), n.value ? (o(), F(Cl, L({ key: e.name }, {
			...t,
			...e.$attrs
		}, {
			name: e.name,
			value: e.value
		}), null, 16, ["name", "value"])) : (o(!0), D(V, { key: 1 }, f(r.value, (n) => (o(), F(Cl, L({ key: n.name }, { ref_for: !0 }, {
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
function Tl(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => El(e, t, n)) : El(e, t, n);
}
function El(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : gr(e, t);
}
//#endregion
//#region node_modules/reka-ui/dist/RovingFocus/utils.js
var Dl = "rovingFocusGroup.onEntryFocus", Ol = {
	bubbles: !1,
	cancelable: !0
}, kl = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function Al(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function jl(e, t, n) {
	let r = Al(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return kl[r];
}
function Ml(e, t = !1) {
	let n = Cr();
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), Cr() !== n)) return;
}
function Nl(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
//#endregion
//#region node_modules/reka-ui/dist/Listbox/ListboxRoot.js
var [Pl, Fl] = /* @__PURE__ */ q("ListboxRoot"), Il = /* @__PURE__ */ W({
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
		let i = e, a = r, { multiple: s, highlightOnHover: c, orientation: l, disabled: d, selectionBehavior: f, dir: p } = Ce(i), { getItems: m } = xl({ isProvider: !0 }), { handleTypeaheadSearch: h } = Bs(), { primitiveElement: g, currentElement: _ } = Js(), y = Is(), b = ls(p), x = hs(_), S = k(), w = k(!1), T = k(!0), E = zn(i, "modelValue", a, {
			defaultValue: i.defaultValue ?? (s.value ? [] : void 0),
			passive: i.modelValue === void 0,
			deep: !0
		});
		function D(e) {
			if (w.value = !0, i.multiple) {
				let t = Array.isArray(E.value) ? [...E.value] : [], n = t.findIndex((t) => El(t, e, i.by));
				i.selectionBehavior === "toggle" ? (n === -1 ? t.push(e) : t.splice(n, 1), E.value = t) : (E.value = [e], S.value = e);
			} else i.selectionBehavior === "toggle" && El(E.value, e, i.by) ? E.value = void 0 : E.value = e;
			setTimeout(() => {
				w.value = !1;
			}, 1);
		}
		let O = k(null), ee = k(null), te = k(!1), A = k(!1), ne = jt(), re = jt(), j = jt();
		function M() {
			return m().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
		}
		function ie(e, t = !0, n) {
			e && (O.value = e, (n ?? T.value) && O.value.focus(), t && O.value.scrollIntoView({ block: "nearest" }), a("highlight", m().find((t) => t.ref === e)));
		}
		function ae(e) {
			if (te.value) j.trigger(e);
			else {
				let t = m().find((t) => El(t.value, e, i.by));
				t && (O.value = t.ref, ie(t.ref));
			}
		}
		function P(e) {
			O.value && O.value.isConnected && (e.preventDefault(), e.stopPropagation(), A.value || O.value.click());
		}
		function I(e) {
			if (T.value) {
				if (w.value = !0, te.value) re.trigger(e);
				else {
					let t = e.altKey || e.ctrlKey || e.metaKey;
					if (t && e.key === "a" && s.value) {
						let t = m();
						E.value = [...t.map((e) => e.value)], e.preventDefault();
						let n = t.at(-1);
						n && ie(n.ref);
					} else if (!t) {
						let t = h(e.key, m());
						t && ie(t);
					}
				}
				setTimeout(() => {
					w.value = !1;
				}, 1);
			}
		}
		function oe() {
			A.value = !0;
		}
		function se() {
			t(() => {
				A.value = !1;
			});
		}
		function ce() {
			t(() => {
				ue(new KeyboardEvent("keydown", { key: "PageUp" }));
			});
		}
		function L(e) {
			let t = O.value;
			t?.isConnected && (ee.value = t), O.value = null, a("leave", e);
		}
		function le(e) {
			let t = new CustomEvent("listbox.entryFocus", {
				bubbles: !1,
				cancelable: !0
			});
			if (e.currentTarget?.dispatchEvent(t), a("entryFocus", t), !t.defaultPrevented) if (ee.value) ie(ee.value);
			else {
				let e = M()?.[0];
				ie(e);
			}
		}
		function ue(e) {
			let t = jl(e, l.value, b.value);
			if (!t) return;
			let n = M();
			if (O.value) {
				if (t === "last") n.reverse();
				else if (t === "prev" || t === "next") {
					t === "prev" && n.reverse();
					let e = n.indexOf(O.value);
					n = n.slice(e + 1);
				}
				R(e, n[0]);
			}
			if (n.length) {
				let e = !O.value && t === "prev" ? n.length - 1 : 0;
				ie(n[e]);
			}
			if (te.value) return re.trigger(e);
		}
		function R(e, t) {
			if (!(te.value || i.selectionBehavior !== "replace" || !s.value || !Array.isArray(E.value)) && !((e.altKey || e.ctrlKey || e.metaKey) && !e.shiftKey) && e.shiftKey) {
				let n = m().filter((e) => e.ref.dataset.disabled !== ""), r = n.find((e) => e.ref === t)?.value;
				if (e.key === y.END ? r = n.at(-1)?.value : e.key === y.HOME && (r = n[0]?.value), !r || !S.value) return;
				E.value = vr(n.map((e) => e.value), S.value, r);
			}
		}
		async function de(e) {
			if (Lt) if (await t(), te.value) ne.trigger(e);
			else {
				let e = M(), t = e.find((e) => e.dataset.state === "checked");
				t ? ie(t) : e.length && ie(e[0]);
			}
		}
		return C(E, () => {
			w.value || t(() => {
				de();
			});
		}, {
			immediate: !0,
			deep: !0
		}), n({
			highlightedElement: O,
			highlightItem: ae,
			highlightFirstItem: ce,
			highlightSelected: de,
			getItems: m
		}), Fl({
			modelValue: E,
			onValueChange: D,
			multiple: s,
			orientation: l,
			dir: b,
			disabled: d,
			highlightOnHover: c,
			highlightedElement: O,
			isVirtual: te,
			virtualFocusHook: ne,
			virtualKeydownHook: re,
			virtualHighlightHook: j,
			by: i.by,
			firstValue: S,
			selectionBehavior: f,
			focusable: T,
			onLeave: L,
			onEnter: le,
			changeHighlight: ie,
			onKeydownEnter: P,
			onKeydownNavigation: ue,
			onKeydownTypeAhead: I,
			onCompositionStart: oe,
			onCompositionEnd: se,
			highlightFirstItem: ce
		}), (e, n) => (o(), F(B(X), {
			ref_key: "primitiveElement",
			ref: g,
			as: e.as,
			"as-child": e.asChild,
			dir: B(b),
			"data-disabled": B(d) ? "" : void 0,
			onPointerleave: L,
			onFocusout: n[0] ||= async (e) => {
				let n = e.relatedTarget || e.target;
				await t(), O.value && B(_) && !B(_).contains(n) && L(e);
			}
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: B(E) }), B(x) && e.name ? (o(), F(B(wl), {
				key: 0,
				name: e.name,
				value: B(E),
				disabled: B(d),
				required: e.required
			}, null, 8, [
				"name",
				"value",
				"disabled",
				"required"
			])) : N("v-if", !0)]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"dir",
			"data-disabled"
		]));
	}
}), Ll = /* @__PURE__ */ W({
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
		let { CollectionSlot: t } = xl(), n = Pl(), r = sn(!1, 10);
		return (e, i) => (o(), F(B(t), null, {
			default: u(() => [G(B(X), {
				role: "listbox",
				as: e.as,
				"as-child": e.asChild,
				tabindex: B(n).focusable.value ? B(n).highlightedElement.value ? "-1" : "0" : "-1",
				"aria-orientation": B(n).orientation.value,
				"aria-multiselectable": !!B(n).multiple.value,
				"data-orientation": B(n).orientation.value,
				onMousedown: i[0] ||= A((e) => r.value = !0, ["left"]),
				onFocus: i[1] ||= (e) => {
					B(r) || B(n).onEnter(e);
				},
				onKeydown: [
					i[2] ||= ye((e) => {
						B(n).orientation.value === "vertical" && (e.key === "ArrowLeft" || e.key === "ArrowRight") || B(n).orientation.value === "horizontal" && (e.key === "ArrowUp" || e.key === "ArrowDown") || (e.preventDefault(), B(n).focusable.value && B(n).onKeydownNavigation(e));
					}, [
						"down",
						"up",
						"left",
						"right",
						"home",
						"end"
					]),
					ye(B(n).onKeydownEnter, ["enter"]),
					B(n).onKeydownTypeAhead
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
}), Rl = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "modelValue", t, {
			defaultValue: "",
			passive: n.modelValue === void 0
		}), i = Pl(), { primitiveElement: a, currentElement: s } = Js(), c = z(() => n.disabled || i.disabled.value || !1), l = k();
		return ge(() => l.value = i.highlightedElement.value?.id), p(() => {
			i.focusable.value = !1, setTimeout(() => {
				n.autoFocus && s.value?.focus();
			}, 1);
		}), m(() => {
			i.focusable.value = !0;
		}), (e, t) => (o(), F(B(X), {
			ref_key: "primitiveElement",
			ref: a,
			as: e.as,
			"as-child": e.asChild,
			value: B(r),
			disabled: c.value ? "" : void 0,
			"data-disabled": c.value ? "" : void 0,
			"aria-disabled": c.value ?? void 0,
			"aria-activedescendant": l.value,
			type: "text",
			onKeydown: [ye(A(B(i).onKeydownNavigation, ["prevent"]), [
				"down",
				"up",
				"home",
				"end"
			]), ye(B(i).onKeydownEnter, ["enter"])],
			onInput: t[0] ||= (e) => {
				r.value = e.target.value, B(i).highlightFirstItem();
			},
			onCompositionstart: B(i).onCompositionStart,
			onCompositionend: B(i).onCompositionEnd
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: B(r) })]),
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
}), [zl, Bl] = /* @__PURE__ */ q("ListboxGroup"), Vl = /* @__PURE__ */ W({
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
		let t = e, n = Fs(void 0, "reka-listbox-group");
		return Bl({ id: n }), (e, r) => (o(), F(B(X), L({ role: "group" }, t, { "aria-labelledby": B(n) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-labelledby"]));
	}
}), Hl = /* @__PURE__ */ W({
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
		let t = e, n = zl({ id: "" });
		return (e, r) => (o(), F(B(X), L(t, { id: B(n).id }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Ul = "listbox.select", [Wl, Gl] = /* @__PURE__ */ q("ListboxItem"), Kl = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Fs(void 0, "reka-listbox-item"), { CollectionItem: a } = xl(), { forwardRef: s, currentElement: c } = J(), l = Pl(), d = z(() => c.value === l.highlightedElement.value), f = z(() => Tl(l.modelValue.value, n.value, l.by)), p = z(() => l.disabled.value || n.disabled);
		async function m(e) {
			r("select", e), !e?.defaultPrevented && !p.value && e && (l.onValueChange(n.value), l.changeHighlight(c.value));
		}
		function h(e) {
			wr(Ul, m, {
				originalEvent: e,
				value: n.value
			});
		}
		return Gl({ isSelected: f }), (e, t) => (o(), F(B(a), { value: e.value }, {
			default: u(() => [w([d.value, f.value], () => G(B(X), L({ id: B(i) }, e.$attrs, {
				ref: B(s),
				role: "option",
				tabindex: B(l).focusable.value ? d.value ? "0" : "-1" : -1,
				"aria-selected": f.value,
				as: e.as,
				"as-child": e.asChild,
				disabled: p.value ? "" : void 0,
				"data-disabled": p.value ? "" : void 0,
				"data-highlighted": d.value ? "" : void 0,
				"data-state": f.value ? "checked" : "unchecked",
				onClick: h,
				onKeydown: ye(A(h, ["prevent"]), ["space"]),
				onPointermove: t[0] ||= () => {
					B(l).highlightedElement.value !== B(c) && B(l).highlightOnHover.value && B(l).changeHighlight(B(c), !1, !1);
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
}), [ql, Jl] = /* @__PURE__ */ q("PopperRoot"), Yl = /* @__PURE__ */ W({
	inheritAttrs: !1,
	__name: "PopperRoot",
	setup(e) {
		let t = k();
		return Jl({
			anchor: t,
			onAnchorChange: (e) => t.value = e
		}), (e, t) => v(e.$slots, "default");
	}
}), Xl = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n, currentElement: r } = J(), i = ql();
		return d(() => {
			i.onAnchorChange(t.reference ?? r.value);
		}), (e, t) => (o(), F(B(X), {
			ref: B(n),
			as: e.as,
			"as-child": e.asChild
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), Zl = {
	key: 0,
	d: "M0 0L6 6L12 0"
}, Ql = {
	key: 1,
	d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, $l = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(X), L(t, {
			width: e.width,
			height: e.height,
			viewBox: e.asChild ? void 0 : "0 0 12 6",
			preserveAspectRatio: e.asChild ? void 0 : "none"
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [e.rounded ? (o(), D("path", Ql)) : (o(), D("path", Zl))])]),
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
function eu(e) {
	return e !== null;
}
function tu(e) {
	return {
		name: "transformOrigin",
		options: e,
		fn(t) {
			let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = nu(n), u = {
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
function nu(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var ru = [
	"top",
	"right",
	"bottom",
	"left"
], iu = Math.min, au = Math.max, ou = Math.round, su = Math.floor, cu = (e) => ({
	x: e,
	y: e
}), lu = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function uu(e, t, n) {
	return au(e, iu(t, n));
}
function du(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function fu(e) {
	return e.split("-")[0];
}
function pu(e) {
	return e.split("-")[1];
}
function mu(e) {
	return e === "x" ? "y" : "x";
}
function hu(e) {
	return e === "y" ? "height" : "width";
}
function gu(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function _u(e) {
	return mu(gu(e));
}
function vu(e, t, n) {
	n === void 0 && (n = !1);
	let r = pu(e), i = _u(e), a = hu(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Du(o)), [o, Du(o)];
}
function yu(e) {
	let t = Du(e);
	return [
		bu(e),
		t,
		bu(t)
	];
}
function bu(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var xu = ["left", "right"], Su = ["right", "left"], Cu = ["top", "bottom"], wu = ["bottom", "top"];
function Tu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Su : xu : t ? xu : Su;
		case "left":
		case "right": return t ? Cu : wu;
		default: return [];
	}
}
function Eu(e, t, n, r) {
	let i = pu(e), a = Tu(fu(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(bu)))), a;
}
function Du(e) {
	let t = fu(e);
	return lu[t] + e.slice(t.length);
}
function Ou(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function ku(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ou(e);
}
function Au(e) {
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
function ju(e, t, n) {
	let { reference: r, floating: i } = e, a = gu(t), o = _u(t), s = hu(o), c = fu(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (pu(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Mu(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = du(t, e), p = ku(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Au(await i.getClippingRect({
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
	}, y = Au(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Nu = 50, Pu = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Mu
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ju(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Nu && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ju(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Fu = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = du(e, t) || {};
		if (l == null) return {};
		let d = ku(u), f = {
			x: n,
			y: r
		}, p = _u(i), m = hu(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = iu(d[_], T), D = iu(d[v], T), O = E, ee = C - h[m] - D, k = C / 2 - h[m] / 2 + w, te = uu(O, k, ee), A = !c.arrow && pu(i) != null && k !== te && a.reference[m] / 2 - (k < O ? E : D) - h[m] / 2 < 0, ne = A ? k < O ? k - O : k - ee : 0;
		return {
			[p]: f[p] + ne,
			data: {
				[p]: te,
				centerOffset: k - te - ne,
				...A && { alignmentOffset: ne }
			},
			reset: A
		};
	}
}), Iu = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = du(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = fu(r), _ = gu(o), v = fu(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Du(o)] : yu(o)), x = p !== "none";
			!d && x && b.push(...Eu(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = vu(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== gu(t)) || T.every((e) => gu(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
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
								let t = gu(e.placement);
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
function Lu(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ru(e) {
	return ru.some((t) => e[t] >= 0);
}
var zu = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = du(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Lu(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ru(e)
					} };
				}
				case "escaped": {
					let e = Lu(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ru(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Bu = /* @__PURE__ */ new Set(["left", "top"]);
async function Vu(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = fu(n), s = pu(n), c = gu(n) === "y", l = Bu.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = du(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Hu = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Vu(t, e);
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
}, Uu = function(e) {
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
			} }, ...l } = du(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = gu(fu(i)), p = mu(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = uu(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = uu(n, h, r);
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
}, Wu = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = du(e, t), u = {
				x: n,
				y: r
			}, d = gu(i), f = mu(d), p = u[f], m = u[d], h = du(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Bu.has(fu(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Gu = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = du(e, t), u = await o.detectOverflow(t, l), d = fu(i), f = pu(i), p = gu(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = iu(h - u[g], v), x = iu(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = au(u.left, 0), t = au(u.right, 0), n = au(u.top, 0), r = au(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : au(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : au(u.top, u.bottom));
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
function Ku() {
	return typeof window < "u";
}
function qu(e) {
	return Xu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ju(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yu(e) {
	return ((Xu(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Xu(e) {
	return Ku() ? e instanceof Node || e instanceof Ju(e).Node : !1;
}
function Zu(e) {
	return Ku() ? e instanceof Element || e instanceof Ju(e).Element : !1;
}
function Qu(e) {
	return Ku() ? e instanceof HTMLElement || e instanceof Ju(e).HTMLElement : !1;
}
function $u(e) {
	return !Ku() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ju(e).ShadowRoot;
}
function ed(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = dd(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function td(e) {
	return /^(table|td|th)$/.test(qu(e));
}
function nd(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var rd = /transform|translate|scale|rotate|perspective|filter/, id = /paint|layout|strict|content/, ad = (e) => !!e && e !== "none", od;
function sd(e) {
	let t = Zu(e) ? dd(e) : e;
	return ad(t.transform) || ad(t.translate) || ad(t.scale) || ad(t.rotate) || ad(t.perspective) || !ld() && (ad(t.backdropFilter) || ad(t.filter)) || rd.test(t.willChange || "") || id.test(t.contain || "");
}
function cd(e) {
	let t = pd(e);
	for (; Qu(t) && !ud(t);) {
		if (sd(t)) return t;
		if (nd(t)) return null;
		t = pd(t);
	}
	return null;
}
function ld() {
	return od ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), od;
}
function ud(e) {
	return /^(html|body|#document)$/.test(qu(e));
}
function dd(e) {
	return Ju(e).getComputedStyle(e);
}
function fd(e) {
	return Zu(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function pd(e) {
	if (qu(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || $u(e) && e.host || Yu(e);
	return $u(t) ? t.host : t;
}
function md(e) {
	let t = pd(e);
	return ud(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Qu(t) && ed(t) ? t : md(t);
}
function hd(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = md(e), i = r === e.ownerDocument?.body, a = Ju(r);
	if (i) {
		let e = gd(a);
		return t.concat(a, a.visualViewport || [], ed(r) ? r : [], e && n ? hd(e) : []);
	} else return t.concat(r, hd(r, [], n));
}
function gd(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function _d(e) {
	let t = dd(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Qu(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ou(n) !== a || ou(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function vd(e) {
	return Zu(e) ? e : e.contextElement;
}
function yd(e) {
	let t = vd(e);
	if (!Qu(t)) return cu(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = _d(t), o = (a ? ou(n.width) : n.width) / r, s = (a ? ou(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var bd = /* @__PURE__ */ cu(0);
function xd(e) {
	let t = Ju(e);
	return !ld() || !t.visualViewport ? bd : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Sd(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Ju(e) ? !1 : t;
}
function Cd(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = vd(e), o = cu(1);
	t && (r ? Zu(r) && (o = yd(r)) : o = yd(e));
	let s = Sd(a, n, r) ? xd(a) : cu(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Ju(a), t = r && Zu(r) ? Ju(r) : r, n = e, i = gd(n);
		for (; i && r && t !== n;) {
			let e = yd(i), t = i.getBoundingClientRect(), r = dd(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Ju(i), i = gd(n);
		}
	}
	return Au({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function wd(e, t) {
	let n = fd(e).scrollLeft;
	return t ? t.left + n : Cd(Yu(e)).left + n;
}
function Td(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - wd(e, n),
		y: n.top + t.scrollTop
	};
}
function Ed(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Yu(r), s = t ? nd(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = cu(1), u = cu(0), d = Qu(r);
	if ((d || !d && !a) && ((qu(r) !== "body" || ed(o)) && (c = fd(r)), d)) {
		let e = Cd(r);
		l = yd(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Td(o, c) : cu(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Dd(e) {
	return Array.from(e.getClientRects());
}
function Od(e) {
	let t = Yu(e), n = fd(e), r = e.ownerDocument.body, i = au(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = au(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + wd(e), s = -n.scrollTop;
	return dd(r).direction === "rtl" && (o += au(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var kd = 25;
function Ad(e, t) {
	let n = Ju(e), r = Yu(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = ld();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = wd(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= kd && (a -= o);
	} else l <= kd && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function jd(e, t) {
	let n = Cd(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Qu(e) ? yd(e) : cu(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Md(e, t, n) {
	let r;
	if (t === "viewport") r = Ad(e, n);
	else if (t === "document") r = Od(Yu(e));
	else if (Zu(t)) r = jd(t, n);
	else {
		let n = xd(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Au(r);
}
function Nd(e, t) {
	let n = pd(e);
	return n === t || !Zu(n) || ud(n) ? !1 : dd(n).position === "fixed" || Nd(n, t);
}
function Pd(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = hd(e, [], !1).filter((e) => Zu(e) && qu(e) !== "body"), i = null, a = dd(e).position === "fixed", o = a ? pd(e) : e;
	for (; Zu(o) && !ud(o);) {
		let t = dd(o), n = sd(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || ed(o) && !n && Nd(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = pd(o);
	}
	return t.set(e, r), r;
}
function Fd(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? nd(t) ? [] : Pd(t, this._c) : [].concat(n), r], o = Md(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Md(t, a[e], i);
		s = au(n.top, s), c = iu(n.right, c), l = iu(n.bottom, l), u = au(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Id(e) {
	let { width: t, height: n } = _d(e);
	return {
		width: t,
		height: n
	};
}
function Ld(e, t, n) {
	let r = Qu(t), i = Yu(t), a = n === "fixed", o = Cd(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = cu(0);
	function l() {
		c.x = wd(i);
	}
	if (r || !r && !a) if ((qu(t) !== "body" || ed(i)) && (s = fd(t)), r) {
		let e = Cd(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Td(i, s) : cu(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Rd(e) {
	return dd(e).position === "static";
}
function zd(e, t) {
	if (!Qu(e) || dd(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Yu(e) === n && (n = n.ownerDocument.body), n;
}
function Bd(e, t) {
	let n = Ju(e);
	if (nd(e)) return n;
	if (!Qu(e)) {
		let t = pd(e);
		for (; t && !ud(t);) {
			if (Zu(t) && !Rd(t)) return t;
			t = pd(t);
		}
		return n;
	}
	let r = zd(e, t);
	for (; r && td(r) && Rd(r);) r = zd(r, t);
	return r && ud(r) && Rd(r) && !sd(r) ? n : r || cd(e) || n;
}
var Vd = async function(e) {
	let t = this.getOffsetParent || Bd, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Ld(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Hd(e) {
	return dd(e).direction === "rtl";
}
var Ud = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ed,
	getDocumentElement: Yu,
	getClippingRect: Fd,
	getOffsetParent: Bd,
	getElementRects: Vd,
	getClientRects: Dd,
	getDimensions: Id,
	getScale: yd,
	isElement: Zu,
	isRTL: Hd
};
function Wd(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Gd(e, t) {
	let n = null, r, i = Yu(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = su(d), h = su(i.clientWidth - (u + f)), g = su(i.clientHeight - (d + p)), _ = su(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: au(0, iu(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Wd(l, e.getBoundingClientRect()) && o(), y = !1;
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
function Kd(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = vd(e), u = i || a ? [...l ? hd(l) : [], ...t ? hd(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Gd(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Cd(e) : null;
	c && g();
	function g() {
		let t = Cd(e);
		h && !Wd(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var qd = Hu, Jd = Uu, Yd = Iu, Xd = Gu, Zd = zu, Qd = Fu, $d = Wu, ef = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Ud,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Pu(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region node_modules/@floating-ui/vue/dist/floating-ui.vue.mjs
function tf(e) {
	return typeof e == "object" && !!e && "$el" in e;
}
function nf(e) {
	if (tf(e)) {
		let t = e.$el;
		return Xu(t) && qu(t) === "#comment" ? null : t;
	}
	return e;
}
function rf(e) {
	return typeof e == "function" ? e() : B(e);
}
function af(e) {
	return {
		name: "arrow",
		options: e,
		fn(t) {
			let n = nf(rf(e.element));
			return n == null ? {} : Qd({
				element: n,
				padding: e.padding
			}).fn(t);
		}
	};
}
function of(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sf(e, t) {
	let n = of(e);
	return Math.round(t * n) / n;
}
function cf(t, n, r) {
	r === void 0 && (r = {});
	let i = r.whileElementsMounted, a = z(() => rf(r.open) ?? !0), o = z(() => rf(r.middleware)), s = z(() => rf(r.placement) ?? "bottom"), c = z(() => rf(r.strategy) ?? "absolute"), l = z(() => rf(r.transform) ?? !0), u = z(() => nf(t.value)), d = z(() => nf(n.value)), f = k(0), p = k(0), m = k(c.value), h = k(s.value), g = be({}), _ = k(!1), v = z(() => {
		let e = {
			position: m.value,
			left: "0",
			top: "0"
		};
		if (!d.value) return e;
		let t = sf(d.value, f.value), n = sf(d.value, p.value);
		return l.value ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...of(d.value) >= 1.5 && { willChange: "transform" }
		} : {
			position: m.value,
			left: t + "px",
			top: n + "px"
		};
	}), y;
	function b() {
		if (u.value == null || d.value == null) return;
		let e = a.value;
		ef(u.value, d.value, {
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
	], b, { flush: "sync" }), C([u, d], S, { flush: "sync" }), C(a, w, { flush: "sync" }), e() && pe(x), {
		x: he(f),
		y: he(p),
		strategy: he(m),
		placement: he(h),
		middlewareData: he(g),
		isPositioned: he(_),
		floatingStyles: v,
		update: b
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Popper/PopperContent.js
var lf = {
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
}, [uf, df] = /* @__PURE__ */ q("PopperContent"), ff = /* @__PURE__ */ W({
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
	}, { ...lf }),
	emits: ["placed"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = ql(), { forwardRef: a, currentElement: c } = J(), l = k(), f = k(), { width: p, height: m } = Rs(f), h = z(() => n.side + (n.align === "center" ? "" : `-${n.align}`)), g = z(() => typeof n.collisionPadding == "number" ? n.collisionPadding : {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...n.collisionPadding
		}), _ = z(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), y = z(() => ({
			padding: g.value,
			boundary: _.value.filter(eu),
			altBoundary: _.value.length > 0
		})), b = z(() => ({
			mainAxis: n.sideFlip,
			crossAxis: n.alignFlip
		})), x = Ot(() => [
			qd({
				mainAxis: n.sideOffset + m.value,
				alignmentAxis: n.alignOffset
			}),
			n.prioritizePosition && n.avoidCollisions && Yd({
				...y.value,
				...b.value
			}),
			n.avoidCollisions && Jd({
				mainAxis: !0,
				crossAxis: !!n.prioritizePosition,
				limiter: n.sticky === "partial" ? $d() : void 0,
				...y.value
			}),
			!n.prioritizePosition && n.avoidCollisions && Yd({
				...y.value,
				...b.value
			}),
			Xd({
				...y.value,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--reka-popper-available-width", `${n}px`), o.setProperty("--reka-popper-available-height", `${r}px`), o.setProperty("--reka-popper-anchor-width", `${i}px`), o.setProperty("--reka-popper-anchor-height", `${a}px`);
				}
			}),
			f.value && af({
				element: f.value,
				padding: n.arrowPadding
			}),
			tu({
				arrowWidth: p.value,
				arrowHeight: m.value
			}),
			n.hideWhenDetached && Zd({
				strategy: "referenceHidden",
				...y.value
			})
		]), { floatingStyles: S, placement: C, isPositioned: w, middlewareData: T, update: E } = cf(z(() => n.reference ?? i.anchor.value), l, {
			strategy: n.positionStrategy,
			placement: h,
			whileElementsMounted: (...e) => Kd(...e, {
				layoutShift: !n.disableUpdateOnLayoutShift,
				animationFrame: n.updatePositionStrategy === "always"
			}),
			middleware: x
		}), ee = z(() => nu(C.value)[0]), te = z(() => nu(C.value)[1]);
		d(() => {
			w.value && r("placed");
		});
		let A = z(() => {
			let e = T.value.arrow?.centerOffset !== 0;
			return n.hideShiftedArrow && e;
		}), ne = k("");
		return s(() => {
			c.value && (ne.value = window.getComputedStyle(c.value).zIndex);
		}), df({
			placedSide: ee,
			onArrowChange: (e) => f.value = e,
			arrowX: z(() => T.value.arrow?.x ?? 0),
			arrowY: z(() => T.value.arrow?.y ?? 0),
			shouldHideArrow: A
		}), (e, t) => (o(), D("div", {
			ref_key: "floatingRef",
			ref: l,
			"data-reka-popper-content-wrapper": "",
			style: O({
				...B(S),
				transform: B(w) ? B(S).transform : "translate(0, -200%)",
				minWidth: "max-content",
				zIndex: ne.value,
				"--reka-popper-transform-origin": [B(T).transformOrigin?.x, B(T).transformOrigin?.y].join(" "),
				...B(T).hide?.referenceHidden && {
					visibility: "hidden",
					pointerEvents: "none"
				}
			})
		}, [G(B(X), L({ ref: B(a) }, e.$attrs, {
			"as-child": n.asChild,
			as: e.as,
			"data-side": ee.value,
			"data-align": te.value,
			style: { animation: B(w) ? void 0 : "none" }
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
}), pf = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, mf = /* @__PURE__ */ W({
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
		let { forwardRef: t } = J(), n = uf(), r = z(() => pf[n.placedSide.value]);
		return (e, i) => (o(), D("span", {
			ref: (e) => {
				B(n).onArrowChange(e ?? void 0);
			},
			style: O({
				position: "absolute",
				left: B(n).arrowX?.value ? `${B(n).arrowX?.value}px` : void 0,
				top: B(n).arrowY?.value ? `${B(n).arrowY?.value}px` : void 0,
				[r.value]: 0,
				transformOrigin: {
					top: "",
					right: "0 0",
					bottom: "center 0",
					left: "100% 0"
				}[B(n).placedSide.value],
				transform: {
					top: "translateY(100%)",
					right: "translateY(50%) rotate(90deg) translateX(-50%)",
					bottom: "rotate(180deg)",
					left: "translateY(50%) rotate(-90deg) translateX(50%)"
				}[B(n).placedSide.value],
				visibility: B(n).shouldHideArrow.value ? "hidden" : void 0
			})
		}, [G($l, L(e.$attrs, {
			ref: B(t),
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
function hf(e) {
	let t = jr({ nonce: k() });
	return z(() => e?.value || t.nonce?.value);
}
//#endregion
//#region node_modules/reka-ui/dist/Avatar/AvatarRoot.js
var [gf, _f] = /* @__PURE__ */ q("AvatarRoot"), vf = /* @__PURE__ */ W({
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
		return J(), _f({ imageLoadingStatus: k("idle") }), (e, t) => (o(), F(B(X), {
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"]));
	}
}), yf = /* @__PURE__ */ W({
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
		let t = e, n = gf();
		J();
		let r = k(t.delayMs === void 0);
		return s((e) => {
			if (t.delayMs && Lt) {
				let n = window.setTimeout(() => {
					r.value = !0;
				}, t.delayMs);
				e(() => {
					window.clearTimeout(n);
				});
			}
		}), (e, t) => r.value && B(n).imageLoadingStatus.value !== "loaded" ? (o(), F(B(X), {
			key: 0,
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as-child", "as"])) : N("v-if", !0);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Avatar/utils.js
function bf(e, t) {
	return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function xf(e, { referrerPolicy: t, crossOrigin: n } = {}) {
	let r = k(!1), i = k(null), a = z(() => r.value ? (!i.value && Lt && (i.value = new window.Image()), i.value) : null), o = k(bf(a.value, e.value)), c = (e) => () => {
		r.value && (o.value = e);
	};
	return p(() => {
		r.value = !0, s((r) => {
			let i = a.value;
			if (!i) return;
			o.value = bf(i, e.value);
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
var Sf = /* @__PURE__ */ W({
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
		let n = e, r = t, { src: i, referrerPolicy: a, crossOrigin: s } = Ce(n);
		J();
		let c = gf(), l = xf(i, {
			referrerPolicy: a,
			crossOrigin: s
		});
		return C(l, (e) => {
			r("loadingStatusChange", e), e !== "idle" && (c.imageLoadingStatus.value = e);
		}, { immediate: !0 }), (e, t) => T((o(), F(B(X), {
			role: "img",
			"as-child": e.asChild,
			as: e.as,
			src: B(i),
			referrerpolicy: B(a),
			crossorigin: B(s)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as-child",
			"as",
			"src",
			"referrerpolicy",
			"crossorigin"
		])), [[me, B(l) === "loaded"]]);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Calendar/useCalendar.js
function Cf(e) {
	function t(t) {
		return Array.isArray(e.date.value) ? e.date.value.some((e) => Xr(e, t)) : e.date.value ? Xr(e.date.value, t) : !1;
	}
	return {
		isDateSelected: t,
		isInvalid: z(() => {
			if (Array.isArray(e.date.value)) {
				if (!e.date.value.length) return !1;
				for (let t of e.date.value) if (e.isDateDisabled?.(t) || e.isDateUnavailable?.(t)) return !0;
			} else {
				if (!e.date.value) return !1;
				if (e.isDateDisabled?.(e.date.value) || e.isDateUnavailable?.(e.date.value)) return !0;
			}
			return !1;
		}),
		hasSelectedDate: z(() => Array.isArray(e.date.value) ? e.date.value.length > 0 : !!e.date.value),
		isSelectedDateDisabled: z(() => Array.isArray(e.date.value) ? e.date.value.length ? e.date.value.some((t) => e.isDateDisabled?.(t)) : !1 : e.date.value ? !!e.isDateDisabled?.(e.date.value) : !1)
	};
}
function wf(e, t) {
	let n = t(e), r = n.compare(e), i = {};
	return r >= 7 && (i.day = 1), r >= Uo(e) && (i.month = 1), n.set({ ...i });
}
function Tf(e, t) {
	let n = t(e), r = e.compare(n), i = {};
	return r >= 7 && (i.day = 35), r >= Uo(e) && (i.month = 13), n.set({ ...i });
}
function Ef(e, t) {
	return t(e);
}
function Df(e, t) {
	return t(e);
}
function Of(e) {
	let t = cs(e.locale.value), n = z(() => {
		let t = { calendar: e.placeholder.value.calendar.identifier };
		return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (t.era = "short"), t;
	}), r = k(as({
		dateObj: e.placeholder.value,
		weekStartsOn: e.weekStartsOn.value,
		locale: e.locale.value,
		fixedWeeks: e.fixedWeeks.value,
		numberOfMonths: e.numberOfMonths.value
	})), i = z(() => r.value.map((e) => e.value));
	function a(e) {
		return !i.value.some((t) => $r(e, t));
	}
	let o = (t) => {
		if (!e.maxValue.value || !r.value.length) return !1;
		if (e.disabled.value) return !0;
		let n = r.value.at(-1).value;
		return !t && !e.nextPage.value ? Go(n.add({ months: 1 }).set({ day: 1 }), e.maxValue.value) : Go(wf(n, t || e.nextPage.value), e.maxValue.value);
	}, s = (t) => {
		if (!e.minValue.value || !r.value.length) return !1;
		if (e.disabled.value) return !0;
		let n = r.value[0].value;
		return !t && !e.prevPage.value ? Wo(n.subtract({ months: 1 }).set({ day: 35 }), e.minValue.value) : Wo(Tf(n, t || e.prevPage.value), e.minValue.value);
	};
	function c(t) {
		return !!(e.isDateDisabled?.(t) || e.disabled.value || e.maxValue.value && Go(t, e.maxValue.value) || e.minValue.value && Wo(t, e.minValue.value));
	}
	let l = (t) => !!e.isDateUnavailable?.(t), u = z(() => r.value.length ? r.value[0].rows[0].map((n) => t.dayOfWeek(zo(n), e.weekdayFormat.value)) : []), d = (t) => {
		let n = r.value[0].value;
		if (!t && !e.nextPage.value) {
			let t = as({
				dateObj: n.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }),
				weekStartsOn: e.weekStartsOn.value,
				locale: e.locale.value,
				fixedWeeks: e.fixedWeeks.value,
				numberOfMonths: e.numberOfMonths.value
			});
			r.value = t, e.placeholder.value = t[0].value.set({ day: 1 });
			return;
		}
		let i = as({
			dateObj: Ef(n, t || e.nextPage.value),
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
		r.value = i;
		let a = {};
		if (!t) {
			let e = i[0].value.compare(n);
			e >= Uo(n) && (a.day = 1), e >= 365 && (a.month = 1);
		}
		e.placeholder.value = i[0].value.set({ ...a });
	}, f = (t) => {
		let n = r.value[0].value;
		if (!t && !e.prevPage.value) {
			let t = as({
				dateObj: n.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }),
				weekStartsOn: e.weekStartsOn.value,
				locale: e.locale.value,
				fixedWeeks: e.fixedWeeks.value,
				numberOfMonths: e.numberOfMonths.value
			});
			r.value = t, e.placeholder.value = t[0].value.set({ day: 1 });
			return;
		}
		let i = as({
			dateObj: Df(n, t || e.prevPage.value),
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
		r.value = i;
		let a = {};
		if (!t) {
			let e = n.compare(i[0].value);
			e >= Uo(n) && (a.day = 1), e >= 365 && (a.month = 1);
		}
		e.placeholder.value = i[0].value.set({ ...a });
	};
	C(e.placeholder, (t) => {
		i.value.some((e) => $r(e, t)) || (r.value = as({
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
		r.value = as({
			dateObj: e.placeholder.value,
			weekStartsOn: e.weekStartsOn.value,
			locale: e.locale.value,
			fixedWeeks: e.fixedWeeks.value,
			numberOfMonths: e.numberOfMonths.value
		});
	});
	let p = z(() => {
		if (!r.value.length) return "";
		if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), r.value.length === 1) {
			let e = r.value[0].value;
			return `${t.fullMonthAndYear(zo(e), n.value)}`;
		}
		let i = zo(r.value[0].value), a = zo(r.value.at(-1).value), o = t.fullMonth(i, n.value), s = t.fullMonth(a, n.value), c = t.fullYear(i, n.value), l = t.fullYear(a, n.value);
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
		fullCalendarLabel: z(() => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`),
		isPlaceholderFocusable: z(() => !(c(e.placeholder.value) || l(e.placeholder.value) || a(e.placeholder.value))),
		firstFocusableDate: z(() => {
			for (let t of r.value) {
				if (e.minValue.value && Wo(t.value, e.minValue.value)) continue;
				let n = Uo(t.value), r = e.minValue.value && Zr(e.minValue.value, t.value) ? e.minValue.value.day : 1;
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
var kf = { style: {
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
} }, Af = {
	role: "heading",
	"aria-level": "2"
}, [jf, Mf] = /* @__PURE__ */ q("CalendarRoot"), Nf = /* @__PURE__ */ W({
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
		let n = e, r = t, { disabled: i, readonly: a, initialFocus: s, pagedNavigation: c, weekdayFormat: l, fixedWeeks: d, multiple: f, minValue: m, maxValue: h, numberOfMonths: g, preventDeselect: _, isDateDisabled: y, isDateUnavailable: b, calendarLabel: x, defaultValue: S, nextPage: w, prevPage: T, dir: E, locale: D, disableDaysOutsideCurrentView: O } = Ce(n), { primitiveElement: ee, currentElement: k } = Js(), te = Ls(D), A = ls(E), ne = z(() => n.weekStartsOn ?? ss(te.value)), re = zn(n, "modelValue", r, {
			defaultValue: S.value,
			passive: n.modelValue === void 0
		}), j = $o({
			defaultPlaceholder: n.placeholder,
			defaultValue: re.value,
			locale: n.locale
		}), M = zn(n, "placeholder", r, {
			defaultValue: n.defaultPlaceholder ?? j.copy(),
			passive: n.placeholder === void 0
		});
		function ie(e) {
			M.value = e.copy();
		}
		let { fullCalendarLabel: ae, headingValue: N, isDateDisabled: P, isDateUnavailable: I, isNextButtonDisabled: oe, isPrevButtonDisabled: se, weekdays: ce, isOutsideVisibleView: L, nextPage: le, prevPage: ue, formatter: de, grid: fe, isPlaceholderFocusable: pe, firstFocusableDate: me } = Of({
			locale: te,
			placeholder: M,
			weekStartsOn: ne,
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
		}), { isInvalid: he, isDateSelected: ge, hasSelectedDate: _e, isSelectedDateDisabled: ve } = Cf({
			date: re,
			isDateDisabled: P,
			isDateUnavailable: I
		});
		C(re, (e) => {
			if (Array.isArray(e) && e.length) {
				let t = e.at(-1);
				t && !Qr(M.value, t) && ie(t);
			} else !Array.isArray(e) && e && !Qr(M.value, e) && ie(e);
		});
		function ye(e) {
			if (!f.value) {
				if (!re.value) {
					re.value = e.copy();
					return;
				}
				!_.value && Qr(re.value, e) ? (M.value = e.copy(), re.value = void 0) : re.value = e.copy();
			} else if (!re.value) re.value = [e.copy()];
			else if (Array.isArray(re.value)) {
				if (re.value.findIndex((t) => Xr(t, e)) === -1) re.value = [...re.value, e];
				else if (!_.value) {
					let t = re.value.filter((t) => !Xr(t, e));
					if (!t.length) {
						M.value = e.copy(), re.value = void 0;
						return;
					}
					re.value = t.map((e) => e.copy());
				}
			}
		}
		return p(() => {
			s.value && ts(k.value);
		}), Mf({
			isDateUnavailable: I,
			dir: A,
			isDateDisabled: P,
			locale: te,
			formatter: de,
			modelValue: re,
			placeholder: M,
			disabled: i,
			initialFocus: s,
			pagedNavigation: c,
			grid: fe,
			weekDays: ce,
			weekStartsOn: ne,
			weekdayFormat: l,
			fixedWeeks: d,
			multiple: f,
			numberOfMonths: g,
			readonly: a,
			preventDeselect: _,
			fullCalendarLabel: ae,
			headingValue: N,
			isInvalid: he,
			isDateSelected: ge,
			isNextButtonDisabled: oe,
			isPrevButtonDisabled: se,
			isOutsideVisibleView: L,
			nextPage: le,
			prevPage: ue,
			parentElement: k,
			onPlaceholderChange: ie,
			onDateChange: ye,
			disableDaysOutsideCurrentView: O,
			minValue: m,
			maxValue: h,
			isPlaceholderFocusable: pe,
			firstFocusableDate: me,
			hasSelectedDate: _e,
			isSelectedDateDisabled: ve
		}), (e, t) => (o(), F(B(X), {
			ref_key: "primitiveElement",
			ref: ee,
			as: e.as,
			"as-child": e.asChild,
			"aria-label": B(ae),
			"data-readonly": B(a) ? "" : void 0,
			"data-disabled": B(i) ? "" : void 0,
			"data-invalid": B(he) ? "" : void 0,
			dir: B(A)
		}, {
			default: u(() => [v(e.$slots, "default", {
				date: B(M),
				grid: B(fe),
				weekDays: B(ce),
				weekStartsOn: ne.value,
				locale: B(te),
				fixedWeeks: B(d),
				modelValue: B(re)
			}), R("div", kf, [R("div", Af, U(B(ae)), 1)])]),
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
}), Pf = /* @__PURE__ */ W({
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
		let t = jf();
		return (e, n) => (o(), F(B(X), {
			as: e.as,
			"as-child": e.asChild,
			role: "gridcell",
			"aria-selected": B(t).isDateSelected(e.date) ? !0 : void 0,
			"aria-disabled": B(t).isDateDisabled(e.date) || B(t).isDateUnavailable?.(e.date) || B(t).disableDaysOutsideCurrentView.value,
			"data-disabled": B(t).isDateDisabled(e.date) || B(t).disableDaysOutsideCurrentView.value ? "" : void 0
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
}), Ff = /* @__PURE__ */ W({
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
		let n = e, r = Is(), i = jf(), { primitiveElement: a, currentElement: s } = Js(), c = z(() => n.day.day.toLocaleString(i.locale.value)), l = z(() => i.formatter.custom(zo(n.day), {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric"
		})), d = z(() => i.isDateUnavailable?.(n.day) ?? !1), f = z(() => ti(n.day, di())), p = z(() => !Zr(n.day, n.month)), m = z(() => i.isOutsideVisibleView(n.day)), h = z(() => i.isDateDisabled(n.day) || i.disableDaysOutsideCurrentView.value && p.value), g = z(() => p.value || h.value ? !1 : !i.disabled.value && i.isPlaceholderFocusable.value && Xr(n.day, i.placeholder.value) ? !0 : (!i.hasSelectedDate.value || i.isSelectedDateDisabled.value) && !i.isPlaceholderFocusable.value ? i.firstFocusableDate.value && Xr(n.day, i.firstFocusableDate.value) : !1), _ = z(() => i.isDateSelected(n.day));
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
		return (e, t) => (o(), F(B(X), {
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
			onKeydown: [ye(x, [
				"up",
				"down",
				"left",
				"right",
				"space",
				"enter"
			]), t[0] ||= ye(A(() => {}, ["prevent"]), ["enter"])]
		}, {
			default: u(() => [v(e.$slots, "default", {
				dayValue: c.value,
				disabled: h.value,
				today: f.value,
				selected: _.value,
				outsideView: p.value,
				outsideVisibleView: m.value,
				unavailable: d.value
			}, () => [H(U(c.value), 1)])]),
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
}), If = /* @__PURE__ */ W({
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
		let t = e, n = jf(), r = z(() => n.disabled.value ? !0 : void 0), i = z(() => n.readonly.value ? !0 : void 0);
		return (e, n) => (o(), F(B(X), L(t, {
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
}), Lf = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Rf = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(X), L(t, { "aria-hidden": "true" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), zf = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Bf = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Vf = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Hf = /* @__PURE__ */ W({
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
		let t = e, n = jf();
		return (e, r) => (o(), F(B(X), L(t, { "data-disabled": B(n).disabled.value ? "" : void 0 }), {
			default: u(() => [v(e.$slots, "default", { headingValue: B(n).headingValue.value }, () => [H(U(B(n).headingValue.value), 1)])]),
			_: 3
		}, 16, ["data-disabled"]));
	}
}), Uf = /* @__PURE__ */ W({
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
		let t = e, n = z(() => r.disabled.value || r.isNextButtonDisabled(t.nextPage)), r = jf();
		function i() {
			n.value || r.nextPage(t.nextPage);
		}
		return (e, r) => (o(), F(B(X), {
			as: t.as,
			"as-child": t.asChild,
			"aria-label": "Next page",
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= H(" Next page ")])]),
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
}), Wf = /* @__PURE__ */ W({
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
		let t = e, n = z(() => r.disabled.value || r.isPrevButtonDisabled(t.prevPage)), r = jf();
		function i() {
			n.value || r.prevPage(t.prevPage);
		}
		return (e, r) => (o(), F(B(X), {
			"aria-label": "Previous page",
			as: t.as,
			"as-child": t.asChild,
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= H(" Prev page ")])]),
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
}), [Gf, Kf] = /* @__PURE__ */ q("RovingFocusGroup"), qf = /* @__PURE__ */ W({
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
		let r = e, i = n, { loop: a, orientation: s, dir: c } = Ce(r), l = ls(c), d = zn(r, "currentTabStopId", i, {
			defaultValue: r.defaultCurrentTabStopId,
			passive: r.currentTabStopId === void 0
		}), f = k(!1), p = k(!1), m = k(0), { getItems: h, CollectionSlot: g } = xl({ isProvider: !0 });
		function _(e) {
			let t = !p.value;
			if (e.currentTarget && e.target === e.currentTarget && t && !f.value) {
				let t = new CustomEvent(Dl, Ol);
				if (e.currentTarget.dispatchEvent(t), i("entryFocus", t), !t.defaultPrevented) {
					let e = h().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
					Ml([
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
		return t({ getItems: h }), Kf({
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
		}), (e, t) => (o(), F(B(g), null, {
			default: u(() => [G(B(X), {
				tabindex: f.value || m.value === 0 ? -1 : 0,
				"data-orientation": B(s),
				as: e.as,
				"as-child": e.asChild,
				dir: B(l),
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
}), Jf = /* @__PURE__ */ W({
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
		let n = e, r = Gf(), i = Fs(), a = z(() => n.tabStopId || i), s = z(() => r.currentTabStopId.value === a.value), { getItems: c, CollectionItem: l } = xl();
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
			let i = jl(e, r.orientation.value, r.dir.value);
			if (i !== void 0) {
				if (e.metaKey || e.ctrlKey || e.altKey || !n.allowShiftKey && e.shiftKey) return;
				e.preventDefault();
				let a = [...c().map((e) => e.ref).filter((e) => e.dataset.disabled !== "")];
				if (i === "last") a.reverse();
				else if (i === "prev" || i === "next") {
					i === "prev" && a.reverse();
					let t = a.indexOf(e.currentTarget);
					a = r.loop.value ? Nl(a, t + 1) : a.slice(t + 1);
				}
				t(() => Ml(a));
			}
		}
		return (e, t) => (o(), F(B(l), null, {
			default: u(() => [G(B(X), {
				tabindex: s.value ? 0 : -1,
				"data-orientation": B(r).orientation.value,
				"data-active": e.active ? "" : void 0,
				"data-disabled": e.focusable ? void 0 : "",
				as: e.as,
				"as-child": e.asChild,
				onMousedown: t[0] ||= (t) => {
					e.focusable ? B(r).onItemFocus(a.value) : t.preventDefault();
				},
				onFocus: t[1] ||= (e) => B(r).onItemFocus(a.value),
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
}), [Yf, Xf] = /* @__PURE__ */ q("CheckboxGroupRoot");
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/utils.js
function Zf(e) {
	return e === "indeterminate";
}
function Qf(e) {
	return Zf(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region node_modules/reka-ui/dist/Checkbox/CheckboxRoot.js
var [$f, ep] = /* @__PURE__ */ q("CheckboxRoot"), tp = /* @__PURE__ */ W({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = J(), s = Yf(null), c = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), l = z(() => s?.disabled.value || n.disabled), d = z(() => gr(c.value, n.trueValue)), f = z(() => Tr(s?.modelValue.value) ? c.value === "indeterminate" ? "indeterminate" : d.value : Er(s.modelValue.value, n.value));
		function p() {
			if (Tr(s?.modelValue.value)) c.value === "indeterminate" ? c.value = n.trueValue : c.value = d.value ? n.falseValue : n.trueValue;
			else {
				let e = [...s.modelValue.value || []];
				if (Er(e, n.value)) {
					let t = e.findIndex((e) => gr(e, n.value));
					e.splice(t, 1);
				} else e.push(n.value);
				s.modelValue.value = e;
			}
		}
		let m = hs(a), h = z(() => n.id && a.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return ep({
			disabled: l,
			state: f
		}), (e, t) => (o(), F(Ee(B(s)?.rovingFocus.value ? B(Jf) : B(X)), L(e.$attrs, {
			id: e.id,
			ref: B(i),
			role: "checkbox",
			"as-child": e.asChild,
			as: e.as,
			type: e.as === "button" ? "button" : void 0,
			"aria-checked": B(Zf)(f.value) ? "mixed" : f.value,
			"aria-required": e.required,
			"aria-label": e.$attrs["aria-label"] || h.value,
			"data-state": B(Qf)(f.value),
			"data-disabled": l.value ? "" : void 0,
			disabled: l.value,
			focusable: B(s)?.rovingFocus.value ? !l.value : void 0,
			onKeydown: ye(A(() => {}, ["prevent"]), ["enter"]),
			onClick: p
		}), {
			default: u(() => [v(e.$slots, "default", {
				modelValue: B(c),
				state: f.value
			}), B(m) && e.name && !B(s) ? (o(), F(B(wl), {
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
			])) : N("v-if", !0)]),
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
}), np = /* @__PURE__ */ W({
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
		let { forwardRef: t } = J(), n = $f();
		return (e, r) => (o(), F(B(Gs), { present: e.forceMount || B(Zf)(B(n).state.value) || B(n).state.value === !0 }, {
			default: u(() => [G(B(X), L({
				ref: B(t),
				"data-state": B(Qf)(B(n).state.value),
				"data-disabled": B(n).disabled.value ? "" : void 0,
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
function rp(e = [], t, n) {
	let r = [...e];
	return r[n] = t, r.sort((e, t) => e - t);
}
function ip(e, t, n) {
	return br(100 / (n - t) * (e - t), 0, 100);
}
function ap(e, t) {
	if (t > 2) return `Value ${e + 1} of ${t}`;
	if (t === 2) return ["Minimum", "Maximum"][e];
}
function op(e, t) {
	if (e.length === 1) return 0;
	let n = e.map((e) => Math.abs(e - t)), r = Math.min(...n);
	return n.indexOf(r);
}
function sp(e, t, n) {
	let r = e / 2;
	return (r - up([0, 50], [0, r])(t) * n) * n;
}
function cp(e) {
	return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function lp(e, t) {
	if (t > 0) {
		let n = cp(e);
		return Math.min(...n) >= t;
	}
	return !0;
}
function up(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function dp(e) {
	return (String(e).split(".")[1] || "").length;
}
function fp(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
var pp = ["PageUp", "PageDown"], mp = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], hp = {
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
}, [gp, _p] = /* @__PURE__ */ q(["SliderVertical", "SliderHorizontal"]), vp = /* @__PURE__ */ W({
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
		let n = e, r = t, { max: i, min: a, dir: s, inverted: c } = Ce(n), { forwardRef: l, currentElement: d } = J(), f = bp(), p = k(), m = k(), h = z(() => s?.value !== "rtl" && !c.value || s?.value !== "ltr" && c.value);
		function g(e, t) {
			let n = m.value || d.value.getBoundingClientRect(), r = [...f.thumbElements.value][f.valueIndexToChangeRef.value], o = f.thumbAlignment.value === "contain" ? r.clientWidth : 0;
			!p.value && !t && f.thumbAlignment.value === "contain" && (p.value = e.clientX - r.getBoundingClientRect().left);
			let s = up([0, n.width - o], h.value ? [a.value, i.value] : [i.value, a.value]);
			return m.value = n, s(t ? e.clientX - n.left - o / 2 : e.clientX - n.left - (p.value ?? 0));
		}
		return _p({
			startEdge: z(() => h.value ? "left" : "right"),
			endEdge: z(() => h.value ? "right" : "left"),
			direction: z(() => h.value ? 1 : -1),
			size: "width"
		}), (e, t) => (o(), F(Cp, {
			ref: B(l),
			dir: B(s),
			"data-orientation": "horizontal",
			style: O({ "--reka-slider-thumb-transform": !h.value && B(f).thumbAlignment.value === "overflow" ? "translateX(50%)" : "translateX(-50%)" }),
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
				r("stepKeyDown", e, B(hp)[t].includes(e.key) ? -1 : 1);
			},
			onEndKeyDown: t[4] ||= (e) => r("endKeyDown", e),
			onHomeKeyDown: t[5] ||= (e) => r("homeKeyDown", e)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["dir", "style"]));
	}
}), yp = /* @__PURE__ */ W({
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
		let n = e, r = t, { max: i, min: a, inverted: s } = Ce(n), c = bp(), { forwardRef: l, currentElement: d } = J(), f = k(), p = k(), m = z(() => !s.value);
		function h(e, t) {
			let n = p.value || d.value.getBoundingClientRect(), r = [...c.thumbElements.value][c.valueIndexToChangeRef.value], o = c.thumbAlignment.value === "contain" ? r.clientHeight : 0;
			!f.value && !t && c.thumbAlignment.value === "contain" && (f.value = e.clientY - r.getBoundingClientRect().top);
			let s = up([0, n.height - o], m.value ? [i.value, a.value] : [a.value, i.value]), l = t ? e.clientY - n.top - o / 2 : e.clientY - n.top - (f.value ?? 0);
			return p.value = n, s(l);
		}
		return _p({
			startEdge: z(() => m.value ? "bottom" : "top"),
			endEdge: z(() => m.value ? "top" : "bottom"),
			direction: z(() => m.value ? 1 : -1),
			size: "height"
		}), (e, t) => (o(), F(Cp, {
			ref: B(l),
			"data-orientation": "vertical",
			style: O({ "--reka-slider-thumb-transform": !m.value && B(c).thumbAlignment.value === "overflow" ? "translateY(-50%)" : "translateY(50%)" }),
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
				r("stepKeyDown", e, B(hp)[t].includes(e.key) ? -1 : 1);
			},
			onEndKeyDown: t[4] ||= (e) => r("endKeyDown", e),
			onHomeKeyDown: t[5] ||= (e) => r("homeKeyDown", e)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), [bp, xp] = /* @__PURE__ */ q("SliderRoot"), Sp = /* @__PURE__ */ W({
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
		let n = e, r = t, { min: i, max: a, step: s, minStepsBetweenThumbs: c, orientation: l, disabled: d, thumbAlignment: f, dir: p } = Ce(n), m = ls(p), { forwardRef: h, currentElement: g } = J(), _ = hs(g), { CollectionSlot: y } = xl({ isProvider: !0 }), b = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), x = z(() => Array.isArray(b.value) ? [...b.value] : []), S = k(0), C = k(x.value);
		function w(e) {
			D(e, op(x.value, e));
		}
		function T(e) {
			D(e, S.value);
		}
		function E() {
			let e = C.value[S.value];
			x.value[S.value] !== e && r("valueCommit", ne(x.value));
		}
		function D(e, t, { commit: n } = { commit: !1 }) {
			let o = dp(s.value), l = br(fp(Math.round((e - i.value) / s.value) * s.value + i.value, o), i.value, a.value), u = rp(x.value, l, t);
			if (lp(u, c.value * s.value)) {
				S.value = u.indexOf(l);
				let e = String(u) !== String(b.value);
				e && n && r("valueCommit", u), e && (O.value[S.value]?.focus(), b.value = u);
			}
		}
		let O = k([]);
		return xp({
			modelValue: b,
			currentModelValue: x,
			valueIndexToChangeRef: S,
			thumbElements: O,
			orientation: l,
			min: i,
			max: a,
			disabled: d,
			thumbAlignment: f
		}), (e, t) => (o(), F(B(y), null, {
			default: u(() => [(o(), F(Ee(B(l) === "horizontal" ? vp : yp), L(e.$attrs, {
				ref: B(h),
				"as-child": e.asChild,
				as: e.as,
				min: B(i),
				max: B(a),
				dir: B(m),
				inverted: e.inverted,
				"aria-disabled": B(d),
				"data-disabled": B(d) ? "" : void 0,
				onPointerdown: t[0] ||= () => {
					B(d) || (C.value = x.value);
				},
				onSlideStart: t[1] ||= (e) => !B(d) && w(e),
				onSlideMove: t[2] ||= (e) => !B(d) && T(e),
				onSlideEnd: t[3] ||= (e) => !B(d) && E(),
				onHomeKeyDown: t[4] ||= (e) => !B(d) && D(B(i), 0, { commit: !0 }),
				onEndKeyDown: t[5] ||= (e) => !B(d) && D(B(a), x.value.length - 1, { commit: !0 }),
				onStepKeyDown: t[6] ||= (e, t) => {
					if (!B(d)) {
						let n = B(pp).includes(e.key) || e.shiftKey && B(mp).includes(e.key) ? 10 : 1, r = S.value, i = x.value[r];
						D(i + B(s) * n * t, r, { commit: !0 });
					}
				}
			}), {
				default: u(() => [v(e.$slots, "default", { modelValue: B(b) }), B(_) && e.name ? (o(), F(B(wl), {
					key: 0,
					type: "number",
					value: B(b),
					name: e.name,
					required: e.required,
					disabled: B(d),
					step: B(s)
				}, null, 8, [
					"value",
					"name",
					"required",
					"disabled",
					"step"
				])) : N("v-if", !0)]),
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
}), Cp = /* @__PURE__ */ W({
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
		let n = e, r = t, i = bp();
		return (e, t) => (o(), F(B(X), L({ "data-slider-impl": "" }, n, {
			onKeydown: t[0] ||= (e) => {
				e.key === "Home" ? (r("homeKeyDown", e), e.preventDefault()) : e.key === "End" ? (r("endKeyDown", e), e.preventDefault()) : B(pp).concat(B(mp)).includes(e.key) && (r("stepKeyDown", e), e.preventDefault());
			},
			onPointerdown: t[1] ||= (e) => {
				let t = e.target;
				t.setPointerCapture(e.pointerId), e.preventDefault(), B(i).thumbElements.value.includes(t) ? t.focus() : r("slideStart", e);
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
}), wp = /* @__PURE__ */ W({
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
		let t = bp(), n = gp();
		J();
		let r = z(() => t.currentModelValue.value.map((e) => ip(e, t.min.value, t.max.value))), i = z(() => t.currentModelValue.value.length > 1 ? Math.min(...r.value) : 0), a = z(() => 100 - Math.max(...r.value, 0));
		return (e, r) => (o(), F(B(X), {
			"data-disabled": B(t).disabled.value ? "" : void 0,
			"data-orientation": B(t).orientation.value,
			"as-child": e.asChild,
			as: e.as,
			style: O({
				[B(n).startEdge.value]: `${i.value}%`,
				[B(n).endEdge.value]: `${a.value}%`
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
}), Tp = /* @__PURE__ */ W({
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
		let t = e, n = bp(), r = gp(), { forwardRef: i, currentElement: a } = J(), { CollectionItem: s } = xl(), c = z(() => n.modelValue?.value?.[t.index]), l = z(() => c.value === void 0 ? 0 : ip(c.value, n.min.value ?? 0, n.max.value ?? 100)), d = z(() => ap(t.index, n.modelValue?.value?.length ?? 0)), f = Rs(a), h = z(() => f[r.size].value), g = z(() => n.thumbAlignment.value === "overflow" || !h.value ? 0 : sp(h.value, l.value, r.direction.value)), _ = Sn();
		return p(() => {
			n.thumbElements.value.push(a.value);
		}), m(() => {
			let e = n.thumbElements.value.findIndex((e) => e === a.value) ?? -1;
			n.thumbElements.value.splice(e, 1);
		}), (e, t) => (o(), F(B(s), null, {
			default: u(() => [G(B(X), L(e.$attrs, {
				ref: B(i),
				role: "slider",
				tabindex: B(n).disabled.value ? void 0 : 0,
				"aria-label": e.$attrs["aria-label"] || d.value,
				"data-disabled": B(n).disabled.value ? "" : void 0,
				"data-orientation": B(n).orientation.value,
				"aria-valuenow": c.value,
				"aria-valuemin": B(n).min.value,
				"aria-valuemax": B(n).max.value,
				"aria-orientation": B(n).orientation.value,
				"as-child": e.asChild,
				as: e.as,
				style: {
					transform: "var(--reka-slider-thumb-transform)",
					position: "absolute",
					[B(r).startEdge.value]: `calc(${l.value}% + ${g.value}px)`,
					display: !B(_) && c.value === void 0 ? "none" : void 0
				},
				onFocus: t[0] ||= () => {
					B(n).valueIndexToChangeRef.value = e.index;
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
}), Ep = /* @__PURE__ */ W({
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
		let t = e, { getItems: n } = xl(), { forwardRef: r, currentElement: i } = J(), a = z(() => i.value ? n(!0).findIndex((e) => e.ref === i.value) : -1);
		return (e, n) => (o(), F(Tp, L({ ref: B(r) }, t, { index: a.value }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["index"]));
	}
}), Dp = /* @__PURE__ */ W({
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
		let t = bp();
		return J(), (e, n) => (o(), F(B(X), {
			"as-child": e.asChild,
			as: e.as,
			"data-disabled": B(t).disabled.value ? "" : void 0,
			"data-orientation": B(t).orientation.value
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
}), Op = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Xl), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/shared/useIsUsingKeyboard.js
function kp() {
	let e = k(!1);
	return p(() => {
		xn("keydown", () => {
			e.value = !0;
		}, {
			capture: !0,
			passive: !0
		}), xn(["pointerdown", "pointermove"], () => {
			e.value = !1;
		}, {
			capture: !0,
			passive: !0
		});
	}), e;
}
var Ap = nn(kp), [jp, Mp] = /* @__PURE__ */ q(["MenuRoot", "MenuSub"], "MenuContext"), [Np, Pp] = /* @__PURE__ */ q("MenuRoot"), Fp = /* @__PURE__ */ W({
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
		let n = e, r = t, { modal: i, dir: a } = Ce(n), s = ls(a), c = zn(n, "open", r), l = k(), d = Ap();
		return Mp({
			open: c,
			onOpenChange: (e) => {
				c.value = e;
			},
			content: l,
			onContentChange: (e) => {
				l.value = e;
			}
		}), Pp({
			onClose: () => {
				c.value = !1;
			},
			isUsingKeyboardRef: d,
			dir: s,
			modal: i
		}), (e, t) => (o(), F(B(Yl), null, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}));
	}
}), [Ip, Lp] = /* @__PURE__ */ q("MenuContent"), Rp = /* @__PURE__ */ W({
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
	}, { ...lf }),
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
		let n = e, r = t, i = jp(), a = Np(), { trapFocus: s, disableOutsidePointerEvents: c, loop: l } = Ce(n);
		ps(), Rr(c.value);
		let d = k(""), f = k(0), p = k(0), h = k(null), g = k("right"), _ = k(0), y = k(null), b = k(), { forwardRef: x, currentElement: S } = J(), { handleTypeaheadSearch: w } = Bs(), T = k();
		function E(e) {
			let t = kr(e, T.value || Cr(), S.value, {
				loop: l.value,
				arrowKeyOptions: "vertical",
				dir: a?.dir.value,
				focus: !1,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			t && (T.value = t, t.scrollIntoView({ block: "nearest" }));
		}
		function D() {
			T.value && T.value.click();
		}
		let O = k(), ee = k();
		C(T, (e) => {
			ee.value && (e === void 0 || e !== ee.value.trigger.value) && (ee.value.onOpenChange(!1), ee.value = void 0);
		}), C(S, (e) => {
			i.onContentChange(e);
		}), m(() => {
			window.clearTimeout(f.value);
		});
		function te(e) {
			return g.value === h.value?.side && Zc(e, h.value?.area);
		}
		async function A(e) {
			r("openAutoFocus", e), !e.defaultPrevented && (e.preventDefault(), S.value?.focus({ preventScroll: !0 }));
		}
		function ne(e) {
			if (e.defaultPrevented) return;
			let t = e.target, n = t.closest("[data-reka-menu-content]") === e.currentTarget, r = ["input", "textarea"].includes(t.tagName.toLowerCase()), i = e.ctrlKey || e.altKey || e.metaKey, o = e.key.length === 1, s = kr(e, Cr(), S.value, {
				loop: l.value,
				arrowKeyOptions: "vertical",
				dir: a?.dir.value,
				focus: !0,
				attributeName: "[data-reka-collection-item]:not([data-disabled])"
			});
			if (s) return s?.focus();
			if (e.code === "Space") return;
			let c = b.value?.getItems() ?? [];
			if (n && (e.key === "Tab" && e.preventDefault(), !i && o && !r && w(e.key, c)), e.target !== S.value || !Uc.includes(e.key)) return;
			e.preventDefault();
			let u = [...c.map((e) => e.ref)];
			Hc.includes(e.key) && u.reverse(), Yc(u);
		}
		function re(e) {
			e?.currentTarget?.contains?.(e.target) || (window.clearTimeout(f.value), d.value = "");
		}
		function j(e) {
			if (!Qc(e)) return;
			let t = e.target, n = _.value !== e.clientX;
			(e?.currentTarget)?.contains(t) && n && (g.value = e.clientX > _.value ? "right" : "left", _.value = e.clientX);
		}
		function M(e) {
			Qc(e) && O.value && O.value.focus();
		}
		return Lp({
			onItemEnter: (e) => !!te(e),
			onItemLeave: (e) => te(e) ? !0 : (["INPUT", "TEXTAREA"].includes(Cr()?.tagName || "") || S.value?.focus(), y.value = null, !1),
			onTriggerLeave: (e) => !!te(e),
			searchRef: d,
			highlightedElement: T,
			onKeydownNavigation: E,
			onKeydownEnter: D,
			filterElement: O,
			onFilterElementChange: (e) => {
				O.value = e;
			},
			activeSubmenuContext: ee,
			pointerGraceTimerRef: p,
			onPointerGraceIntentChange: (e) => {
				h.value = e;
			}
		}), (e, t) => (o(), F(B(Rc), {
			"as-child": "",
			trapped: B(s),
			onMountAutoFocus: A,
			onUnmountAutoFocus: t[7] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: u(() => [G(B(wc), {
				"as-child": "",
				"disable-outside-pointer-events": B(c),
				onEscapeKeyDown: t[2] ||= (e) => r("escapeKeyDown", e),
				onPointerDownOutside: t[3] ||= (e) => r("pointerDownOutside", e),
				onFocusOutside: t[4] ||= (e) => r("focusOutside", e),
				onInteractOutside: t[5] ||= (e) => r("interactOutside", e),
				onDismiss: t[6] ||= (e) => r("dismiss")
			}, {
				default: u(() => [G(B(qf), {
					ref_key: "rovingFocusGroupRef",
					ref: b,
					"current-tab-stop-id": y.value,
					"onUpdate:currentTabStopId": t[0] ||= (e) => y.value = e,
					"as-child": "",
					orientation: "vertical",
					dir: B(a).dir.value,
					loop: B(l),
					onEntryFocus: t[1] ||= (e) => {
						r("entryFocus", e), B(a).isUsingKeyboardRef.value || e.preventDefault();
					}
				}, {
					default: u(() => [G(B(ff), {
						ref: B(x),
						role: "menu",
						as: e.as,
						"as-child": e.asChild,
						"aria-orientation": "vertical",
						"data-reka-menu-content": "",
						"data-state": B(Kc)(B(i).open.value),
						dir: B(a).dir.value,
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
						onKeydown: ne,
						onBlur: re,
						onPointermove: j,
						onPointerenter: M
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
}), zp = /* @__PURE__ */ W({
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
		let n = e, r = Ip(), { forwardRef: i, currentElement: a } = J(), { CollectionItem: s } = xl(), c = k(!1), l = z(() => c.value || r.highlightedElement.value === a.value);
		async function d(e) {
			if (!(e.defaultPrevented || !Qc(e))) {
				if (n.disabled) r.onItemLeave(e);
				else if (!r.onItemEnter(e)) {
					let t = e.currentTarget;
					r.highlightedElement.value = t, ["INPUT", "TEXTAREA"].includes(Cr()?.tagName || "") || t.focus({ preventScroll: !0 });
				}
			}
		}
		async function f(e) {
			await t(), !e.defaultPrevented && Qc(e) && r.highlightedElement.value === a.value && !r.onItemLeave(e) && r.highlightedElement.value === a.value && (r.highlightedElement.value = void 0);
		}
		return (e, n) => (o(), F(B(s), { value: { textValue: e.textValue } }, {
			default: u(() => [G(B(X), L({
				ref: B(i),
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
					await t(), !(n.defaultPrevented || e.disabled) && (c.value = !0, B(r).highlightedElement.value = n.currentTarget);
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
}), Bp = /* @__PURE__ */ W({
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
		let r = e, i = n, { forwardRef: a, currentElement: s } = J(), c = Np(), l = Ip(), d = k(!1);
		async function f() {
			let e = s.value;
			if (!r.disabled && e) {
				let e = new CustomEvent(zc, {
					bubbles: !0,
					cancelable: !0
				});
				i("select", e), await t(), e.defaultPrevented ? d.value = !1 : c.onClose();
			}
		}
		return (e, n) => (o(), F(zp, L(r, {
			ref: B(a),
			onClick: f,
			onPointerdown: n[0] ||= () => {
				d.value = !0;
			},
			onPointerup: n[1] ||= async (e) => {
				await t(), !e.defaultPrevented && (d.value || e.currentTarget?.click());
			},
			onKeydown: n[2] ||= async (t) => {
				let n = B(l).searchRef.value !== "";
				e.disabled || n && t.key === " " || B(Bc).includes(t.key) && (t.currentTarget?.click(), t.preventDefault());
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Vp, Hp] = /* @__PURE__ */ q(["MenuCheckboxItem", "MenuRadioItem"], "MenuItemIndicatorContext"), Up = /* @__PURE__ */ W({
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
		let t = Vp({ modelValue: k(!1) });
		return (e, n) => (o(), F(B(Gs), { present: e.forceMount || B(qc)(B(t).modelValue.value) || B(t).modelValue.value === !0 }, {
			default: u(() => [G(B(X), {
				as: e.as,
				"as-child": e.asChild,
				"data-state": B(Jc)(B(t).modelValue.value)
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
}), Wp = /* @__PURE__ */ W({
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
		let n = e, r = t, i = gs(K(n, ["modelValue"])), a = zn(n, "modelValue", r);
		return Hp({ modelValue: a }), (e, t) => (o(), F(Bp, L({ role: "menuitemcheckbox" }, B(i), {
			"aria-checked": B(qc)(B(a)) ? "mixed" : B(a),
			"data-state": B(Jc)(B(a)),
			onSelect: t[0] ||= async (e) => {
				r("select", e), B(qc)(B(a)) ? a.value = !0 : a.value = !B(a);
			}
		}), {
			default: u(() => [v(e.$slots, "default", { modelValue: B(a) })]),
			_: 3
		}, 16, ["aria-checked", "data-state"]));
	}
}), Gp = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(n, r), a = jp(), { forwardRef: s, currentElement: c } = J();
		return Ns(c), (e, t) => (o(), F(Rp, L(B(i), {
			ref: B(s),
			"trap-focus": B(a).open.value,
			"disable-outside-pointer-events": B(a).open.value,
			"disable-outside-scroll": !0,
			onDismiss: t[0] ||= (e) => B(a).onOpenChange(!1),
			onFocusOutside: t[1] ||= A((e) => r("focusOutside", e), ["prevent"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus", "disable-outside-pointer-events"]));
	}
}), Kp = /* @__PURE__ */ W({
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
		let n = Y(e, t), r = jp();
		return (e, t) => (o(), F(Rp, L(B(n), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			"disable-outside-scroll": !1,
			onDismiss: t[0] ||= (e) => B(r).onOpenChange(!1)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), qp = /* @__PURE__ */ W({
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
		let n = Y(e, t), r = jp(), i = Np();
		return (e, t) => (o(), F(B(Gs), { present: e.forceMount || B(r).open.value }, {
			default: u(() => [B(i).modal.value ? (o(), F(Gp, P(L({ key: 0 }, {
				...e.$attrs,
				...B(n)
			})), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)) : (o(), F(Kp, P(L({ key: 1 }, {
				...e.$attrs,
				...B(n)
			})), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), [Jp, Yp] = /* @__PURE__ */ q("MenuGroup"), Xp = /* @__PURE__ */ W({
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
		let t = e, n = Fs(void 0, "reka-menu-group");
		return Yp({ id: n }), (e, r) => (o(), F(B(X), L({ role: "group" }, t, { "aria-labelledby": B(n) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-labelledby"]));
	}
}), Zp = /* @__PURE__ */ W({
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
		let t = e, n = Jp({ id: "" });
		return (e, r) => (o(), F(B(X), L(t, { id: B(n).id || void 0 }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), Qp = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [$p, em] = /* @__PURE__ */ q("MenuRadioGroup"), tm = /* @__PURE__ */ W({
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
		let n = e, i = t, a = gs(K(n, ["modelValue"])), s = zn(n, "modelValue", i);
		return em({
			modelValue: s,
			onValueChange: (e) => {
				s.value = e;
			}
		}), (e, t) => (o(), F(Xp, P(r(B(a))), {
			default: u(() => [v(e.$slots, "default", { modelValue: B(s) })]),
			_: 3
		}, 16));
	}
}), nm = /* @__PURE__ */ W({
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
		let n = e, r = t, i = gs(K(n, ["value"])), { value: a } = Ce(n), s = $p(), c = z(() => s.modelValue.value === a?.value);
		return Hp({ modelValue: c }), (e, t) => (o(), F(Bp, L({ role: "menuitemradio" }, B(i), {
			"aria-checked": c.value,
			"data-state": B(Jc)(c.value),
			onSelect: t[0] ||= async (e) => {
				r("select", e), B(s).onValueChange(B(a));
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["aria-checked", "data-state"]));
	}
}), rm = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(X), L(t, {
			role: "separator",
			"aria-orientation": "horizontal"
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [im, am] = /* @__PURE__ */ q("MenuSub"), om = /* @__PURE__ */ W({
	__name: "MenuSub",
	props: { open: {
		type: Boolean,
		required: !1,
		default: void 0
	} },
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = e, r = zn(n, "open", t, {
			defaultValue: !1,
			passive: n.open === void 0
		}), i = jp(), a = k(), c = k();
		return s((e) => {
			i?.open.value === !1 && (r.value = !1), e(() => r.value = !1);
		}), Mp({
			open: r,
			onOpenChange: (e) => {
				r.value = e;
			},
			content: c,
			onContentChange: (e) => {
				c.value = e;
			}
		}), am({
			triggerId: "",
			contentId: "",
			trigger: a,
			onTriggerChange: (e) => {
				a.value = e;
			}
		}), (e, t) => (o(), F(B(Yl), null, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}));
	}
}), sm = /* @__PURE__ */ W({
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
		let n = Y(e, t), r = jp(), i = Np(), a = im(), s = Ip(), { forwardRef: c, currentElement: l } = J();
		return a.contentId ||= Fs(void 0, "reka-menu-sub-content"), (e, t) => (o(), F(B(Gs), { present: e.forceMount || B(r).open.value }, {
			default: u(() => [G(Rp, L(B(n), {
				id: B(a).contentId,
				ref: B(c),
				"aria-labelledby": B(a).triggerId,
				align: "start",
				side: B(i).dir.value === "rtl" ? "left" : "right",
				"disable-outside-pointer-events": !1,
				"disable-outside-scroll": !1,
				"trap-focus": !1,
				onOpenAutoFocus: t[0] ||= A((e) => {
					B(i).isUsingKeyboardRef.value && B(l)?.focus();
				}, ["prevent"]),
				onCloseAutoFocus: t[1] ||= A(() => {}, ["prevent"]),
				onFocusOutside: t[2] ||= (e) => {
					if (e.defaultPrevented) return;
					let t = B(s).filterElement.value?.contains(e.target);
					e.target !== B(a).trigger.value && !t && B(r).onOpenChange(!1);
				},
				onEscapeKeyDown: t[3] ||= (e) => {
					B(i).onClose(), e.preventDefault();
				},
				onKeydown: t[4] ||= (e) => {
					let t = e.currentTarget?.contains(e.target), n = B(Gc)[B(i).dir.value].includes(e.key);
					t && n && (B(r).onOpenChange(!1), B(s).filterElement.value ? (B(s).filterElement.value.focus(), B(s).highlightedElement.value = B(a).trigger.value, B(a).trigger.value?.scrollIntoView({ block: "nearest" })) : B(a).trigger.value?.focus(), e.preventDefault());
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
}), cm = /* @__PURE__ */ W({
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
		let n = e, r = jp(), i = Np(), a = im(), s = Ip();
		C(r.open, (e) => {
			e ? s.activeSubmenuContext.value = {
				onOpenChange: r.onOpenChange,
				trigger: a.trigger
			} : s.activeSubmenuContext.value?.trigger.value === a.trigger.value && (s.activeSubmenuContext.value = void 0);
		});
		let c = k(null);
		a.triggerId ||= Fs(void 0, "reka-menu-sub-trigger");
		function l() {
			c.value && window.clearTimeout(c.value), c.value = null;
		}
		m(() => {
			l();
		});
		function d(e) {
			Qc(e) && (s.onItemEnter(e) || !n.disabled && !r.open.value && !c.value && (s.onPointerGraceIntentChange(null), c.value = window.setTimeout(() => {
				r.onOpenChange(!0), l();
			}, 100)));
		}
		async function f(e) {
			if (!Qc(e)) return;
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
			n.disabled || a && e.key === " " || Wc[i.dir.value].includes(e.key) && (r.onOpenChange(!0), await t(), r.content.value?.focus(), e.preventDefault());
		}
		return (e, t) => (o(), F(Op, { "as-child": "" }, {
			default: u(() => [G(zp, L(n, {
				id: B(a).triggerId,
				ref: (e) => {
					e && B(a)?.onTriggerChange(e?.$el);
				},
				"aria-haspopup": "menu",
				"aria-expanded": B(r).open.value,
				"aria-controls": B(a).contentId,
				"data-state": B(Kc)(B(r).open.value),
				onClick: t[0] ||= async (e) => {
					n.disabled || e.defaultPrevented || (e.currentTarget?.focus(), B(r).open.value || B(r).onOpenChange(!0));
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
}), lm = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(Wp), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [um, dm] = /* @__PURE__ */ q("ContextMenuRoot"), fm = /* @__PURE__ */ W({
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
		let n = e, r = t, { dir: i, modal: a, pressOpenDelay: s } = Ce(n);
		J();
		let c = ls(i), l = k(!1);
		return dm({
			open: l,
			onOpenChange: (e) => {
				l.value = e;
			},
			dir: c,
			modal: a,
			triggerElement: k(),
			pressOpenDelay: s
		}), C(l, (e) => {
			r("update:open", e);
		}), (e, t) => (o(), F(B(Fp), {
			open: l.value,
			"onUpdate:open": t[0] ||= (e) => l.value = e,
			dir: B(c),
			modal: B(a)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), pm = /* @__PURE__ */ W({
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
		J();
		let r = um(), i = k(!1);
		return (e, t) => (o(), F(B(qp), L(B(n), {
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
				e.detail.originalEvent.button === 2 && e.target === B(r).triggerElement.value && e.preventDefault(), !e.defaultPrevented && !B(r).modal.value && (i.value = !0);
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), mm = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(Bp), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), hm = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(Up), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gm = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(Zp), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _m = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Qp), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vm = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(tm), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ym = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(nm), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), bm = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(rm), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), xm = /* @__PURE__ */ W({
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
		J();
		let i = zn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		return (e, t) => (o(), F(B(om), {
			open: B(i),
			"onUpdate:open": t[0] ||= (e) => M(i) ? i.value = e : null
		}, {
			default: u(() => [v(e.$slots, "default", { open: B(i) })]),
			_: 3
		}, 8, ["open"]));
	}
}), Sm = /* @__PURE__ */ W({
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
		return J(), (e, t) => (o(), F(B(sm), L(B(n), { style: {
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
}), Cm = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(cm), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/ContextMenu/utils.js
function wm(e) {
	return e.pointerType !== "mouse";
}
//#endregion
//#region node_modules/reka-ui/dist/ContextMenu/ContextMenuTrigger.js
var Tm = /* @__PURE__ */ W({
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
		let { disabled: n } = Ce(e), { forwardRef: r, currentElement: i } = J(), a = um(), s = k({
			x: 0,
			y: 0
		}), c = z(() => ({ getBoundingClientRect: () => ({
			width: 0,
			height: 0,
			left: s.value.x,
			right: s.value.x,
			top: s.value.y,
			bottom: s.value.y,
			...s.value
		}) })), l = k(0);
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
			n.value || (await t(), wm(e) && !e.defaultPrevented && (d(), l.value = window.setTimeout(f, a.pressOpenDelay.value, e)));
		}
		async function g(e) {
			n.value || (await t(), wm(e) && !e.defaultPrevented && d());
		}
		return p(() => {
			i.value && (a.triggerElement.value = i.value);
		}), (e, t) => (o(), D(V, null, [G(B(Op), {
			as: "template",
			reference: c.value
		}, null, 8, ["reference"]), G(B(X), L({
			ref: B(r),
			as: e.as,
			"as-child": e.asChild,
			"data-state": B(a).open.value ? "open" : "closed",
			"data-disabled": B(n) ? "" : void 0,
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
}), [Em, Dm] = /* @__PURE__ */ q("PopoverRoot"), Om = /* @__PURE__ */ W({
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
		let n = e, r = t, { modal: i } = Ce(n), a = zn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		return Dm({
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
			triggerElement: k(),
			hasCustomAnchor: k(!1)
		}), (e, t) => (o(), F(B(Yl), null, {
			default: u(() => [v(e.$slots, "default", {
				open: B(a),
				close: () => a.value = !1
			})]),
			_: 3
		}));
	}
}), km = /* @__PURE__ */ W({
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
		let n = e, r = t, i = gs(K(n, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: a } = J(), s = Em();
		return ps(), (e, t) => (o(), F(B(Rc), {
			"as-child": "",
			loop: "",
			trapped: e.trapFocus,
			onMountAutoFocus: t[5] ||= (e) => r("openAutoFocus", e),
			onUnmountAutoFocus: t[6] ||= (e) => r("closeAutoFocus", e)
		}, {
			default: u(() => [G(B(wc), {
				"as-child": "",
				"disable-outside-pointer-events": e.disableOutsidePointerEvents,
				onPointerDownOutside: t[0] ||= (e) => r("pointerDownOutside", e),
				onInteractOutside: t[1] ||= (e) => r("interactOutside", e),
				onEscapeKeyDown: t[2] ||= (e) => r("escapeKeyDown", e),
				onFocusOutside: t[3] ||= (e) => r("focusOutside", e),
				onDismiss: t[4] ||= (e) => B(s).onOpenChange(!1)
			}, {
				default: u(() => [G(B(ff), L(B(i), {
					id: B(s).contentId,
					ref: B(a),
					"data-state": B(s).open.value ? "open" : "closed",
					"aria-labelledby": B(s).triggerId,
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
}), Am = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Em(), a = k(!1);
		Rr(!0);
		let s = Y(n, r), { forwardRef: c, currentElement: l } = J();
		return Ns(l), (e, t) => (o(), F(km, L(B(s), {
			ref: B(c),
			"trap-focus": B(i).open.value,
			"disable-outside-pointer-events": "",
			onCloseAutoFocus: t[0] ||= A((e) => {
				r("closeAutoFocus", e), a.value || B(i).triggerElement.value?.focus();
			}, ["prevent"]),
			onPointerDownOutside: t[1] ||= (e) => {
				r("pointerDownOutside", e);
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				a.value = t.button === 2 || n;
			},
			onFocusOutside: t[2] ||= A(() => {}, ["prevent"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["trap-focus"]));
	}
}), jm = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Em(), a = k(!1), s = k(!1), c = Y(n, r);
		return (e, t) => (o(), F(km, L(B(c), {
			"trap-focus": !1,
			"disable-outside-pointer-events": !1,
			onCloseAutoFocus: t[0] ||= (e) => {
				r("closeAutoFocus", e), e.defaultPrevented || (a.value || B(i).triggerElement.value?.focus(), e.preventDefault()), a.value = !1, s.value = !1;
			},
			onInteractOutside: t[1] ||= async (e) => {
				r("interactOutside", e), e.defaultPrevented || (a.value = !0, e.detail.originalEvent.type === "pointerdown" && (s.value = !0));
				let t = e.target;
				B(i).triggerElement.value?.contains(t) && e.preventDefault(), e.detail.originalEvent.type === "focusin" && s.value && e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Mm = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Em(), a = Y(n, r), { forwardRef: s } = J();
		return i.contentId ||= Fs(void 0, "reka-popover-content"), (e, t) => (o(), F(B(Gs), { present: e.forceMount || B(i).open.value }, {
			default: u(() => [B(i).modal.value ? (o(), F(Am, L({ key: 0 }, B(a), { ref: B(s) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)) : (o(), F(jm, L({ key: 1 }, B(a), { ref: B(s) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), Nm = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Pm = /* @__PURE__ */ W({
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
		let t = e, n = Em(), { forwardRef: r, currentElement: i } = J();
		return n.triggerId ||= Fs(void 0, "reka-popover-trigger"), p(() => {
			n.triggerElement.value = i.value;
		}), (e, i) => (o(), F(Ee(B(n).hasCustomAnchor.value ? B(X) : B(Xl)), { "as-child": "" }, {
			default: u(() => [G(B(X), {
				id: B(n).triggerId,
				ref: B(r),
				type: e.as === "button" ? "button" : void 0,
				"aria-haspopup": "dialog",
				"aria-expanded": B(n).open.value,
				"aria-controls": B(n).contentId,
				"data-state": B(n).open.value ? "open" : "closed",
				as: e.as,
				"as-child": t.asChild,
				onClick: B(n).onOpenToggle
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
});
//#endregion
//#region node_modules/reka-ui/dist/RangeCalendar/useRangeCalendar.js
function Fm(e) {
	let t = z(() => e.start.value ? !!e.isDateDisabled(e.start.value) : !1), n = z(() => e.end.value ? !!e.isDateDisabled(e.end.value) : !1), r = z(() => !!(t.value || n.value || e.start.value && e.end.value && Wo(e.end.value, e.start.value))), i = (t) => e.start.value ? Xr(e.start.value, t) : !1, a = (t) => e.end.value ? Xr(e.end.value, t) : !1, o = (t) => e.start.value && Xr(e.start.value, t) || e.end.value && Xr(e.end.value, t) ? !0 : e.end.value && e.start.value ? Yo(t, e.start.value, e.end.value) : !1, s = (t) => {
		if (e.isDateDisabled(t)) return !0;
		if (e.maximumDays?.value) {
			if (e.start.value && e.end.value) {
				if (e.fixedDate.value) {
					let n = ns(e.start.value, e.end.value).length;
					if (n <= e.maximumDays.value) {
						let r = e.maximumDays.value - n - 1;
						return !Yo(t, e.start.value.subtract({ days: r }), e.end.value.add({ days: r }));
					}
				}
				return !1;
			}
			if (e.start.value) {
				let n = e.start.value.add({ days: e.maximumDays.value });
				return !Yo(t, e.start.value.subtract({ days: e.maximumDays.value }), n);
			}
		}
		return !1;
	}, c = (t) => !!e.isDateHighlightable?.(t), l = z(() => {
		if (e.start.value && e.end.value && !e.fixedDate.value || !e.start.value || !e.focusedValue.value) return null;
		let t = Wo(e.start.value, e.focusedValue.value), n = t ? e.start.value : e.focusedValue.value, r = t ? e.focusedValue.value : e.start.value;
		if (Xr(n, r)) return {
			start: n,
			end: r
		};
		if (e.maximumDays?.value && !e.end.value) {
			let t = e.maximumDays.value, n = e.start.value, r = e.focusedValue.value;
			return Wo(r, n) ? {
				start: n.subtract({ days: t - 1 }),
				end: n
			} : {
				start: n,
				end: n.add({ days: t - 1 })
			};
		}
		return Qo(n, r, e.allowNonContiguousRanges.value ? () => !1 : e.isDateUnavailable, s, e.isDateHighlightable) ? {
			start: n,
			end: r
		} : null;
	}), u = (e) => !l.value || !l.value.start ? !1 : Xr(l.value.start, e), d = (e) => !l.value || !l.value.end ? !1 : Xr(l.value.end, e), f = z(() => !!(e.start.value || e.end.value)), p = z(() => !!(e.start.value && e.isDateDisabled(e.start.value))), m = z(() => !!(e.end.value && e.isDateDisabled(e.end.value)));
	return {
		isInvalid: r,
		isSelected: o,
		isDateHighlightable: c,
		highlightedRange: l,
		isSelectionStart: i,
		isSelectionEnd: a,
		isHighlightedStart: u,
		isHighlightedEnd: d,
		isDateDisabled: s,
		hasSelectedDate: f,
		isSelectedDisabled: z(() => {
			let t = !!e.start.value, n = !!e.end.value;
			return !t && !n ? !1 : t && n ? p.value && m.value : t && p.value || n && m.value;
		}),
		selectedFocusableDate: z(() => {
			if (e.start.value && !p.value) return e.start.value;
			if (e.end.value && !m.value) return e.end.value;
		})
	};
}
//#endregion
//#region node_modules/reka-ui/dist/RangeCalendar/RangeCalendarRoot.js
var Im = { style: {
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
} }, Lm = {
	role: "heading",
	"aria-level": "2"
}, [Rm, zm] = /* @__PURE__ */ q("RangeCalendarRoot"), Bm = /* @__PURE__ */ W({
	__name: "RangeCalendarRoot",
	props: {
		defaultPlaceholder: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: Object,
			required: !1,
			default: () => ({
				start: void 0,
				end: void 0
			})
		},
		modelValue: {
			type: [Object, null],
			required: !1
		},
		placeholder: {
			type: null,
			required: !1,
			default: void 0
		},
		allowNonContiguousRanges: {
			type: Boolean,
			required: !1,
			default: !1
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
		maximumDays: {
			type: Number,
			required: !1,
			default: void 0
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
		isDateHighlightable: {
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
		disableDaysOutsideCurrentView: {
			type: Boolean,
			required: !1,
			default: !1
		},
		fixedDate: {
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
	emits: [
		"update:modelValue",
		"update:validModelValue",
		"update:placeholder",
		"update:startValue"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, { disabled: i, readonly: a, initialFocus: s, pagedNavigation: c, weekdayFormat: l, fixedWeeks: d, numberOfMonths: f, preventDeselect: m, isDateUnavailable: h, isDateHighlightable: g, isDateDisabled: _, calendarLabel: y, maxValue: b, minValue: x, dir: S, locale: w, nextPage: T, prevPage: E, allowNonContiguousRanges: D, disableDaysOutsideCurrentView: O, fixedDate: ee, maximumDays: te } = Ce(n), { primitiveElement: A, currentElement: ne } = Js(), re = ls(S), j = Ls(w), M = z(() => n.weekStartsOn ?? ss(j.value)), ie = k(), ae = k(), N = k(!1), P = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? {
				start: void 0,
				end: void 0
			},
			passive: n.modelValue === void 0
		}), I = (e) => e ?? {
			start: void 0,
			end: void 0
		}, oe = z(() => I(P.value)), se = k(I(P.value));
		C(se, (e) => {
			r("update:validModelValue", e);
		});
		let ce = $o({
			defaultPlaceholder: n.placeholder,
			defaultValue: I(P.value).start,
			locale: n.locale
		}), L = k(I(P.value).start), le = k(I(P.value).end), ue = zn(n, "placeholder", r, {
			defaultValue: n.defaultPlaceholder ?? ce.copy(),
			passive: n.placeholder === void 0
		});
		function de(e) {
			ue.value = e.copy();
		}
		let { fullCalendarLabel: fe, headingValue: pe, isDateDisabled: me, isDateUnavailable: he, isNextButtonDisabled: ge, isPrevButtonDisabled: _e, grid: ve, weekdays: ye, isOutsideVisibleView: be, nextPage: xe, prevPage: Se, formatter: V, isPlaceholderFocusable: H, firstFocusableDate: we } = Of({
			locale: j,
			placeholder: ue,
			weekStartsOn: M,
			fixedWeeks: d,
			numberOfMonths: f,
			minValue: x,
			maxValue: b,
			disabled: i,
			weekdayFormat: l,
			pagedNavigation: c,
			isDateDisabled: _.value,
			isDateUnavailable: h.value,
			calendarLabel: y,
			nextPage: T,
			prevPage: E
		}), { isInvalid: W, isSelected: G, isDateHighlightable: Te, highlightedRange: Ee, isSelectionStart: De, isSelectionEnd: Oe, isHighlightedStart: ke, isHighlightedEnd: Ae, isDateDisabled: je, hasSelectedDate: Me, isSelectedDisabled: Ne, selectedFocusableDate: Pe } = Fm({
			start: L,
			end: le,
			isDateDisabled: me,
			isDateUnavailable: he,
			isDateHighlightable: g.value,
			focusedValue: ae,
			allowNonContiguousRanges: D,
			fixedDate: ee,
			maximumDays: te
		});
		C(P, (e) => {
			let t = I(e);
			!t.start && !L.value || t.start && L.value && Qr(t.start, L.value) || (L.value = t.start?.copy?.()), !t.end && !le.value || t.end && le.value && Qr(t.end, le.value) || (le.value = t.end?.copy?.());
		}), C(L, (e) => {
			e && !Qr(e, ue.value) && de(e), r("update:startValue", e);
		}), C([L, le], ([e, t]) => {
			let n = P.value;
			if (!(n && n.start && n.end && e && t && Qr(n.start, e) && Qr(n.end, t))) if (N.value = !0, t && e) {
				let n = Wo(t, e) ? {
					start: t.copy(),
					end: e.copy()
				} : {
					start: e.copy(),
					end: t.copy()
				};
				P.value = {
					start: n.start,
					end: n.end
				}, N.value = !1, se.value = {
					start: n.start.copy(),
					end: n.end.copy()
				};
			} else P.value = e ? {
				start: e.copy(),
				end: void 0
			} : {
				start: t?.copy(),
				end: void 0
			};
		});
		let Fe = Is();
		return xn(ne, "keydown", (e) => {
			e.key === Fe.ESCAPE && N.value && (L.value = se.value.start?.copy(), le.value = se.value.end?.copy());
		}), zm({
			isDateUnavailable: he,
			isDateHighlightable: Te,
			startValue: L,
			endValue: le,
			formatter: V,
			modelValue: oe,
			placeholder: ue,
			disabled: i,
			initialFocus: s,
			pagedNavigation: c,
			grid: ve,
			weekDays: ye,
			weekStartsOn: M,
			weekdayFormat: l,
			fixedWeeks: d,
			numberOfMonths: f,
			readonly: a,
			preventDeselect: m,
			fullCalendarLabel: fe,
			headingValue: pe,
			isInvalid: W,
			isDateDisabled: je,
			allowNonContiguousRanges: D,
			highlightedRange: Ee,
			focusedValue: ae,
			lastPressedDateValue: ie,
			isSelected: G,
			isSelectionEnd: Oe,
			isSelectionStart: De,
			isNextButtonDisabled: ge,
			isPrevButtonDisabled: _e,
			isOutsideVisibleView: be,
			nextPage: xe,
			prevPage: Se,
			parentElement: ne,
			onPlaceholderChange: de,
			locale: j,
			dir: re,
			isHighlightedStart: ke,
			isHighlightedEnd: Ae,
			disableDaysOutsideCurrentView: O,
			fixedDate: ee,
			maximumDays: te,
			minValue: x,
			maxValue: b,
			isPlaceholderFocusable: H,
			firstFocusableDate: we,
			hasSelectedDate: Me,
			isSelectedDisabled: Ne,
			selectedFocusableDate: Pe
		}), p(() => {
			s.value && ts(ne.value);
		}), (e, t) => (o(), F(B(X), {
			ref_key: "primitiveElement",
			ref: A,
			as: e.as,
			"as-child": e.asChild,
			"aria-label": B(fe),
			"data-readonly": B(a) ? "" : void 0,
			"data-disabled": B(i) ? "" : void 0,
			"data-invalid": B(W) ? "" : void 0,
			dir: B(re)
		}, {
			default: u(() => [R("div", Im, [R("div", Lm, U(B(fe)), 1)]), v(e.$slots, "default", {
				date: B(ue),
				grid: B(ve),
				weekDays: B(ye),
				weekStartsOn: M.value,
				locale: B(j),
				fixedWeeks: B(d),
				modelValue: oe.value
			})]),
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
}), Vm = /* @__PURE__ */ W({
	__name: "RangeCalendarCell",
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
		let t = Rm();
		return (e, n) => (o(), F(B(X), {
			as: e.as,
			"as-child": e.asChild,
			role: "gridcell",
			"aria-selected": B(t).isSelected(e.date) ? !0 : void 0,
			"aria-disabled": B(t).isDateDisabled(e.date) || B(t).isDateUnavailable?.(e.date) || B(t).disableDaysOutsideCurrentView.value,
			"data-disabled": B(t).isDateDisabled(e.date) || B(t).disableDaysOutsideCurrentView.value ? "" : void 0
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
}), Hm = /* @__PURE__ */ W({
	__name: "RangeCalendarCellTrigger",
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
		let n = e, r = Rm(), i = Is(), { primitiveElement: a, currentElement: s } = Js(), c = z(() => r.formatter.custom(zo(n.day), {
			weekday: "long",
			month: "long",
			day: "numeric",
			year: "numeric"
		})), l = z(() => r.isDateUnavailable?.(n.day) ?? !1), d = z(() => r.isSelected(n.day)), f = z(() => r.isSelectionStart(n.day)), p = z(() => r.isSelectionEnd(n.day)), m = z(() => r.isHighlightedStart(n.day)), h = z(() => r.isHighlightedEnd(n.day)), g = z(() => r.highlightedRange.value ? Jo(n.day, r.highlightedRange.value.start, r.highlightedRange.value.end) : !1), _ = z(() => r.allowNonContiguousRanges.value), y = z(() => ti(n.day, di())), b = z(() => !Zr(n.day, n.month)), x = z(() => r.isOutsideVisibleView(n.day)), S = z(() => r.isDateDisabled(n.day) || r.disableDaysOutsideCurrentView.value && b.value), C = z(() => n.day.day.toLocaleString(r.locale.value)), w = z(() => b.value || S.value ? !1 : !r.disabled.value && r.isPlaceholderFocusable.value && Xr(n.day, r.placeholder.value) ? !0 : !r.disabled.value && r.selectedFocusableDate.value && !r.isPlaceholderFocusable.value ? Xr(n.day, r.selectedFocusableDate.value) : !r.disabled.value && (!r.hasSelectedDate.value || r.isSelectedDisabled.value) && !r.isPlaceholderFocusable.value ? r.firstFocusableDate.value && Xr(n.day, r.firstFocusableDate.value) : !1);
		function T(e, t) {
			if (!r.readonly.value && !(r.isDateDisabled(t) || r.isDateUnavailable?.(t))) {
				if (r.startValue.value && r.highlightedRange.value === null) {
					if (Xr(t, r.startValue.value) && !r.preventDeselect.value && !r.endValue.value) {
						r.startValue.value = void 0, r.onPlaceholderChange(t), r.lastPressedDateValue.value = t.copy();
						return;
					} else if (!r.endValue.value) {
						e.preventDefault(), r.lastPressedDateValue.value && Xr(r.lastPressedDateValue.value, t) && (r.startValue.value = t.copy()), r.lastPressedDateValue.value = t.copy();
						return;
					}
				}
				if (r.lastPressedDateValue.value = t.copy(), r.startValue.value && r.endValue.value && Xr(r.startValue.value, r.endValue.value) && Xr(r.startValue.value, t) && !r.preventDeselect.value) {
					r.startValue.value = void 0, r.endValue.value = void 0, r.onPlaceholderChange(t);
					return;
				}
				r.startValue.value ? r.endValue.value ? r.endValue.value && r.startValue.value && (r.fixedDate.value ? r.fixedDate.value === "start" ? t.compare(r.startValue.value) < 0 ? r.startValue.value = t.copy() : r.endValue.value = t.copy() : r.fixedDate.value === "end" && (t.compare(r.endValue.value) > 0 ? r.endValue.value = t.copy() : r.startValue.value = t.copy()) : (r.endValue.value = void 0, r.startValue.value = t.copy())) : r.endValue.value = t.copy() : r.startValue.value = t.copy();
			}
		}
		function E(e) {
			S.value || T(e, n.day);
		}
		function D() {
			S.value || r.isDateUnavailable?.(n.day) || (r.focusedValue.value = n.day.copy());
		}
		function O(e) {
			if (S.value) return;
			e.preventDefault(), e.stopPropagation();
			let a = r.parentElement.value, o = r.dir.value === "rtl" ? -1 : 1;
			switch (e.code) {
				case i.ARROW_RIGHT:
					s(n.day, o);
					break;
				case i.ARROW_LEFT:
					s(n.day, -o);
					break;
				case i.ARROW_UP:
					s(n.day, -7);
					break;
				case i.ARROW_DOWN:
					s(n.day, 7);
					break;
				case i.ENTER:
				case i.SPACE_CODE: T(e, n.day);
			}
			function s(e, n) {
				let i = e.add({ days: n });
				if (r.minValue.value && i.compare(r.minValue.value) < 0 || r.maxValue.value && i.compare(r.maxValue.value) > 0) return;
				let o = a.querySelector(`[data-value='${i.toString()}']:not([data-outside-view])`);
				if (!o) {
					if (n > 0) {
						if (r.isNextButtonDisabled()) return;
						r.nextPage();
					} else {
						if (r.isPrevButtonDisabled()) return;
						r.prevPage();
					}
					t(() => {
						s(e, n);
					});
					return;
				}
				if (o && o.hasAttribute("data-disabled")) return s(i, n);
				r.onPlaceholderChange(i), o?.focus();
			}
		}
		return (e, t) => (o(), F(B(X), {
			ref_key: "primitiveElement",
			ref: a,
			as: e.as,
			"as-child": e.asChild,
			role: "button",
			"aria-label": c.value,
			"data-reka-calendar-cell-trigger": "",
			"aria-pressed": d.value && (_.value || !l.value) ? !0 : void 0,
			"aria-disabled": S.value || l.value ? !0 : void 0,
			"data-highlighted": g.value && (_.value || !l.value) ? "" : void 0,
			"data-selection-start": f.value ? !0 : void 0,
			"data-selection-end": p.value ? !0 : void 0,
			"data-highlighted-start": m.value ? !0 : void 0,
			"data-highlighted-end": h.value ? !0 : void 0,
			"data-selected": d.value && (_.value || !l.value) ? !0 : void 0,
			"data-outside-visible-view": x.value ? "" : void 0,
			"data-value": e.day.toString(),
			"data-disabled": S.value ? "" : void 0,
			"data-unavailable": l.value ? "" : void 0,
			"data-today": y.value ? "" : void 0,
			"data-outside-view": b.value ? "" : void 0,
			"data-focused": w.value ? "" : void 0,
			tabindex: w.value ? 0 : b.value || S.value ? void 0 : -1,
			onClick: E,
			onFocusin: D,
			onMouseenter: D,
			onKeydown: ye(O, [
				"up",
				"down",
				"left",
				"right",
				"enter",
				"space"
			])
		}, {
			default: u(() => [v(e.$slots, "default", {
				dayValue: C.value,
				disabled: S.value,
				today: y.value,
				selected: d.value,
				outsideView: b.value,
				outsideVisibleView: x.value,
				unavailable: l.value,
				highlighted: g.value && (_.value || !l.value),
				highlightedStart: m.value,
				highlightedEnd: h.value,
				selectionStart: f.value,
				selectionEnd: p.value
			}, () => [H(U(C.value), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"aria-label",
			"aria-pressed",
			"aria-disabled",
			"data-highlighted",
			"data-selection-start",
			"data-selection-end",
			"data-highlighted-start",
			"data-highlighted-end",
			"data-selected",
			"data-outside-visible-view",
			"data-value",
			"data-disabled",
			"data-unavailable",
			"data-today",
			"data-outside-view",
			"data-focused",
			"tabindex"
		]));
	}
}), Um = /* @__PURE__ */ W({
	__name: "RangeCalendarGrid",
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
		let t = e, n = Rm(), r = z(() => n.disabled.value ? !0 : void 0), i = z(() => n.readonly.value ? !0 : void 0);
		return (e, a) => (o(), F(B(X), L(t, {
			tabindex: "-1",
			role: "application",
			"aria-readonly": i.value,
			"aria-disabled": r.value,
			"data-readonly": i.value && "",
			"data-disabled": r.value && "",
			onMouseleave: a[0] ||= (e) => B(n).focusedValue.value = void 0
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
}), Wm = /* @__PURE__ */ W({
	__name: "RangeCalendarGridBody",
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Gm = /* @__PURE__ */ W({
	__name: "RangeCalendarGridHead",
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
		return (e, n) => (o(), F(B(X), L(t, { "aria-hidden": "true" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Km = /* @__PURE__ */ W({
	__name: "RangeCalendarGridRow",
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), qm = /* @__PURE__ */ W({
	__name: "RangeCalendarHeadCell",
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Jm = /* @__PURE__ */ W({
	__name: "RangeCalendarHeader",
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
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ym = /* @__PURE__ */ W({
	__name: "RangeCalendarHeading",
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
		let t = e, n = Rm();
		return (e, r) => (o(), F(B(X), L(t, { "data-disabled": B(n).disabled.value ? "" : void 0 }), {
			default: u(() => [v(e.$slots, "default", { headingValue: B(n).headingValue.value }, () => [H(U(B(n).headingValue.value), 1)])]),
			_: 3
		}, 16, ["data-disabled"]));
	}
}), Xm = /* @__PURE__ */ W({
	__name: "RangeCalendarNext",
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
		let t = e, n = z(() => r.disabled.value || r.isNextButtonDisabled(t.nextPage)), r = Rm();
		function i() {
			n.value || r.nextPage(t.nextPage);
		}
		return (e, r) => (o(), F(B(X), {
			as: t.as,
			"as-child": t.asChild,
			"aria-label": "Next page",
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= H(" Next page ")])]),
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
}), Zm = /* @__PURE__ */ W({
	__name: "RangeCalendarPrev",
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
		let t = e, n = z(() => r.disabled.value || r.isPrevButtonDisabled(t.prevPage)), r = Rm();
		function i() {
			n.value || r.prevPage(t.prevPage);
		}
		return (e, r) => (o(), F(B(X), {
			as: t.as,
			"as-child": t.asChild,
			"aria-label": "Previous page",
			type: t.as === "button" ? "button" : void 0,
			"aria-disabled": n.value || void 0,
			"data-disabled": n.value || void 0,
			disabled: n.value,
			onClick: i
		}, {
			default: u(() => [v(e.$slots, "default", { disabled: n.value }, () => [r[0] ||= H(" Prev page ")])]),
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
}), [Qm, $m] = /* @__PURE__ */ q("DropdownMenuRoot"), eh = /* @__PURE__ */ W({
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
		J();
		let i = zn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), a = k(), { modal: s, dir: c } = Ce(n), l = ls(c);
		return $m({
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
		}), (e, t) => (o(), F(B(Fp), {
			open: B(i),
			"onUpdate:open": t[0] ||= (e) => M(i) ? i.value = e : null,
			dir: B(l),
			modal: B(s)
		}, {
			default: u(() => [v(e.$slots, "default", { open: B(i) })]),
			_: 3
		}, 8, [
			"open",
			"dir",
			"modal"
		]));
	}
}), th = /* @__PURE__ */ W({
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
		J();
		let r = Qm(), i = k(!1);
		function a(e) {
			e.defaultPrevented || (i.value || setTimeout(() => {
				r.triggerElement.value?.focus();
			}, 0), i.value = !1, e.preventDefault());
		}
		return r.contentId ||= Fs(void 0, "reka-dropdown-menu-content"), (e, t) => (o(), F(B(qp), L(B(n), {
			id: B(r).contentId,
			"aria-labelledby": B(r)?.triggerId,
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
				(!B(r).modal.value || a) && (i.value = !0), B(r).triggerElement.value?.contains(e.target) && e.preventDefault();
			}
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id", "aria-labelledby"]));
	}
}), nh = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(Bp), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), rh = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(Zp), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ih = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Qp), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ah = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(rm), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), oh = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "open", t, {
			passive: n.open === void 0,
			defaultValue: n.defaultOpen ?? !1
		});
		return J(), (e, t) => (o(), F(B(om), {
			open: B(r),
			"onUpdate:open": t[0] ||= (e) => M(r) ? r.value = e : null
		}, {
			default: u(() => [v(e.$slots, "default", { open: B(r) })]),
			_: 3
		}, 8, ["open"]));
	}
}), sh = /* @__PURE__ */ W({
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
		return J(), (e, t) => (o(), F(B(sm), L(B(n), { style: {
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
}), ch = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(cm), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), lh = /* @__PURE__ */ W({
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
		let n = e, r = Qm(), { forwardRef: i, currentElement: a } = J();
		return p(() => {
			r.triggerElement = a;
		}), r.triggerId ||= Fs(void 0, "reka-dropdown-menu-trigger"), (e, a) => (o(), F(B(Op), { "as-child": "" }, {
			default: u(() => [G(B(X), {
				id: B(r).triggerId,
				ref: B(i),
				type: e.as === "button" ? "button" : void 0,
				"as-child": n.asChild,
				as: e.as,
				"aria-haspopup": "menu",
				"aria-expanded": B(r).open.value,
				"aria-controls": B(r).open.value ? B(r).contentId : void 0,
				"data-disabled": e.disabled ? "" : void 0,
				disabled: e.disabled,
				"data-state": B(r).open.value ? "open" : "closed",
				onClick: a[0] ||= async (n) => {
					!e.disabled && n.button === 0 && n.ctrlKey === !1 && (B(r)?.onOpenToggle(), await t(), B(r).open.value && n.preventDefault());
				},
				onKeydown: a[1] ||= ye((t) => {
					e.disabled || (["Enter", " "].includes(t.key) && B(r).onOpenToggle(), t.key === "ArrowDown" && B(r).onOpenChange(!0), [
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
}), [uh, dh] = /* @__PURE__ */ q("HoverCardRoot"), fh = /* @__PURE__ */ W({
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
		let n = e, r = t, { openDelay: i, closeDelay: a } = Ce(n);
		J();
		let s = zn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), c = k(0), l = k(0), d = k(!1), f = k(!1), p = k(!1), m = k();
		function h() {
			clearTimeout(l.value), c.value = window.setTimeout(() => s.value = !0, i.value);
		}
		function g() {
			clearTimeout(c.value), !d.value && !f.value && (l.value = window.setTimeout(() => s.value = !1, a.value));
		}
		function _() {
			s.value = !1;
		}
		return dh({
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
		}), (e, t) => (o(), F(B(Yl), null, {
			default: u(() => [v(e.$slots, "default", { open: B(s) })]),
			_: 3
		}));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/HoverCard/utils.js
function ph(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function mh(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
//#endregion
//#region node_modules/reka-ui/dist/HoverCard/HoverCardContentImpl.js
var hh = /* @__PURE__ */ W({
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
		let r = e, i = n, a = gs(r), { forwardRef: c, currentElement: l } = J(), d = uh(), { isPointerInTransit: f, onPointerExit: h } = _s(d.triggerElement, l);
		dn(d.isPointerInTransitRef, f, { direction: "rtl" }), h(() => {
			d.onClose();
		});
		let g = k(!1), _;
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
			l.value && (document.addEventListener("pointerup", y), mh(l.value).forEach((e) => e.setAttribute("tabindex", "-1"))), xn(window, "scroll", (e) => {
				e.target?.contains(d.triggerElement.value) && d.onDismiss();
			}, { capture: !0 });
		}), m(() => {
			document.removeEventListener("pointerup", y), d.hasSelectionRef.value = !1, d.isPointerDownOnContentRef.value = !1;
		}), (e, t) => (o(), F(B(wc), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[1] ||= (e) => i("escapeKeyDown", e),
			onPointerDownOutside: t[2] ||= (e) => i("pointerDownOutside", e),
			onFocusOutside: t[3] ||= A((e) => i("focusOutside", e), ["prevent"]),
			onDismiss: B(d).onDismiss
		}, {
			default: u(() => [G(B(ff), L({
				...B(a),
				...e.$attrs
			}, {
				ref: B(c),
				"data-state": B(d).open.value ? "open" : "closed",
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
					e.currentTarget.contains(e.target) && (g.value = !0), B(d).hasSelectionRef.value = !1, B(d).isPointerDownOnContentRef.value = !0;
				}
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state", "style"])]),
			_: 3
		}, 8, ["onDismiss"]));
	}
}), gh = /* @__PURE__ */ W({
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
		let n = Y(e, t), { forwardRef: r } = J(), i = uh();
		return (e, t) => (o(), F(B(Gs), { present: e.forceMount || B(i).open.value }, {
			default: u(() => [G(hh, L(B(n), {
				ref: B(r),
				onPointerenter: t[0] ||= (e) => B(ph)(B(i).onOpen)(e)
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"]));
	}
}), _h = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vh = /* @__PURE__ */ W({
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
		let { forwardRef: t, currentElement: n } = J(), r = uh();
		r.triggerElement = n;
		function i() {
			setTimeout(() => {
				!r.isPointerInTransitRef.value && !r.open.value && r.onClose();
			}, 0);
		}
		return (e, n) => (o(), F(B(Xl), {
			"as-child": "",
			reference: e.reference
		}, {
			default: u(() => [G(B(X), {
				ref: B(t),
				"as-child": e.asChild,
				as: e.as,
				"data-state": B(r).open.value ? "open" : "closed",
				"data-grace-area-trigger": "",
				onPointerenter: n[0] ||= (e) => B(ph)(B(r).onOpen)(e),
				onPointerleave: n[1] ||= (e) => B(ph)(i)(e),
				onFocus: n[2] ||= (e) => B(r).onOpen(),
				onBlur: n[3] ||= (e) => B(r).onClose()
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
}), yh = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(X), L(t, { onMousedown: n[0] ||= (e) => {
			!e.defaultPrevented && e.detail > 1 && e.preventDefault();
		} }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), bh = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(Wp), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [xh, Sh] = /* @__PURE__ */ q("MenubarRoot"), Ch = /* @__PURE__ */ W({
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
		let n = e, r = t, { forwardRef: i } = J(), { CollectionSlot: a } = xl({
			key: "Menubar",
			isProvider: !0
		}), s = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? "",
			passive: n.modelValue === void 0
		}), c = k(null), { dir: l, loop: d } = Ce(n), f = ls(l);
		return Sh({
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
		}), (e, t) => (o(), F(B(a), null, {
			default: u(() => [G(B(qf), {
				"current-tab-stop-id": c.value,
				"onUpdate:currentTabStopId": t[0] ||= (e) => c.value = e,
				orientation: "horizontal",
				loop: B(d),
				dir: B(f),
				"as-child": ""
			}, {
				default: u(() => [G(B(X), {
					ref: B(i),
					role: "menubar"
				}, {
					default: u(() => [v(e.$slots, "default", { modelValue: B(s) })]),
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
}), [wh, Th] = /* @__PURE__ */ q("MenubarMenu"), Eh = /* @__PURE__ */ W({
	__name: "MenubarMenu",
	props: { value: {
		type: String,
		required: !1
	} },
	setup(e) {
		let t = Fs(e.value), n = xh();
		J();
		let r = k(), i = k(!1), a = z(() => n.modelValue.value === t);
		return C(a, () => {
			a.value || (i.value = !1);
		}), Th({
			value: t,
			triggerElement: r,
			triggerId: t,
			contentId: "",
			wasKeyboardTriggerOpenRef: i
		}), (e, t) => (o(), F(B(Fp), {
			open: a.value,
			modal: !1,
			dir: B(n).dir.value,
			"onUpdate:open": t[0] ||= (e) => {
				e || B(n).onMenuClose();
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["open", "dir"]));
	}
}), Dh = /* @__PURE__ */ W({
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
		J();
		let r = xh(), i = wh();
		i.contentId ||= Fs(void 0, "reka-menubar-content");
		let { getItems: a } = xl({ key: "Menubar" }), s = k(!1);
		function c(e) {
			let t = e.target.hasAttribute("data-reka-menubar-subtrigger"), n = (r.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === e.key;
			if (!n && t) return;
			let o = a().filter((e) => e.ref.dataset.disabled !== "").map((e) => e.ref.dataset.value);
			n && o.reverse();
			let s = o.indexOf(i.value);
			o = r.loop.value ? Vs(o, s + 1) : o.slice(s + 1);
			let [c] = o;
			c && r.onMenuOpen(c);
		}
		return (e, t) => (o(), F(B(qp), L(B(n), {
			id: B(i).contentId,
			"data-reka-menubar-content": "",
			"aria-labelledby": B(i).triggerId,
			style: {
				"--reka-menubar-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-menubar-content-available-width": "var(--reka-popper-available-width)",
				"--reka-menubar-content-available-height": "var(--reka-popper-available-height)",
				"--reka-menubar-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-menubar-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onCloseAutoFocus: t[0] ||= (e) => {
				!B(r).modelValue.value && !s.value && B(i).triggerElement.value?.focus(), s.value = !1, e.preventDefault();
			},
			onFocusOutside: t[1] ||= (e) => {
				let t = e.target;
				B(a)().filter((e) => e.ref.dataset.disabled !== "").some((e) => e.ref.contains(t)) && e.preventDefault();
			},
			onInteractOutside: t[2] ||= (e) => {
				s.value = !0;
			},
			onEntryFocus: t[3] ||= (e) => {
				B(i).wasKeyboardTriggerOpenRef.value || e.preventDefault();
			},
			onKeydown: ye(c, ["arrow-right", "arrow-left"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id", "aria-labelledby"]));
	}
}), Oh = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(Bp), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), kh = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(Up), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ah = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Qp), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), jh = /* @__PURE__ */ W({
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
		let n = e, i = us(t);
		return J(), (e, t) => (o(), F(B(tm), P(r({
			...n,
			...B(i)
		})), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Mh = /* @__PURE__ */ W({
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
		return J(), (e, t) => (o(), F(B(nm), P(r(B(n))), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Nh = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(rm), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ph = /* @__PURE__ */ W({
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
		J();
		let i = zn(n, "open", r, {
			defaultValue: n.defaultOpen ?? !1,
			passive: n.open === void 0
		});
		return (e, t) => (o(), F(B(om), {
			open: B(i),
			"onUpdate:open": t[0] ||= (e) => M(i) ? i.value = e : null
		}, {
			default: u(() => [v(e.$slots, "default", { open: B(i) })]),
			_: 3
		}, 8, ["open"]));
	}
}), Fh = /* @__PURE__ */ W({
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
		J();
		let { getItems: r } = xl({ key: "Menubar" }), i = xh(), a = wh();
		function s(e) {
			if (e.target.hasAttribute("data-reka-menubar-subtrigger")) return;
			let t = r().filter((e) => e.ref.dataset.disabled !== "").map((e) => e.ref.dataset.value), n = t.indexOf(a.value);
			t = i.loop.value ? Vs(t, n + 1) : t.slice(n + 1);
			let [o] = t;
			o && i.onMenuOpen(o);
		}
		return (e, t) => (o(), F(B(sm), L(B(n), {
			"data-reka-menubar-content": "",
			style: {
				"--reka-menubar-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-menubar-content-available-width": "var(--reka-popper-available-width)",
				"--reka-menubar-content-available-height": "var(--reka-popper-available-height)",
				"--reka-menubar-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-menubar-trigger-height": "var(--reka-popper-anchor-height)"
			},
			onKeydown: ye(s, ["arrow-right"])
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Ih = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(cm), L(t, { "data-reka-menubar-subtrigger": "" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Lh = /* @__PURE__ */ W({
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
		let t = xh(), n = wh(), { forwardRef: r, currentElement: i } = J(), { CollectionItem: a } = xl({ key: "Menubar" }), s = k(!1), c = z(() => t.modelValue.value === n.value);
		return p(() => {
			n.triggerElement = i;
		}), (e, l) => (o(), F(B(Jf), {
			"as-child": "",
			focusable: !e.disabled,
			"tab-stop-id": B(n).value
		}, {
			default: u(() => [G(B(a), null, {
				default: u(() => [G(B(Op), { "as-child": "" }, {
					default: u(() => [G(B(X), {
						id: B(n).triggerId,
						ref: B(r),
						as: e.as,
						"as-child": e.asChild,
						type: e.as === "button" ? "button" : void 0,
						role: "menuitem",
						"aria-haspopup": "menu",
						"aria-expanded": c.value,
						"aria-controls": c.value ? B(n).contentId : void 0,
						"data-highlighted": s.value ? "" : void 0,
						"data-state": c.value ? "open" : "closed",
						"data-disabled": e.disabled ? "" : void 0,
						disabled: e.disabled,
						"data-value": B(n).value,
						onPointerdown: l[0] ||= (r) => {
							!e.disabled && r.button === 0 && r.ctrlKey === !1 && (B(t).onMenuOpen(B(n).value), c.value || r.preventDefault());
						},
						onPointerenter: l[1] ||= () => {
							B(t).modelValue.value && !c.value && (B(t).onMenuOpen(B(n).value), B(i)?.focus());
						},
						onKeydown: l[2] ||= ye((r) => {
							e.disabled || (["Enter", " "].includes(r.key) && B(t).onMenuToggle(B(n).value), r.key === "ArrowDown" && B(t).onMenuOpen(B(n).value), [
								"Enter",
								" ",
								"ArrowDown"
							].includes(r.key) && (B(n).wasKeyboardTriggerOpenRef.value = !0, r.preventDefault()));
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
function Rh(e) {
	return e ? "open" : "closed";
}
function zh(e, t) {
	return `${e}-trigger-${t}`;
}
function Bh(e, t) {
	return `${e}-content-${t}`;
}
var Vh = "navigationMenu.linkSelect", Hh = "navigationMenu.rootContentDismiss";
function Uh(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Wh(e) {
	let t = Cr();
	return e.some((e) => e === t ? !0 : (e.focus(), Cr() !== t));
}
function Gh(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function Kh(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
//#endregion
//#region node_modules/reka-ui/dist/NavigationMenu/NavigationMenuRoot.js
var [qh, Jh] = /* @__PURE__ */ q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), Yh = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "modelValue", t, {
			defaultValue: n.defaultValue ?? "",
			passive: n.modelValue === void 0
		}), i = k(""), { forwardRef: a, currentElement: c } = J(), l = k(), d = k(), f = k(), { getItems: p, CollectionSlot: m } = xl({
			key: "NavigationMenu",
			isProvider: !0
		}), { delayDuration: h, skipDelayDuration: g, dir: _, disableClickTrigger: y, disableHoverTrigger: b, unmountOnHide: x } = Ce(n), S = ls(_), C = sn(!1, g), w = cn((e) => {
			typeof e == "string" && (i.value = r.value, r.value = e);
		}, z(() => r.value !== "" || C.value ? 150 : h.value));
		s(() => {
			r.value && (f.value = p().map((e) => e.ref).find((e) => e.id.includes(r.value)));
		}), xn(c, Hh, T), Jh({
			isRootMenu: !0,
			modelValue: r,
			previousValue: i,
			baseId: Fs(void 0, "reka-navigation-menu"),
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
		return (e, t) => (o(), F(B(m), null, {
			default: u(() => [G(B(X), {
				ref: B(a),
				as: e.as,
				"as-child": e.asChild,
				"data-orientation": e.orientation,
				dir: B(S),
				"data-reka-navigation-menu": ""
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: B(r) })]),
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
}), [Xh, Zh] = /* @__PURE__ */ q("NavigationMenuItem"), Qh = /* @__PURE__ */ W({
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
		J();
		let { getItems: n } = xl({ key: "NavigationMenu" }), r = qh(), i = Fs(t.value), a = k(), s = k(), c = Bh(r.baseId, i), l = () => ({}), d = k(!1);
		async function f(e = "start") {
			let t = document.getElementById(c);
			if (t) {
				l();
				let n = Uh(t);
				n.length && Wh(e === "start" ? n : n.reverse());
			}
		}
		function p() {
			let e = document.getElementById(c);
			if (e) {
				let t = Uh(e);
				t.length && (l = Gh(t));
			}
		}
		Zh({
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
			let t = Cr();
			if (e.keyCode === 32 || e.key === "Enter") if (r.modelValue.value === i) {
				m(), e.preventDefault();
				return;
			} else {
				e.target.click(), e.preventDefault();
				return;
			}
			let a = n().filter((e) => e.ref.parentElement?.hasAttribute("data-menu-item")).map((e) => e.ref);
			if (!a.includes(t)) return;
			let o = kr(e, t, void 0, {
				itemsArray: a,
				loop: !1
			});
			o && o?.focus(), e.preventDefault(), e.stopPropagation();
		}
		return (e, t) => (o(), F(B(X), {
			"as-child": e.asChild,
			as: e.as,
			"data-menu-item": "",
			onKeydown: ye(h, [
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
}), $h = /* @__PURE__ */ W({
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
		let n = e, r = t, { getItems: i } = xl({ key: "NavigationMenu" }), { forwardRef: a, currentElement: c } = J(), l = qh(), d = Xh(), f = zh(l.baseId, d.value), p = Bh(l.baseId, d.value), m = k(null), h = z(() => {
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
					l.onItemDismiss(), d.onRootContentClose(), t.contains(Cr()) && d.triggerRef.value?.focus();
				};
				t.addEventListener(Hh, n), e(() => t.removeEventListener(Hh, n));
			}
		});
		function y(e) {
			r("escapeKeyDown", e), e.defaultPrevented || (l.onItemDismiss(), d.triggerRef?.value?.focus(), d.wasEscapeCloseRef.value = !0);
		}
		function b(e) {
			if (e.target.closest("[data-reka-navigation-menu]") !== l.rootNavigationMenu.value) return;
			let t = e.altKey || e.ctrlKey || e.metaKey, n = e.key === "Tab" && !t, r = Uh(e.currentTarget);
			if (n) {
				let t = Cr(), n = r.findIndex((e) => e === t);
				if (Wh(e.shiftKey ? r.slice(0, n).reverse() : r.slice(n + 1, r.length))) e.preventDefault();
				else {
					d.focusProxyRef.value?.focus();
					return;
				}
			}
			kr(e, Cr(), void 0, {
				itemsArray: r,
				loop: !1,
				enableIgnoredElement: !0
			})?.focus();
		}
		function x() {
			let e = new Event(Hh, {
				bubbles: !0,
				cancelable: !0
			});
			c.value?.dispatchEvent(e);
		}
		return (e, t) => (o(), F(B(wc), L({
			id: B(p),
			ref: B(a),
			"aria-labelledby": B(f),
			"data-motion": h.value,
			"data-state": B(Rh)(B(l).modelValue.value === B(d).value),
			"data-orientation": B(l).orientation
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
}), eg = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "forceMount"), r), { forwardRef: a } = J(), s = qh(), c = Xh(), l = z(() => c.value === s.modelValue.value), d = z(() => s.viewport.value && !s.modelValue.value && s.previousValue.value ? s.previousValue.value === c.value : !1);
		return (e, t) => (o(), F(re, {
			to: B(Lt) && B(s).viewport.value ? B(s).viewport.value : "body",
			disabled: B(Lt) && B(s).viewport.value ? !B(s).viewport.value : !0
		}, [G(B(Gs), {
			present: e.forceMount || l.value || d.value,
			"force-mount": !B(s).unmountOnHide.value
		}, {
			default: u(({ present: n }) => [G($h, L({
				ref: B(a),
				"data-state": B(Rh)(l.value),
				style: { pointerEvents: !l.value && B(s).isRootMenu ? "none" : void 0 }
			}, {
				...e.$attrs,
				...B(i)
			}, {
				hidden: !n,
				onPointerenter: t[0] ||= (e) => B(s).onContentEnter(B(c).value),
				onPointerleave: t[1] ||= (e) => B(Kh)(() => B(s).onContentLeave())(e),
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
}), tg = /* @__PURE__ */ W({
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
		let n = e, r = t, { CollectionItem: i } = xl({ key: "NavigationMenu" });
		J();
		async function a(e) {
			let t = new CustomEvent(Vh, {
				bubbles: !0,
				cancelable: !0,
				detail: { originalEvent: e }
			});
			if (r("select", t), !t.defaultPrevented && !e.metaKey) {
				let t = new CustomEvent(Hh, {
					bubbles: !0,
					cancelable: !0
				});
				e.target?.dispatchEvent(t);
			}
		}
		return (e, t) => (o(), F(B(i), null, {
			default: u(() => [G(B(X), {
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
}), ng = /* @__PURE__ */ W({
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
		let t = e, n = qh(), { forwardRef: r, currentElement: i } = J();
		return p(() => {
			n.onIndicatorTrackChange(i.value);
		}), (e, i) => (o(), F(B(X), {
			ref: B(r),
			style: { position: "relative" }
		}, {
			default: u(() => [G(B(X), L(e.$attrs, {
				"as-child": t.asChild,
				as: e.as,
				"data-orientation": B(n).orientation
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
}), rg = ["aria-owns"], ig = /* @__PURE__ */ W({
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
		let t = e, n = qh(), r = Xh(), { CollectionItem: i } = xl({ key: "NavigationMenu" }), { forwardRef: a, currentElement: s } = J(), c = k(""), l = k(""), d = sn(!1, 300), f = k(!1), m = z(() => r.value === n.modelValue.value);
		p(() => {
			r.triggerRef = s, c.value = zh(n.baseId, r.value), l.value = Bh(n.baseId, r.value);
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
			e && (r.focusProxyRef.value = bn(e));
		}
		function S(e) {
			let t = document.getElementById(r.contentId), n = e.relatedTarget, i = n === s.value, a = t?.contains(n);
			(i || !a) && r.onFocusProxyEnter(i ? "start" : "end");
		}
		return (e, r) => (o(), D(V, null, [G(B(i), null, {
			default: u(() => [G(B(X), L({
				id: c.value,
				ref: B(a),
				disabled: e.disabled,
				"data-disabled": e.disabled ? "" : void 0,
				"data-state": B(Rh)(m.value),
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
		}), m.value ? (o(), D(V, { key: 0 }, [G(B(Sl), {
			ref: x,
			"aria-hidden": "true",
			tabindex: 0,
			onFocus: S
		}), B(n).viewport ? (o(), D("span", {
			key: 0,
			"aria-owns": l.value
		}, null, 8, rg)) : N("v-if", !0)], 64)) : N("v-if", !0)], 64));
	}
}), ag = /* @__PURE__ */ W({
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
		let n = e, { forwardRef: r, currentElement: i } = J(), a = qh(), { activeTrigger: s, rootNavigationMenu: c, modelValue: l } = a, d = k(), f = k(), p = z(() => !!a.modelValue.value);
		C(i, () => {
			a.onViewportChange(i.value);
		});
		let m = k();
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
		return Pn(m, () => {
			m.value && (d.value = {
				width: m.value.offsetWidth,
				height: m.value.offsetHeight
			}, h());
		}), Pn([globalThis.document?.body, c], () => {
			h();
		}), (e, t) => (o(), F(B(Gs), {
			present: e.forceMount || p.value,
			"force-mount": !B(a).unmountOnHide.value,
			onAfterLeave: t[2] ||= () => {
				d.value = void 0, f.value = void 0;
			}
		}, {
			default: u(({ present: n }) => [G(B(X), L(e.$attrs, {
				ref: B(r),
				as: e.as,
				"as-child": e.asChild,
				"data-state": B(Rh)(p.value),
				"data-orientation": B(a).orientation,
				style: {
					pointerEvents: !p.value && B(a).isRootMenu ? "none" : void 0,
					"--reka-navigation-menu-viewport-width": d.value ? `${d.value?.width}px` : void 0,
					"--reka-navigation-menu-viewport-height": d.value ? `${d.value?.height}px` : void 0,
					"--reka-navigation-menu-viewport-left": f.value ? `${f.value?.left}px` : void 0,
					"--reka-navigation-menu-viewport-top": f.value ? `${f.value?.top}px` : void 0
				},
				hidden: !n,
				onPointerenter: t[0] ||= (e) => B(a).onContentEnter(B(a).modelValue.value),
				onPointerleave: t[1] ||= (e) => B(Kh)(() => B(a).onContentLeave())(e)
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
}), og = /* @__PURE__ */ new Map(), sg = !1;
try {
	sg = new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay === "exceptZero";
} catch {}
var cg = !1;
try {
	cg = new Intl.NumberFormat("de-DE", {
		style: "unit",
		unit: "degree"
	}).resolvedOptions().style === "unit";
} catch {}
var lg = { degree: { narrow: {
	default: "°",
	"ja-JP": " 度",
	"zh-TW": "度",
	"sl-SI": " °"
} } }, ug = class {
	constructor(e, t = {}) {
		this.numberFormatter = dg(e, t), this.options = t;
	}
	format(e) {
		let t = "";
		if (t = !sg && this.options.signDisplay != null ? fg(this.numberFormatter, this.options.signDisplay, e) : this.numberFormatter.format(e), this.options.style === "unit" && !cg) {
			let { unit: e, unitDisplay: n = "short", locale: r } = this.resolvedOptions();
			if (!e) return t;
			let i = lg[e]?.[n];
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
		return !sg && this.options.signDisplay != null && (e = {
			...e,
			signDisplay: this.options.signDisplay
		}), !cg && this.options.style === "unit" && (e = {
			...e,
			style: "unit",
			unit: this.options.unit,
			unitDisplay: this.options.unitDisplay
		}), e;
	}
};
function dg(e, t = {}) {
	let { numberingSystem: n } = t;
	if (n && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${n}`), t.style === "unit" && !cg) {
		let { unit: e, unitDisplay: n = "short" } = t;
		if (!e) throw Error("unit option must be provided with style: \"unit\"");
		if (!lg[e]?.[n]) throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);
		t = {
			...t,
			style: "decimal"
		};
	}
	let r = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
	if (og.has(r)) return og.get(r);
	let i = new Intl.NumberFormat(e, t);
	return og.set(r, i), i;
}
function fg(e, t, n) {
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
var pg = /* @__PURE__ */ RegExp("^.*\\(.*\\).*$"), mg = [
	"latn",
	"arab",
	"hanidec",
	"deva",
	"beng",
	"fullwide"
], hg = class {
	constructor(e, t = {}) {
		this.locale = e, this.options = t;
	}
	parse(e) {
		return _g(this.locale, this.options, e).parse(e);
	}
	isValidPartialNumber(e, t, n) {
		return _g(this.locale, this.options, e).isValidPartialNumber(e, t, n);
	}
	getNumberingSystem(e) {
		return _g(this.locale, this.options, e).options.numberingSystem;
	}
}, gg = /* @__PURE__ */ new Map();
function _g(e, t, n) {
	let r = vg(e, t);
	if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
		for (let i of mg) if (i !== r.options.numberingSystem) {
			let r = vg(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
			if (r.isValidPartialNumber(n)) return r;
		}
	}
	return r;
}
function vg(e, t) {
	let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : ""), r = gg.get(n);
	return r || (r = new yg(e, t), gg.set(n, r)), r;
}
var yg = class {
	constructor(e, t = {}) {
		this.locale = e, t.roundingIncrement !== 1 && t.roundingIncrement != null && (t.maximumFractionDigits == null && t.minimumFractionDigits == null ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : t.maximumFractionDigits == null ? t.maximumFractionDigits = t.minimumFractionDigits : t.minimumFractionDigits ??= t.maximumFractionDigits), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = Sg(e, this.formatter, this.options, t), this.options.style === "percent" && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
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
			return new hg(this.locale, e).parse(new ug(this.locale, e).format(r));
		}
		return this.options.currencySign === "accounting" && pg.test(e) && (r = -1 * r), r;
	}
	sanitize(e) {
		let t = this.formatter.resolvedOptions().useGrouping;
		return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t) => t.unit === e) ? this.symbols.noNumeralUnits.find((t) => t.unit === e).value.toString() : (e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), this.options.numberingSystem === "arab" && (this.symbols.decimal && (e = Cg(e, ",", this.symbols.decimal), e = Cg(e, "،", this.symbols.decimal)), this.symbols.group && t && (e = Cg(e, ".", this.symbols.group))), this.symbols.group === "’" && e.includes("'") && t && (e = Cg(e, "'", this.symbols.group)), this.options.locale === "fr-FR" && this.symbols.group && t && (e = Cg(e, " ", this.symbols.group), e = Cg(e, /\u00A0/g, this.symbols.group)), e);
	}
	isValidPartialNumber(e, t = -Infinity, n = Infinity) {
		let r = this.formatter.resolvedOptions().useGrouping;
		return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? !1 : (this.symbols.group && r && (e = Cg(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), e.length === 0);
	}
}, bg = new Set([
	"decimal",
	"fraction",
	"integer",
	"minusSign",
	"plusSign",
	"group"
]), xg = [
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
function Sg(e, t, n, r) {
	let i = new Intl.NumberFormat(e, {
		...n,
		minimumSignificantDigits: 1,
		maximumSignificantDigits: 21,
		roundingIncrement: 1,
		roundingPriority: "auto",
		roundingMode: "halfExpand",
		useGrouping: !0
	}), a = i.formatToParts(-10000.111), o = i.formatToParts(10000.111), s = xg.map((e) => i.formatToParts(e)), c = s.map((e, t) => {
		let n = e.find((e) => e.type === "unit");
		return n && !e.some((e) => e.type === "integer" || e.type === "fraction") ? {
			unit: n.value,
			value: xg[t]
		} : null;
	}).filter((e) => !!e), l = a.find((e) => e.type === "minusSign")?.value ?? "-", u = o.find((e) => e.type === "plusSign")?.value;
	!u && (r?.signDisplay === "exceptZero" || r?.signDisplay === "always") && (u = "+");
	let d = new Intl.NumberFormat(e, {
		...n,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).formatToParts(.001).find((e) => e.type === "decimal")?.value, f = a.find((e) => e.type === "group")?.value, p = a.filter((e) => !bg.has(e.type)).map((e) => wg(e.value)), m = s.flatMap((e) => e.filter((e) => !bg.has(e.type)).map((e) => wg(e.value))), h = [...new Set([...p, ...m])].sort((e, t) => t.length - e.length), g = h.length === 0 ? /* @__PURE__ */ RegExp("\\p{White_Space}|\\p{Cf}", "gu") : RegExp(`${h.join("|")}|\\p{White_Space}|\\p{Cf}`, "gu"), _ = [...new Intl.NumberFormat(n.locale, { useGrouping: !1 }).format(9876543210)].reverse(), v = new Map(_.map((e, t) => [e, t])), y = RegExp(`[${_.join("")}]`, "g");
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
function Cg(e, t, n) {
	return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n);
}
function wg(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/reka-ui/dist/NumberField/utils.js
function Tg(e) {
	let { disabled: t } = e, n = k(), r = jt(), i = () => window.clearTimeout(n.value), a = (e) => {
		i(), !t.value && (r.trigger(), n.value = window.setTimeout(() => {
			a(60);
		}, e));
	}, o = () => {
		a(400);
	}, s = () => {
		i();
	}, c = k(!1), l = z(() => bn(e.target)), u = (e) => {
		e.button !== 0 || c.value || (e.preventDefault(), c.value = !0, o());
	}, d = () => {
		c.value = !1, s();
	};
	return Lt && (xn(l || window, "pointerdown", u), xn(window, "pointerup", d), xn(window, "pointercancel", d)), {
		isPressed: c,
		onTrigger: r.on
	};
}
function Eg(e, t = k({})) {
	return on(() => new ug(e.value, t.value));
}
function Dg(e, t = k({})) {
	return on(() => new hg(e.value, t.value));
}
function Og(e, t, n) {
	let r = e === "+" ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split("."), a = n.toString().split("."), o = i[1] && i[1].length || 0, s = a[1] && a[1].length || 0, c = 10 ** Math.max(o, s);
		t = Math.round(t * c), n = Math.round(n * c), r = e === "+" ? t + n : t - n, r /= c;
	}
	return r;
}
//#endregion
//#region node_modules/reka-ui/dist/NumberField/NumberFieldRoot.js
var [kg, Ag] = /* @__PURE__ */ q("NumberFieldRoot"), jg = /* @__PURE__ */ W({
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
		let n = e, r = t, { disabled: i, readonly: a, disableWheelChange: s, invertWheelChange: c, min: l, max: d, step: f, stepSnapping: p, formatOptions: m, id: h, locale: g } = Ce(n), _ = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), { primitiveElement: y, currentElement: b } = Js(), x = Ls(g), S = hs(b), C = k(), w = z(() => !Tr(_.value) && (ae(_.value) === l.value || l.value && !isNaN(_.value) ? Og("-", _.value, f.value) < l.value : !1)), T = z(() => !Tr(_.value) && (ae(_.value) === d.value || d.value && !isNaN(_.value) ? Og("+", _.value, f.value) > d.value : !1));
		function E(e, t = 1) {
			if (n.focusOnChange && C.value?.focus(), n.disabled || n.readonly) return;
			let r = A.parse(C.value?.value ?? "");
			isNaN(r) ? _.value = l.value ?? 0 : e === "increase" ? _.value = ae(r + (f.value ?? 1) * t) : _.value = ae(r - (f.value ?? 1) * t);
		}
		function D(e = 1) {
			E("increase", e);
		}
		function O(e = 1) {
			E("decrease", e);
		}
		function ee(e) {
			e === "min" && l.value !== void 0 ? _.value = ae(l.value) : e === "max" && d.value !== void 0 && (_.value = ae(d.value));
		}
		let te = Eg(x, m), A = Dg(x, m), ne = z(() => te.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), re = Eg(x, m), j = z(() => Tr(_.value) || isNaN(_.value) ? "" : re.format(_.value));
		function M(e) {
			return A.isValidPartialNumber(e, l.value, d.value);
		}
		function ie(e) {
			C.value && (C.value.value = e);
		}
		function ae(e) {
			let t;
			return t = f.value === void 0 || isNaN(f.value) || !p.value ? br(e, l.value, d.value) : Sr(e, l.value, d.value, f.value), t = A.parse(te.format(t)), t;
		}
		function P(e) {
			let t = A.parse(e);
			return _.value = isNaN(t) ? void 0 : ae(t), e.length ? ie(j.value) : ie(e);
		}
		return Ag({
			modelValue: _,
			handleDecrease: O,
			handleIncrease: D,
			handleMinMaxValue: ee,
			inputMode: ne,
			inputEl: C,
			onInputElement: (e) => C.value = e,
			textValue: j,
			readonly: a,
			validate: M,
			applyInputValue: P,
			disabled: i,
			disableWheelChange: s,
			invertWheelChange: c,
			max: d,
			min: l,
			isDecreaseDisabled: w,
			isIncreaseDisabled: T,
			id: h
		}), (e, t) => (o(), F(B(X), L(e.$attrs, {
			ref_key: "primitiveElement",
			ref: y,
			role: "group",
			as: e.as,
			"as-child": e.asChild,
			"data-disabled": B(i) ? "" : void 0,
			"data-readonly": B(a) ? "" : void 0
		}), {
			default: u(() => [v(e.$slots, "default", {
				modelValue: B(_),
				textValue: j.value,
				readonly: B(a)
			}), B(S) && e.name ? (o(), F(B(wl), {
				key: 0,
				type: "text",
				value: B(_),
				name: e.name,
				disabled: B(i),
				readonly: B(a),
				required: e.required
			}, null, 8, [
				"value",
				"name",
				"disabled",
				"readonly",
				"required"
			])) : N("v-if", !0)]),
			_: 3
		}, 16, [
			"as",
			"as-child",
			"data-disabled",
			"data-readonly"
		]));
	}
}), Mg = /* @__PURE__ */ W({
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
		let t = e, n = kg(), r = z(() => n.disabled?.value || n.readonly.value || t.disabled || n.isDecreaseDisabled.value), { primitiveElement: i, currentElement: a } = Js(), { isPressed: s, onTrigger: c } = Tg({
			target: a,
			disabled: r
		});
		return c(() => {
			n.handleDecrease();
		}), (e, n) => (o(), F(B(X), L(t, {
			ref_key: "primitiveElement",
			ref: i,
			tabindex: "-1",
			"aria-label": "Decrease",
			type: e.as === "button" ? "button" : void 0,
			style: { userSelect: B(s) ? "none" : void 0 },
			disabled: r.value ? "" : void 0,
			"data-disabled": r.value ? "" : void 0,
			"data-pressed": B(s) ? "true" : void 0,
			onContextmenu: n[0] ||= A(() => {}, ["prevent"])
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
}), Ng = /* @__PURE__ */ W({
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
		let t = e, n = kg(), r = z(() => n.disabled?.value || n.readonly.value || t.disabled || n.isIncreaseDisabled.value), { primitiveElement: i, currentElement: a } = Js(), { isPressed: s, onTrigger: c } = Tg({
			target: a,
			disabled: r
		});
		return c(() => {
			n.handleIncrease();
		}), (e, n) => (o(), F(B(X), L(t, {
			ref_key: "primitiveElement",
			ref: i,
			tabindex: "-1",
			"aria-label": "Increase",
			type: e.as === "button" ? "button" : void 0,
			style: { userSelect: B(s) ? "none" : void 0 },
			disabled: r.value ? "" : void 0,
			"data-disabled": r.value ? "" : void 0,
			"data-pressed": B(s) ? "true" : void 0,
			onContextmenu: n[0] ||= A(() => {}, ["prevent"])
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
}), Pg = /* @__PURE__ */ W({
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
		let t = e, { primitiveElement: n, currentElement: r } = Js(), i = kg();
		function a(e) {
			i.disableWheelChange.value || e.target === Cr() && (Math.abs(e.deltaY) <= Math.abs(e.deltaX) || (e.preventDefault(), e.deltaY > 0 ? i.invertWheelChange.value ? i.handleDecrease() : i.handleIncrease() : e.deltaY < 0 && (i.invertWheelChange.value ? i.handleIncrease() : i.handleDecrease())));
		}
		p(() => {
			i.onInputElement(r.value);
		});
		let s = k(i.textValue.value);
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
		return (e, r) => (o(), F(B(X), L(t, {
			id: B(i).id.value,
			ref_key: "primitiveElement",
			ref: n,
			value: s.value,
			role: "spinbutton",
			type: "text",
			tabindex: "0",
			inputmode: B(i).inputMode.value,
			disabled: B(i).disabled.value ? "" : void 0,
			"data-disabled": B(i).disabled.value ? "" : void 0,
			readonly: B(i).readonly.value ? "" : void 0,
			"data-readonly": B(i).readonly.value ? "" : void 0,
			autocomplete: "off",
			autocorrect: "off",
			spellcheck: "false",
			"aria-roledescription": "Number field",
			"aria-valuenow": B(i).modelValue.value,
			"aria-valuemin": B(i).min.value,
			"aria-valuemax": B(i).max.value,
			onKeydown: [
				r[0] ||= ye(A((e) => B(i).handleIncrease(), ["prevent"]), ["up"]),
				r[1] ||= ye(A((e) => B(i).handleDecrease(), ["prevent"]), ["down"]),
				r[2] ||= ye(A((e) => B(i).handleIncrease(10), ["prevent"]), ["page-up"]),
				r[3] ||= ye(A((e) => B(i).handleDecrease(10), ["prevent"]), ["page-down"]),
				r[4] ||= ye(A((e) => B(i).handleMinMaxValue("min"), ["prevent"]), ["home"]),
				r[5] ||= ye(A((e) => B(i).handleMinMaxValue("max"), ["prevent"]), ["end"]),
				r[8] ||= ye((e) => B(i).applyInputValue(e.target?.value), ["enter"])
			],
			onWheel: a,
			onBeforeinput: r[6] ||= (e) => {
				let t = e.target, n = t.value.slice(0, t.selectionStart ?? void 0) + (e.data ?? "") + t.value.slice(t.selectionEnd ?? void 0);
				B(i).validate(n) || e.preventDefault();
			},
			onInput: r[7] ||= (e) => {
				s.value = e.target.value;
			},
			onChange: c,
			onBlur: r[9] ||= (e) => B(i).applyInputValue(e.target?.value)
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
}), Fg = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(X), L(t, { "data-type": "ellipsis" }), {
			default: u(() => [v(e.$slots, "default", {}, () => [n[0] ||= H("…")])]),
			_: 3
		}, 16));
	}
}), [Ig, Lg] = /* @__PURE__ */ q("PaginationRoot"), Rg = /* @__PURE__ */ W({
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
		let n = e, r = t, { siblingCount: i, disabled: a, showEdges: s } = Ce(n);
		J();
		let c = zn(n, "page", r, {
			defaultValue: n.defaultPage,
			passive: n.page === void 0
		}), l = z(() => Math.max(1, Math.ceil(n.total / (n.itemsPerPage || 1))));
		return Lg({
			page: c,
			onPageChange(e) {
				c.value = e;
			},
			pageCount: l,
			siblingCount: i,
			disabled: a,
			showEdges: s
		}), (e, t) => (o(), F(B(X), {
			as: e.as,
			"as-child": e.asChild
		}, {
			default: u(() => [v(e.$slots, "default", {
				page: B(c),
				pageCount: l.value
			})]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Pagination/utils.js
function zg(e, t) {
	let n = t - e + 1;
	return Array.from({ length: n }, (t, n) => n + e);
}
function Bg(e) {
	return e.map((e) => typeof e == "number" ? {
		type: "page",
		value: e
	} : { type: "ellipsis" });
}
var Vg = "ellipsis";
function Hg(e, t, n, r) {
	let i = t, a = Math.max(e - n, 1), o = Math.min(e + n, i);
	if (r) {
		let e = Math.min(2 * n + 5, t) - 2, r = a > 3 && Math.abs(i - e - 1 + 1) > 2 && Math.abs(a - 1) > 2, s = o < i - 2 && Math.abs(i - e) > 2 && Math.abs(i - o) > 2;
		return !r && s ? [
			...zg(1, e),
			Vg,
			i
		] : r && !s ? [
			1,
			Vg,
			...zg(i - e + 1, i)
		] : r && s ? [
			1,
			Vg,
			...zg(a, o),
			Vg,
			i
		] : zg(1, i);
	} else {
		let r = n * 2 + 1;
		return t < r ? zg(1, i) : e <= n + 1 ? zg(1, r) : t - e <= n ? zg(t - r + 1, i) : zg(a, o);
	}
}
//#endregion
//#region node_modules/reka-ui/dist/Pagination/PaginationList.js
var Ug = /* @__PURE__ */ W({
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
		J();
		let n = Ig(), i = z(() => Bg(Hg(n.page.value, n.pageCount.value, n.siblingCount.value, n.showEdges.value)));
		return (e, n) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default", { items: i.value })]),
			_: 3
		}, 16));
	}
}), Wg = /* @__PURE__ */ W({
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
		J();
		let n = Ig(), r = z(() => n.page.value === t.value), i = z(() => n.disabled.value);
		return (e, a) => (o(), F(B(X), L(t, {
			"data-type": "page",
			"aria-label": `Page ${e.value}`,
			"aria-current": r.value ? "page" : void 0,
			"data-selected": r.value ? "true" : void 0,
			disabled: i.value,
			type: e.as === "button" ? "button" : void 0,
			onClick: a[0] ||= (t) => !i.value && B(n).onPageChange(e.value)
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [H(U(e.value), 1)])]),
			_: 3
		}, 16, [
			"aria-label",
			"aria-current",
			"data-selected",
			"disabled",
			"type"
		]));
	}
}), Gg = /* @__PURE__ */ W({
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
		J();
		let n = Ig(), r = z(() => n.page.value === n.pageCount.value || n.disabled.value);
		return (e, i) => (o(), F(B(X), L(t, {
			"aria-label": "Next Page",
			type: e.as === "button" ? "button" : void 0,
			disabled: r.value,
			onClick: i[0] ||= (e) => !r.value && B(n).onPageChange(B(n).page.value + 1)
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [i[1] ||= H("Next page")])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}), Kg = /* @__PURE__ */ W({
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
		J();
		let n = Ig(), r = z(() => n.page.value === 1 || n.disabled.value);
		return (e, i) => (o(), F(B(X), L(t, {
			"aria-label": "Previous Page",
			type: e.as === "button" ? "button" : void 0,
			disabled: r.value,
			onClick: i[0] ||= (e) => !r.value && B(n).onPageChange(B(n).page.value - 1)
		}), {
			default: u(() => [v(e.$slots, "default", {}, () => [i[1] ||= H("Prev page")])]),
			_: 3
		}, 16, ["type", "disabled"]));
	}
}), [qg, Jg] = /* @__PURE__ */ q("PinInputRoot"), Yg = /* @__PURE__ */ W({
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
		let n = e, r = t, { mask: i, otp: a, placeholder: s, type: c, disabled: l, dir: d } = Ce(n), { forwardRef: f } = J(), p = ls(d), m = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? [],
			passive: !0,
			deep: !0
		}), h = z(() => Array.isArray(m.value) ? [...m.value] : []), g = k(/* @__PURE__ */ new Set());
		function _(e) {
			g.value.add(e);
		}
		let y = z(() => n.type === "number"), b = z(() => h.value.filter((e) => !!e || y.value && e === 0).length === g.value.size);
		return C(m, () => {
			b.value && r("complete", m.value);
		}, { deep: !0 }), Jg({
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
		}), (e, t) => (o(), F(B(X), L(e.$attrs, {
			ref: B(f),
			dir: B(p),
			"data-complete": b.value ? "" : void 0,
			"data-disabled": B(l) ? "" : void 0
		}), {
			default: u(() => [v(e.$slots, "default", { modelValue: B(m) }), G(wl, {
				id: e.id,
				as: "input",
				feature: "focusable",
				tabindex: "-1",
				value: h.value.join(""),
				name: e.name ?? "",
				disabled: B(l),
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
}), Xg = /* @__PURE__ */ W({
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
		let n = e, r = qg(), i = z(() => [...r.inputElements.value]), a = z(() => r.currentModelValue.value[n.index]), s = z(() => n.disabled || r.disabled.value), c = z(() => r.otp.value), l = z(() => r.mask.value), d = /^\d*$/, f = /\D/g, { primitiveElement: h, currentElement: g } = Js();
		function _(e) {
			let t = e.target;
			if ((e.data?.length ?? 0) > 1) {
				D(t.value);
				return;
			}
			if (r.isNumericMode.value && !d.test(t.value)) {
				t.value = t.value.replace(f, "");
				return;
			}
			t.value = e.data || t.value.slice(-1), ee(n.index, t.value);
			let a = i.value[n.index + 1];
			a && a.focus();
		}
		function y() {
			t(() => {
				let e = g.value;
				e && (!e.value && e === Cr() ? e.placeholder = "" : e.placeholder = r.placeholder.value);
			});
		}
		function b(e) {
			kr(e, Cr(), void 0, {
				itemsArray: i.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: "horizontal",
				dir: r.dir.value
			});
		}
		function x(e) {
			if (e.preventDefault(), e.target.value) ee(n.index, "");
			else {
				let e = i.value[n.index - 1];
				e && (e.focus(), ee(n.index - 1, ""));
			}
		}
		function S(e) {
			e.key === "Delete" && (e.preventDefault(), ee(n.index, ""));
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
		function E(e) {
			e.preventDefault();
			let t = e.clipboardData;
			if (!t) return;
			let n = t.getData("text");
			D(r.isNumericMode.value ? n.replace(f, "") : n);
		}
		function D(e) {
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
		function O(e) {
			let t = e.length - 1;
			for (; t >= 0 && e[t] === "";) e.pop(), t--;
			return e;
		}
		function ee(e, t) {
			let n = [...r.currentModelValue.value];
			if (r.isNumericMode.value) {
				let r = +t;
				t === "" || isNaN(r) ? delete n[e] : n[e] = r;
			} else n[e] = t;
			r.modelValue.value = O(n);
		}
		return C(a, y), p(() => {
			r.onInputElementChange(g.value);
		}), m(() => {
			r.inputElements?.value.delete(g.value);
		}), (e, t) => (o(), F(B(X), {
			ref_key: "primitiveElement",
			ref: h,
			autocapitalize: "none",
			as: e.as,
			"as-child": e.asChild,
			autocomplete: c.value ? "one-time-code" : "false",
			type: l.value ? "password" : "text",
			inputmode: B(r).isNumericMode.value ? "numeric" : "text",
			pattern: B(r).isNumericMode.value ? "[0-9]*" : void 0,
			placeholder: B(r).placeholder.value,
			value: a.value,
			disabled: s.value,
			"data-disabled": s.value ? "" : void 0,
			"data-complete": B(r).isCompleted.value ? "" : void 0,
			"aria-label": `pin input ${e.index + 1} of ${i.value.length}`,
			onInput: t[0] ||= (e) => _(e),
			onKeydown: [
				ye(b, [
					"left",
					"right",
					"up",
					"down",
					"home",
					"end"
				]),
				ye(x, ["backspace"]),
				ye(S, ["delete"])
			],
			onFocus: w,
			onBlur: T,
			onPaste: E
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
}), Zg = 100, [Qg, $g] = /* @__PURE__ */ q("ProgressRoot"), e_ = (e) => typeof e == "number";
function t_(e, t) {
	return Tr(e) || e_(e) && !Number.isNaN(e) && e <= t && e >= 0 ? e : (console.error(`Invalid prop \`value\` of value \`${e}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Zg} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function n_(e) {
	return e_(e) && !Number.isNaN(e) && e > 0 ? e : (console.error(`Invalid prop \`max\` of value \`${e}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Zg}\`.`), Zg);
}
var r_ = /* @__PURE__ */ W({
	__name: "ProgressRoot",
	props: {
		modelValue: {
			type: [Number, null],
			required: !1
		},
		max: {
			type: Number,
			required: !1,
			default: Zg
		},
		getValueLabel: {
			type: Function,
			required: !1,
			default: (e, t) => e_(e) ? `${Math.round(e / t * Zg)}%` : void 0
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
		J();
		let a = zn(r, "modelValue", i, { passive: r.modelValue === void 0 }), s = zn(r, "max", i, { passive: r.max === void 0 });
		C(() => a.value, async (e) => {
			let n = t_(e, r.max);
			n !== e && (await t(), a.value = n);
		}, { immediate: !0 }), C(() => r.max, (e) => {
			let t = n_(r.max);
			t !== e && (s.value = t);
		}, { immediate: !0 });
		let c = z(() => Tr(a.value) ? "indeterminate" : a.value === s.value ? "complete" : "loading");
		return $g({
			modelValue: a,
			max: s,
			progressState: c
		}), (e, t) => (o(), F(B(X), {
			"as-child": e.asChild,
			as: e.as,
			"aria-valuemax": B(s),
			"aria-valuemin": 0,
			"aria-valuenow": e_(B(a)) ? B(a) : void 0,
			"aria-valuetext": e.getValueText?.(B(a), B(s)),
			"aria-label": e.getValueLabel(B(a), B(s)),
			role: "progressbar",
			"data-state": c.value,
			"data-value": B(a) ?? void 0,
			"data-max": B(s)
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: B(a) })]),
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
}), i_ = /* @__PURE__ */ W({
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
		let t = e, n = Qg();
		return J(), (e, r) => (o(), F(B(X), L(t, {
			"data-state": B(n).progressState.value,
			"data-value": B(n).modelValue?.value ?? void 0,
			"data-max": B(n).max.value
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, [
			"data-state",
			"data-value",
			"data-max"
		]));
	}
}), a_ = "radio.select";
function o_(e, t, n) {
	wr(a_, n, {
		originalEvent: e,
		value: t
	});
}
//#endregion
//#region node_modules/reka-ui/dist/RadioGroup/Radio.js
var s_ = /* @__PURE__ */ W({
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
		let n = e, r = t, i = zn(n, "checked", r, { passive: n.checked === void 0 }), { value: a } = Ce(n), { forwardRef: s, currentElement: c } = J(), l = hs(c), d = z(() => n.id && c.value ? document.querySelector(`[for="${n.id}"]`)?.innerText ?? n.value : void 0);
		function f(e) {
			n.disabled || o_(e, n.value, (e) => {
				r("select", e), !e?.defaultPrevented && (i.value = !0, l.value && e.stopPropagation());
			});
		}
		return (e, t) => (o(), F(B(X), L(e.$attrs, {
			id: e.id,
			ref: B(s),
			role: "radio",
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"aria-checked": B(i),
			"aria-label": d.value,
			"as-child": e.asChild,
			disabled: e.disabled ? "" : void 0,
			"data-state": B(i) ? "checked" : "unchecked",
			"data-disabled": e.disabled ? "" : void 0,
			value: B(a),
			required: e.required,
			name: e.name,
			onClick: A(f, ["stop"])
		}), {
			default: u(() => [v(e.$slots, "default", { checked: B(i) }), B(l) && e.name ? (o(), F(B(wl), {
				key: 0,
				type: "radio",
				tabindex: "-1",
				value: B(a),
				checked: !!B(i),
				name: e.name,
				disabled: e.disabled,
				required: e.required
			}, null, 8, [
				"value",
				"checked",
				"name",
				"disabled",
				"required"
			])) : N("v-if", !0)]),
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
}), [c_, l_] = /* @__PURE__ */ q("RadioGroupRoot"), u_ = /* @__PURE__ */ W({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = J(), s = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), { disabled: c, loop: l, orientation: d, name: f, required: p, dir: m } = Ce(n), h = ls(m), g = hs(a);
		return l_({
			modelValue: s,
			changeModelValue: (e) => {
				s.value = e;
			},
			disabled: c,
			loop: l,
			orientation: d,
			name: f?.value,
			required: p
		}), (e, t) => (o(), F(B(qf), {
			"as-child": "",
			orientation: B(d),
			dir: B(h),
			loop: B(l)
		}, {
			default: u(() => [G(B(X), {
				ref: B(i),
				role: "radiogroup",
				"data-disabled": B(c) ? "" : void 0,
				"as-child": e.asChild,
				as: e.as,
				"aria-orientation": B(d),
				"aria-required": B(p),
				dir: B(h)
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: B(s) }), B(g) && B(f) ? (o(), F(B(wl), {
					key: 0,
					required: B(p),
					disabled: B(c),
					value: B(s),
					name: B(f)
				}, null, 8, [
					"required",
					"disabled",
					"value",
					"name"
				])) : N("v-if", !0)]),
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
}), [d_, f_] = /* @__PURE__ */ q("RadioGroupItem"), p_ = /* @__PURE__ */ W({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = J(), s = c_(), c = z(() => s.disabled.value || n.disabled), l = z(() => s.required.value || n.required), d = z(() => gr(s.modelValue?.value, n.value));
		f_({
			disabled: c,
			checked: d
		});
		let f = k(!1), p = [
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		];
		xn("keydown", (e) => {
			p.includes(e.key) && (f.value = !0);
		}), xn("keyup", () => {
			f.value = !1;
		});
		function m() {
			setTimeout(() => {
				f.value && a.value?.click();
			}, 0);
		}
		return (e, t) => (o(), F(B(Jf), {
			checked: d.value,
			disabled: c.value,
			"as-child": "",
			focusable: !c.value,
			active: d.value
		}, {
			default: u(() => [G(s_, L({
				...e.$attrs,
				...n
			}, {
				ref: B(i),
				checked: d.value,
				required: l.value,
				disabled: c.value,
				"onUpdate:checked": t[0] ||= (t) => B(s).changeModelValue(e.value),
				onSelect: t[1] ||= (e) => r("select", e),
				onKeydown: t[2] ||= ye(A(() => {}, ["prevent"]), ["enter"]),
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
}), m_ = /* @__PURE__ */ W({
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
		let { forwardRef: t } = J(), n = d_();
		return (e, r) => (o(), F(B(Gs), { present: e.forceMount || B(n).checked.value }, {
			default: u(() => [G(B(X), L({
				ref: B(t),
				"data-state": B(n).checked.value ? "checked" : "unchecked",
				"data-disabled": B(n).disabled.value ? "" : void 0,
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
}), [h_, g_] = /* @__PURE__ */ q("ScrollAreaRoot"), __ = /* @__PURE__ */ W({
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
		let n = e, r = k(0), i = k(0), a = k(), s = k(), c = k(), l = k(), d = k(!1), f = k(!1), { type: p, dir: m, scrollHideDelay: h } = Ce(n), g = ls(m);
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
		let { forwardRef: b, currentElement: x } = J();
		return g_({
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
		}), (e, t) => (o(), F(B(X), {
			ref: B(b),
			"as-child": n.asChild,
			as: e.as,
			dir: B(g),
			style: O({
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
}), v_ = /* @__PURE__ */ W({
	__name: "ScrollAreaCornerImpl",
	setup(e) {
		let t = h_(), n = k(0), r = k(0), i = z(() => !!n.value && !!r.value);
		function a() {
			let e = t.scrollbarX.value?.offsetHeight || 0;
			t.onCornerHeightChange(e), r.value = e;
		}
		function s() {
			let e = t.scrollbarY.value?.offsetWidth || 0;
			t.onCornerWidthChange(e), n.value = e;
		}
		return Pn(t.scrollbarX.value, a), Pn(t.scrollbarY.value, s), C(() => t.scrollbarX.value, a), C(() => t.scrollbarY.value, s), (e, a) => i.value ? (o(), F(B(X), L({
			key: 0,
			style: {
				width: `${n.value}px`,
				height: `${r.value}px`,
				position: "absolute",
				right: B(t).dir.value === "ltr" ? 0 : void 0,
				left: B(t).dir.value === "rtl" ? 0 : void 0,
				bottom: 0
			}
		}, e.$parent?.$props), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["style"])) : N("v-if", !0);
	}
}), y_ = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n } = J(), r = h_(), i = z(() => !!r.scrollbarX.value && !!r.scrollbarY.value), a = z(() => r.type.value !== "scroll" && i.value);
		return (e, r) => a.value ? (o(), F(v_, L({ key: 0 }, t, { ref: B(n) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : N("v-if", !0);
	}
});
//#endregion
//#region node_modules/reka-ui/dist/ScrollArea/utils.js
function b_(e, t) {
	return (n) => {
		if (e[0] === e[1] || t[0] === t[1]) return t[0];
		let r = (t[1] - t[0]) / (e[1] - e[0]);
		return t[0] + r * (n - e[0]);
	};
}
function x_(e) {
	let t = S_(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
	return Math.max(r, 18);
}
function S_(e, t) {
	let n = e / t;
	return Number.isNaN(n) ? 0 : n;
}
function C_(e, t = () => {}) {
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
function w_(e, t, n = "ltr") {
	let r = x_(t), i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - i, o = t.content - t.viewport, s = a - r, c = n === "ltr" ? [0, o] : [o * -1, 0], l = br(e, c[0], c[1]);
	return b_([0, o], [0, s])(l);
}
function T_(e) {
	return e ? Number.parseInt(e, 10) : 0;
}
function E_(e, t, n, r = "ltr") {
	let i = x_(n), a = i / 2, o = t || a, s = i - o, c = n.scrollbar.paddingStart + o, l = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
	return b_([c, l], d)(e);
}
function D_(e, t) {
	return e > 0 && e < t;
}
//#endregion
//#region node_modules/reka-ui/dist/ScrollArea/ScrollAreaScrollbarX.js
var O_ = /* @__PURE__ */ W({
	__name: "ScrollAreaScrollbarX",
	setup(e) {
		let t = h_(), n = L_(), { forwardRef: r, currentElement: i } = J();
		p(() => {
			i.value && t.onScrollbarXChange(i.value);
		});
		let a = z(() => n.sizes.value);
		return (e, i) => (o(), F(B_, {
			ref: B(r),
			"is-horizontal": !0,
			"data-orientation": "horizontal",
			style: O({
				bottom: 0,
				left: B(t).dir.value === "rtl" ? "var(--reka-scroll-area-corner-width)" : 0,
				right: B(t).dir.value === "ltr" ? "var(--reka-scroll-area-corner-width)" : 0,
				"--reka-scroll-area-thumb-width": a.value ? `${B(x_)(a.value)}px` : void 0
			}),
			onOnDragScroll: i[0] ||= (e) => B(n).onDragScroll(e.x)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), k_ = /* @__PURE__ */ W({
	__name: "ScrollAreaScrollbarY",
	setup(e) {
		let t = h_(), n = L_(), { forwardRef: r, currentElement: i } = J();
		p(() => {
			i.value && t.onScrollbarYChange(i.value);
		});
		let a = z(() => n.sizes.value);
		return (e, i) => (o(), F(B_, {
			ref: B(r),
			"is-horizontal": !1,
			"data-orientation": "vertical",
			style: O({
				top: 0,
				right: B(t).dir.value === "ltr" ? 0 : void 0,
				left: B(t).dir.value === "rtl" ? 0 : void 0,
				bottom: "var(--reka-scroll-area-corner-height)",
				"--reka-scroll-area-thumb-height": a.value ? `${B(x_)(a.value)}px` : void 0
			}),
			onOnDragScroll: i[0] ||= (e) => B(n).onDragScroll(e.y)
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), A_ = /* @__PURE__ */ W({
	__name: "ScrollAreaScrollbarAuto",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = h_(), n = P_(), { forwardRef: r } = J(), i = k(!1), a = cn(() => {
			if (t.viewport.value) {
				let e = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, r = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
				i.value = n.isHorizontal.value ? e : r;
			}
		}, 10);
		return p(() => a()), Pn(t.viewport, a), Pn(t.content, a), (e, t) => (o(), F(B(Gs), { present: e.forceMount || i.value }, {
			default: u(() => [G(z_, L(e.$attrs, {
				ref: B(r),
				"data-state": i.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), j_ = /* @__PURE__ */ W({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbarGlimpse",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = h_(), n = P_(), { forwardRef: r } = J(), { state: i, dispatch: a } = zs("hidden", {
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
		}), c = z(() => i.value !== "hidden");
		function l() {
			a("POINTER_ENTER");
		}
		function d() {
			a("POINTER_LEAVE");
		}
		let f = cn(() => a("SCROLL_END"), 100);
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
		}), (e, t) => (o(), F(B(Gs), { present: e.forceMount || c.value }, {
			default: u(() => [G(A_, L(e.$attrs, {
				ref: B(r),
				"data-state": c.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), M_ = /* @__PURE__ */ W({
	inheritAttrs: !1,
	__name: "ScrollAreaScrollbarHover",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = h_(), { forwardRef: n } = J(), r, i = k(!1);
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
		}), (e, t) => (o(), F(B(Gs), { present: e.forceMount || i.value }, {
			default: u(() => [G(A_, L(e.$attrs, {
				ref: B(n),
				"data-state": i.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), N_ = /* @__PURE__ */ W({
	__name: "ScrollAreaScrollbarScroll",
	props: { forceMount: {
		type: Boolean,
		required: !1
	} },
	setup(e) {
		let t = h_(), n = P_(), { forwardRef: r } = J(), { state: i, dispatch: a } = zs("hidden", {
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
		}), c = z(() => i.value !== "hidden");
		s((e) => {
			if (i.value === "idle") {
				let n = window.setTimeout(a, t.scrollHideDelay.value, "HIDE");
				e(() => {
					window.clearTimeout(n);
				});
			}
		});
		let l = cn(() => a("SCROLL_END"), 100);
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
		}), (e, t) => (o(), F(B(Gs), { present: e.forceMount || c.value }, {
			default: u(() => [G(z_, L(e.$attrs, {
				ref: B(r),
				"data-state": c.value ? "visible" : "hidden"
			}), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}, 8, ["present"]));
	}
}), [P_, F_] = /* @__PURE__ */ q("ScrollAreaScrollbar"), I_ = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n } = J(), r = h_(), i = z(() => t.orientation === "horizontal");
		C(i, () => {
			i.value ? r.onScrollbarXEnabledChange(!0) : r.onScrollbarYEnabledChange(!0);
		}, { immediate: !0 }), m(() => {
			r.onScrollbarXEnabledChange(!1), r.onScrollbarYEnabledChange(!1);
		});
		let { orientation: a, forceMount: s, asChild: c, as: l } = Ce(t);
		return F_({
			orientation: a,
			forceMount: s,
			isHorizontal: i,
			as: l,
			asChild: c
		}), (e, t) => B(r).type.value === "hover" ? (o(), F(M_, L({ key: 0 }, e.$attrs, {
			ref: B(n),
			"force-mount": B(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : B(r).type.value === "scroll" ? (o(), F(N_, L({ key: 1 }, e.$attrs, {
			ref: B(n),
			"force-mount": B(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : B(r).type.value === "glimpse" ? (o(), F(j_, L({ key: 2 }, e.$attrs, {
			ref: B(n),
			"force-mount": B(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : B(r).type.value === "auto" ? (o(), F(A_, L({ key: 3 }, e.$attrs, {
			ref: B(n),
			"force-mount": B(s)
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["force-mount"])) : B(r).type.value === "always" ? (o(), F(z_, L({ key: 4 }, e.$attrs, {
			ref: B(n),
			"data-state": "visible"
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : N("v-if", !0);
	}
}), [L_, R_] = /* @__PURE__ */ q("ScrollAreaScrollbarVisible"), z_ = /* @__PURE__ */ W({
	__name: "ScrollAreaScrollbarVisible",
	setup(e) {
		let t = h_(), n = P_(), { forwardRef: r } = J(), i = k({
			content: 0,
			viewport: 0,
			scrollbar: {
				size: 0,
				paddingStart: 0,
				paddingEnd: 0
			}
		}), a = z(() => {
			let e = S_(i.value.viewport, i.value.content);
			return e > 0 && e < 1;
		}), s = k(), c = k(0);
		function l(e, n) {
			if (h.value) {
				let r = t.viewport.value.scrollLeft + e.deltaY;
				t.viewport.value.scrollLeft = r, D_(r, n) && e.preventDefault();
			} else {
				let r = t.viewport.value.scrollTop + e.deltaY;
				t.viewport.value.scrollTop = r, D_(r, n) && e.preventDefault();
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
			return E_(e, c.value, i.value, t);
		}
		let h = z(() => n.isHorizontal.value);
		function g(e) {
			h.value ? t.viewport.value.scrollLeft = m(e, t.dir.value) : t.viewport.value.scrollTop = m(e);
		}
		function _() {
			if (h.value) {
				if (t.viewport.value && s.value) {
					let e = t.viewport.value.scrollLeft, n = w_(e, i.value, t.dir.value);
					s.value.style.transform = `translate3d(${n}px, 0, 0)`;
				}
			} else if (t.viewport.value && s.value) {
				let e = t.viewport.value.scrollTop, n = w_(e, i.value);
				s.value.style.transform = `translate3d(0, ${n}px, 0)`;
			}
		}
		function y(e) {
			s.value = e;
		}
		return R_({
			sizes: i,
			hasThumb: a,
			handleWheelScroll: l,
			handleThumbDown: d,
			handleThumbUp: f,
			handleSizeChange: p,
			onThumbPositionChange: _,
			onThumbChange: y,
			onDragScroll: g
		}), (e, t) => h.value ? (o(), F(O_, L({ key: 0 }, e.$attrs, { ref: B(r) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : (o(), F(k_, L({ key: 1 }, e.$attrs, { ref: B(r) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), B_ = /* @__PURE__ */ W({
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
		let n = e, r = t, i = h_(), a = L_(), s = P_(), { forwardRef: c, currentElement: l } = J(), d = k(""), f = k();
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
					paddingStart: T_(getComputedStyle(l.value).paddingLeft),
					paddingEnd: T_(getComputedStyle(l.value).paddingRight)
				}
			}) : a.handleSizeChange({
				content: i.viewport.value?.scrollHeight ?? 0,
				viewport: i.viewport.value?.offsetHeight ?? 0,
				scrollbar: {
					size: l.value?.clientHeight ?? 0,
					paddingStart: T_(getComputedStyle(l.value).paddingTop),
					paddingEnd: T_(getComputedStyle(l.value).paddingBottom)
				}
			}), a.onThumbPositionChange());
		}
		return Pn(l, x), Pn(i.content, x), (e, t) => (o(), F(B(X), {
			ref: B(c),
			style: { position: "absolute" },
			"data-scrollbarimpl": "",
			as: B(s).as.value,
			"as-child": B(s).asChild.value,
			onPointerdown: g,
			onPointermove: _,
			onPointerup: y
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), V_ = /* @__PURE__ */ W({
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
		let t = e, n = h_(), r = L_();
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
		let { forwardRef: s, currentElement: c } = J(), l = k(), d = z(() => n.viewport.value);
		function f() {
			l.value || (l.value = C_(d.value, r.onThumbPositionChange), r.onThumbPositionChange());
		}
		return hn(z(() => r.sizes.value), () => {
			r.onThumbChange(c.value), d.value && (r.onThumbPositionChange(), d.value.addEventListener("scroll", f));
		}), m(() => {
			d.value.removeEventListener("scroll", f), n.viewport.value?.removeEventListener("scroll", f);
		}), (e, n) => (o(), F(B(X), {
			ref: B(s),
			"data-state": B(r).hasThumb ? "visible" : "hidden",
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
}), H_ = /* @__PURE__ */ W({
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
		let n = e, { nonce: r } = Ce(n), i = hf(r), a = h_(), s = k();
		p(() => {
			a.onViewportChange(s.value), a.onContentChange(l.value);
		}), t({ viewportElement: s });
		let { forwardRef: c, currentElement: l } = J();
		return (e, t) => (o(), D(V, null, [R("div", L({
			ref_key: "viewportElement",
			ref: s,
			"data-reka-scroll-area-viewport": "",
			style: {
				overflowX: B(a).scrollbarXEnabled.value ? "scroll" : "hidden",
				overflowY: B(a).scrollbarYEnabled.value ? "scroll" : "hidden"
			}
		}, e.$attrs, { tabindex: 0 }), [G(B(X), {
			ref: B(c),
			style: O({ minWidth: B(a).scrollbarXEnabled.value ? "fit-content" : void 0 }),
			"as-child": n.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, [
			"style",
			"as-child",
			"as"
		])], 16), G(B(X), {
			as: "style",
			nonce: B(i)
		}, {
			default: u(() => t[0] ||= [H(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), U_ = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], W_ = [" ", "Enter"];
function G_(e, t, n) {
	return e === void 0 ? !1 : Array.isArray(e) ? e.some((e) => K_(e, t, n)) : K_(e, t, n);
}
function K_(e, t, n) {
	return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? e?.[n] === t?.[n] : gr(e, t);
}
function q_(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectRoot.js
var J_ = {
	key: 0,
	value: ""
}, [Y_, X_] = /* @__PURE__ */ q("SelectRoot"), Z_ = /* @__PURE__ */ W({
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
		let n = e, r = t, { required: i, disabled: a, multiple: s, dir: c } = Ce(n), l = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
			passive: n.modelValue === void 0,
			deep: !0
		}), d = zn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		}), p = k(), m = k(), h = k({
			x: 0,
			y: 0
		}), g = z(() => s.value && Array.isArray(l.value) ? l.value?.length === 0 : Tr(l.value));
		xl({ isProvider: !0 });
		let _ = ls(c), y = hs(p), b = k(/* @__PURE__ */ new Set()), x = z(() => Array.from(b.value).map((e) => e.value).join(";"));
		function S(e) {
			if (s.value) {
				let t = Array.isArray(l.value) ? [...l.value] : [], r = t.findIndex((t) => K_(t, e, n.by));
				r === -1 ? t.push(e) : t.splice(r, 1), l.value = [...t];
			} else l.value = e;
		}
		function C(e) {
			return Array.from(b.value).find((t) => G_(e, t.value, n.by));
		}
		return X_({
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
		}), (e, t) => (o(), F(B(Yl), null, {
			default: u(() => [v(e.$slots, "default", {
				modelValue: B(l),
				open: B(d)
			}), B(y) && e.name ? (o(), F(Q_, {
				key: x.value,
				"aria-hidden": "true",
				tabindex: "-1",
				multiple: B(s),
				required: B(i),
				name: e.name,
				autocomplete: e.autocomplete,
				disabled: B(a),
				value: B(l)
			}, {
				default: u(() => [B(Tr)(B(l)) ? (o(), D("option", J_)) : N("v-if", !0), (o(!0), D(V, null, f(Array.from(b.value), (e) => (o(), D("option", L({ key: e.value ?? "" }, { ref_for: !0 }, e), null, 16))), 128))]),
				_: 1
			}, 8, [
				"multiple",
				"required",
				"name",
				"autocomplete",
				"disabled",
				"value"
			])) : N("v-if", !0)]),
			_: 3
		}));
	}
}), Q_ = /* @__PURE__ */ W({
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
		let t = e, n = k(), r = Y_();
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
		return (e, r) => (o(), F(B(Sl), { "as-child": "" }, {
			default: u(() => [R("select", L({
				ref_key: "selectElement",
				ref: n
			}, t, { onInput: i }), [v(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), $_ = /* @__PURE__ */ W({
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
		let t = gs(e);
		return (e, n) => (o(), F(B(ff), L(B(t), { style: {
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
}), ev = {
	onViewportChange: () => {},
	itemTextRefCallback: () => {},
	itemRefCallback: () => {}
}, [tv, nv] = /* @__PURE__ */ q("SelectContent"), rv = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y_();
		ps(), Rr(n.bodyLock);
		let { CollectionSlot: a, getItems: c } = xl(), l = k();
		Ns(l);
		let { search: d, handleTypeaheadSearch: f } = Bs(), p = k(), m = k(), h = k(), g = k(!1), _ = k(!1), y = k(!1);
		function b() {
			m.value && l.value && Yc([m.value, l.value]);
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
				setTimeout(() => Yc(t)), e.preventDefault();
			}
		}
		let T = gs(z(() => n.position === "popper" ? n : {}).value);
		return nv({
			content: l,
			viewport: p,
			onViewportChange: (e) => {
				p.value = e;
			},
			itemRefCallback: (e, t, n) => {
				let r = !_.value && !n, a = G_(i.modelValue.value, t, i.by);
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
				(G_(i.modelValue.value, t, i.by) || r) && (h.value = e);
			},
			focusSelectedItem: b,
			position: n.position,
			isPositioned: g,
			searchRef: d
		}), (e, t) => (o(), F(B(a), null, {
			default: u(() => [G(B(Rc), {
				"as-child": "",
				onMountAutoFocus: t[6] ||= A(() => {}, ["prevent"]),
				onUnmountAutoFocus: t[7] ||= (e) => {
					r("closeAutoFocus", e), !e.defaultPrevented && (B(i).triggerElement.value?.focus({ preventScroll: !0 }), e.preventDefault());
				}
			}, {
				default: u(() => [G(B(wc), {
					"as-child": "",
					"disable-outside-pointer-events": e.disableOutsidePointerEvents,
					onFocusOutside: t[2] ||= A(() => {}, ["prevent"]),
					onDismiss: t[3] ||= (e) => B(i).onOpenChange(!1),
					onEscapeKeyDown: t[4] ||= (e) => r("escapeKeyDown", e),
					onPointerDownOutside: t[5] ||= (e) => r("pointerDownOutside", e)
				}, {
					default: u(() => [(o(), F(Ee(e.position === "popper" ? $_ : ov), L({
						...e.$attrs,
						...B(T)
					}, {
						id: B(i).contentId,
						ref: (e) => {
							if (!e) return;
							let t = B(bn)(e);
							t?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = t.firstElementChild : l.value = t;
						},
						role: "listbox",
						"data-state": B(i).open.value ? "open" : "closed",
						dir: B(i).dir.value,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none"
						},
						onContextmenu: t[0] ||= A(() => {}, ["prevent"]),
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
}), [iv, av] = /* @__PURE__ */ q("SelectItemAlignedPosition"), ov = /* @__PURE__ */ W({
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
		let r = e, i = n, { getItems: a } = xl(), s = Y_(), c = tv(), l = k(!1), d = k(!0), f = k(), { forwardRef: m, currentElement: h } = J(), { viewport: g, selectedItem: _, selectedItemText: y, focusSelectedItem: b } = c;
		function x() {
			if (s.triggerElement.value && s.valueElement.value && f.value && h.value && g?.value && _?.value && y?.value) {
				let e = s.triggerElement.value.getBoundingClientRect(), t = h.value.getBoundingClientRect(), n = s.valueElement.value.getBoundingClientRect(), r = y.value.getBoundingClientRect();
				if (s.dir.value !== "rtl") {
					let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - 10, u = br(a, 10, Math.max(10, l - c));
					f.value.style.minWidth = `${s}px`, f.value.style.left = `${u}px`;
				} else {
					let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, c = Math.max(s, t.width), l = window.innerWidth - 10, u = br(a, 10, Math.max(10, l - c));
					f.value.style.minWidth = `${s}px`, f.value.style.right = `${u}px`;
				}
				let o = a().map((e) => e.ref), c = window.innerHeight - 20, u = g.value.scrollHeight, d = window.getComputedStyle(h.value), p = Number.parseInt(d.borderTopWidth, 10), m = Number.parseInt(d.paddingTop, 10), v = Number.parseInt(d.borderBottomWidth, 10), b = Number.parseInt(d.paddingBottom, 10), x = p + m + u + b + v, S = Math.min(_.value.offsetHeight * 5, x), C = window.getComputedStyle(g.value), w = Number.parseInt(C.paddingTop, 10), T = Number.parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - 10, D = c - E, O = _.value.offsetHeight / 2, ee = _.value.offsetTop + O, k = p + m + ee, te = x - k;
				if (k <= E) {
					let e = _.value === o.at(-1);
					f.value.style.bottom = "0px";
					let t = h.value.clientHeight - g.value.offsetTop - g.value.offsetHeight, n = k + Math.max(D, O + (e ? T : 0) + t + v);
					f.value.style.height = `${n}px`;
				} else {
					let e = _.value === o[0];
					f.value.style.top = "0px";
					let t = Math.max(E, p + g.value.offsetTop + (e ? w : 0) + O) + te;
					f.value.style.height = `${t}px`, g.value.scrollTop = k - E + g.value.offsetTop;
				}
				f.value.style.margin = "10px 0", f.value.style.minHeight = `${S}px`, f.value.style.maxHeight = `${c}px`, i("placed"), requestAnimationFrame(() => l.value = !0);
			}
		}
		let S = k("");
		p(async () => {
			await t(), x(), h.value && (S.value = window.getComputedStyle(h.value).zIndex);
		});
		function C(e) {
			e && d.value === !0 && (x(), b?.(), d.value = !1);
		}
		return Pn(s.triggerElement, () => {
			x();
		}), av({
			contentWrapper: f,
			shouldExpandOnScrollRef: l,
			onScrollButtonChange: C
		}), (e, t) => (o(), D("div", {
			ref_key: "contentWrapperElement",
			ref: f,
			style: O({
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: S.value
			})
		}, [G(B(X), L({
			ref: B(m),
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
}), sv = /* @__PURE__ */ W({
	inheritAttrs: !1,
	__name: "SelectProvider",
	props: { context: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return X_(e.context), nv(ev), (e, t) => v(e.$slots, "default");
	}
}), cv = { key: 1 }, lv = /* @__PURE__ */ W({
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
		let n = e, i = Y(n, t), a = Y_(), s = k();
		p(() => {
			s.value = new DocumentFragment();
		});
		let c = k(), l = z(() => n.forceMount || a.open.value), d = k(l.value);
		return C(l, () => {
			setTimeout(() => d.value = l.value);
		}), (e, t) => l.value || d.value || c.value?.present ? (o(), F(B(Gs), {
			key: 0,
			ref_key: "presenceRef",
			ref: c,
			present: l.value
		}, {
			default: u(() => [G(rv, P(r({
				...B(i),
				...e.$attrs
			})), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16)]),
			_: 3
		}, 8, ["present"])) : s.value ? (o(), D("div", cv, [(o(), F(re, { to: s.value }, [G(sv, { context: B(a) }, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["context"])], 8, ["to"]))])) : N("v-if", !0);
	}
}), uv = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(X), {
			"aria-hidden": "true",
			as: e.as,
			"as-child": e.asChild
		}, {
			default: u(() => [v(e.$slots, "default", {}, () => [t[0] ||= H("▼")])]),
			_: 3
		}, 8, ["as", "as-child"]));
	}
}), [dv, fv] = /* @__PURE__ */ q("SelectItem"), pv = /* @__PURE__ */ W({
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
		let r = e, i = n, { disabled: a } = Ce(r), s = Y_(), c = tv(), { forwardRef: l, currentElement: d } = J(), { CollectionItem: f } = xl(), m = z(() => G_(s.modelValue?.value, r.value, s.by)), h = k(!1), g = k(r.textValue ?? ""), _ = Fs(void 0, "reka-select-item-text");
		async function y(e) {
			e.defaultPrevented || wr("select.select", b, {
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
			await t(), !e.defaultPrevented && e.currentTarget === Cr() && c.onItemLeave?.();
		}
		async function C(e) {
			await t(), !e.defaultPrevented && (c.searchRef?.value !== "" && e.key === " " || (W_.includes(e.key) && y(e), e.key === " " && e.preventDefault()));
		}
		if (r.value === "") throw Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
		return p(() => {
			d.value && c.itemRefCallback(d.value, r.value, r.disabled);
		}), fv({
			value: r.value,
			disabled: a,
			textId: _,
			isSelected: m,
			onItemTextChange: (e) => {
				g.value = ((g.value || e?.textContent) ?? "").trim();
			}
		}), (e, t) => (o(), F(B(f), { value: { textValue: g.value } }, {
			default: u(() => [G(B(X), {
				ref: B(l),
				role: "option",
				"aria-labelledby": B(_),
				"data-highlighted": h.value ? "" : void 0,
				"aria-selected": m.value,
				"data-state": m.value ? "checked" : "unchecked",
				"aria-disabled": B(a) || void 0,
				"data-disabled": B(a) ? "" : void 0,
				tabindex: B(a) ? void 0 : -1,
				as: e.as,
				"as-child": e.asChild,
				onFocus: t[0] ||= (e) => h.value = !0,
				onBlur: t[1] ||= (e) => h.value = !1,
				onPointerup: y,
				onPointerdown: t[2] ||= (e) => {
					e.currentTarget.focus({ preventScroll: !0 });
				},
				onTouchend: t[3] ||= A(() => {}, ["prevent", "stop"]),
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
}), mv = /* @__PURE__ */ W({
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
		let t = e, n = dv();
		return (e, r) => B(n).isSelected.value ? (o(), F(B(X), L({
			key: 0,
			"aria-hidden": "true"
		}, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16)) : N("v-if", !0);
	}
}), hv = /* @__PURE__ */ W({
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
		let t = e, n = Y_(), r = tv(), i = dv(), { forwardRef: a, currentElement: s } = J(), c = z(() => ({
			value: i.value,
			disabled: i.disabled.value,
			textContent: s.value?.textContent ?? i.value?.toString() ?? ""
		}));
		return p(() => {
			s.value && (i.onItemTextChange(s.value), r.itemTextRefCallback(s.value, i.value, i.disabled.value), n.onOptionAdd(c.value));
		}), m(() => {
			n.onOptionRemove(c.value);
		}), (e, n) => (o(), F(B(X), L({
			id: B(i).textId,
			ref: B(a)
		}, {
			...t,
			...e.$attrs
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), gv = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _v = /* @__PURE__ */ W({
	__name: "SelectScrollButtonImpl",
	emits: ["autoScroll"],
	setup(e, { emit: t }) {
		let n = t, { getItems: r } = xl(), i = tv(), a = k(null);
		function c() {
			a.value !== null && (window.clearInterval(a.value), a.value = null);
		}
		s(() => {
			r().map((e) => e.ref).find((e) => e === Cr())?.scrollIntoView({ block: "nearest" });
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
		return ce(() => c()), (e, t) => (o(), F(B(X), L({
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
}), vv = /* @__PURE__ */ W({
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
		let t = tv(), n = t.position === "item-aligned" ? iv() : void 0, { forwardRef: r, currentElement: i } = J(), a = k(!1);
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
		}), (e, n) => a.value ? (o(), F(_v, {
			key: 0,
			ref: B(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = B(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop + n.value.offsetHeight);
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 512)) : N("v-if", !0);
	}
}), yv = /* @__PURE__ */ W({
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
		let t = tv(), n = t.position === "item-aligned" ? iv() : void 0, { forwardRef: r, currentElement: i } = J(), a = k(!1);
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
		}), (e, n) => a.value ? (o(), F(_v, {
			key: 0,
			ref: B(r),
			onAutoScroll: n[0] ||= () => {
				let { viewport: e, selectedItem: n } = B(t);
				e?.value && n?.value && (e.value.scrollTop = e.value.scrollTop - n.value.offsetHeight);
			}
		}, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 512)) : N("v-if", !0);
	}
}), bv = /* @__PURE__ */ W({
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
		let t = e, n = Y_(), { forwardRef: r, currentElement: i } = J(), a = z(() => n.disabled?.value || t.disabled);
		n.contentId ||= Fs(void 0, "reka-select-content"), p(() => {
			n.onTriggerChange(i.value);
		});
		let { getItems: s } = xl(), { search: c, handleTypeaheadSearch: l, resetTypeahead: d } = Bs();
		function f() {
			a.value || (n.onOpenChange(!0), d());
		}
		function m(e) {
			f(), n.triggerPointerDownPosRef.value = {
				x: Math.round(e.pageX),
				y: Math.round(e.pageY)
			};
		}
		return (e, t) => (o(), F(B(Xl), {
			"as-child": "",
			reference: e.reference
		}, {
			default: u(() => [G(B(X), {
				ref: B(r),
				role: "combobox",
				type: e.as === "button" ? "button" : void 0,
				"aria-controls": B(n).contentId,
				"aria-expanded": B(n).open.value || !1,
				"aria-required": B(n).required?.value,
				"aria-autocomplete": "none",
				disabled: a.value,
				dir: B(n)?.dir.value,
				"data-state": B(n)?.open.value ? "open" : "closed",
				"data-disabled": a.value ? "" : void 0,
				"data-placeholder": B(q_)(B(n).modelValue?.value) ? "" : void 0,
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
				onPointerup: t[2] ||= A((e) => {
					e.pointerType === "touch" && m(e);
				}, ["prevent"]),
				onKeydown: t[3] ||= (e) => {
					let t = B(c) !== "";
					!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && t && e.key === " " || (B(l)(e.key, B(s)()), B(U_).includes(e.key) && (f(), e.preventDefault()));
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
}), xv = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n, currentElement: r } = J(), i = Y_();
		p(() => {
			i.valueElement = r;
		});
		let a = z(() => {
			let e = [], t = Array.from(i.optionsSet.value), n = (e) => t.find((t) => G_(e, t.value, i.by));
			return e = Array.isArray(i.modelValue.value) ? i.modelValue.value.map((e) => n(e)?.textContent ?? "") : [n(i.modelValue.value)?.textContent ?? ""], e.filter(Boolean);
		}), s = z(() => a.value.length ? a.value.join(", ") : t.placeholder);
		return (e, r) => (o(), F(B(X), {
			ref: B(n),
			as: e.as,
			"as-child": e.asChild,
			style: { pointerEvents: "none" },
			"data-placeholder": a.value.length ? void 0 : t.placeholder
		}, {
			default: u(() => [v(e.$slots, "default", {
				selectedLabel: a.value,
				modelValue: B(i).modelValue.value
			}, () => [H(U(s.value), 1)])]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-placeholder"
		]));
	}
}), Sv = /* @__PURE__ */ W({
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
		let t = e, { nonce: n } = Ce(t), r = hf(n), i = tv(), a = i.position === "item-aligned" ? iv() : void 0, { forwardRef: s, currentElement: c } = J();
		p(() => {
			i?.onViewportChange(c.value);
		});
		let l = k(0);
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
		return (e, n) => (o(), D(V, null, [G(B(X), L({
			ref: B(s),
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
		}, 16), G(B(X), {
			as: "style",
			nonce: B(r)
		}, {
			default: u(() => n[0] ||= [H(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")]),
			_: 1,
			__: [0]
		}, 8, ["nonce"])], 64));
	}
}), Cv = /* @__PURE__ */ W({
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
		let i = z(() => r(t.orientation) ? t.orientation : "horizontal"), a = z(() => i.value === "vertical" ? t.orientation : void 0), s = z(() => t.decorative ? { role: "none" } : {
			"aria-orientation": a.value,
			role: "separator"
		});
		return (e, t) => (o(), F(B(X), L({
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
}), wv = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(Cv, P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/utils/assert.js
function Tv(e, t = "Assertion failed!") {
	if (!e) throw console.error(t), Error(t);
}
//#endregion
//#region node_modules/reka-ui/dist/utils/dom.js
function Ev(e, t = document) {
	return yr ? t instanceof HTMLElement && t?.dataset?.panelGroupId === e ? t : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null : null;
}
function Dv(e, t = document) {
	return yr && t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
}
function Ov(e, t, n = document) {
	return yr ? kv(e, n).findIndex((e) => e.getAttribute("data-panel-resize-handle-id") === t) ?? null : null;
}
function kv(e, t = document) {
	return yr ? Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`)) : [];
}
function Av(e, t, n, r = document) {
	let i = Dv(t, r), a = kv(e, r), o = i ? a.indexOf(i) : -1;
	return [n[o]?.id ?? null, n[o + 1]?.id ?? null];
}
//#endregion
//#region node_modules/reka-ui/dist/utils/events.js
function jv(e) {
	return e.type === "keydown";
}
function Mv(e) {
	return e.type.startsWith("mouse");
}
function Nv(e) {
	return e.type.startsWith("touch");
}
function Pv(e) {
	if (Mv(e)) return {
		x: e.clientX,
		y: e.clientY
	};
	if (Nv(e)) {
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
function Fv(e, t) {
	let n = e === "horizontal", { x: r, y: i } = Pv(t);
	return n ? r : i;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/calculate.js
function Iv(e, t, n, r, i) {
	let a = n === "horizontal", o = Dv(t, i);
	Tv(o);
	let s = o.getAttribute("data-panel-group-id");
	Tv(s);
	let { initialCursorPosition: c } = r, l = Fv(n, e), u = Ev(s, i);
	Tv(u);
	let d = u.getBoundingClientRect(), f = a ? d.width : d.height;
	return (l - c) / f * 100;
}
function Lv(e, t, n, r, i, a) {
	if (jv(e)) {
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
	} else return r == null ? 0 : Iv(e, t, n, r, a);
}
function Rv({ layout: e, panelsArray: t, pivotIndices: n }) {
	let r = 0, i = 100, a = 0, o = 0, s = n[0];
	return Tv(s != null), t.forEach((e, t) => {
		let { constraints: n } = e, { maxSize: c = 100, minSize: l = 0 } = n;
		t === s ? (r = l, i = c) : (a += l, o += c);
	}), {
		valueMax: Math.min(i, 100 - a),
		valueMin: Math.max(r, 100 - o),
		valueNow: e[s]
	};
}
function zv({ panelDataArray: e }) {
	let t = Array.from({ length: e.length }), n = e.map((e) => e.constraints), r = 0, i = 100;
	for (let a = 0; a < e.length; a++) {
		let e = n[a];
		Tv(e);
		let { defaultSize: o } = e;
		o != null && (r++, t[a] = o, i -= o);
	}
	for (let a = 0; a < e.length; a++) {
		let o = n[a];
		Tv(o);
		let { defaultSize: s } = o;
		if (s != null) continue;
		let c = e.length - r, l = i / c;
		r++, t[a] = l, i -= l;
	}
	return t;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/compare.js
function Bv(e, t, n = 10) {
	e = Number.parseFloat(e.toFixed(n)), t = Number.parseFloat(t.toFixed(n));
	let r = e - t;
	return r === 0 ? 0 : r > 0 ? 1 : -1;
}
function Vv(e, t, n) {
	return Bv(e, t, n) === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/callPanelCallbacks.js
function Hv(e, t, n, r) {
	t.forEach((t, i) => {
		let a = e[i];
		Tv(a);
		let { callbacks: o, constraints: s, id: c } = a, { collapsedSize: l = 0, collapsible: u, sizeUnit: d } = s, f = t;
		d === "px" && r != null && (f = t / 100 * r);
		let p = n[c];
		if (p == null || !Vv(f, p)) {
			n[c] = f;
			let { onCollapse: e, onExpand: t, onResize: r } = o;
			r && r(f, p), u && (e || t) && (t && (p == null || Vv(p, l)) && !Vv(f, l) && t(), e && (p == null || !Vv(p, l)) && Vv(f, l) && e());
		}
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/debounce.js
function Uv(e, t = 10) {
	let n = null;
	return (...r) => {
		n !== null && clearTimeout(n), n = setTimeout(() => {
			e(...r);
		}, t);
	};
}
//#endregion
//#region node_modules/reka-ui/dist/utils/resizePanel.js
function Wv({ panelConstraints: e, panelIndex: t, size: n }) {
	let r = e[t];
	Tv(r != null);
	let { collapsedSize: i = 0, collapsible: a, maxSize: o = 100, minSize: s = 0 } = r;
	if (Bv(n, s) < 0) if (a) {
		let e = (i + s) / 2;
		n = Bv(n, e) < 0 ? i : s;
	} else n = s;
	return n = Math.min(o, n), n = Number.parseFloat(n.toFixed(10)), n;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/layout.js
function Gv(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Kv({ delta: e, layout: t, panelConstraints: n, pivotIndices: r, trigger: i }) {
	if (Vv(e, 0)) return t;
	let a = [...t], [o, s] = r;
	Tv(o != null), Tv(s != null);
	let c = 0;
	if (i === "keyboard") {
		{
			let r = e < 0 ? s : o, i = n[r];
			if (Tv(i), i.collapsible) {
				let i = t[r];
				Tv(i != null);
				let a = n[r];
				Tv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (Vv(i, o)) {
					let t = s - i;
					Bv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
		{
			let r = e < 0 ? o : s, i = n[r];
			Tv(i);
			let { collapsible: a } = i;
			if (a) {
				let i = t[r];
				Tv(i != null);
				let a = n[r];
				Tv(a);
				let { collapsedSize: o = 0, minSize: s = 0 } = a;
				if (Vv(i, s)) {
					let t = i - o;
					Bv(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
				}
			}
		}
	}
	{
		let r = e < 0 ? 1 : -1, i = e < 0 ? s : o, a = 0;
		for (;;) {
			let e = t[i];
			Tv(e != null);
			let o = Wv({
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
			Tv(o != null);
			let s = o - i, l = Wv({
				panelConstraints: n,
				panelIndex: r,
				size: s
			});
			if (!Vv(o, l) && (c += o - l, a[r] = l, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, { numeric: !0 }) >= 0)) break;
			e < 0 ? r-- : r++;
		}
	}
	if (Vv(c, 0)) return t;
	{
		let r = e < 0 ? s : o, i = t[r];
		Tv(i != null);
		let l = i + c, u = Wv({
			panelConstraints: n,
			panelIndex: r,
			size: l
		});
		if (a[r] = u, !Vv(u, l)) {
			let t = l - u, r = e < 0 ? s : o;
			for (; r >= 0 && r < n.length;) {
				let i = a[r];
				Tv(i != null);
				let o = i + t, s = Wv({
					panelConstraints: n,
					panelIndex: r,
					size: o
				});
				if (Vv(i, s) || (t -= s - i, a[r] = s), Vv(t, 0)) break;
				e > 0 ? r-- : r++;
			}
		}
	}
	return Vv(a.reduce((e, t) => t + e, 0), 100) ? a : t;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/pivot.js
function qv(e, t, n) {
	let r = Ov(e, t, n);
	return r == null ? [-1, -1] : [r, r + 1];
}
//#endregion
//#region node_modules/reka-ui/dist/utils/rects.js
function Jv(e, t, n) {
	return n ? e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y : e.x <= t.x + t.width && e.x + e.width >= t.x && e.y <= t.y + t.height && e.y + e.height >= t.y;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/stackingOrder.js
function Yv(e, t) {
	if (e === t) throw Error("Cannot compare node with itself");
	let n = {
		a: ty(e),
		b: ty(t)
	}, r;
	for (; n.a.at(-1) === n.b.at(-1);) e = n.a.pop(), t = n.b.pop(), r = e;
	Tv(r);
	let i = {
		a: ey($v(n.a)),
		b: ey($v(n.b))
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
var Xv = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Zv(e) {
	let t = getComputedStyle(ny(e)).display;
	return t === "flex" || t === "inline-flex";
}
function Qv(e) {
	let t = getComputedStyle(e);
	return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || Zv(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Xv.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function $v(e) {
	let t = e.length;
	for (; t--;) {
		let n = e[t];
		if (Tv(n), Qv(n)) return n;
	}
	return null;
}
function ey(e) {
	return e && Number(getComputedStyle(e).zIndex) || 0;
}
function ty(e) {
	let t = [];
	for (; e;) t.push(e), e = ny(e);
	return t;
}
function ny(e) {
	return e.parentNode instanceof DocumentFragment && e.parentNode?.host || e.parentNode;
}
//#endregion
//#region node_modules/reka-ui/dist/utils/registry.js
function ry() {
	if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
var iy = ry() === "coarse", ay = [], oy = !1, sy = /* @__PURE__ */ new Map(), cy = /* @__PURE__ */ new Map(), ly = /* @__PURE__ */ new Set();
function uy(e, t, n, r, i, a) {
	let { ownerDocument: o } = t, s = {
		direction: n,
		element: t,
		hitAreaMargins: r,
		nonce: i,
		setResizeHandlerState: a
	}, c = sy.get(o) ?? 0;
	return sy.set(o, c + 1), ly.add(s), _y(), function() {
		cy.delete(e), ly.delete(s);
		let t = sy.get(o) ?? 1;
		sy.set(o, t - 1), _y(), Sy(), t === 1 && sy.delete(o);
	};
}
function dy(e) {
	let { target: t } = e, { x: n, y: r } = Pv(e);
	oy = !0, my({
		target: t,
		x: n,
		y: r
	}), _y(), ay.length > 0 && (vy("down", e), e.preventDefault());
}
function fy(e) {
	let { x: t, y: n } = Pv(e);
	if (!oy) {
		let { target: r } = e;
		my({
			target: r,
			x: t,
			y: n
		});
	}
	vy("move", e), gy(), ay.length > 0 && e.preventDefault();
}
function py(e) {
	let { target: t } = e, { x: n, y: r } = Pv(e);
	cy.clear(), oy = !1, ay.length > 0 && e.preventDefault(), vy("up", e), my({
		target: t,
		x: n,
		y: r
	}), gy(), _y();
}
function my({ target: e, x: t, y: n }) {
	ay.splice(0);
	let r = null;
	e instanceof HTMLElement && (r = e), ly.forEach((e) => {
		let { element: i, hitAreaMargins: a } = e, o = i.getBoundingClientRect(), { bottom: s, left: c, right: l, top: u } = o, d = iy ? a.coarse : a.fine;
		if (t >= c - d && t <= l + d && n >= u - d && n <= s + d) {
			if (r !== null && i !== r && !i.contains(r) && !r.contains(i) && Yv(r, i) > 0) {
				let e = r, t = !1;
				for (; e && !e.contains(i);) {
					if (Jv(e.getBoundingClientRect(), o, !0)) {
						t = !0;
						break;
					}
					e = e.parentElement;
				}
				if (t) return;
			}
			ay.push(e);
		}
	});
}
function hy(e, t) {
	cy.set(e, t);
}
function gy() {
	let e = !1, t = !1, n;
	ay.forEach((r) => {
		let { direction: i, nonce: a } = r;
		i.value === "horizontal" ? e = !0 : t = !0, n = a.value;
	});
	let r = 0;
	cy.forEach((e) => {
		r |= e;
	}), e && t ? Cy("intersection", r, n) : e ? Cy("horizontal", r, n) : t ? Cy("vertical", r, n) : Sy();
}
function _y() {
	sy.forEach((e, t) => {
		let { body: n } = t;
		n.removeEventListener("contextmenu", py), n.removeEventListener("mousedown", dy), n.removeEventListener("mouseleave", fy), n.removeEventListener("mousemove", fy), n.removeEventListener("touchmove", fy), n.removeEventListener("touchstart", dy);
	}), window.removeEventListener("mouseup", py), window.removeEventListener("touchcancel", py), window.removeEventListener("touchend", py), ly.size > 0 && (oy ? (ay.length > 0 && sy.forEach((e, t) => {
		let { body: n } = t;
		e > 0 && (n.addEventListener("contextmenu", py), n.addEventListener("mouseleave", fy), n.addEventListener("mousemove", fy), n.addEventListener("touchmove", fy, { passive: !1 }));
	}), window.addEventListener("mouseup", py), window.addEventListener("touchcancel", py), window.addEventListener("touchend", py)) : sy.forEach((e, t) => {
		let { body: n } = t;
		e > 0 && (n.addEventListener("mousedown", dy), n.addEventListener("mousemove", fy), n.addEventListener("touchmove", fy, { passive: !1 }), n.addEventListener("touchstart", dy));
	}));
}
function vy(e, t) {
	ly.forEach((n) => {
		let { setResizeHandlerState: r } = n;
		r(e, ay.includes(n), t);
	});
}
//#endregion
//#region node_modules/reka-ui/dist/utils/style.js
var yy = null, by = null;
function xy(e, t) {
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
function Sy() {
	by !== null && (document.head.removeChild(by), yy = null, by = null);
}
function Cy(e, t, n) {
	let r = xy(e, t);
	yy !== r && (yy = r, by === null && (by = document.createElement("style"), n && (by.nonce = n), document.head.appendChild(by)), by.innerHTML = `*{cursor: ${r}!important;}`);
}
function wy({ defaultSize: e, dragState: t, layout: n, panelData: r, panelIndex: i, precision: a = 3 }) {
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
function Ty({ sizeUnit: e, groupSizeInPixels: t, value: n }) {
	if (n == null || e === "%") return n;
	if (!(t == null || t === 0)) return n / t * 100;
}
function Ey({ panelDataArray: e, groupSizeInPixels: t }) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px") && (!t || Number.isNaN(t)) ? null : e.map((e) => {
		let n = e.constraints, r = n.sizeUnit ?? "%", i = Ty({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.collapsedSize
		}), a = Ty({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.defaultSize
		}), o = Ty({
			groupSizeInPixels: t,
			sizeUnit: r,
			value: n.maxSize
		}), s = Ty({
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
function Dy(e) {
	return e.some((e) => (e.constraints.sizeUnit ?? "%") === "px");
}
function Oy({ layout: e, panelDataArray: t, prevGroupSize: n, nextGroupSize: r }) {
	if (!Dy(t) || n == null || r == null || n === 0 || r === 0 || Number.isNaN(n) || Number.isNaN(r)) return null;
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
function ky({ layout: e, panelConstraints: t }) {
	let n = [...e], r = n.reduce((e, t) => e + t, 0);
	if (n.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${n.map((e) => `${e}%`).join(", ")}`);
	if (!Vv(r, 100)) {
		console.warn(`WARNING: Invalid layout total size: ${n.map((e) => `${e}%`).join(", ")}. Layout normalization will be applied.`);
		for (let e = 0; e < t.length; e++) {
			let t = n[e];
			Tv(t != null), n[e] = 100 / r * t;
		}
	}
	let i = 0;
	for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Tv(r != null);
		let a = Wv({
			panelConstraints: t,
			panelIndex: e,
			size: r
		});
		r !== a && (i += r - a, n[e] = a);
	}
	if (!Vv(i, 0)) for (let e = 0; e < t.length; e++) {
		let r = n[e];
		Tv(r != null);
		let a = r + i, o = Wv({
			panelConstraints: t,
			panelIndex: e,
			size: a
		});
		if (r !== o && (i -= o - r, n[e] = o, Vv(i, 0))) break;
	}
	return n;
}
//#endregion
//#region node_modules/reka-ui/dist/composables/useWindowSplitterPanelGroupBehavior.js
function Ay({ eagerValuesRef: e, groupId: t, layout: n, panelDataArray: r, panelGroupElement: i, setLayout: a, getPanelDataWithPercentConstraints: o }) {
	s((e) => {
		let r = i.value;
		if (!r) return;
		let a = o();
		if (!a) return;
		let s = kv(t, r);
		for (let e = 0; e < a.length - 1; e++) {
			let { valueMax: t, valueMin: r, valueNow: i } = Rv({
				layout: n.value,
				panelsArray: a,
				pivotIndices: [e, e + 1]
			}), o = s[e];
			if (o != null) {
				let n = a[e];
				Tv(n), o.setAttribute("aria-controls", n.id), o.setAttribute("aria-valuemax", `${Math.round(t)}`), o.setAttribute("aria-valuemin", `${Math.round(r)}`), o.setAttribute("aria-valuenow", i == null ? "" : `${Math.round(i)}`);
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
		Tv(c);
		let l = o();
		if (!l) return;
		let { panelDataArray: u } = c;
		Tv(Ev(t, s) != null, `No group found for id "${t}"`);
		let d = kv(t, s);
		Tv(d);
		let f = d.map((e) => {
			let r = e.getAttribute("data-panel-resize-handle-id");
			Tv(r);
			let [i, o] = Av(t, r, u, s);
			if (i == null || o == null) return () => {};
			let c = (e) => {
				if (!e.defaultPrevented) switch (e.key) {
					case "Enter": {
						e.preventDefault();
						let o = l.findIndex((e) => e.id === i);
						if (o >= 0) {
							let e = l[o];
							Tv(e);
							let i = n.value[o], { collapsedSize: c = 0, collapsible: u, minSize: d = 0 } = e.constraints;
							if (i != null && u) {
								let e = Kv({
									delta: Vv(i, c) ? d - c : c - i,
									layout: n.value,
									panelConstraints: l.map((e) => e.constraints),
									pivotIndices: qv(t, r, s),
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
function jy(e) {
	try {
		if (typeof localStorage < "u") e.getItem = (e) => localStorage.getItem(e), e.setItem = (e, t) => {
			localStorage.setItem(e, t);
		};
		else throw TypeError("localStorage not supported in this environment");
	} catch (t) {
		console.error(t), e.getItem = () => null, e.setItem = () => {};
	}
}
function My(e) {
	return `reka:${e}`;
}
function Ny(e) {
	return e.map((e) => {
		let { constraints: t, id: n, idIsFromProps: r, order: i } = e;
		return r ? n : i ? `${i}:${JSON.stringify(t)}` : JSON.stringify(t);
	}).sort((e, t) => e.localeCompare(t)).join(",");
}
function Py(e, t) {
	try {
		let n = My(e), r = t.getItem(n);
		if (r) {
			let e = JSON.parse(r);
			if (typeof e == "object" && e) return e;
		}
	} catch {}
	return null;
}
function Fy(e, t, n) {
	return (Py(e, n) ?? {})[Ny(t)] ?? null;
}
function Iy(e, t, n, r, i) {
	let a = My(e), o = Ny(t), s = Py(e, i) ?? {}, c = {};
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
var Ly = 100, Ry = {
	getItem: (e) => (jy(Ry), Ry.getItem(e)),
	setItem: (e, t) => {
		jy(Ry), Ry.setItem(e, t);
	}
}, [zy, By] = /* @__PURE__ */ q("PanelGroup"), Vy = /* @__PURE__ */ W({
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
			default: () => Ry
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
		let n = e, r = t, i = {}, { direction: a } = Ce(n), c = Fs(n.id, "reka-splitter-group"), l = ls(), { forwardRef: d, currentElement: f } = J(), p = k(null), m = k(null), h = k(null), g = k([]), _ = k({}), y = k(/* @__PURE__ */ new Map()), b = k(0), x = z(() => ({
			autoSaveId: n.autoSaveId,
			direction: n.direction,
			dragState: p.value,
			id: c,
			keyboardResizeBy: n.keyboardResizeBy,
			storage: n.storage
		})), S = k({
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
			return Ey({
				panelDataArray: S.value.panelDataArray,
				groupSizeInPixels: t
			});
		}
		function E(e) {
			let t = T(e);
			return t ? S.value.panelDataArray.map((e, n) => ({
				...e,
				constraints: t[n]
			})) : null;
		}
		let D = (e) => g.value = e;
		function ee(e) {
			let { panelDataArray: t } = S.value, n = w();
			return e.map((e, r) => {
				let i = t[r];
				return i && (i.constraints.sizeUnit ?? "%") === "px" && n != null ? e / 100 * n : e;
			});
		}
		Ay({
			eagerValuesRef: S,
			groupId: c,
			layout: g,
			panelDataArray: S.value.panelDataArray,
			setLayout: D,
			panelGroupElement: f,
			getPanelDataWithPercentConstraints: E
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
				r || (r = Uv(Iy, Ly), i[t] = r);
				let a = [...e], o = new Map(y.value);
				r(t, a, o, g.value, n.storage);
			}
		});
		function te(e, t) {
			let { panelDataArray: n } = S.value, r = ce(n, e);
			return wy({
				defaultSize: t,
				dragState: p.value,
				layout: g.value,
				panelData: n,
				panelIndex: r
			});
		}
		function A(e) {
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
					let n = Fy(e, i, t);
					n && (y.value = new Map(Object.entries(n.expandToSizes)), a = n.layout);
				}
				if (a === null) {
					let e = E();
					if (!e) return;
					a = zv({ panelDataArray: e });
				}
				let o = T();
				if (!o) return;
				let s = ky({
					layout: a,
					panelConstraints: o
				});
				h.value = w(), _r(n, s) || (D(s), S.value.layout = s, r("layout", ee(s)), Hv(i, s, _.value, w()));
			}
		}), C(m, (e, t) => {
			if (t == null || e == null) return;
			let { layout: n, panelDataArray: i } = S.value;
			if (n.length === 0 || !Dy(i)) return;
			let a = h.value;
			if (a != null && a > 0 && a < 50 && e > a * 10) {
				S.value.panelDataArrayChanged = !0;
				return;
			}
			let o = Oy({
				layout: n,
				panelDataArray: i,
				prevGroupSize: t,
				nextGroupSize: e
			});
			if (!o) return;
			let s = T(e);
			if (!s) return;
			let c = ky({
				layout: o,
				panelConstraints: s
			});
			Gv(n, c) || (D(c), S.value.layout = c, r("layout", ee(c)), Hv(i, c, _.value, w()));
		});
		function ne(e) {
			return function(t) {
				t.preventDefault();
				let n = f.value;
				if (!n) return () => null;
				let { direction: i, dragState: a, id: o, keyboardResizeBy: s } = x.value, { layout: c, panelDataArray: u } = S.value, { initialLayout: d } = a ?? {}, p = qv(o, e, n), m = Lv(t, e, i, a, s, n);
				if (m === 0) return;
				let h = i === "horizontal";
				l.value === "rtl" && h && (m = -m);
				let g = T();
				if (!g) return;
				let v = Kv({
					delta: m,
					layout: d ?? c,
					panelConstraints: g,
					pivotIndices: p,
					trigger: jv(t) ? "keyboard" : "mouse-or-touch"
				}), y = !Gv(c, v);
				(Mv(t) || Nv(t)) && b.value !== m && (b.value = m, y ? hy(e, 0) : h ? hy(e, m < 0 ? 1 : 2) : hy(e, m < 0 ? 4 : 8)), y && (D(v), S.value.layout = v, r("layout", ee(v)), Hv(u, v, _.value, w()));
			};
		}
		function re(e, t) {
			let { layout: n, panelDataArray: i } = S.value, a = T();
			if (!a) return;
			let o = ce(i, e), s = e.constraints.sizeUnit ?? "%", c = t;
			if (s === "px") {
				let e = w();
				e != null && (c = t / e * 100);
			}
			let { panelSize: l, pivotIndices: u } = L(i, e, n, a);
			Tv(l != null);
			let d = Kv({
				delta: o === i.length - 1 ? l - c : c - l,
				layout: n,
				panelConstraints: a,
				pivotIndices: u,
				trigger: "imperative-api"
			});
			Gv(n, d) || (D(d), S.value.layout = d, r("layout", ee(d)), Hv(i, d, _.value, w()));
		}
		function j(e, t) {
			let { layout: n, panelDataArray: r } = S.value, i = ce(r, e);
			r[i] = e, S.value.panelDataArrayChanged = !0;
			let a = T();
			if (!a) return;
			let o = a[i], { panelSize: s } = L(r, e, n, a);
			if (s === null) return;
			let c = o?.collapsedSize ?? 0, l = o?.maxSize ?? 100, u = o?.minSize ?? 0;
			o?.collapsible && oe(e) ? s !== c && re(e, c) : s < u ? re(e, u) : s > l && re(e, l);
		}
		function M(e, t) {
			let { direction: n } = x.value, { layout: r } = S.value;
			if (!f.value) return;
			let i = Dv(e, f.value);
			Tv(i);
			let a = Fv(n, t);
			p.value = {
				dragHandleId: e,
				dragHandleRect: i.getBoundingClientRect(),
				initialCursorPosition: a,
				initialLayout: r
			};
		}
		function ie() {
			p.value = null;
		}
		function ae(e) {
			let { panelDataArray: t } = S.value, n = ce(t, e);
			n >= 0 && (t.splice(n, 1), delete _.value[e.id], S.value.panelDataArrayChanged = !0);
		}
		function N(e) {
			let { layout: t, panelDataArray: n } = S.value;
			if (e.constraints.collapsible) {
				let i = T();
				if (!i) return;
				let { collapsedSize: a = 0, panelSize: o, pivotIndices: s } = L(n, e, t, i);
				if (Tv(o != null, `Panel size not found for panel "${e.id}"`), o !== a) {
					let c = e.constraints.sizeUnit ?? "%", l = m.value ?? w(), u = c === "px" && l ? o / 100 * l : o;
					y.value.set(e.id, u);
					let d = Kv({
						delta: ce(n, e) === n.length - 1 ? o - a : a - o,
						layout: t,
						panelConstraints: i,
						pivotIndices: s,
						trigger: "imperative-api"
					});
					Gv(t, d) || (D(d), S.value.layout = d, r("layout", ee(d)), Hv(n, d, _.value, w()));
				}
			}
		}
		function P(e) {
			let { layout: t, panelDataArray: n } = S.value;
			if (e.constraints.collapsible) {
				let i = T();
				if (!i) return;
				let { collapsedSize: a = 0, panelSize: o = 0, minSize: s = 0, pivotIndices: c } = L(n, e, t, i);
				if (Bv(o, a) <= 0) {
					let a = y.value.get(e.id), l = e.constraints.sizeUnit ?? "%", u = m.value ?? w(), d = l === "px" && u ? a == null ? null : a / u * 100 : a, f = d != null && d >= s ? d : s, p = Kv({
						delta: ce(n, e) === n.length - 1 ? o - f : f - o,
						layout: t,
						panelConstraints: i,
						pivotIndices: c,
						trigger: "imperative-api"
					});
					Gv(t, p) || (D(p), S.value.layout = p, r("layout", ee(p)), Hv(n, p, _.value, w()));
				}
			}
		}
		function I(e) {
			let { layout: t, panelDataArray: n } = S.value, { panelSize: r } = L(n, e, t);
			if (Tv(r != null, `Panel size not found for panel "${e.id}"`), (e.constraints.sizeUnit ?? "%") === "px") {
				let e = w();
				if (e != null) return r / 100 * e;
			}
			return r;
		}
		function oe(e) {
			let { layout: t, panelDataArray: n } = S.value, r = T(), { collapsedSize: i = 0, collapsible: a, panelSize: o } = L(n, e, t, r ?? void 0);
			if (!a) return !1;
			if (o === void 0) {
				let t = ce(n, e), i = r?.[t] ?? e.constraints;
				return i.defaultSize === i.collapsedSize;
			} else return o === i;
		}
		function se(e) {
			let { layout: t, panelDataArray: n } = S.value, { collapsedSize: r = 0, collapsible: i, panelSize: a } = L(n, e, t, T() ?? void 0);
			return Tv(a != null, `Panel size not found for panel "${e.id}"`), !i || a > r;
		}
		By({
			direction: a,
			dragState: p.value,
			groupId: c,
			reevaluatePanelConstraints: j,
			registerPanel: A,
			registerResizeHandle: ne,
			resizePanel: re,
			startDragging: M,
			stopDragging: ie,
			unregisterPanel: ae,
			panelGroupElement: f,
			collapsePanel: N,
			expandPanel: P,
			isPanelCollapsed: oe,
			isPanelExpanded: se,
			getPanelSize: I,
			getPanelStyle: te
		});
		function ce(e, t) {
			return e.findIndex((e) => e === t || e.id === t.id);
		}
		function L(e, t, n, r) {
			let i = ce(e, t), a = i === e.length - 1 ? [i - 1, i] : [i, i + 1], o = (r ?? T())?.[i], s = n[i];
			return {
				...o ?? t.constraints,
				panelSize: s,
				pivotIndices: a
			};
		}
		return (e, t) => (o(), F(B(X), {
			ref: B(d),
			as: e.as,
			"as-child": e.asChild,
			style: O({
				display: "flex",
				flexDirection: B(a) === "horizontal" ? "row" : "column",
				height: "100%",
				overflow: "hidden",
				width: "100%"
			}),
			"data-panel-group": "",
			"data-orientation": B(a),
			"data-panel-group-id": B(c)
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
}), Hy = /* @__PURE__ */ W({
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
		let r = e, i = n, a = zy();
		if (a === null) throw Error("SplitterPanel components must be rendered within a SplitterGroup container");
		let { collapsePanel: s, expandPanel: c, getPanelSize: l, getPanelStyle: d, isPanelCollapsed: f, resizePanel: h, groupId: g, reevaluatePanelConstraints: _, registerPanel: y, unregisterPanel: b } = a, x = Fs(r.id, "reka-splitter-panel"), S = z(() => ({
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
		let w = z(() => d(S.value, r.defaultSize)), T = z(() => f(S.value)), E = z(() => !T.value);
		function D() {
			s(S.value);
		}
		function ee() {
			c(S.value);
		}
		function k(e) {
			h(S.value, e);
		}
		return t({
			collapse: D,
			expand: ee,
			getSize() {
				return l(S.value);
			},
			resize: k,
			isCollapsed: T,
			isExpanded: E
		}), (e, t) => (o(), F(B(X), {
			id: B(x),
			style: O(w.value),
			as: e.as,
			"as-child": e.asChild,
			"data-panel": "",
			"data-panel-collapsible": e.collapsible || void 0,
			"data-panel-group-id": B(g),
			"data-panel-id": B(x),
			"data-panel-size": Number.parseFloat(`${w.value.flexGrow}`).toFixed(1),
			"data-state": e.collapsible ? T.value ? "collapsed" : "expanded" : void 0
		}, {
			default: u(() => [v(e.$slots, "default", {
				isCollapsed: T.value,
				isExpanded: E.value,
				expand: ee,
				collapse: D,
				resize: k
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
function Uy({ disabled: e, handleId: t, resizeHandler: n, panelGroupElement: r }) {
	s((i) => {
		let a = r.value;
		if (e.value || n.value === null || a === null) return;
		let o = Dv(t, a);
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
					Tv(n);
					let r = kv(n, a), i = Ov(n, t, a);
					Tv(i !== null), r[e.shiftKey ? i > 0 ? i - 1 : r.length - 1 : i + 1 < r.length ? i + 1 : 0].focus();
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
var Wy = /* @__PURE__ */ W({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = J(), { disabled: c } = Ce(n), l = zy();
		if (l === null) throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
		let { direction: d, groupId: f, registerResizeHandle: p, startDragging: m, stopDragging: h, panelGroupElement: g } = l, _ = Fs(n.id, "reka-splitter-resize-handle"), y = k("inactive"), b = k(!1), x = k(null), { nonce: S } = Ce(n), w = hf(S);
		return C(c, () => {
			yr && (c.value ? x.value = null : x.value = p(_));
		}, { immediate: !0 }), s((e) => {
			if (c.value || x.value === null) return;
			let t = a.value;
			t && (Tv(t), e(uy(_, t, d, {
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
		}), Uy({
			disabled: c,
			resizeHandler: x,
			handleId: _,
			panelGroupElement: g
		}), (e, t) => (o(), F(B(X), {
			id: B(_),
			ref: B(i),
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
			"data-disabled": B(c) ? "" : void 0,
			"data-orientation": B(d),
			"data-panel-group-id": B(f),
			"data-resize-handle-active": y.value === "drag" ? "pointer" : b.value ? "keyboard" : void 0,
			"data-resize-handle-state": y.value,
			"data-panel-resize-handle-enabled": !B(c),
			"data-panel-resize-handle-id": B(_),
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
}), Gy = {
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
}, [Ky, qy] = /* @__PURE__ */ q("StepperRoot"), Jy = /* @__PURE__ */ W({
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
		let i = e, a = r, { dir: s, orientation: c, linear: l } = Ce(i), d = ls(s), f = k(/* @__PURE__ */ new Set()), p = zn(i, "modelValue", a, {
			defaultValue: i.defaultValue,
			passive: i.modelValue === void 0
		}), m = z(() => Array.from(f.value)), h = z(() => p.value === 1), g = z(() => p.value === m.value.length), _ = z(() => f.value.size);
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
		let T = k(null), E = k(null), D = z(() => T.value ? T.value.getAttribute("disabled") === "" : !0), O = z(() => E.value ? E.value.getAttribute("disabled") === "" : !0);
		return C(p, async () => {
			await t(() => {
				T.value = m.value.length && p.value < m.value.length ? m.value[p.value] : null, E.value = m.value.length && p.value > 1 ? m.value[p.value - 2] : null;
			});
		}), C(m, async () => {
			await t(() => {
				T.value = m.value.length && p.value < m.value.length ? m.value[p.value] : null, E.value = m.value.length && p.value > 1 ? m.value[p.value - 2] : null;
			});
		}), qy({
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
			isNextDisabled: D,
			isPrevDisabled: O,
			isFirstStep: h,
			isLastStep: g,
			hasNext: S,
			hasPrev: w
		}), J(), (e, t) => (o(), F(B(X), {
			role: "group",
			"aria-label": "progress",
			as: e.as,
			"as-child": e.asChild,
			"data-linear": B(l) ? "" : void 0,
			"data-orientation": e.orientation
		}, {
			default: u(() => [v(e.$slots, "default", {
				modelValue: B(p),
				totalSteps: f.value.size,
				isNextDisabled: D.value,
				isPrevDisabled: O.value,
				isFirstStep: h.value,
				isLastStep: g.value,
				goToStep: y,
				nextStep: b,
				prevStep: x,
				hasNext: S,
				hasPrev: w
			}), R("div", Gy, " Step " + U(B(p)) + " of " + U(f.value.size), 1)]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"data-linear",
			"data-orientation"
		]));
	}
}), [Yy, Xy] = /* @__PURE__ */ q("StepperItem"), Zy = /* @__PURE__ */ W({
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
		let { disabled: t, step: n, completed: r } = Ce(e), { forwardRef: i } = J(), a = Ky(), s = Fs(void 0, "reka-stepper-item-title"), c = Fs(void 0, "reka-stepper-item-description"), l = z(() => r.value ? "completed" : a.modelValue.value === n.value ? "active" : a.modelValue.value > n.value ? "completed" : "inactive"), d = z(() => t.value ? !1 : a.linear.value ? n.value <= a.modelValue.value || n.value === a.modelValue.value + 1 : !0);
		return Xy({
			titleId: s,
			descriptionId: c,
			state: l,
			disabled: t,
			step: n,
			isFocusable: d
		}), (e, n) => (o(), F(B(X), {
			ref: B(i),
			as: e.as,
			"as-child": e.asChild,
			"aria-current": l.value === "active" ? "true" : void 0,
			"data-state": l.value,
			disabled: B(t) || !d.value ? "" : void 0,
			"data-disabled": B(t) || !d.value ? "" : void 0,
			"data-orientation": B(a).orientation.value
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
}), Qy = /* @__PURE__ */ W({
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
		J();
		let n = Yy();
		return (e, r) => (o(), F(B(X), L(t, { id: B(n).descriptionId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), $y = /* @__PURE__ */ W({
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
		let t = e, n = Yy();
		return J(), (e, i) => (o(), F(B(X), P(r(t)), {
			default: u(() => [v(e.$slots, "default", { step: B(n).step.value }, () => [H(" Step " + U(B(n).step.value), 1)])]),
			_: 3
		}, 16));
	}
}), eb = /* @__PURE__ */ W({
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
		let t = e, n = Ky(), r = Yy();
		return J(), (e, i) => (o(), F(B(wv), L(t, {
			decorative: "",
			orientation: B(n).orientation.value,
			"data-state": B(r).state.value
		}), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["orientation", "data-state"]));
	}
}), tb = /* @__PURE__ */ W({
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
		let t = e, n = Yy();
		return J(), (e, r) => (o(), F(B(X), L(t, { id: B(n).titleId }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["id"]));
	}
}), nb = /* @__PURE__ */ W({
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
		let t = Ky(), n = Yy(), r = Is(), i = z(() => Array.from(t.totalStepperItems.value));
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
			].includes(e.key) && kr(e, Cr(), void 0, {
				itemsArray: i.value,
				focus: !0,
				loop: !1,
				arrowKeyOptions: t.orientation.value,
				dir: t.dir.value
			}));
		}
		let { forwardRef: c, currentElement: l } = J();
		return p(() => {
			t.totalStepperItems.value.add(l.value);
		}), m(() => {
			t.totalStepperItems.value.delete(l.value);
		}), (e, r) => (o(), F(B(X), {
			ref: B(c),
			type: e.as === "button" ? "button" : void 0,
			as: e.as,
			"as-child": e.asChild,
			"data-state": B(n).state.value,
			disabled: B(n).disabled.value || !B(n).isFocusable.value ? "" : void 0,
			"data-disabled": B(n).disabled.value || !B(n).isFocusable.value ? "" : void 0,
			"data-orientation": B(t).orientation.value,
			tabindex: B(n).isFocusable.value ? 0 : -1,
			"aria-describedby": B(n).descriptionId,
			"aria-labelledby": B(n).titleId,
			onMousedown: A(a, ["left"]),
			onKeydown: ye(s, [
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
}), [rb, ib] = /* @__PURE__ */ q("SwitchRoot"), ab = /* @__PURE__ */ W({
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
		let n = e, r = t, { disabled: i } = Ce(n), a = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? n.falseValue,
			passive: n.modelValue === void 0
		}), s = z(() => a.value === n.trueValue);
		function c() {
			i.value || (a.value = s.value ? n.falseValue : n.trueValue);
		}
		let { forwardRef: l, currentElement: d } = J(), f = hs(d), p = z(() => n.id && d.value ? document.querySelector(`[for="${n.id}"]`)?.innerText : void 0);
		return ib({
			checked: s,
			toggleCheck: c,
			disabled: i
		}), (e, t) => (o(), F(B(X), L(e.$attrs, {
			id: e.id,
			ref: B(l),
			role: "switch",
			type: e.as === "button" ? "button" : void 0,
			value: e.value,
			"aria-label": e.$attrs["aria-label"] || p.value,
			"aria-checked": s.value,
			"aria-required": e.required,
			"data-state": s.value ? "checked" : "unchecked",
			"data-disabled": B(i) ? "" : void 0,
			"as-child": e.asChild,
			as: e.as,
			disabled: B(i),
			onClick: c,
			onKeydown: ye(A(c, ["prevent"]), ["enter"])
		}), {
			default: u(() => [v(e.$slots, "default", {
				modelValue: B(a),
				checked: s.value
			}), B(f) && e.name ? (o(), F(B(wl), {
				key: 0,
				type: "checkbox",
				name: e.name,
				disabled: B(i),
				required: e.required,
				value: e.value,
				checked: s.value
			}, null, 8, [
				"name",
				"disabled",
				"required",
				"value",
				"checked"
			])) : N("v-if", !0)]),
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
}), ob = /* @__PURE__ */ W({
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
		let t = rb();
		return J(), (e, n) => (o(), F(B(X), {
			"data-state": B(t).checked.value ? "checked" : "unchecked",
			"data-disabled": B(t).disabled.value ? "" : void 0,
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
}), [sb, cb] = /* @__PURE__ */ q("TabsRoot"), lb = /* @__PURE__ */ W({
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
		let n = e, r = t, { orientation: i, unmountOnHide: a, dir: s } = Ce(n), c = ls(s);
		J();
		let l = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		}), d = k(), f = be(/* @__PURE__ */ new Set());
		return cb({
			modelValue: l,
			changeModelValue: (e) => {
				l.value = e;
			},
			orientation: i,
			dir: c,
			unmountOnHide: a,
			activationMode: n.activationMode,
			baseId: Fs(void 0, "reka-tabs"),
			tabsList: d,
			contentIds: f,
			registerContent: (e) => {
				f.value = new Set([...f.value, e]);
			},
			unregisterContent: (e) => {
				let t = new Set(f.value);
				t.delete(e), f.value = t;
			}
		}), (e, t) => (o(), F(B(X), {
			dir: B(c),
			"data-orientation": B(i),
			"as-child": e.asChild,
			as: e.as
		}, {
			default: u(() => [v(e.$slots, "default", { modelValue: B(l) })]),
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
function ub(e, t) {
	return `${e}-trigger-${t}`;
}
function db(e, t) {
	return `${e}-content-${t}`;
}
//#endregion
//#region node_modules/reka-ui/dist/Tabs/TabsContent.js
var fb = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n } = J(), r = sb(), i = z(() => ub(r.baseId, t.value)), a = z(() => db(r.baseId, t.value)), s = z(() => t.value === r.modelValue.value), c = k(s.value);
		return p(() => {
			r.registerContent(t.value), requestAnimationFrame(() => {
				c.value = !1;
			});
		}), ce(() => {
			r.unregisterContent(t.value);
		}), (e, t) => (o(), F(B(Gs), {
			present: e.forceMount || s.value,
			"force-mount": ""
		}, {
			default: u(({ present: t }) => [G(B(X), {
				id: a.value,
				ref: B(n),
				"as-child": e.asChild,
				as: e.as,
				role: "tabpanel",
				"data-state": s.value ? "active" : "inactive",
				"data-orientation": B(r).orientation.value,
				"aria-labelledby": i.value,
				hidden: !t,
				tabindex: "0",
				style: O({ animationDuration: c.value ? "0s" : void 0 })
			}, {
				default: u(() => [!B(r).unmountOnHide.value || t ? v(e.$slots, "default", { key: 0 }) : N("v-if", !0)]),
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
}), pb = /* @__PURE__ */ W({
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
		let { loop: t } = Ce(e), { forwardRef: n, currentElement: r } = J(), i = sb();
		return i.tabsList = r, (e, r) => (o(), F(B(qf), {
			"as-child": "",
			orientation: B(i).orientation.value,
			dir: B(i).dir.value,
			loop: B(t)
		}, {
			default: u(() => [G(B(X), {
				ref: B(n),
				role: "tablist",
				"as-child": e.asChild,
				as: e.as,
				"aria-orientation": B(i).orientation.value
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
}), mb = /* @__PURE__ */ W({
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
		let t = e, { forwardRef: n } = J(), r = sb(), i = z(() => ub(r.baseId, t.value)), a = z(() => r.contentIds.value.has(t.value) ? db(r.baseId, t.value) : void 0), s = z(() => t.value === r.modelValue.value);
		return (e, t) => (o(), F(B(Jf), {
			"as-child": "",
			focusable: !e.disabled,
			active: s.value
		}, {
			default: u(() => [G(B(X), {
				id: i.value,
				ref: B(n),
				role: "tab",
				type: e.as === "button" ? "button" : void 0,
				as: e.as,
				"as-child": e.asChild,
				"aria-selected": s.value ? "true" : "false",
				"aria-controls": a.value,
				"data-state": s.value ? "active" : "inactive",
				disabled: e.disabled,
				"data-disabled": e.disabled ? "" : void 0,
				"data-orientation": B(r).orientation.value,
				onMousedown: t[0] ||= A((t) => {
					!e.disabled && t.ctrlKey === !1 ? B(r).changeModelValue(e.value) : t.preventDefault();
				}, ["left"]),
				onKeydown: t[1] ||= ye((t) => B(r).changeModelValue(e.value), ["enter", "space"]),
				onFocus: t[2] ||= () => {
					let t = B(r).activationMode !== "manual";
					!s.value && !e.disabled && t && B(r).changeModelValue(e.value);
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
}), [hb, gb] = /* @__PURE__ */ q("TagsInputRoot"), _b = /* @__PURE__ */ W({
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
		let n = e, r = t, { addOnPaste: i, disabled: a, delimiter: s, max: c, id: l, dir: d, addOnBlur: f, addOnTab: p } = Ce(n), m = ls(d), h = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: !0,
			deep: !0
		}), { forwardRef: g, currentElement: _ } = J(), { focused: y } = Rn(_), b = hs(_), { getItems: x, CollectionSlot: S } = xl({ isProvider: !0 }), C = k(), w = k(!1), T = z(() => Array.isArray(h.value) ? [...h.value] : []);
		function E(e) {
			if (e !== -1) {
				let t = x().filter((e) => e.ref.dataset.disabled !== "");
				h.value = h.value.filter((t, n) => n !== e), r("removeTag", t[e].value);
			}
		}
		return gb({
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
			onRemoveValue: E,
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
							E(t), C.value = C.value === r ? n.at(t - 1) : n.at(t + 1), e.preventDefault();
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
							let t = kr(e, C.value, void 0, {
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
		}), (e, t) => (o(), F(B(S), null, {
			default: u(() => [G(B(X), {
				ref: B(g),
				dir: B(m),
				as: e.as,
				"as-child": e.asChild,
				"data-invalid": w.value ? "" : void 0,
				"data-disabled": B(a) ? "" : void 0,
				"data-focused": B(y) ? "" : void 0
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: B(h) }), B(b) && e.name ? (o(), F(B(wl), {
					key: 0,
					name: e.name,
					value: B(h),
					required: e.required,
					disabled: B(a)
				}, null, 8, [
					"name",
					"value",
					"required",
					"disabled"
				])) : N("v-if", !0)]),
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
}), vb = /* @__PURE__ */ W({
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
		let n = e, r = hb(), { forwardRef: i, currentElement: a } = J();
		function s(e) {
			if (r.selectedElement.value = void 0, !r.addOnBlur.value) return;
			let t = e.target, n = e.relatedTarget, i = t.getAttribute("aria-controls");
			i && n?.closest(`#${CSS.escape(i)}`) || t.value && r.onAddValue(t.value) && (t.value = "");
		}
		function c(e) {
			r.addOnTab.value && m(e);
		}
		let l = k(!1);
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
		}), (e, t) => (o(), F(B(X), {
			id: B(r).id?.value,
			ref: B(i),
			type: "text",
			autocomplete: "off",
			autocorrect: "off",
			autocapitalize: "off",
			as: e.as,
			"as-child": e.asChild,
			maxlength: e.maxLength,
			placeholder: e.placeholder,
			disabled: B(r).disabled.value,
			"data-invalid": B(r).isInvalidInput.value ? "" : void 0,
			onInput: h,
			onKeydown: [
				ye(m, ["enter"]),
				ye(c, ["tab"]),
				B(r).onInputKeydown
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
}), [yb, bb] = /* @__PURE__ */ q("TagsInputItem"), xb = /* @__PURE__ */ W({
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
		let t = e, { value: n } = Ce(t), r = hb(), { forwardRef: i, currentElement: a } = J(), { CollectionItem: s } = xl(), c = z(() => r.selectedElement.value === a.value), l = z(() => t.disabled || r.disabled.value), d = bb({
			value: n,
			isSelected: c,
			disabled: l,
			textId: "",
			displayValue: z(() => r.displayValue(n.value))
		});
		return (e, t) => (o(), F(B(s), { value: B(n) }, {
			default: u(() => [G(B(X), {
				ref: B(i),
				as: e.as,
				"as-child": e.asChild,
				"aria-labelledby": B(d).textId,
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
}), Sb = /* @__PURE__ */ W({
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
		J();
		let n = hb(), r = yb(), i = z(() => r.disabled?.value || n.disabled.value);
		function a() {
			if (i.value) return;
			let e = n.modelValue.value.findIndex((e) => gr(e, r.value.value));
			n.onRemoveValue(e);
		}
		return (e, n) => (o(), F(B(X), L({ tabindex: "-1" }, t, {
			"aria-labelledby": B(r).textId,
			"aria-current": B(r).isSelected.value,
			"data-state": B(r).isSelected.value ? "active" : "inactive",
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
}), Cb = /* @__PURE__ */ W({
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
		let t = e, n = yb();
		return J(), n.textId ||= Fs(void 0, "reka-tags-input-item-text"), (e, r) => (o(), F(B(X), L(t, { id: B(n).textId }), {
			default: u(() => [v(e.$slots, "default", {}, () => [H(U(B(n).displayValue.value), 1)])]),
			_: 3
		}, 16, ["id"]));
	}
}), [wb, Tb] = /* @__PURE__ */ q("ToggleGroupRoot"), Eb = /* @__PURE__ */ W({
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
		let n = e, r = t, { loop: i, rovingFocus: a, disabled: s, dir: c } = Ce(n), l = ls(c), { forwardRef: d, currentElement: f } = J(), { modelValue: p, changeModelValue: m, isSingle: h } = rc(n, r), g = hs(f);
		return Tb({
			isSingle: h,
			modelValue: p,
			changeModelValue: m,
			dir: l,
			orientation: n.orientation,
			loop: i,
			rovingFocus: a,
			disabled: s
		}), (e, t) => (o(), F(Ee(B(a) ? B(qf) : B(X)), {
			"as-child": "",
			orientation: B(a) ? e.orientation : void 0,
			dir: B(l),
			loop: B(a) ? B(i) : void 0
		}, {
			default: u(() => [G(B(X), {
				ref: B(d),
				role: "group",
				"as-child": e.asChild,
				as: e.as
			}, {
				default: u(() => [v(e.$slots, "default", { modelValue: B(p) }), B(g) && e.name ? (o(), F(wl, {
					key: 0,
					name: e.name,
					required: e.required,
					value: B(p)
				}, null, 8, [
					"name",
					"required",
					"value"
				])) : N("v-if", !0)]),
				_: 3
			}, 8, ["as-child", "as"])]),
			_: 3
		}, 8, [
			"orientation",
			"dir",
			"loop"
		]));
	}
}), Db = /* @__PURE__ */ W({
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
		let n = e, r = t, { forwardRef: i, currentElement: a } = J(), s = wb(null), c = zn(n, "modelValue", r, {
			defaultValue: n.defaultValue,
			passive: n.modelValue === void 0
		});
		function l() {
			c.value = !c.value;
		}
		let d = z(() => c.value ? "on" : "off"), f = hs(a);
		return (e, t) => (o(), F(B(X), {
			ref: B(i),
			type: e.as === "button" ? "button" : void 0,
			"as-child": n.asChild,
			as: e.as,
			"aria-pressed": B(c),
			"data-state": d.value,
			"data-disabled": e.disabled ? "" : void 0,
			disabled: e.disabled,
			onClick: l
		}, {
			default: u(() => [v(e.$slots, "default", {
				modelValue: B(c),
				disabled: e.disabled,
				pressed: B(c),
				state: d.value
			}), B(f) && e.name && !B(s) ? (o(), F(wl, {
				key: 0,
				type: "checkbox",
				name: e.name,
				value: B(c),
				required: e.required
			}, null, 8, [
				"name",
				"value",
				"required"
			])) : N("v-if", !0)]),
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
}), Ob = /* @__PURE__ */ W({
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
		let t = e, n = wb(), i = z(() => n.disabled?.value || t.disabled), a = z(() => Er(n.modelValue.value, t.value)), { forwardRef: s } = J();
		return (e, c) => (o(), F(Ee(B(n).rovingFocus.value ? B(Jf) : B(X)), L({ "as-child": "" }, B(n).rovingFocus.value ? {
			focusable: !i.value,
			active: a.value
		} : {}), {
			default: u(() => [G(B(Db), L(t, {
				ref: B(s),
				disabled: i.value,
				"model-value": a.value,
				"onUpdate:modelValue": c[0] ||= (t) => B(n).changeModelValue(e.value)
			}), {
				default: u((t) => [v(e.$slots, "default", P(r(t)))]),
				_: 3
			}, 16, ["disabled", "model-value"])]),
			_: 3
		}, 16));
	}
}), kb = /* @__PURE__ */ W({
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
		return J(), (e, n) => (o(), F(B(mf), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), [Ab, jb] = /* @__PURE__ */ q("TooltipProvider"), Mb = /* @__PURE__ */ W({
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
		let { delayDuration: t, skipDelayDuration: n, disableHoverableContent: r, disableClosingTrigger: i, ignoreNonKeyboardFocus: a, disabled: o, content: s } = Ce(e);
		J();
		let c = k(!0), l = k(!1), { start: u, stop: d } = pn(() => {
			c.value = !0;
		}, n, { immediate: !1 });
		return jb({
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
}), Nb = "tooltip.open", [Pb, Fb] = /* @__PURE__ */ q("TooltipRoot"), Ib = /* @__PURE__ */ W({
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
		J();
		let i = Ab(), a = z(() => n.disableHoverableContent ?? i.disableHoverableContent.value), s = z(() => n.disableClosingTrigger ?? i.disableClosingTrigger.value), c = z(() => n.disabled ?? i.disabled.value), l = z(() => n.delayDuration ?? i.delayDuration.value), d = z(() => n.ignoreNonKeyboardFocus ?? i.ignoreNonKeyboardFocus.value), f = zn(n, "open", r, {
			defaultValue: n.defaultOpen,
			passive: n.open === void 0
		});
		C(f, (e) => {
			i.onClose && (e ? (i.onOpen(), document.dispatchEvent(new CustomEvent(Nb))) : i.onClose());
		});
		let p = k(!1), m = k(), h = z(() => f.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: _ } = pn(() => {
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
		return Fb({
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
		}), (e, t) => (o(), F(B(Yl), null, {
			default: u(() => [v(e.$slots, "default", { open: B(f) })]),
			_: 3
		}));
	}
}), Lb = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Pb(), a = Ab(), { forwardRef: s, currentElement: c } = J(), l = z(() => n.ariaLabel || c.value?.textContent), d = z(() => {
			let { ariaLabel: e, ...t } = n;
			return Ir(t, a.content.value ?? {}, {
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
			xn(window, "scroll", (e) => {
				e.target?.contains(i.trigger.value) && i.onClose();
			}, { capture: !0 }), xn(window, Nb, i.onClose);
		}), (e, t) => (o(), F(B(wc), {
			"as-child": "",
			"disable-outside-pointer-events": !1,
			onEscapeKeyDown: t[0] ||= (e) => r("escapeKeyDown", e),
			onPointerDownOutside: t[1] ||= (e) => {
				B(i).disableClosingTrigger.value && B(i).trigger.value?.contains(e.target) && e.preventDefault(), r("pointerDownOutside", e);
			},
			onFocusOutside: t[2] ||= A(() => {}, ["prevent"]),
			onDismiss: t[3] ||= (e) => B(i).onClose()
		}, {
			default: u(() => [G(B(ff), L({
				ref: B(s),
				"data-state": B(i).stateAttribute.value
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
				default: u(() => [v(e.$slots, "default"), G(B(Sl), {
					id: B(i).contentId,
					role: "tooltip"
				}, {
					default: u(() => [H(U(l.value), 1)]),
					_: 1
				}, 8, ["id"])]),
				_: 3
			}, 16, ["data-state"])]),
			_: 3
		}));
	}
}), Rb = /* @__PURE__ */ W({
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
		let t = gs(e), { forwardRef: n, currentElement: r } = J(), { trigger: i, onClose: a } = Pb(), s = Ab(), { isPointerInTransit: c, onPointerExit: l } = _s(i, r);
		return s.isPointerInTransitRef = c, l(() => {
			a();
		}), (e, r) => (o(), F(Lb, L({ ref: B(n) }, B(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), zb = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Pb(), a = Y(n, r), { forwardRef: s } = J();
		return (e, t) => (o(), F(B(Gs), { present: e.forceMount || B(i).open.value }, {
			default: u(() => [(o(), F(Ee(B(i).disableHoverableContent.value ? Lb : Rb), L({ ref: B(s) }, B(a)), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16))]),
			_: 3
		}, 8, ["present"]));
	}
}), Bb = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(ol), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Vb = /* @__PURE__ */ W({
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
		let t = e, r = Pb(), i = Ab();
		r.contentId ||= Fs(void 0, "reka-tooltip-content");
		let { forwardRef: a, currentElement: s } = J(), c = k(!1), l = k(!1), d = z(() => r.disabled.value ? {} : {
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
		return (e, i) => (o(), F(B(Xl), {
			"as-child": "",
			reference: e.reference
		}, {
			default: u(() => [G(B(X), L({
				ref: B(a),
				"aria-describedby": B(r).open.value ? B(r).contentId : void 0,
				"data-state": B(r).stateAttribute.value,
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
function Hb(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = Hb(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Ub() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Hb(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var Wb = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, Gb = (e, t) => ({
	classGroupId: e,
	validator: t
}), Kb = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), qb = "-", Jb = [], Yb = "arbitrary..", Xb = (e) => {
	let t = $b(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return Qb(e);
			let n = e.split(qb);
			return Zb(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? Wb(i, t) : t : i || Jb;
			}
			return n[e] || Jb;
		}
	};
}, Zb = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Zb(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(qb) : e.slice(t).join(qb), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, Qb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? Yb + r : void 0;
})(), $b = (e) => {
	let { theme: t, classGroups: n } = e;
	return ex(n, t);
}, ex = (e, t) => {
	let n = Kb();
	for (let r in e) {
		let i = e[r];
		tx(i, n, r, t);
	}
	return n;
}, tx = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		nx(i, t, n, r);
	}
}, nx = (e, t, n, r) => {
	if (typeof e == "string") {
		rx(e, t, n);
		return;
	}
	if (typeof e == "function") {
		ix(e, t, n, r);
		return;
	}
	ax(e, t, n, r);
}, rx = (e, t, n) => {
	let r = e === "" ? t : ox(t, e);
	r.classGroupId = n;
}, ix = (e, t, n, r) => {
	if (sx(e)) {
		tx(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(Gb(n, e));
}, ax = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		tx(o, ox(t, a), n, r);
	}
}, ox = (e, t) => {
	let n = e, r = t.split(qb), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = Kb(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, sx = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, cx = (e) => {
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
}, lx = "!", ux = ":", dx = [], fx = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), px = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === ux) {
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
		s.endsWith(lx) ? (c = s.slice(0, -1), l = !0) : s.startsWith(lx) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return fx(t, l, c, u);
	};
	if (t) {
		let e = t + ux, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : fx(dx, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, mx = (e) => {
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
}, hx = (e) => ({
	cache: cx(e.cacheSize),
	parseClassName: px(e),
	sortModifiers: mx(e),
	postfixLookupClassGroupIds: gx(e),
	...Xb(e)
}), gx = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, _x = /\s+/, vx = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(_x), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + lx : _, y = v + g;
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
}, yx = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = bx(n)) && (i && (i += " "), i += r);
	return i;
}, bx = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = bx(e[r])) && (n && (n += " "), n += t);
	return n;
}, xx = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = hx(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = vx(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(yx(...e));
}, Sx = [], Cx = (e) => {
	let t = (t) => t[e] || Sx;
	return t.isThemeGetter = !0, t;
}, wx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Tx = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Dx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ox = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ax = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Mx = (e) => Ex.test(e), Nx = (e) => !!e && !Number.isNaN(Number(e)), Px = (e) => !!e && Number.isInteger(Number(e)), Fx = (e) => e.endsWith("%") && Nx(e.slice(0, -1)), Ix = (e) => Dx.test(e), Lx = () => !0, Rx = (e) => Ox.test(e) && !kx.test(e), zx = () => !1, Bx = (e) => Ax.test(e), Vx = (e) => jx.test(e), Hx = (e) => !Z(e) && !Q(e), Ux = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Wx = (e) => aS(e, lS, zx), Z = (e) => wx.test(e), Gx = (e) => aS(e, uS, Rx), Kx = (e) => aS(e, dS, Nx), qx = (e) => aS(e, pS, Lx), Jx = (e) => aS(e, fS, zx), Yx = (e) => aS(e, sS, zx), Xx = (e) => aS(e, cS, Vx), Zx = (e) => aS(e, mS, Bx), Q = (e) => Tx.test(e), Qx = (e) => oS(e, uS), $x = (e) => oS(e, fS), eS = (e) => oS(e, sS), tS = (e) => oS(e, lS), nS = (e) => oS(e, cS), rS = (e) => oS(e, mS, !0), iS = (e) => oS(e, pS, !0), aS = (e, t, n) => {
	let r = wx.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, oS = (e, t, n = !1) => {
	let r = Tx.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, sS = (e) => e === "position" || e === "percentage", cS = (e) => e === "image" || e === "url", lS = (e) => e === "length" || e === "size" || e === "bg-size", uS = (e) => e === "length", dS = (e) => e === "number", fS = (e) => e === "family-name", pS = (e) => e === "number" || e === "weight", mS = (e) => e === "shadow", hS = /* @__PURE__ */ xx(() => {
	let e = Cx("color"), t = Cx("font"), n = Cx("text"), r = Cx("font-weight"), i = Cx("tracking"), a = Cx("leading"), o = Cx("breakpoint"), s = Cx("container"), c = Cx("spacing"), l = Cx("radius"), u = Cx("shadow"), d = Cx("inset-shadow"), f = Cx("text-shadow"), p = Cx("drop-shadow"), m = Cx("blur"), h = Cx("perspective"), g = Cx("aspect"), _ = Cx("ease"), v = Cx("animate"), y = () => [
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
		Mx,
		"full",
		"auto",
		...w()
	], E = () => [
		Px,
		"none",
		"subgrid",
		Q,
		Z
	], D = () => [
		"auto",
		{ span: [
			"full",
			Px,
			Q,
			Z
		] },
		Px,
		Q,
		Z
	], O = () => [
		Px,
		"auto",
		Q,
		Z
	], ee = () => [
		"auto",
		"min",
		"max",
		"fr",
		Q,
		Z
	], k = () => [
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
	], te = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], A = () => ["auto", ...w()], ne = () => [
		Mx,
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
	], re = () => [
		Mx,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		Mx,
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
	], M = () => [
		e,
		Q,
		Z
	], ie = () => [
		...b(),
		eS,
		Yx,
		{ position: [Q, Z] }
	], ae = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], N = () => [
		"auto",
		"cover",
		"contain",
		tS,
		Wx,
		{ size: [Q, Z] }
	], P = () => [
		Fx,
		Qx,
		Gx
	], F = () => [
		"",
		"none",
		"full",
		l,
		Q,
		Z
	], I = () => [
		"",
		Nx,
		Qx,
		Gx
	], oe = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], se = () => [
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
	], ce = () => [
		Nx,
		Fx,
		eS,
		Yx
	], L = () => [
		"",
		"none",
		m,
		Q,
		Z
	], le = () => [
		"none",
		Nx,
		Q,
		Z
	], ue = () => [
		"none",
		Nx,
		Q,
		Z
	], R = () => [
		Nx,
		Q,
		Z
	], de = () => [
		Mx,
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
			blur: [Ix],
			breakpoint: [Ix],
			color: [Lx],
			container: [Ix],
			"drop-shadow": [Ix],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Hx],
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
			"inset-shadow": [Ix],
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
			radius: [Ix],
			shadow: [Ix],
			spacing: ["px", Nx],
			text: [Ix],
			"text-shadow": [Ix],
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
				Mx,
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
			"container-named": [Ux],
			columns: [{ columns: [
				Nx,
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
				Px,
				"auto",
				Q,
				Z
			] }],
			basis: [{ basis: [
				Mx,
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
				Nx,
				Mx,
				"auto",
				"initial",
				"none",
				Z
			] }],
			grow: [{ grow: [
				"",
				Nx,
				Q,
				Z
			] }],
			shrink: [{ shrink: [
				"",
				Nx,
				Q,
				Z
			] }],
			order: [{ order: [
				Px,
				"first",
				"last",
				"none",
				Q,
				Z
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ee() }],
			"auto-rows": [{ "auto-rows": ee() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...k(), "normal"] }],
			"justify-items": [{ "justify-items": [...te(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...te()] }],
			"align-content": [{ content: ["normal", ...k()] }],
			"align-items": [{ items: [...te(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...te(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": k() }],
			"place-items": [{ "place-items": [...te(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...te()] }],
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
			m: [{ m: A() }],
			mx: [{ mx: A() }],
			my: [{ my: A() }],
			ms: [{ ms: A() }],
			me: [{ me: A() }],
			mbs: [{ mbs: A() }],
			mbe: [{ mbe: A() }],
			mt: [{ mt: A() }],
			mr: [{ mr: A() }],
			mb: [{ mb: A() }],
			ml: [{ ml: A() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ne() }],
			"inline-size": [{ inline: ["auto", ...re()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...re()] }],
			"max-inline-size": [{ "max-inline": ["none", ...re()] }],
			"block-size": [{ block: ["auto", ...j()] }],
			"min-block-size": [{ "min-block": ["auto", ...j()] }],
			"max-block-size": [{ "max-block": ["none", ...j()] }],
			w: [{ w: [
				s,
				"screen",
				...ne()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ne()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ne()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ne()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ne()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...ne()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Qx,
				Gx
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				iS,
				qx
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
				Fx,
				Z
			] }],
			"font-family": [{ font: [
				$x,
				Jx,
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
				Nx,
				"none",
				Q,
				Kx
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
			"placeholder-color": [{ placeholder: M() }],
			"text-color": [{ text: M() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...oe(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Nx,
				"from-font",
				"auto",
				Q,
				Gx
			] }],
			"text-decoration-color": [{ decoration: M() }],
			"underline-offset": [{ "underline-offset": [
				Nx,
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
				Px,
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
			"bg-position": [{ bg: ie() }],
			"bg-repeat": [{ bg: ae() }],
			"bg-size": [{ bg: N() }],
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
						Px,
						Q,
						Z
					],
					radial: [
						"",
						Q,
						Z
					],
					conic: [
						Px,
						Q,
						Z
					]
				},
				nS,
				Xx
			] }],
			"bg-color": [{ bg: M() }],
			"gradient-from-pos": [{ from: P() }],
			"gradient-via-pos": [{ via: P() }],
			"gradient-to-pos": [{ to: P() }],
			"gradient-from": [{ from: M() }],
			"gradient-via": [{ via: M() }],
			"gradient-to": [{ to: M() }],
			rounded: [{ rounded: F() }],
			"rounded-s": [{ "rounded-s": F() }],
			"rounded-e": [{ "rounded-e": F() }],
			"rounded-t": [{ "rounded-t": F() }],
			"rounded-r": [{ "rounded-r": F() }],
			"rounded-b": [{ "rounded-b": F() }],
			"rounded-l": [{ "rounded-l": F() }],
			"rounded-ss": [{ "rounded-ss": F() }],
			"rounded-se": [{ "rounded-se": F() }],
			"rounded-ee": [{ "rounded-ee": F() }],
			"rounded-es": [{ "rounded-es": F() }],
			"rounded-tl": [{ "rounded-tl": F() }],
			"rounded-tr": [{ "rounded-tr": F() }],
			"rounded-br": [{ "rounded-br": F() }],
			"rounded-bl": [{ "rounded-bl": F() }],
			"border-w": [{ border: I() }],
			"border-w-x": [{ "border-x": I() }],
			"border-w-y": [{ "border-y": I() }],
			"border-w-s": [{ "border-s": I() }],
			"border-w-e": [{ "border-e": I() }],
			"border-w-bs": [{ "border-bs": I() }],
			"border-w-be": [{ "border-be": I() }],
			"border-w-t": [{ "border-t": I() }],
			"border-w-r": [{ "border-r": I() }],
			"border-w-b": [{ "border-b": I() }],
			"border-w-l": [{ "border-l": I() }],
			"divide-x": [{ "divide-x": I() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": I() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...oe(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...oe(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: M() }],
			"border-color-x": [{ "border-x": M() }],
			"border-color-y": [{ "border-y": M() }],
			"border-color-s": [{ "border-s": M() }],
			"border-color-e": [{ "border-e": M() }],
			"border-color-bs": [{ "border-bs": M() }],
			"border-color-be": [{ "border-be": M() }],
			"border-color-t": [{ "border-t": M() }],
			"border-color-r": [{ "border-r": M() }],
			"border-color-b": [{ "border-b": M() }],
			"border-color-l": [{ "border-l": M() }],
			"divide-color": [{ divide: M() }],
			"outline-style": [{ outline: [
				...oe(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Nx,
				Q,
				Z
			] }],
			"outline-w": [{ outline: [
				"",
				Nx,
				Qx,
				Gx
			] }],
			"outline-color": [{ outline: M() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				rS,
				Zx
			] }],
			"shadow-color": [{ shadow: M() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				rS,
				Zx
			] }],
			"inset-shadow-color": [{ "inset-shadow": M() }],
			"ring-w": [{ ring: I() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: M() }],
			"ring-offset-w": [{ "ring-offset": [Nx, Gx] }],
			"ring-offset-color": [{ "ring-offset": M() }],
			"inset-ring-w": [{ "inset-ring": I() }],
			"inset-ring-color": [{ "inset-ring": M() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				rS,
				Zx
			] }],
			"text-shadow-color": [{ "text-shadow": M() }],
			opacity: [{ opacity: [
				Nx,
				Q,
				Z
			] }],
			"mix-blend": [{ "mix-blend": [
				...se(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": se() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [Nx] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": ce() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": ce() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": M() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": M() }],
			"mask-image-t-from-pos": [{ "mask-t-from": ce() }],
			"mask-image-t-to-pos": [{ "mask-t-to": ce() }],
			"mask-image-t-from-color": [{ "mask-t-from": M() }],
			"mask-image-t-to-color": [{ "mask-t-to": M() }],
			"mask-image-r-from-pos": [{ "mask-r-from": ce() }],
			"mask-image-r-to-pos": [{ "mask-r-to": ce() }],
			"mask-image-r-from-color": [{ "mask-r-from": M() }],
			"mask-image-r-to-color": [{ "mask-r-to": M() }],
			"mask-image-b-from-pos": [{ "mask-b-from": ce() }],
			"mask-image-b-to-pos": [{ "mask-b-to": ce() }],
			"mask-image-b-from-color": [{ "mask-b-from": M() }],
			"mask-image-b-to-color": [{ "mask-b-to": M() }],
			"mask-image-l-from-pos": [{ "mask-l-from": ce() }],
			"mask-image-l-to-pos": [{ "mask-l-to": ce() }],
			"mask-image-l-from-color": [{ "mask-l-from": M() }],
			"mask-image-l-to-color": [{ "mask-l-to": M() }],
			"mask-image-x-from-pos": [{ "mask-x-from": ce() }],
			"mask-image-x-to-pos": [{ "mask-x-to": ce() }],
			"mask-image-x-from-color": [{ "mask-x-from": M() }],
			"mask-image-x-to-color": [{ "mask-x-to": M() }],
			"mask-image-y-from-pos": [{ "mask-y-from": ce() }],
			"mask-image-y-to-pos": [{ "mask-y-to": ce() }],
			"mask-image-y-from-color": [{ "mask-y-from": M() }],
			"mask-image-y-to-color": [{ "mask-y-to": M() }],
			"mask-image-radial": [{ "mask-radial": [Q, Z] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": ce() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": ce() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": M() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": M() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Nx] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": ce() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": ce() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": M() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": M() }],
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
			"mask-position": [{ mask: ie() }],
			"mask-repeat": [{ mask: ae() }],
			"mask-size": [{ mask: N() }],
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
			blur: [{ blur: L() }],
			brightness: [{ brightness: [
				Nx,
				Q,
				Z
			] }],
			contrast: [{ contrast: [
				Nx,
				Q,
				Z
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				rS,
				Zx
			] }],
			"drop-shadow-color": [{ "drop-shadow": M() }],
			grayscale: [{ grayscale: [
				"",
				Nx,
				Q,
				Z
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Nx,
				Q,
				Z
			] }],
			invert: [{ invert: [
				"",
				Nx,
				Q,
				Z
			] }],
			saturate: [{ saturate: [
				Nx,
				Q,
				Z
			] }],
			sepia: [{ sepia: [
				"",
				Nx,
				Q,
				Z
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Q,
				Z
			] }],
			"backdrop-blur": [{ "backdrop-blur": L() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Nx,
				Q,
				Z
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Nx,
				Q,
				Z
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Nx,
				Q,
				Z
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Nx,
				Q,
				Z
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Nx,
				Q,
				Z
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Nx,
				Q,
				Z
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Nx,
				Q,
				Z
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Nx,
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
				Nx,
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
				Nx,
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
			rotate: [{ rotate: le() }],
			"rotate-x": [{ "rotate-x": le() }],
			"rotate-y": [{ "rotate-y": le() }],
			"rotate-z": [{ "rotate-z": le() }],
			scale: [{ scale: ue() }],
			"scale-x": [{ "scale-x": ue() }],
			"scale-y": [{ "scale-y": ue() }],
			"scale-z": [{ "scale-z": ue() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: R() }],
			"skew-x": [{ "skew-x": R() }],
			"skew-y": [{ "skew-y": R() }],
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
			translate: [{ translate: de() }],
			"translate-x": [{ "translate-x": de() }],
			"translate-y": [{ "translate-y": de() }],
			"translate-z": [{ "translate-z": de() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				Px,
				Q,
				Z
			] }],
			accent: [{ accent: M() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: M() }],
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": M() }],
			"scrollbar-track-color": [{ "scrollbar-track": M() }],
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
			fill: [{ fill: ["none", ...M()] }],
			"stroke-w": [{ stroke: [
				Nx,
				Qx,
				Gx,
				Kx
			] }],
			stroke: [{ stroke: ["none", ...M()] }],
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
	return hS(Ub(e));
}
//#endregion
//#region src/components/ui/checkbox/Checkbox.vue
var gS = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(tp), L({ "data-slot": "checkbox" }, B(a), { class: B($)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[4px] border transition-colors group-has-disabled/field:opacity-50 focus-visible:ring-3 aria-invalid:ring-3 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", n.class) }), {
			default: u((t) => [G(B(np), {
				"data-slot": "checkbox-indicator",
				class: "[&>svg]:size-3.5 grid place-content-center text-current transition-none"
			}, {
				default: u(() => [v(e.$slots, "default", P(r(t)), () => [G(B(Xn))])]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["class"]));
	}
}), _S = { class: "inline-flex items-center gap-2 align-middle" }, vS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = k(n.checked === !0), a = k(!1), s = _e();
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
		}), (t, n) => (o(), D("span", _S, [G(B(gS), {
			name: "",
			"model-value": i.value,
			required: e.required,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": l
		}, null, 8, [
			"model-value",
			"required",
			"disabled"
		]), R("span", {
			class: "text-sm leading-none select-none cursor-pointer",
			onClick: u
		}, [v(t.$slots, "default", {}, () => [n[0] ||= H("Checkbox", -1)])])]));
	}
}), yS = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class", "size"), i);
		return (t, i) => (o(), F(B(ab), L({
			"data-slot": "switch",
			"data-size": e.size
		}, B(a), { class: B($)("data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:data-unchecked:bg-input/80 shrink-0 rounded-full border border-transparent focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50", n.class) }), {
			default: u((e) => [G(B(ob), {
				"data-slot": "switch-thumb",
				class: "bg-background dark:data-unchecked:bg-foreground dark:data-checked:bg-primary-foreground rounded-full group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
			}, {
				default: u(() => [v(t.$slots, "thumb", P(r(e)))]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), bS = { class: "inline-flex items-center gap-2 align-middle" }, xS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = k(n.checked === !0), a = k(!1), s = _e();
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
		}), (t, n) => (o(), D("span", bS, [G(B(yS), {
			name: "",
			"model-value": i.value,
			required: e.required,
			disabled: e.disabled || a.value,
			"onUpdate:modelValue": l
		}, null, 8, [
			"model-value",
			"required",
			"disabled"
		]), R("span", {
			class: "text-sm leading-none select-none cursor-pointer",
			onClick: u
		}, [v(t.$slots, "default", {}, () => [n[0] ||= H("Switch", -1)])])]));
	}
}), SS = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => T((o(), D("input", {
			"onUpdate:modelValue": t[0] ||= (e) => M(r) ? r.value = e : null,
			"data-slot": "input",
			class: I(B($)("dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-8 rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium focus-visible:ring-3 aria-invalid:ring-3 md:text-sm w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[ee, B(r)]]);
	}
}), CS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = k(n.value ?? ""), a = k(!1), s = _e();
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
		}), (t, n) => (o(), F(B(SS), {
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
}), wS = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "modelValue", t, {
			passive: !0,
			defaultValue: n.defaultValue
		});
		return (e, t) => T((o(), D("textarea", {
			"onUpdate:modelValue": t[0] ||= (e) => M(r) ? r.value = e : null,
			"data-slot": "textarea",
			class: I(B($)("border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors focus-visible:ring-3 aria-invalid:ring-3 md:text-sm flex field-sizing-content min-h-16 w-full outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", n.class))
		}, null, 2)), [[ee, B(r)]]);
	}
}), TS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = k(n.value ?? ""), a = k(!1), s = _e();
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
		}), (t, n) => (o(), F(B(wS), {
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
}), ES = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Sp), L({
			"data-slot": "slider",
			"data-vertical": n.orientation === "vertical" ? "" : void 0,
			class: B($)("data-vertical:min-h-40 relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:w-auto data-vertical:flex-col", n.class)
		}, B(i)), {
			default: u(({ modelValue: e }) => [G(B(Dp), {
				"data-slot": "slider-track",
				"data-horizontal": n.orientation === "vertical" ? void 0 : "",
				"data-vertical": n.orientation === "vertical" ? "" : void 0,
				class: "bg-muted rounded-full data-horizontal:h-1 data-vertical:w-1 relative grow overflow-hidden data-horizontal:w-full data-vertical:h-full"
			}, {
				default: u(() => [G(B(wp), {
					"data-slot": "slider-range",
					"data-horizontal": n.orientation === "vertical" ? void 0 : "",
					"data-vertical": n.orientation === "vertical" ? "" : void 0,
					class: "bg-primary absolute select-none data-horizontal:h-full data-vertical:w-full"
				}, null, 8, ["data-horizontal", "data-vertical"])]),
				_: 1
			}, 8, ["data-horizontal", "data-vertical"]), (o(!0), D(V, null, f(e, (e, t) => (o(), F(B(Ep), {
				key: t,
				"data-slot": "slider-thumb",
				"data-vertical": n.orientation === "vertical" ? "" : void 0,
				class: "border-ring ring-ring/50 relative size-3 rounded-full border bg-white transition-[color,box-shadow] after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 block shrink-0 select-none disabled:pointer-events-none disabled:opacity-50"
			}, null, 8, ["data-vertical"]))), 128))]),
			_: 1
		}, 16, ["data-vertical", "class"]));
	}
}), DS = { class: "block w-56 py-2" }, OS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = z(() => Number(n.min ?? 0)), a = z(() => Number(n.max ?? 100)), s = z(() => Number(n.step ?? 1)), c = z(() => {
			if (n.value == null || n.value === "") return [i.value];
			let e = String(n.value).split(",").map((e) => Number(e.trim())).filter((e) => !Number.isNaN(e));
			return e.length ? e : [i.value];
		}), l = k([...c.value]), u = k(!1), d = _e();
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
		}), (t, n) => (o(), D("span", DS, [G(B(ES), {
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
}), kS = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(u_), L({
			"data-slot": "radio-group",
			class: B($)("grid gap-2 w-full", n.class)
		}, B(a)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), AS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(p_), L({ "data-slot": "radio-group-item" }, B(n), { class: B($)("border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-destructive/50 flex size-4 rounded-full focus-visible:ring-3 aria-invalid:ring-3 group/radio-group-item peer relative aspect-square shrink-0 border outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50", t.class) }), {
			default: u(() => [G(B(m_), {
				"data-slot": "radio-group-indicator",
				class: "flex size-4 items-center justify-center"
			}, {
				default: u(() => [v(e.$slots, "default", {}, () => [G(B(rr), { class: "bg-primary-foreground absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" })])]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), jS = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(yh), L({ "data-slot": "label" }, B(n), { class: B($)("gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), MS = /* @__PURE__ */ W({
	__name: "RadioGroup.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = _e(), a = 0, s = Math.random().toString(36).slice(2, 8), c = k((i?._options ?? []).map((e) => ({
			...e,
			id: `go-rg-${s}-${a++}`
		}))), l = k(n.value ?? "");
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
		}), (t, n) => (o(), F(B(kS), {
			"model-value": l.value,
			disabled: e.disabled,
			class: "gap-3",
			"onUpdate:modelValue": m
		}, {
			default: u(() => [(o(!0), D(V, null, f(c.value, (e) => (o(), D("div", {
				key: e.value,
				class: "flex items-center gap-2"
			}, [G(B(AS), {
				value: e.value,
				id: e.id,
				disabled: e.disabled
			}, null, 8, [
				"value",
				"id",
				"disabled"
			]), G(B(jS), {
				for: e.id,
				class: "text-sm font-normal"
			}, {
				default: u(() => [H(U(e.label), 1)]),
				_: 2
			}, 1032, ["for"])]))), 128))]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), NS = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(Z_), L({ "data-slot": "select" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), PS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (t, r) => (o(), F(B(gv), null, {
			default: u(() => [G(B(lv), L({
				"data-slot": "select-content",
				"data-align-trigger": e.position === "item-aligned"
			}, {
				...t.$attrs,
				...B(i)
			}, { class: B($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg shadow-md ring-1 duration-100 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 cn-menu-translucent relative z-50 max-h-(--reka-select-content-available-height) origin-(--reka-select-content-transform-origin) overflow-x-hidden overflow-y-auto data-[align-trigger=true]:animate-none", e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n.class) }), {
				default: u(() => [
					G(B(RS)),
					G(B(Sv), {
						"data-position": e.position,
						class: I(B($)("data-[position=popper]:h-[var(--reka-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--reka-select-trigger-width)]"))
					}, {
						default: u(() => [v(t.$slots, "default")]),
						_: 3
					}, 8, ["data-position", "class"]),
					G(B(LS))
				]),
				_: 3
			}, 16, ["data-align-trigger", "class"])]),
			_: 3
		}));
	}
}), FS = { class: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }, IS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(pv), L({ "data-slot": "select-item" }, B(n), { class: B($)("focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm [&_svg:not([class*=size-])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [R("span", FS, [G(B(mv), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [G(B(Xn), { class: "pointer-events-none" })])]),
				_: 3
			})]), G(B(hv), null, {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), LS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(vv), L({ "data-slot": "select-scroll-down-button" }, B(n), { class: B($)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(Zn))])]),
			_: 3
		}, 16, ["class"]));
	}
}), RS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(yv), L({ "data-slot": "select-scroll-up-button" }, B(n), { class: B($)("bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*=size-])]:size-4", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(er))])]),
			_: 3
		}, 16, ["class"]));
	}
}), zS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class", "size"));
		return (r, i) => (o(), F(B(bv), L({
			"data-slot": "select-trigger",
			"data-size": e.size
		}, B(n), { class: B($)("border-input data-placeholder:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-lg border bg-transparent py-2 pr-2 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*=size-])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default"), G(B(uv), { "as-child": "" }, {
				default: u(() => [G(B(Zn), { class: "text-muted-foreground size-4 pointer-events-none" })]),
				_: 1
			})]),
			_: 3
		}, 16, ["data-size", "class"]));
	}
}), BS = /* @__PURE__ */ W({
	__name: "SelectValue",
	props: {
		placeholder: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(xv), L({ "data-slot": "select-value" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), VS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = _e(), a = k([...i?._options ?? []]), s = k(n.value ?? "");
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
		}), (t, n) => (o(), F(B(NS), {
			"model-value": s.value,
			disabled: e.disabled,
			"onUpdate:modelValue": l
		}, {
			default: u(() => [G(B(zS), { class: "w-56" }, {
				default: u(() => [G(B(BS), { placeholder: e.placeholder ?? "Selecione..." }, null, 8, ["placeholder"])]),
				_: 1
			}), G(B(PS), null, {
				default: u(() => [(o(!0), D(V, null, f(a.value, (e) => (o(), F(B(IS), {
					key: e.value,
					value: e.value,
					disabled: e.disabled
				}, {
					default: u(() => [H(U(e.label), 1)]),
					_: 2
				}, 1032, ["value", "disabled"]))), 128))]),
				_: 1
			})]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), HS = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(jg), L(B(a), { class: B($)("grid gap-1.5", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), US = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", { class: I(B($)("relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5", t.class)) }, [v(e.$slots, "default")], 2));
	}
}), WS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Mg), L({ "data-slot": "decrement" }, B(n), { class: B($)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(sr), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), GS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Ng), L({ "data-slot": "increment" }, B(n), { class: B($)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(ur), { class: "h-4 w-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), KS = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Pg), {
			"data-slot": "input",
			class: I(B($)("flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t.class))
		}, null, 8, ["class"]));
	}
}), qS = /* @__PURE__ */ W({
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
		})(), a = n.value != null && n.value !== "" ? Number(n.value) : null, s = k(a), c = k(!1), l = _e();
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
		}), (t, n) => (o(), F(B(HS), {
			"model-value": s.value ?? void 0,
			min: e.min == null ? void 0 : Number(e.min),
			max: e.max == null ? void 0 : Number(e.max),
			step: e.step == null ? void 0 : Number(e.step),
			"format-options": B(i),
			disabled: e.disabled || c.value,
			class: "w-40",
			"onUpdate:modelValue": f
		}, {
			default: u(() => [G(B(US), null, {
				default: u(() => [
					G(B(WS)),
					G(B(KS)),
					G(B(GS))
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
}), JS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Yg), L({
			otp: n.otp,
			"data-slot": "pin-input"
		}, B(i), { class: B($)("flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["otp", "class"]));
	}
}), YS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(X), L({ "data-slot": "pin-input-group" }, B(n), { class: B($)("flex items-center", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), XS = /* @__PURE__ */ W({
	__name: "PinInputSeparator",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = gs(e);
		return (e, n) => (o(), F(B(X), L({ "data-slot": "pin-input-separator" }, B(t)), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(sr))])]),
			_: 3
		}, 16));
	}
}), ZS = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Xg), L({ "data-slot": "pin-input-slot" }, B(n), { class: B($)("border-input focus:border-ring focus:ring-ring/50 focus:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:focus:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:aria-invalid:border-destructive relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none text-center first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:ring-[3px]", t.class) }), null, 16, ["class"]));
	}
}), QS = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Number(n.length ?? 6), a = n.pattern === "digits", s = Math.ceil(i / 2), c = k((n.value ?? "").slice(0, i).split("")), l = z(() => Array.from({ length: s }, (e, t) => t)), d = z(() => Array.from({ length: i - s }, (e, t) => s + t)), m = _e();
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
		}), (t, n) => (o(), F(B(JS), {
			"model-value": c.value,
			disabled: e.disabled,
			type: a ? "number" : "text",
			"onUpdate:modelValue": g,
			onComplete: n[0] ||= (e) => r("complete", c.value.join(""))
		}, {
			default: u(() => [e.separator ? (o(), D(V, { key: 0 }, [
				G(B(YS), null, {
					default: u(() => [(o(!0), D(V, null, f(l.value, (e) => (o(), F(B(ZS), {
						key: e,
						index: e,
						inputmode: a ? "numeric" : void 0
					}, null, 8, ["index", "inputmode"]))), 128))]),
					_: 1
				}),
				G(B(XS)),
				G(B(YS), null, {
					default: u(() => [(o(!0), D(V, null, f(d.value, (e) => (o(), F(B(ZS), {
						key: e,
						index: e,
						inputmode: a ? "numeric" : void 0
					}, null, 8, ["index", "inputmode"]))), 128))]),
					_: 1
				})
			], 64)) : (o(), F(B(YS), { key: 1 }, {
				default: u(() => [(o(!0), D(V, null, f(B(i), (e) => (o(), F(B(ZS), {
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
}), $S = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(_b), L(B(a), { class: B($)("flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-2 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none", "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), eC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(vb), L(B(n), { class: B($)("text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1", t.class) }), null, 16, ["class"]));
	}
}), tC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(xb), L(B(n), { class: B($)("flex h-5 items-center rounded-md bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), nC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Sb), L(B(n), { class: B($)("flex rounded bg-transparent mr-1", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(pr), { class: "w-4 h-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), rC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Cb), L(B(n), { class: B($)("py-0.5 px-2 text-sm rounded bg-transparent", t.class) }), null, 16, ["class"]));
	}
}), iC = /* @__PURE__ */ W({
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
		let n = e, r = t, i = n.delimiter || ",", a = typeof n.value == "string" && n.value.length ? n.value.split(i).map((e) => e.trim()).filter(Boolean) : [], s = k([...a]), c = _e();
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
		}), (t, n) => (o(), F(B($S), {
			"model-value": s.value,
			disabled: e.disabled,
			class: "w-72",
			"onUpdate:modelValue": d
		}, {
			default: u(() => [(o(!0), D(V, null, f(s.value, (e) => (o(), F(B(tC), {
				key: e,
				value: e
			}, {
				default: u(() => [G(B(rC)), G(B(nC))]),
				_: 1
			}, 8, ["value"]))), 128)), G(B(eC), { placeholder: e.placeholder ?? "Adicionar..." }, null, 8, ["placeholder"])]),
			_: 1
		}, 8, ["model-value", "disabled"]));
	}
}), aC = ["data-size"], oC = /* @__PURE__ */ W({
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
		return (n, r) => (o(), D("div", {
			"data-slot": "card",
			"data-size": e.size,
			class: I(B($)("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", t.class))
		}, [v(n.$slots, "default")], 10, aC));
	}
}), sC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "card-action",
			class: I(B($)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), cC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "card-content",
			class: I(B($)("px-4 group-data-[size=sm]/card:px-3", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), lC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "card-description",
			class: I(B($)("text-muted-foreground text-sm", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), uC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "card-footer",
			class: I(B($)("bg-muted/50 rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3 flex items-center", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), dC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "card-header",
			class: I(B($)("gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3 group/card-header @container/card-header grid auto-rows-min items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), fC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "card-title",
			class: I(B($)("text-base leading-snug font-medium group-data-[size=sm]/card:text-sm cn-font-heading", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), pC = /* @__PURE__ */ W({
	__name: "Card.ce",
	props: {
		cardTitle: { type: String },
		cardDescription: { type: String }
	},
	setup(e) {
		let t = x(), n = _e()?._light?.slots ?? {}, r = !!n.action;
		return (i, a) => (o(), F(B(oC), { class: "w-full" }, {
			default: u(() => [
				e.cardTitle || e.cardDescription || r ? (o(), F(B(dC), { key: 0 }, {
					default: u(() => [
						e.cardTitle ? (o(), F(B(fC), { key: 0 }, {
							default: u(() => [H(U(e.cardTitle), 1)]),
							_: 1
						})) : N("", !0),
						e.cardDescription ? (o(), F(B(lC), { key: 1 }, {
							default: u(() => [H(U(e.cardDescription), 1)]),
							_: 1
						})) : N("", !0),
						r ? (o(), F(B(sC), {
							key: 2,
							innerHTML: B(n).action
						}, null, 8, ["innerHTML"])) : N("", !0)
					]),
					_: 1
				})) : N("", !0),
				G(B(cC), null, {
					default: u(() => [v(i.$slots, "default")]),
					_: 3
				}),
				B(t).footer ? (o(), F(B(uC), { key: 1 }, {
					default: u(() => [v(i.$slots, "footer")]),
					_: 3
				})) : N("", !0)
			]),
			_: 3
		}));
	}
}), mC = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(oc), L({ "data-slot": "accordion" }, B(a), { class: B($)("flex w-full flex-col", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), hC = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(dc), L({ "data-slot": "accordion-content" }, B(n), { class: "data-open:animate-accordion-down data-closed:animate-accordion-up text-sm overflow-hidden" }), {
			default: u(() => [R("div", { class: I(B($)("pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", t.class)) }, [v(e.$slots, "default")], 2)]),
			_: 3
		}, 16));
	}
}), gC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, i) => (o(), F(B(uc), L({ "data-slot": "accordion-item" }, B(n), { class: B($)("not-last:border-b", t.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), _C = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(fc), { class: "flex" }, {
			default: u(() => [G(B(pc), L({ "data-slot": "accordion-trigger" }, B(n), { class: B($)("focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-3 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50", t.class) }), {
				default: u(() => [v(e.$slots, "default"), v(e.$slots, "icon", {}, () => [G(B(Zn), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}), G(B(er), {
					"data-slot": "accordion-trigger-icon",
					class: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})])]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), vC = ["innerHTML"], yC = /* @__PURE__ */ W({
	__name: "Accordion.ce",
	props: {
		type: { type: String },
		collapsible: { type: Boolean },
		defaultValue: { type: String }
	},
	setup(e) {
		let t = e, n = _e()?._light.sections ?? [];
		return (r, i) => (o(), F(B(mC), {
			type: t.type ?? "single",
			collapsible: t.collapsible ?? !0,
			"default-value": e.defaultValue,
			class: "w-96"
		}, {
			default: u(() => [(o(!0), D(V, null, f(B(n), (e, t) => (o(), F(B(gC), {
				key: t,
				value: e.value || String(t),
				disabled: e.disabled
			}, {
				default: u(() => [G(B(_C), null, {
					default: u(() => [H(U(e.title), 1)]),
					_: 2
				}, 1024), G(B(hC), null, {
					default: u(() => [R("div", { innerHTML: e.html }, null, 8, vC)]),
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
}), bC = /* @__PURE__ */ W({
	__name: "Dialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(gc), L({ "data-slot": "dialog" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), xC = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, SC = Ub, CC = (e, t) => (n) => {
	if (t?.variants == null) return SC(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = xC(t) || xC(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return SC(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, wC = /* @__PURE__ */ W({
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
		return (n, r) => (o(), F(B(X), {
			"data-slot": "button",
			"data-variant": e.variant,
			"data-size": e.size,
			as: e.as,
			"as-child": e.asChild,
			class: I(B($)(B(TC)({
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
}), TC = CC("focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 active:not-aria-[haspopup]:translate-y-px [&_svg:not([class*=size-])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
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
}), EC = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(al), L({ "data-slot": "dialog-overlay" }, B(n), { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), DC = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (t, r) => (o(), F(B(sl), null, {
			default: u(() => [G(EC), G(B(nl), L({ "data-slot": "dialog-content" }, {
				...t.$attrs,
				...B(i)
			}, { class: B($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 ring-foreground/10 grid max-w-[calc(100%-2rem)] gap-4 rounded-xl p-4 text-sm ring-1 duration-100 sm:max-w-sm fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", n.class) }), {
				default: u(() => [v(t.$slots, "default"), e.showCloseButton ? (o(), F(B(_c), {
					key: 0,
					"data-slot": "dialog-close",
					"as-child": ""
				}, {
					default: u(() => [G(B(wC), {
						variant: "ghost",
						class: "absolute top-2 right-2",
						size: "icon-sm"
					}, {
						default: u(() => [G(B(pr)), r[0] ||= R("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : N("", !0)]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), OC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(rl), L({ "data-slot": "dialog-description" }, B(n), { class: B($)("text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), kC = /* @__PURE__ */ W({
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
		return (n, r) => (o(), D("div", {
			"data-slot": "dialog-footer",
			class: I(B($)("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t.class))
		}, [v(n.$slots, "default"), e.showCloseButton ? (o(), F(B(_c), {
			key: 0,
			"as-child": ""
		}, {
			default: u(() => [G(B(wC), { variant: "outline" }, {
				default: u(() => [...r[0] ||= [H(" Close ", -1)]]),
				_: 1
			})]),
			_: 1
		})) : N("", !0)], 2));
	}
}), AC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "dialog-header",
			class: I(B($)("gap-2 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), jC = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(cl), L({ "data-slot": "dialog-title" }, B(n), { class: B($)("text-base leading-none font-medium cn-font-heading", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), MC = /* @__PURE__ */ W({
	__name: "DialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(ll), L({ "data-slot": "dialog-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), NC = ["innerHTML"], PC = /* @__PURE__ */ W({
	__name: "Dialog.ce",
	setup(e) {
		let t = _e()?._light.slots ?? {};
		return (e, n) => (o(), F(B(bC), null, {
			default: u(() => [G(B(MC), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [n[0] ||= H("Abrir", -1)])]),
				_: 3
			}), G(B(DC), null, {
				default: u(() => [
					B(t).title || B(t).description ? (o(), F(B(AC), { key: 0 }, {
						default: u(() => [B(t).title ? (o(), F(B(jC), {
							key: 0,
							innerHTML: B(t).title
						}, null, 8, ["innerHTML"])) : N("", !0), B(t).description ? (o(), F(B(OC), {
							key: 1,
							innerHTML: B(t).description
						}, null, 8, ["innerHTML"])) : N("", !0)]),
						_: 1
					})) : N("", !0),
					B(t).content ? (o(), D("div", {
						key: 1,
						innerHTML: B(t).content
					}, null, 8, NC)) : N("", !0),
					B(t).footer ? (o(), F(B(kC), {
						key: 2,
						innerHTML: B(t).footer
					}, null, 8, ["innerHTML"])) : N("", !0)
				]),
				_: 1
			})]),
			_: 3
		}));
	}
}), FC = /* @__PURE__ */ W({
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
		return (n, r) => (o(), D("div", {
			"data-slot": "alert",
			class: I(B($)(B(RC)({ variant: e.variant }), t.class)),
			role: "alert"
		}, [v(n.$slots, "default")], 2));
	}
}), IC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "alert-description",
			class: I(B($)("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), LC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "alert-title",
			class: I(B($)("font-medium group-has-[>svg]/alert:col-start-2 cn-font-heading [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), RC = CC("grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*=size-])]:size-4 group/alert relative w-full", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
}), zC = /* @__PURE__ */ W({
	__name: "Alert.ce",
	props: { variant: { type: null } },
	setup(e) {
		let t = e, n = _e()?._light, r = n?.slots ?? {}, i = !!r.title;
		return (e, a) => (o(), F(B(FC), { variant: t.variant }, {
			default: u(() => [i ? (o(), F(B(LC), {
				key: 0,
				innerHTML: B(r).title
			}, null, 8, ["innerHTML"])) : N("", !0), G(B(IC), { innerHTML: B(r).description || B(n)?.defaultHtml || "" }, null, 8, ["innerHTML"])]),
			_: 1
		}, 8, ["variant"]));
	}
}), BC = /* @__PURE__ */ W({
	__name: "AspectRatio",
	props: {
		ratio: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(yl), L({ "data-slot": "aspect-ratio" }, t), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), VC = ["innerHTML"], HC = /* @__PURE__ */ W({
	__name: "AspectRatio.ce",
	props: { ratio: { type: [String, Number] } },
	setup(e) {
		let t = e, n = _e()?._light, r = (() => {
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
		return (e, t) => (o(), F(B(BC), { ratio: B(r) }, {
			default: u(() => [R("div", { innerHTML: B(n)?.defaultHtml || "" }, null, 8, VC)]),
			_: 1
		}, 8, ["ratio"]));
	}
}), UC = /* @__PURE__ */ W({
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
		return (n, r) => (o(), F(B(vf), {
			"data-slot": "avatar",
			"data-size": e.size ?? "default",
			class: I(B($)(B(KC)({ size: e.size }), t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, ["data-size", "class"]));
	}
}), WC = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(yf), L({ "data-slot": "avatar-fallback" }, B(n), { class: B($)("bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), GC = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Sf), L({ "data-slot": "avatar-image" }, t, { class: "rounded-full aspect-square size-full object-cover" }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), KC = CC("size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten", {
	variants: { size: {
		sm: "",
		default: "",
		lg: ""
	} },
	defaultVariants: { size: "default" }
}), qC = ["innerHTML"], JC = /* @__PURE__ */ W({
	__name: "Avatar.ce",
	props: {
		src: { type: String },
		alt: { type: String },
		fallback: { type: String },
		size: { type: null }
	},
	setup(e) {
		let t = e, n = _e()?._light?.slots ?? {};
		return (e, r) => (o(), F(B(UC), { size: t.size }, {
			default: u(() => [t.src ? (o(), F(B(GC), {
				key: 0,
				src: t.src,
				alt: t.alt ?? ""
			}, null, 8, ["src", "alt"])) : N("", !0), G(B(WC), null, {
				default: u(() => [B(n).fallback ? (o(), D("span", {
					key: 0,
					innerHTML: B(n).fallback
				}, null, 8, qC)) : (o(), D(V, { key: 1 }, [H(U(t.fallback ?? ""), 1)], 64))]),
				_: 1
			})]),
			_: 1
		}, 8, ["size"]));
	}
}), YC = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (r, i) => (o(), F(B(X), L({
			"data-slot": "badge",
			"data-variant": e.variant,
			class: B($)(B(XC)({ variant: e.variant }), t.class)
		}, B(n)), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), XC = CC("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
}), ZC = [
	"href",
	"data-variant",
	"innerHTML"
], QC = ["innerHTML"], $C = /* @__PURE__ */ W({
	__name: "Badge.ce",
	props: {
		variant: { type: null },
		asChild: { type: Boolean }
	},
	setup(e) {
		let t = e, n = (_e()?._light?.defaultHtml || "").trim(), r = z(() => {
			if (!t.asChild) return null;
			let e = document.createElement("template");
			e.innerHTML = n;
			let r = [...e.content.children], i = r.length === 1 ? r[0] : null;
			return i && i.tagName === "A" ? i : null;
		}), i = z(() => r.value?.getAttribute("href") ?? "#"), a = z(() => r.value?.innerHTML ?? ""), s = z(() => $(XC({ variant: t.variant })));
		return (e, c) => r.value ? (o(), D("a", {
			key: 0,
			href: i.value,
			"data-slot": "badge",
			"data-variant": t.variant,
			class: I(s.value),
			innerHTML: a.value
		}, null, 10, ZC)) : (o(), F(B(YC), {
			key: 1,
			variant: t.variant
		}, {
			default: u(() => [R("span", { innerHTML: B(n) }, null, 8, QC)]),
			_: 1
		}, 8, ["variant"]));
	}
}), ew = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("nav", {
			"aria-label": "breadcrumb",
			"data-slot": "breadcrumb",
			class: I(B($)("", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), tw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("span", {
			"data-slot": "breadcrumb-ellipsis",
			role: "presentation",
			"aria-hidden": "true",
			class: I(B($)("size-5 [&>svg]:size-4 flex items-center justify-center", t.class))
		}, [v(e.$slots, "default", {}, () => [G(B(ir))]), n[0] ||= R("span", { class: "sr-only" }, "More", -1)], 2));
	}
}), nw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("li", {
			"data-slot": "breadcrumb-item",
			class: I(B($)("gap-1 inline-flex items-center", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), rw = /* @__PURE__ */ W({
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
		return (n, r) => (o(), F(B(X), {
			"data-slot": "breadcrumb-link",
			as: e.as,
			"as-child": e.asChild,
			class: I(B($)("hover:text-foreground transition-colors", t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), iw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("ol", {
			"data-slot": "breadcrumb-list",
			class: I(B($)("text-muted-foreground gap-1.5 text-sm flex flex-wrap items-center wrap-break-word", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), aw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("span", {
			"data-slot": "breadcrumb-page",
			role: "link",
			"aria-disabled": "true",
			"aria-current": "page",
			class: I(B($)("text-foreground font-normal", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), ow = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("li", {
			"data-slot": "breadcrumb-separator",
			role: "presentation",
			"aria-hidden": "true",
			class: I(B($)("[&>svg]:size-3.5", t.class))
		}, [v(e.$slots, "default", {}, () => [G(B($n), { class: "cn-rtl-flip" })])], 2));
	}
}), sw = /* @__PURE__ */ W({
	__name: "Breadcrumb.ce",
	props: {
		separator: { type: String },
		collapse: { type: String }
	},
	setup(e) {
		let t = e, n = _e()?._light?.options ?? [], r = z(() => {
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
		return (t, n) => (o(), F(B(ew), null, {
			default: u(() => [G(B(iw), null, {
				default: u(() => [(o(!0), D(V, null, f(r.value, (t, n) => (o(), D(V, { key: n }, [G(B(nw), null, {
					default: u(() => [t.kind === "ellipsis" ? (o(), F(B(tw), { key: 0 })) : n === r.value.length - 1 ? (o(), F(B(aw), { key: 1 }, {
						default: u(() => [H(U(t.label), 1)]),
						_: 2
					}, 1024)) : (o(), F(B(rw), {
						key: 2,
						href: t.value
					}, {
						default: u(() => [H(U(t.label), 1)]),
						_: 2
					}, 1032, ["href"]))]),
					_: 2
				}, 1024), n < r.value.length - 1 ? (o(), F(B(ow), { key: 0 }, {
					default: u(() => [e.separator ? (o(), D(V, { key: 0 }, [H(U(e.separator), 1)], 64)) : N("", !0)]),
					_: 1
				})) : N("", !0)], 64))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), cw = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(wv), L({ "data-slot": "separator" }, B(n), { class: B($)("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch", t.class) }), null, 16, ["class"]));
	}
}), lw = /* @__PURE__ */ W({
	__name: "Separator.ce",
	props: { orientation: { type: String } },
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(cw), { orientation: t.orientation ?? "horizontal" }, null, 8, ["orientation"]));
	}
}), uw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "skeleton",
			class: I(B($)("bg-muted rounded-md animate-pulse", t.class))
		}, null, 2));
	}
}), dw = /* @__PURE__ */ W({
	__name: "Skeleton.ce",
	props: {
		width: { type: String },
		height: { type: String },
		circle: { type: Boolean },
		radius: { type: String }
	},
	setup(e) {
		let t = e, n = z(() => {
			let e = {};
			return t.width && (e.width = t.width), t.height && (e.height = t.height), e;
		}), r = {
			none: "rounded-none",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			full: "rounded-full"
		}, i = z(() => t.circle ? "rounded-full" : t.radius ? r[t.radius] ?? "" : "");
		return (e, t) => (o(), F(B(uw), {
			class: I(i.value),
			style: O(n.value)
		}, null, 8, ["class", "style"]));
	}
}), fw = ["innerHTML"], pw = /* @__PURE__ */ W({
	__name: "Button.ce",
	props: {
		variant: { type: null },
		size: { type: null },
		disabled: { type: Boolean },
		type: { type: String }
	},
	setup(e) {
		let t = e, n = _e()?._light;
		return (e, r) => (o(), F(B(wC), {
			variant: t.variant,
			size: t.size,
			disabled: t.disabled,
			type: t.type ?? "button"
		}, {
			default: u(() => [R("span", { innerHTML: B(n)?.defaultHtml || "" }, null, 8, fw)]),
			_: 1
		}, 8, [
			"variant",
			"size",
			"disabled",
			"type"
		]));
	}
}), mw = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(r_), L({ "data-slot": "progress" }, B(n), { class: B($)("bg-muted h-1 rounded-full relative flex w-full items-center overflow-x-hidden", t.class) }), {
			default: u(() => [G(B(i_), {
				"data-slot": "progress-indicator",
				class: "bg-primary size-full flex-1 transition-all",
				style: O(`transform: translateX(-${100 - (t.modelValue ?? 0)}%);`)
			}, null, 8, ["style"])]),
			_: 1
		}, 16, ["class"]));
	}
}), hw = /* @__PURE__ */ W({
	__name: "Progress.ce",
	props: { value: { type: [Number, String] } },
	setup(e) {
		_e();
		let t = e, n = z(() => Number(t.value ?? 0));
		return (e, t) => (o(), F(B(mw), { "model-value": n.value }, null, 8, ["model-value"]));
	}
}), gw = /* @__PURE__ */ W({
	__name: "Label.ce",
	props: { for: { type: String } },
	setup(e) {
		let t = _e()?._light, n = e;
		return (e, r) => (o(), F(B(jS), {
			for: n.for,
			innerHTML: B(t)?.defaultHtml || ""
		}, null, 8, ["for", "innerHTML"]));
	}
}), _w = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "input-group",
			role: "group",
			class: I(B($)("border-input dark:bg-input/30 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-disabled:bg-input/50 dark:has-disabled:bg-input/80 h-8 rounded-lg border transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-3 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 group/input-group relative flex w-full min-w-0 items-center outline-none has-[>textarea]:h-auto", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), vw = ["data-align"], yw = /* @__PURE__ */ W({
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
		return (e, r) => (o(), D("div", {
			role: "group",
			"data-slot": "input-group-addon",
			"data-align": t.align,
			class: I(B($)(B(Sw)({ align: t.align }), t.class)),
			onClick: n
		}, [v(e.$slots, "default")], 10, vw));
	}
}), bw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(SS), {
			"data-slot": "input-group-control",
			class: I(B($)("rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1", t.class))
		}, null, 8, ["class"]));
	}
}), xw = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(wS), {
			"data-slot": "input-group-control",
			class: I(B($)("rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent flex-1 resize-none", t.class))
		}, null, 8, ["class"]));
	}
}), Sw = CC("text-muted-foreground h-auto gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=size-])]:size-4 flex cursor-text items-center justify-center select-none", {
	variants: { align: {
		"inline-start": "pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] order-first",
		"inline-end": "pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] order-last",
		"block-start": "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
		"block-end": "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start"
	} },
	defaultVariants: { align: "inline-start" }
}), Cw = /* @__PURE__ */ W({
	__name: "InputGroup.ce",
	setup(e) {
		let t = _e()?._light, n = z(() => {
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
		}), r = z(() => n.value.addons.filter((e) => e.align === "inline-start" || e.align === "block-start")), i = z(() => n.value.addons.filter((e) => e.align === "inline-end" || e.align === "block-end"));
		return (e, t) => (o(), F(B(_w), null, {
			default: u(() => [
				(o(!0), D(V, null, f(r.value, (e, t) => (o(), F(B(yw), {
					key: "p" + t,
					align: e.align,
					innerHTML: e.html
				}, null, 8, ["align", "innerHTML"]))), 128)),
				n.value.controlTag === "textarea" ? (o(), F(B(xw), P(L({ key: 0 }, n.value.controlAttrs)), null, 16)) : (o(), F(B(bw), P(L({ key: 1 }, n.value.controlAttrs)), null, 16)),
				(o(!0), D(V, null, f(i.value, (e, t) => (o(), F(B(yw), {
					key: "s" + t,
					align: e.align,
					innerHTML: e.html
				}, null, 8, ["align", "innerHTML"]))), 128))
			]),
			_: 1
		}));
	}
}), ww = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (r, i) => (o(), F(B(I_), L({
			"data-slot": "scroll-area-scrollbar",
			"data-orientation": e.orientation
		}, B(n), { class: B($)("data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none", t.class) }), {
			default: u(() => [G(B(V_), {
				"data-slot": "scroll-area-thumb",
				class: "rounded-full relative flex-1 bg-border"
			})]),
			_: 1
		}, 16, ["data-orientation", "class"]));
	}
}), Tw = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(__), L({ "data-slot": "scroll-area" }, B(n), { class: B($)("relative", t.class) }), {
			default: u(() => [
				G(B(H_), {
					"data-slot": "scroll-area-viewport",
					class: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
				}, {
					default: u(() => [v(e.$slots, "default")]),
					_: 3
				}),
				G(ww),
				G(B(y_))
			]),
			_: 3
		}, 16, ["class"]));
	}
}), Ew = /* @__PURE__ */ W({
	__name: "ScrollArea.ce",
	props: {
		height: { type: String },
		width: { type: String }
	},
	setup(e) {
		let t = e, n = z(() => ({
			...t.height ? { height: t.height } : {},
			...t.width ? { width: t.width } : {}
		}));
		return (e, t) => (o(), F(B(Tw), { style: O(n.value) }, {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 8, ["style"]));
	}
}), Dw = { class: "go-table-wrap" }, Ow = /* @__PURE__ */ W({
	__name: "Table.ce",
	setup(e) {
		return (e, t) => (o(), D("div", Dw, [v(e.$slots, "default")]));
	}
}), kw = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(lb), L({
			"data-slot": "tabs",
			"data-orientation": B(a).orientation || "horizontal"
		}, B(a), { class: B($)("gap-2 group/tabs flex data-horizontal:flex-col", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["data-orientation", "class"]));
	}
}), Aw = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(fb), L({
			"data-slot": "tabs-content",
			class: B($)("text-sm flex-1 outline-none", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), jw = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class", "variant");
		return (r, i) => (o(), F(B(pb), L({
			"data-slot": "tabs-list",
			"data-variant": e.variant
		}, B(n), { class: B($)(B(Nw)({ variant: e.variant }), t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-variant", "class"]));
	}
}), Mw = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(mb), L({
			"data-slot": "tabs-trigger",
			class: B($)("gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg:not([class*=size-])]:size-4 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Nw = CC("rounded-lg p-[3px] group-data-horizontal/tabs:h-8 data-[variant=line]:rounded-none group/tabs-list inline-flex w-fit items-center justify-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
}), Pw = ["innerHTML"], Fw = /* @__PURE__ */ W({
	__name: "Tabs.ce",
	props: { defaultValue: { type: String } },
	setup(e) {
		let t = e, n = _e()?._light.sections ?? [], r = t.defaultValue ?? n[0]?.value ?? void 0;
		return (e, t) => (o(), F(B(kw), { "default-value": B(r) }, {
			default: u(() => [G(B(jw), null, {
				default: u(() => [(o(!0), D(V, null, f(B(n), (e, t) => (o(), F(B(Mw), {
					key: t,
					value: e.value || String(t),
					disabled: e.disabled
				}, {
					default: u(() => [H(U(e.title), 1)]),
					_: 2
				}, 1032, ["value", "disabled"]))), 128))]),
				_: 1
			}), (o(!0), D(V, null, f(B(n), (e, t) => (o(), F(B(Aw), {
				key: t,
				value: e.value || String(t)
			}, {
				default: u(() => [R("div", { innerHTML: e.html }, null, 8, Pw)]),
				_: 2
			}, 1032, ["value"]))), 128))]),
			_: 1
		}, 8, ["default-value"]));
	}
}), Iw = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(Zs), L({ "data-slot": "collapsible" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), Lw = /* @__PURE__ */ W({
	__name: "CollapsibleContent",
	props: {
		forceMount: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(Qs), L({ "data-slot": "collapsible-content" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), Rw = /* @__PURE__ */ W({
	__name: "CollapsibleTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B($s), L({ "data-slot": "collapsible-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), zw = ["innerHTML"], Bw = ["innerHTML"], Vw = /* @__PURE__ */ W({
	__name: "Collapsible.ce",
	props: { defaultOpen: { type: Boolean } },
	setup(e) {
		let t = e, n = _e(), r = n?._light.slots.trigger ?? "", i = n?._light.defaultHtml ?? "";
		return (e, n) => (o(), F(B(Iw), { "default-open": t.defaultOpen ?? !1 }, {
			default: u(() => [G(B(Rw), { "as-child": "" }, {
				default: u(() => [R("button", { innerHTML: B(r) || "Toggle" }, null, 8, zw)]),
				_: 1
			}), G(B(Lw), null, {
				default: u(() => [R("div", { innerHTML: B(i) }, null, 8, Bw)]),
				_: 1
			})]),
			_: 1
		}, 8, ["default-open"]));
	}
}), Hw = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(Jy), L({ class: B($)("flex gap-2", n.class) }, B(a)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Uw = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, i) => (o(), F(B(Qy), L(B(n), { class: B($)("text-xs text-muted-foreground", t.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Ww = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, i) => (o(), F(B($y), L(B(n), { class: B($)("inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-8 h-8", "group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50", "group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground", "group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground", t.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Gw = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, i) => (o(), F(B(Zy), L(B(n), { class: B($)("flex items-center gap-2 group data-[disabled]:pointer-events-none", t.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Kw = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(eb), L(B(n), { class: B($)("bg-muted", "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50", "group-data-[state=completed]:bg-accent", t.class) }), null, 16, ["class"]));
	}
}), qw = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(tb), L(B(n), { class: B($)("text-md font-semibold whitespace-nowrap", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Jw = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(nb), L(B(n), { class: B($)("p-1 flex flex-col items-center text-center gap-1 rounded-md", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), Yw = ["innerHTML"], Xw = /* @__PURE__ */ W({
	__name: "Stepper.ce",
	props: {
		orientation: { type: String },
		defaultValue: { type: Number }
	},
	setup(e) {
		let t = e, n = _e()?._light.sections ?? [];
		return (e, r) => (o(), F(B(Hw), {
			orientation: t.orientation ?? "horizontal",
			"default-value": t.defaultValue ?? 1,
			linear: ""
		}, {
			default: u(() => [(o(!0), D(V, null, f(B(n), (e, t) => (o(), F(B(Gw), {
				key: t,
				step: t + 1,
				disabled: e.disabled
			}, {
				default: u(() => [G(B(Jw), null, {
					default: u(() => [
						G(B(Ww), null, {
							default: u(() => [H(U(t + 1), 1)]),
							_: 2
						}, 1024),
						G(B(qw), null, {
							default: u(() => [H(U(e.title), 1)]),
							_: 2
						}, 1024),
						e.html ? (o(), F(B(Uw), { key: 0 }, {
							default: u(() => [R("div", { innerHTML: e.html }, null, 8, Yw)]),
							_: 2
						}, 1024)) : N("", !0)
					]),
					_: 2
				}, 1024), t < B(n).length - 1 ? (o(), F(B(Kw), { key: 0 })) : N("", !0)]),
				_: 2
			}, 1032, ["step", "disabled"]))), 128))]),
			_: 1
		}, 8, ["orientation", "default-value"]));
	}
}), Zw = /* @__PURE__ */ W({
	__name: "AlertDialog",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(gl), L({ "data-slot": "alert-dialog" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), Qw = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class", "size"), r);
		return (t, r) => (o(), F(B(hl), null, {
			default: u(() => [G(B(ml), {
				"data-slot": "alert-dialog-overlay",
				class: "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50"
			}), G(B(fl), L({
				"data-slot": "alert-dialog-content",
				"data-size": e.size
			}, {
				...t.$attrs,
				...B(i)
			}, { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 bg-popover text-popover-foreground ring-foreground/10 gap-4 rounded-xl p-4 ring-1 duration-100 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 outline-none", n.class) }), {
				default: u(() => [v(t.$slots, "default")]),
				_: 3
			}, 16, ["data-size", "class"])]),
			_: 3
		}));
	}
}), $w = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(pl), L({ "data-slot": "alert-dialog-description" }, B(n), { class: B($)("text-muted-foreground *:[a]:hover:text-foreground text-sm text-balance md:text-pretty *:[a]:underline *:[a]:underline-offset-3", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), eT = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "alert-dialog-footer",
			class: I(B($)("bg-muted/50 -mx-4 -mb-4 rounded-b-xl border-t p-4 flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), tT = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "alert-dialog-header",
			class: I(B($)("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), nT = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(_l), L({ "data-slot": "alert-dialog-title" }, B(n), { class: B($)("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2 cn-font-heading", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), rT = /* @__PURE__ */ W({
	__name: "AlertDialogTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(vl), L({ "data-slot": "alert-dialog-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), iT = ["innerHTML"], aT = /* @__PURE__ */ W({
	__name: "AlertDialog.ce",
	setup(e) {
		let t = _e()?._light.slots ?? {};
		return (e, n) => (o(), F(B(Zw), null, {
			default: u(() => [G(B(rT), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [n[0] ||= H("Abrir", -1)])]),
				_: 3
			}), G(B(Qw), null, {
				default: u(() => [
					G(B(tT), null, {
						default: u(() => [B(t).title ? (o(), F(B(nT), {
							key: 0,
							innerHTML: B(t).title
						}, null, 8, ["innerHTML"])) : N("", !0), B(t).description ? (o(), F(B($w), {
							key: 1,
							innerHTML: B(t).description
						}, null, 8, ["innerHTML"])) : N("", !0)]),
						_: 1
					}),
					B(t).content ? (o(), D("div", {
						key: 0,
						innerHTML: B(t).content
					}, null, 8, iT)) : N("", !0),
					B(t).footer ? (o(), F(B(eT), {
						key: 1,
						innerHTML: B(t).footer
					}, null, 8, ["innerHTML"])) : N("", !0)
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
var oT = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var sT = (e) => typeof e < "u";
function cT(e) {
	return JSON.parse(JSON.stringify(e));
}
function lT(e, n, r, i = {}) {
	let { clone: a = !1, passive: o = !1, eventName: s, deep: c = !1, defaultValue: l, shouldEmit: u } = i, d = y(), f = r || d?.emit || (d?.$emit)?.bind(d) || (d?.proxy?.$emit)?.bind(d?.proxy), p = s;
	n ||= "modelValue", p ||= `update:${n.toString()}`;
	let m = (e) => a ? typeof a == "function" ? a(e) : cT(e) : e, h = () => sT(e[n]) ? m(e[n]) : l, g = (e) => {
		u ? u(e) && f(p, e) : f(p, e);
	};
	if (o) {
		let r = k(h()), i = !1;
		return C(() => e[n], (e) => {
			i || (i = !0, r.value = m(e), t(() => i = !1));
		}), C(r, (t) => {
			!i && (t !== e[n] || c) && g(t);
		}, { deep: c }), r;
	} else return z({
		get() {
			return h();
		},
		set(e) {
			g(e);
		}
	});
}
var [uT, dT] = q("DrawerRoot"), fT = /* @__PURE__ */ new WeakMap();
function pT(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement) || !t) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && fT.set(e, r);
}
function mT(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = fT.get(e);
	n && Object.entries(n).forEach(([t, n]) => {
		e.style[t] = n;
	});
}
function hT(e, t) {
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? Number.parseFloat(i[1].split(", ")[_T(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? Number.parseFloat(i[1].split(", ")[_T(t) ? 5 : 4]) : null);
}
function gT(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function _T(e) {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
}
function vT(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
var yT = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, bT = .4, xT = .25, ST = 100, CT = 8, wT = 16, TT = 26, ET = "vaul-dragging";
function DT({ activeSnapPoint: e, snapPoints: n, drawerRef: r, overlayRef: i, fadeFromIndex: a, onSnapPointChange: o, direction: s }) {
	let c = k(typeof window < "u" ? {
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
	}), ce(() => {
		typeof window < "u" && window.removeEventListener("resize", l);
	});
	let u = z(() => (n.value && e.value === n.value[n.value.length - 1]) ?? null), d = z(() => n.value && n.value.length > 0 && (a?.value || a?.value === 0) && !Number.isNaN(a?.value) && n.value[a?.value ?? -1] === e.value || !n.value), f = z(() => n.value?.findIndex((t) => t === e.value) ?? null), m = z(() => n.value?.map((e) => {
		let t = typeof e == "string", n = 0;
		if (t && (n = Number.parseInt(e, 10)), _T(s.value)) {
			let r = t ? n : c.value ? e * c.value.innerHeight : 0;
			return c.value ? s.value === "bottom" ? c.value.innerHeight - r : -c.value.innerHeight + r : r;
		}
		let r = t ? n : c.value ? e * c.value.innerWidth : 0;
		return c.value ? s.value === "right" ? c.value.innerWidth - r : -c.value.innerWidth + r : r;
	}) ?? []), h = z(() => f.value === null ? null : m.value?.[f.value]), g = (c) => {
		let l = m.value?.findIndex((e) => e === c) ?? null;
		t(() => {
			o(l, m.value), pT(r.value?.$el, {
				transition: `transform ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`,
				transform: _T(s.value) ? `translate3d(0, ${c}px, 0)` : `translate3d(${c}px, 0, 0)`
			});
		}), m.value && l !== m.value.length - 1 && l !== a?.value ? pT(i.value?.$el, {
			transition: `opacity ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`,
			opacity: "0"
		}) : pT(i.value?.$el, {
			transition: `opacity ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`,
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
		if (l && pT(i.value?.$el, { transition: `opacity ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})` }), r > 2 && !p) {
			o ? t() : g(m.value[0]);
			return;
		}
		if (r > 2 && p && m && n.value) {
			g(m.value[n.value.length - 1]);
			return;
		}
		let _ = m.value?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - c) < Math.abs(e - c) ? t : e), v = _T(s.value) ? window.innerHeight : window.innerWidth;
		if (r > bT && Math.abs(e) < v * .4) {
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
		(s.value === "bottom" || s.value === "right") && t < m.value[m.value.length - 1] || (s.value === "top" || s.value === "left") && t > m.value[m.value.length - 1] || pT(r.value?.$el, { transform: _T(s.value) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
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
function OT() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
var kT = null;
function AT(e) {
	let { isOpen: t, modal: n, nested: r, hasBeenOpened: i, preventScrollRestoration: a, noBodyStyles: o } = e, s = k(typeof window < "u" ? window.location.href : ""), c = k(0);
	function l() {
		if (OT() && kT === null && t.value && !o.value) {
			kT = {
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
		if (OT() && kT !== null && !o.value) {
			let e = -Number.parseInt(document.body.style.top, 10), t = -Number.parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, kT), window.requestAnimationFrame(() => {
				if (a.value && s.value !== window.location.href) {
					s.value = window.location.href;
					return;
				}
				window.scrollTo(t, e);
			}), kT = null;
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
function jT(e, t) {
	return e && e.value ? e : t;
}
function MT(e) {
	let { emitDrag: t, emitRelease: n, emitClose: r, emitOpenChange: i, open: a, dismissible: o, nested: c, modal: l, shouldScaleBackground: u, setBackgroundColorOnScale: d, scrollLockTimeout: f, closeThreshold: p, activeSnapPoint: m, fadeFromIndex: h, direction: g, noBodyStyles: _, handleOnly: v, preventScrollRestoration: y } = e, b = k(a.value ?? !1), x = k(!1), S = k(!1), w = k(!1), T = k(null), E = k(null), D = k(null), O = k(null), ee = k(null), te = k(!1), A = k(null), ne = k(0), re = k(!1);
	k(0);
	let j = k(null);
	k(0);
	let M = z(() => j.value?.$el.getBoundingClientRect().height || 0), ie = jT(e.snapPoints, k(void 0)), ae = z(() => ie && (ie.value?.length ?? 0) > 0), N = k(null), { activeSnapPointIndex: P, onRelease: F, snapPointsOffset: I, onDrag: oe, shouldFade: se, getPercentageDragged: ce } = DT({
		snapPoints: ie,
		activeSnapPoint: m,
		drawerRef: j,
		fadeFromIndex: h,
		overlayRef: T,
		onSnapPointChange: L,
		direction: g
	});
	function L(e, t) {
		ie.value && e === t.length - 1 && (E.value = /* @__PURE__ */ new Date());
	}
	AT({
		isOpen: b,
		modal: l,
		nested: c,
		hasBeenOpened: x,
		noBodyStyles: _,
		preventScrollRestoration: y
	});
	function le() {
		return (window.innerWidth - TT) / window.innerWidth;
	}
	function ue(e, t) {
		if (!e) return !1;
		let n = e, r = window.getSelection()?.toString(), i = j.value ? hT(j.value.$el, g.value) : null, a = /* @__PURE__ */ new Date();
		if (n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (g.value === "right" || g.value === "left") return !0;
		if (E.value && a.getTime() - E.value.getTime() < 500) return !1;
		if (i !== null && (g.value === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (ee.value && a.getTime() - ee.value.getTime() < f.value && i === 0 || t) return ee.value = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return ee.value = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function R(e) {
		!o.value && !ie.value || j.value && !j.value.$el.contains(e.target) || (S.value = !0, D.value = /* @__PURE__ */ new Date(), e.target.setPointerCapture(e.pointerId), ne.value = _T(g.value) ? e.clientY : e.clientX);
	}
	function de(e) {
		var n;
		if (j.value && S.value) {
			let r = g.value === "bottom" || g.value === "right" ? 1 : -1, i = (ne.value - (_T(g.value) ? e.clientY : e.clientX)) * r, a = i > 0, s = ie.value && !o.value && !a;
			if (s && P.value === 0) return;
			let c = Math.abs(i), l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), d = c / M.value, f = ce(c, a);
			if (f !== null && (d = f), s && d >= 1 || !te.value && !ue(e.target, a)) return;
			if ((n = j?.value) == null || n.$el.classList.add(ET), te.value = !0, pT(j.value?.$el, { transition: "none" }), pT(T.value?.$el, { transition: "none" }), ie.value && oe({ draggedDistance: i }), a && !ie.value) {
				let e = gT(i), t = Math.min(e * -1, 0) * r;
				pT(j.value?.$el, { transform: _T(g.value) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
				return;
			}
			let p = 1 - d;
			if ((se.value || h.value && P.value === h.value - 1) && (t(d), pT(T.value?.$el, {
				opacity: `${p}`,
				transition: "none"
			}, !0)), l && T.value && u.value) {
				let e = Math.min(le() + d * (1 - le()), 1), t = 8 - d * 8, n = Math.max(0, 14 - d * 14);
				pT(l, {
					borderRadius: `${t}px`,
					transform: _T(g.value) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!ie.value) {
				let e = c * r;
				pT(j.value?.$el, { transform: _T(g.value) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	function fe() {
		if (!j.value) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), t = hT(j.value.$el, g.value);
		pT(j.value.$el, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`
		}), pT(T.value?.$el, {
			transition: `opacity ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`,
			opacity: "1"
		}), u.value && t && t > 0 && b.value && pT(e, {
			borderRadius: `${CT}px`,
			overflow: "hidden",
			..._T(g.value) ? {
				transform: `scale(${le()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${le()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${yT.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${yT.EASE.join(",")})`
		}, !0);
	}
	function pe(e) {
		j.value && (r(), e || (b.value = !1), window.setTimeout(() => {
			ie.value && (m.value = ie.value[0]);
		}, yT.DURATION * 1e3));
	}
	s(() => {
		if (!b.value && u.value && oT) {
			let e = setTimeout(() => {
				mT(document.body);
			}, 200);
			return () => clearTimeout(e);
		}
	}), C(a, () => {
		b.value = a.value, a.value || pe();
	});
	function me(e) {
		if (!S.value || !j.value) return;
		j.value.$el.classList.remove(ET), te.value = !1, S.value = !1, O.value = /* @__PURE__ */ new Date();
		let t = hT(j.value.$el, g.value);
		if (!ue(e.target, !1) || !t || Number.isNaN(t) || D.value === null) return;
		let r = O.value.getTime() - D.value.getTime(), i = ne.value - (_T(g.value) ? e.clientY : e.clientX), a = Math.abs(i) / r;
		if (a > .05 && (w.value = !0, window.setTimeout(() => {
			w.value = !1;
		}, 200)), ie.value) {
			F({
				draggedDistance: i * (g.value === "bottom" || g.value === "right" ? 1 : -1),
				closeDrawer: pe,
				velocity: a,
				dismissible: o.value
			}), n(!0);
			return;
		}
		if (g.value === "bottom" || g.value === "right" ? i > 0 : i < 0) {
			fe(), n(!0);
			return;
		}
		if (a > bT) {
			pe(), n(!1);
			return;
		}
		if (t >= Math.min(j.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight) * p.value) {
			pe(), n(!1);
			return;
		}
		n(!0), fe();
	}
	C(b, (e) => {
		e && (E.value = /* @__PURE__ */ new Date()), i(e);
	}, { immediate: !0 });
	function he(e) {
		var t;
		let n = e ? (window.innerWidth - wT) / window.innerWidth : 1, r = e ? -16 : 0;
		A.value && window.clearTimeout(A.value), pT(j.value?.$el, {
			transition: `transform ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`,
			transform: `scale(${n}) translate3d(0, ${r}px, 0)`
		}), !e && (t = j.value) != null && t.$el && (A.value = window.setTimeout(() => {
			let e = hT(j.value?.$el, g.value);
			pT(j.value?.$el, {
				transition: "none",
				transform: _T(g.value) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function B(e) {
		if (e < 0) return;
		let t = _T(g.value) ? window.innerHeight : window.innerWidth, n = (t - wT) / t, r = n + e * (1 - n), i = -16 + e * wT;
		pT(j.value?.$el, {
			transform: _T(g.value) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function ge(e) {
		let t = _T(g.value) ? window.innerHeight : window.innerWidth, n = e ? (t - wT) / t : 1, r = e ? -16 : 0;
		e && pT(j.value?.$el, {
			transition: `transform ${yT.DURATION}s cubic-bezier(${yT.EASE.join(",")})`,
			transform: _T(g.value) ? `scale(${n}) translate3d(0, ${r}px, 0)` : `scale(${n}) translate3d(${r}px, 0, 0)`
		});
	}
	return {
		open: a,
		isOpen: b,
		modal: l,
		keyboardIsOpen: re,
		hasBeenOpened: x,
		drawerRef: j,
		drawerHeightRef: M,
		overlayRef: T,
		handleRef: N,
		isDragging: S,
		dragStartTime: D,
		isAllowedToDrag: te,
		snapPoints: ie,
		activeSnapPoint: m,
		hasSnapPoints: ae,
		pointerStart: ne,
		dismissible: o,
		snapPointsOffset: I,
		direction: g,
		shouldFade: se,
		fadeFromIndex: h,
		shouldScaleBackground: u,
		setBackgroundColorOnScale: d,
		onPress: R,
		onDrag: de,
		onRelease: me,
		closeDrawer: pe,
		onNestedDrag: B,
		onNestedRelease: ge,
		onNestedOpenChange: he,
		emitClose: r,
		emitDrag: t,
		emitRelease: n,
		emitOpenChange: i,
		nested: c,
		handleOnly: v,
		noBodyStyles: _
	};
}
var NT = /* @__PURE__ */ W({
	__name: "DrawerRoot",
	props: {
		activeSnapPoint: { default: void 0 },
		closeThreshold: { default: xT },
		shouldScaleBackground: {
			type: Boolean,
			default: void 0
		},
		setBackgroundColorOnScale: {
			type: Boolean,
			default: !0
		},
		scrollLockTimeout: { default: ST },
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
		let a = z(() => r.fadeFromIndex ?? (r.snapPoints && r.snapPoints.length - 1)), s = lT(r, "open", i, {
			defaultValue: r.defaultOpen,
			passive: r.open === void 0
		}), c = lT(r, "activeSnapPoint", i, { passive: r.activeSnapPoint === void 0 }), l = {
			emitDrag: (e) => i("drag", e),
			emitRelease: (e) => i("release", e),
			emitClose: () => i("close"),
			emitOpenChange: (e) => {
				i("update:open", e), setTimeout(() => {
					i("animationEnd", e);
				}, yT.DURATION * 1e3);
			}
		}, { closeDrawer: d, hasBeenOpened: f, modal: p, isOpen: m } = dT(MT({
			...l,
			...Ce(r),
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
		return t({ open: m }), (e, t) => (o(), F(B(gc), {
			open: B(m),
			modal: B(p),
			"onUpdate:open": h
		}, {
			default: u(() => [v(e.$slots, "default", { open: B(m) })]),
			_: 3
		}, 8, ["open", "modal"]));
	}
}), PT = /* @__PURE__ */ W({
	__name: "DrawerOverlay",
	setup(e) {
		let { overlayRef: t, hasSnapPoints: n, isOpen: r, shouldFade: i } = uT();
		return (e, a) => (o(), F(B(al), {
			ref_key: "overlayRef",
			ref: t,
			"data-vaul-overlay": "",
			"data-vaul-snap-points": B(r) && B(n) ? "true" : "false",
			"data-vaul-snap-points-overlay": B(r) && B(i) ? "true" : "false"
		}, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
	}
});
function FT() {
	let { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: i } = uT(), a = k(null), o = k(document.body.style.backgroundColor);
	function c() {
		return (window.innerWidth - TT) / window.innerWidth;
	}
	s((s) => {
		if (t.value && n.value) {
			a.value && clearTimeout(a.value);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			r.value && !i.value && vT(document.body, { background: "black" }), vT(t, {
				transformOrigin: _T(e.value) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${yT.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${yT.EASE.join(",")})`
			});
			let n = vT(t, {
				borderRadius: `${CT}px`,
				overflow: "hidden",
				..._T(e.value) ? { transform: `scale(${c()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${c()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			s(() => {
				n(), a.value = window.setTimeout(() => {
					o.value ? document.body.style.background = o.value : document.body.style.removeProperty("background");
				}, yT.DURATION * 1e3);
			});
		}
	}, { flush: "pre" });
}
var IT = /* @__PURE__ */ W({
	__name: "DrawerContent",
	setup(e) {
		let { open: t, isOpen: n, snapPointsOffset: r, hasSnapPoints: i, drawerRef: a, onPress: c, onDrag: l, onRelease: d, modal: f, emitOpenChange: p, dismissible: m, keyboardIsOpen: h, closeDrawer: g, direction: _, handleOnly: y } = uT();
		FT();
		let b = k(!1), x = z(() => r.value && r.value.length > 0 ? `${r.value[0]}px` : "0");
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
		}), (e, t) => (o(), F(B(nl), {
			ref_key: "drawerRef",
			ref: a,
			"data-vaul-drawer": "",
			"data-vaul-drawer-direction": B(_),
			"data-vaul-delayed-snap-points": b.value ? "true" : "false",
			"data-vaul-snap-points": B(n) && B(i) ? "true" : "false",
			style: O({ "--snap-point-height": x.value }),
			onPointerdown: C,
			onPointermove: w,
			onPointerup: B(d),
			onPointerDownOutside: S,
			onOpenAutoFocus: t[0] ||= A(() => {}, ["prevent"]),
			onEscapeKeyDown: t[1] ||= (e) => {
				B(m) || e.preventDefault();
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
}), LT = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(NT), L({ "data-slot": "drawer" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), RT = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(PT), L({ "data-slot": "drawer-overlay" }, B(n), { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50", t.class) }), null, 16, ["class"]));
	}
}), zT = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(sl), null, {
			default: u(() => [G(RT), G(B(IT), L({ "data-slot": "drawer-content" }, {
				...e.$attrs,
				...B(r)
			}, { class: B($)("bg-popover text-popover-foreground flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50", n.class) }), {
				default: u(() => [t[0] ||= R("div", { class: "bg-muted mt-4 h-1 w-[100px] rounded-full mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1), v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), BT = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(rl), L({ "data-slot": "drawer-description" }, B(n), { class: B($)("text-muted-foreground text-sm", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), VT = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "drawer-footer",
			class: I(B($)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), HT = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "drawer-header",
			class: I(B($)("gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), UT = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(cl), L({ "data-slot": "drawer-title" }, B(n), { class: B($)("text-foreground text-base font-medium cn-font-heading", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), WT = /* @__PURE__ */ W({
	__name: "DrawerTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(ll), L({ "data-slot": "drawer-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), GT = ["innerHTML"], KT = /* @__PURE__ */ W({
	__name: "Drawer.ce",
	setup(e) {
		let t = _e()?._light.slots ?? {};
		return (e, n) => (o(), F(B(LT), null, {
			default: u(() => [G(B(WT), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [n[0] ||= H("Abrir", -1)])]),
				_: 3
			}), G(B(zT), null, {
				default: u(() => [
					G(B(HT), null, {
						default: u(() => [B(t).title ? (o(), F(B(UT), {
							key: 0,
							innerHTML: B(t).title
						}, null, 8, ["innerHTML"])) : N("", !0), B(t).description ? (o(), F(B(BT), {
							key: 1,
							innerHTML: B(t).description
						}, null, 8, ["innerHTML"])) : N("", !0)]),
						_: 1
					}),
					B(t).content ? (o(), D("div", {
						key: 0,
						innerHTML: B(t).content
					}, null, 8, GT)) : N("", !0),
					B(t).footer ? (o(), F(B(VT), {
						key: 1,
						innerHTML: B(t).footer
					}, null, 8, ["innerHTML"])) : N("", !0)
				]),
				_: 1
			})]),
			_: 3
		}));
	}
}), qT = /* @__PURE__ */ W({
	__name: "Sheet",
	props: {
		open: { type: Boolean },
		defaultOpen: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(gc), L({ "data-slot": "sheet" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), JT = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(al), L({
			"data-slot": "sheet-overlay",
			class: B($)("bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50 duration-100 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), YT = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class", "side", "showCloseButton"), r);
		return (t, r) => (o(), F(B(sl), null, {
			default: u(() => [G(JT), G(B(nl), L({
				"data-slot": "sheet-content",
				"data-side": e.side,
				class: B($)("bg-popover text-popover-foreground fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", n.class)
			}, {
				...t.$attrs,
				...B(i)
			}), {
				default: u(() => [v(t.$slots, "default"), e.showCloseButton ? (o(), F(B(_c), {
					key: 0,
					"data-slot": "sheet-close",
					"as-child": ""
				}, {
					default: u(() => [G(B(wC), {
						variant: "ghost",
						class: "absolute top-3 right-3",
						size: "icon-sm"
					}, {
						default: u(() => [G(B(pr)), r[0] ||= R("span", { class: "sr-only" }, "Close", -1)]),
						_: 1
					})]),
					_: 1
				})) : N("", !0)]),
				_: 3
			}, 16, ["data-side", "class"])]),
			_: 3
		}));
	}
}), XT = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(rl), L({
			"data-slot": "sheet-description",
			class: B($)("text-muted-foreground text-sm", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), ZT = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sheet-footer",
			class: I(B($)("gap-2 p-4 mt-auto flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), QT = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sheet-header",
			class: I(B($)("gap-0.5 p-4 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), $T = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(cl), L({
			"data-slot": "sheet-title",
			class: B($)("text-foreground text-base font-medium cn-font-heading", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), eE = /* @__PURE__ */ W({
	__name: "SheetTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(ll), L({ "data-slot": "sheet-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), tE = ["innerHTML"], nE = /* @__PURE__ */ W({
	__name: "Sheet.ce",
	setup(e) {
		let t = _e(), n = t?._light.slots ?? {}, r = t?.getAttribute("side") ?? "right";
		return (e, t) => (o(), F(B(qT), null, {
			default: u(() => [G(B(eE), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [t[0] ||= H("Abrir", -1)])]),
				_: 3
			}), G(B(YT), { side: B(r) }, {
				default: u(() => [
					G(B(QT), null, {
						default: u(() => [B(n).title ? (o(), F(B($T), {
							key: 0,
							innerHTML: B(n).title
						}, null, 8, ["innerHTML"])) : N("", !0), B(n).description ? (o(), F(B(XT), {
							key: 1,
							innerHTML: B(n).description
						}, null, 8, ["innerHTML"])) : N("", !0)]),
						_: 1
					}),
					B(n).content ? (o(), D("div", {
						key: 0,
						innerHTML: B(n).content
					}, null, 8, tE)) : N("", !0),
					B(n).footer ? (o(), F(B(ZT), {
						key: 1,
						innerHTML: B(n).footer
					}, null, 8, ["innerHTML"])) : N("", !0)
				]),
				_: 1
			}, 8, ["side"])]),
			_: 3
		}));
	}
}), rE = /* @__PURE__ */ W({
	__name: "Popover",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean },
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(Om), L({ "data-slot": "popover" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), iE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Nm), null, {
			default: u(() => [G(B(Mm), L({ "data-slot": "popover-content" }, {
				...e.$attrs,
				...B(i)
			}, { class: B($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 flex flex-col gap-2.5 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 w-72 origin-(--reka-popover-content-transform-origin) outline-hidden", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), aE = /* @__PURE__ */ W({
	__name: "PopoverTrigger",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(Pm), L({ "data-slot": "popover-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), oE = ["innerHTML"], sE = /* @__PURE__ */ W({
	__name: "Popover.ce",
	setup(e) {
		let t = _e()?._light, n = t?.slots ?? {};
		return (e, r) => (o(), F(B(rE), null, {
			default: u(() => [G(B(aE), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [r[0] ||= H("Abrir", -1)])]),
				_: 3
			}), G(B(iE), null, {
				default: u(() => [R("div", { innerHTML: B(n).content ?? B(t)?.defaultHtml ?? "" }, null, 8, oE)]),
				_: 1
			})]),
			_: 3
		}));
	}
}), cE = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(fh), L({ "data-slot": "hover-card" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), lE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(_h), null, {
			default: u(() => [G(B(gh), L({ "data-slot": "hover-card-content" }, {
				...e.$attrs,
				...B(n)
			}, { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground w-64 rounded-lg p-2.5 text-sm shadow-md ring-1 duration-100 z-50 origin-(--reka-hover-card-content-transform-origin) outline-hidden", t.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), uE = /* @__PURE__ */ W({
	__name: "HoverCardTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(vh), L({ "data-slot": "hover-card-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), dE = ["innerHTML"], fE = /* @__PURE__ */ W({
	__name: "HoverCard.ce",
	setup(e) {
		let t = _e()?._light, n = t?.slots ?? {};
		return (e, r) => (o(), F(B(cE), null, {
			default: u(() => [G(B(uE), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [r[0] ||= H("Abrir", -1)])]),
				_: 3
			}), G(B(lE), null, {
				default: u(() => [R("div", { innerHTML: B(n).content ?? B(t)?.defaultHtml ?? "" }, null, 8, dE)]),
				_: 1
			})]),
			_: 3
		}));
	}
}), pE = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(Ib), L({ "data-slot": "tooltip" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), mE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Bb), null, {
			default: u(() => [G(B(zb), L({ "data-slot": "tooltip-content" }, {
				...B(i),
				...e.$attrs
			}, { class: B($)("data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm bg-foreground text-background z-50 w-fit max-w-xs origin-(--reka-tooltip-content-transform-origin)", n.class) }), {
				default: u(() => [v(e.$slots, "default"), G(B(kb), { class: "size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground z-50 translate-y-[calc(-50%_-_2px)]" })]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), hE = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Mb), P(r(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gE = /* @__PURE__ */ W({
	__name: "TooltipTrigger",
	props: {
		reference: {},
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(Vb), L({ "data-slot": "tooltip-trigger" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _E = ["innerHTML"], vE = /* @__PURE__ */ W({
	__name: "Tooltip.ce",
	setup(e) {
		let t = _e()?._light, n = t?.slots ?? {};
		return (e, r) => (o(), F(B(hE), null, {
			default: u(() => [G(B(pE), null, {
				default: u(() => [G(B(gE), null, {
					default: u(() => [v(e.$slots, "trigger", {}, () => [r[0] ||= H("Hover", -1)])]),
					_: 3
				}), G(B(mE), null, {
					default: u(() => [R("div", { innerHTML: B(n).content ?? B(t)?.defaultHtml ?? "" }, null, 8, _E)]),
					_: 1
				})]),
				_: 3
			})]),
			_: 3
		}));
	}
}), yE = /* @__PURE__ */ W({
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
		return (e, t) => (o(), F(B(eh), L({ "data-slot": "dropdown-menu" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), bE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(ih), null, {
			default: u(() => [G(B(th), L({ "data-slot": "dropdown-menu-content" }, {
				...e.$attrs,
				...B(i)
			}, { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-32 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-dropdown-menu-content-available-height) w-(--reka-dropdown-menu-trigger-width) origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto data-[state=closed]:overflow-hidden", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), xE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "inset", "variant", "class"));
		return (r, i) => (o(), F(B(nh), L({
			"data-slot": "dropdown-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, B(n), { class: B($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), SE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class", "inset"));
		return (r, i) => (o(), F(B(rh), L({
			"data-slot": "dropdown-menu-label",
			"data-inset": e.inset ? "" : void 0
		}, B(n), { class: B($)("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7", t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), CE = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(ah), L({ "data-slot": "dropdown-menu-separator" }, B(n), { class: B($)("bg-border -mx-1 my-1 h-px", t.class) }), null, 16, ["class"]));
	}
}), wE = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("span", {
			"data-slot": "dropdown-menu-shortcut",
			class: I(B($)("text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), TE = /* @__PURE__ */ W({
	__name: "DropdownMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(oh), L({ "data-slot": "dropdown-menu-sub" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), EE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(sh), L({ "data-slot": "dropdown-menu-sub-content" }, B(i), { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-[96px] rounded-lg p-1 shadow-lg ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), DE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class", "inset"));
		return (r, i) => (o(), F(B(ch), L({
			"data-slot": "dropdown-menu-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, B(n), { class: B($)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default"), G(B($n), { class: "cn-rtl-flip ml-auto" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), OE = /* @__PURE__ */ W({
	__name: "DropdownMenuTrigger",
	props: {
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = gs(e);
		return (e, n) => (o(), F(B(lh), L({ "data-slot": "dropdown-menu-trigger" }, B(t)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), kE = ["innerHTML"], AE = /* @__PURE__ */ W({
	__name: "DropdownMenu.ce",
	setup(e) {
		let t = _e();
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
		let r = z(() => {
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
		}), i = z(() => t?._light.slots.trigger || "Abrir");
		function a(e) {
			t?.dispatchEvent(new CustomEvent("select", {
				bubbles: !0,
				composed: !0,
				detail: { value: e }
			}));
		}
		return (e, t) => (o(), F(B(yE), null, {
			default: u(() => [G(B(OE), { "as-child": "" }, {
				default: u(() => [R("button", {
					type: "button",
					innerHTML: i.value
				}, null, 8, kE)]),
				_: 1
			}), G(B(bE), { class: "w-56" }, {
				default: u(() => [(o(!0), D(V, null, f(r.value, (e, t) => (o(), D(V, { key: t }, [e.kind === "label" ? (o(), F(B(SE), { key: 0 }, {
					default: u(() => [H(U(e.label), 1)]),
					_: 2
				}, 1024)) : e.kind === "separator" ? (o(), F(B(CE), { key: 1 })) : e.kind === "sub" ? (o(), F(B(TE), { key: 2 }, {
					default: u(() => [G(B(DE), null, {
						default: u(() => [H(U(e.label), 1)]),
						_: 2
					}, 1024), G(B(EE), null, {
						default: u(() => [(o(!0), D(V, null, f(e.children, (e, t) => (o(), F(B(xE), {
							key: t,
							disabled: e.disabled,
							onClick: (t) => a(e.value)
						}, {
							default: u(() => [H(U(e.label) + " ", 1), e.shortcut ? (o(), F(B(wE), { key: 0 }, {
								default: u(() => [H(U(e.shortcut), 1)]),
								_: 2
							}, 1024)) : N("", !0)]),
							_: 2
						}, 1032, ["disabled", "onClick"]))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024)) : (o(), F(B(xE), {
					key: 3,
					disabled: e.disabled,
					onClick: (t) => a(e.value)
				}, {
					default: u(() => [H(U(e.label) + " ", 1), e.shortcut ? (o(), F(B(wE), { key: 0 }, {
						default: u(() => [H(U(e.shortcut), 1)]),
						_: 2
					}, 1024)) : N("", !0)]),
					_: 2
				}, 1032, ["disabled", "onClick"]))], 64))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), jE = /* @__PURE__ */ W({
	__name: "ContextMenu",
	props: {
		pressOpenDelay: {},
		dir: {},
		modal: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(fm), L({ "data-slot": "context-menu" }, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), ME = { class: "absolute right-2 pointer-events-none" }, NE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(lm), L({ "data-slot": "context-menu-checkbox-item" }, B(i), { class: B($)("focus:bg-accent focus:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [R("span", ME, [G(B(hm), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [G(B(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), PE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(_m), null, {
			default: u(() => [G(B(pm), L({ "data-slot": "context-menu-content" }, {
				...e.$attrs,
				...B(i)
			}, { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 bg-popover text-popover-foreground min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 max-h-(--reka-context-menu-content-available-height) origin-(--reka-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), FE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (t, r) => (o(), F(B(mm), L({
			"data-slot": "context-menu-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, B(i), { class: B($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive focus:*:[svg]:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/context-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [v(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), IE = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (r, i) => (o(), F(B(gm), L({
			"data-slot": "context-menu-label",
			"data-inset": e.inset ? "" : void 0
		}, B(n), { class: B($)("text-muted-foreground px-1.5 py-1 text-xs font-medium data-inset:pl-7", t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), LE = /* @__PURE__ */ W({
	__name: "ContextMenuRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(vm), L({ "data-slot": "context-menu-radio-group" }, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), RE = { class: "absolute right-2 pointer-events-none" }, zE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(ym), L({ "data-slot": "context-menu-radio-item" }, B(i), { class: B($)("focus:bg-accent focus:text-accent-foreground gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [R("span", RE, [G(B(hm), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [G(B(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), BE = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(bm), L({ "data-slot": "context-menu-separator" }, B(n), { class: B($)("bg-border -mx-1 my-1 h-px", t.class) }), null, 16, ["class"]));
	}
}), VE = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("span", {
			"data-slot": "context-menu-shortcut",
			class: I(B($)("text-muted-foreground group-focus/context-menu-item:text-accent-foreground ml-auto text-xs tracking-widest", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), HE = /* @__PURE__ */ W({
	__name: "ContextMenuSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(xm), L({ "data-slot": "context-menu-sub" }, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), UE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Sm), L({ "data-slot": "context-menu-sub-content" }, B(i), { class: B($)("data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-popover-foreground min-w-32 rounded-lg border p-1 shadow-lg duration-100 cn-menu-translucent z-50 origin-(--reka-context-menu-content-transform-origin) overflow-hidden", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), WE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (r, i) => (o(), F(B(Cm), L({
			"data-slot": "context-menu-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, B(n), { class: B($)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-hidden select-none [&_svg]:pointer-events-none [&_svg]:shrink-0", t.class) }), {
			default: u(() => [v(r.$slots, "default"), G(B($n), { class: "cn-rtl-flip ml-auto" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), GE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Tm), L({ "data-slot": "context-menu-trigger" }, B(n), { class: B($)("select-none", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), KE = /* @__PURE__ */ W({
	__name: "ContextMenu.ce",
	setup(e) {
		let t = _e();
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
		let r = z(() => {
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
		}), i = k({}), a = k({}), s = z(() => {
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
		return (e, t) => (o(), F(B(jE), null, {
			default: u(() => [G(B(GE), null, {
				default: u(() => [v(e.$slots, "trigger", {}, () => [t[0] ||= H("Clique com o botão direito", -1)])]),
				_: 3
			}), G(B(PE), { class: "w-52" }, {
				default: u(() => [(o(!0), D(V, null, f(r.value, (e, t) => (o(), D(V, { key: t }, [e.kind === "label" ? (o(), F(B(IE), {
					key: 0,
					inset: e.inset
				}, {
					default: u(() => [H(U(e.label), 1)]),
					_: 2
				}, 1032, ["inset"])) : e.kind === "separator" ? (o(), F(B(BE), { key: 1 })) : e.kind === "checkbox" ? (o(), F(B(NE), {
					key: 2,
					"model-value": c(e),
					disabled: e.disabled,
					onSelect: A((t) => l(e), ["prevent"])
				}, {
					default: u(() => [H(U(e.label) + " ", 1), e.shortcut ? (o(), F(B(VE), { key: 0 }, {
						default: u(() => [H(U(e.shortcut), 1)]),
						_: 2
					}, 1024)) : N("", !0)]),
					_: 2
				}, 1032, [
					"model-value",
					"disabled",
					"onSelect"
				])) : e.kind === "radio" && s.value[e.group][0] === e ? (o(), F(B(LE), {
					key: 3,
					"model-value": a.value[e.group] ?? s.value[e.group].find((e) => e.checked)?.value,
					"onUpdate:modelValue": (t) => {
						a.value[e.group] = t, d(t);
					}
				}, {
					default: u(() => [(o(!0), D(V, null, f(s.value[e.group], (e, t) => (o(), F(B(zE), {
						key: t,
						value: e.value,
						disabled: e.disabled
					}, {
						default: u(() => [H(U(e.label), 1)]),
						_: 2
					}, 1032, ["value", "disabled"]))), 128))]),
					_: 2
				}, 1032, ["model-value", "onUpdate:modelValue"])) : e.kind === "radio" ? (o(), D(V, { key: 4 }, [], 64)) : e.kind === "sub" ? (o(), F(B(HE), { key: 5 }, {
					default: u(() => [G(B(WE), null, {
						default: u(() => [H(U(e.label), 1)]),
						_: 2
					}, 1024), G(B(UE), { class: "w-44" }, {
						default: u(() => [(o(!0), D(V, null, f(e.children, (e, t) => (o(), F(B(FE), {
							key: t,
							disabled: e.disabled,
							onClick: (t) => d(e.value)
						}, {
							default: u(() => [H(U(e.label) + " ", 1), e.shortcut ? (o(), F(B(VE), { key: 0 }, {
								default: u(() => [H(U(e.shortcut), 1)]),
								_: 2
							}, 1024)) : N("", !0)]),
							_: 2
						}, 1032, ["disabled", "onClick"]))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024)) : (o(), F(B(FE), {
					key: 6,
					inset: e.inset,
					disabled: e.disabled,
					onClick: (t) => d(e.value)
				}, {
					default: u(() => [H(U(e.label) + " ", 1), e.shortcut ? (o(), F(B(VE), { key: 0 }, {
						default: u(() => [H(U(e.shortcut), 1)]),
						_: 2
					}, 1024)) : N("", !0)]),
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
}), qE = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(Ch), L({ "data-slot": "menubar" }, B(a), { class: B($)("h-8 gap-0.5 rounded-lg border p-[3px] flex items-center", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), JE = { class: "left-1.5 size-4 [&_svg:not([class*=size-])]:size-4 pointer-events-none absolute flex items-center justify-center" }, YE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(bh), L({ "data-slot": "menubar-checkbox-item" }, B(i), { class: B($)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm data-inset:pl-7 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [R("span", JE, [G(B(kh), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [G(B(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), XE = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Ah), null, {
			default: u(() => [G(B(Dh), L({ "data-slot": "menubar-content" }, {
				...e.$attrs,
				...B(n)
			}, { class: B($)("bg-popover text-popover-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-36 rounded-lg p-1 shadow-md ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", t.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), ZE = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class", "inset", "variant"), r);
		return (t, r) => (o(), F(B(Oh), L({
			"data-slot": "menubar-item",
			"data-inset": e.inset ? "" : void 0,
			"data-variant": e.variant
		}, B(i), { class: B($)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive! not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 group/menubar-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [v(t.$slots, "default")]),
			_: 3
		}, 16, [
			"data-inset",
			"data-variant",
			"class"
		]));
	}
}), QE = /* @__PURE__ */ W({
	__name: "MenubarMenu",
	props: { value: {} },
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(Eh), L({ "data-slot": "menubar-menu" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), $E = /* @__PURE__ */ W({
	__name: "MenubarRadioGroup",
	props: {
		modelValue: {},
		asChild: { type: Boolean },
		as: {}
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(jh), L({ "data-slot": "menubar-radio-group" }, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), eD = { class: "left-1.5 size-4 [&_svg:not([class*=size-])]:size-4 pointer-events-none absolute flex items-center justify-center" }, tD = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Mh), L({ "data-slot": "menubar-radio-item" }, B(i), { class: B($)("focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm data-disabled:opacity-50 data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class) }), {
			default: u(() => [R("span", eD, [G(B(kh), null, {
				default: u(() => [v(e.$slots, "indicator-icon", {}, () => [G(B(Xn))])]),
				_: 3
			})]), v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), nD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Nh), L({
			"data-slot": "menubar-separator",
			class: B($)("bg-border -mx-1 my-1 h-px", t.class)
		}, B(n)), null, 16, ["class"]));
	}
}), rD = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("span", {
			"data-slot": "menubar-shortcut",
			class: I(B($)("text-muted-foreground group-focus/menubar-item:text-accent-foreground text-xs tracking-widest ml-auto", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), iD = /* @__PURE__ */ W({
	__name: "MenubarSub",
	props: {
		defaultOpen: { type: Boolean },
		open: { type: Boolean }
	},
	emits: ["update:open"],
	setup(e, { emit: t }) {
		let n = Y(e, t);
		return (e, t) => (o(), F(B(Ph), L({ "data-slot": "menubar-sub" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), aD = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(Ah), null, {
			default: u(() => [G(B(Fh), L({ "data-slot": "menubar-sub-content" }, {
				...e.$attrs,
				...B(i)
			}, { class: B($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 min-w-32 rounded-lg p-1 shadow-lg ring-1 duration-100 cn-menu-translucent z-50 origin-(--reka-menubar-content-transform-origin) overflow-hidden", n.class) }), {
				default: u(() => [v(e.$slots, "default")]),
				_: 3
			}, 16, ["class"])]),
			_: 3
		}));
	}
}), oD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class", "inset"));
		return (r, i) => (o(), F(B(Ih), L({
			"data-slot": "menubar-sub-trigger",
			"data-inset": e.inset ? "" : void 0
		}, B(n), { class: B($)("focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground gap-1.5 rounded-md px-1.5 py-1 text-sm data-inset:pl-7 [&_svg:not([class*=size-])]:size-4 flex cursor-default items-center outline-none select-none", t.class) }), {
			default: u(() => [v(r.$slots, "default"), G(B($n), { class: "cn-rtl-flip ml-auto size-4" })]),
			_: 3
		}, 16, ["data-inset", "class"]));
	}
}), sD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Lh), L({ "data-slot": "menubar-trigger" }, B(n), { class: B($)("hover:bg-muted aria-expanded:bg-muted rounded-sm px-1.5 py-[2px] text-sm font-medium flex items-center outline-hidden select-none", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), cD = /* @__PURE__ */ W({
	__name: "Menubar.ce",
	setup(e) {
		let t = _e(), n = t?._light.sections ?? [];
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
		let a = z(() => n.map((e) => ({
			title: e.title,
			value: e.value,
			nodes: i(e.html)
		}))), s = k({}), c = k({});
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
		return (e, t) => (o(), F(B(qE), null, {
			default: u(() => [(o(!0), D(V, null, f(a.value, (e) => (o(), F(B(QE), { key: e.value }, {
				default: u(() => [G(B(sD), null, {
					default: u(() => [H(U(e.title), 1)]),
					_: 2
				}, 1024), G(B(XE), null, {
					default: u(() => [(o(!0), D(V, null, f(e.nodes, (t, n) => (o(), D(V, { key: n }, [t.kind === "separator" ? (o(), F(B(nD), { key: 0 })) : t.kind === "checkbox" ? (o(), F(B(YE), {
						key: 1,
						"model-value": d(t),
						disabled: t.disabled,
						onSelect: A((e) => p(t), ["prevent"])
					}, {
						default: u(() => [H(U(t.label) + " ", 1), t.shortcut ? (o(), F(B(rD), { key: 0 }, {
							default: u(() => [H(U(t.shortcut), 1)]),
							_: 2
						}, 1024)) : N("", !0)]),
						_: 2
					}, 1032, [
						"model-value",
						"disabled",
						"onSelect"
					])) : t.kind === "radio" && l(e.nodes)[t.group][0] === t ? (o(), F(B($E), {
						key: 2,
						"model-value": c.value[e.value + t.group] ?? l(e.nodes)[t.group].find((e) => e.checked)?.value,
						"onUpdate:modelValue": (n) => {
							c.value[e.value + t.group] = n, m(n);
						}
					}, {
						default: u(() => [(o(!0), D(V, null, f(l(e.nodes)[t.group], (e, t) => (o(), F(B(tD), {
							key: t,
							value: e.value,
							disabled: e.disabled
						}, {
							default: u(() => [H(U(e.label), 1)]),
							_: 2
						}, 1032, ["value", "disabled"]))), 128))]),
						_: 2
					}, 1032, ["model-value", "onUpdate:modelValue"])) : t.kind === "radio" ? (o(), D(V, { key: 3 }, [], 64)) : t.kind === "sub" ? (o(), F(B(iD), { key: 4 }, {
						default: u(() => [G(B(oD), null, {
							default: u(() => [H(U(t.label), 1)]),
							_: 2
						}, 1024), G(B(aD), null, {
							default: u(() => [(o(!0), D(V, null, f(t.children, (e, t) => (o(), F(B(ZE), {
								key: t,
								disabled: e.disabled,
								onClick: (t) => m(e.value)
							}, {
								default: u(() => [H(U(e.label) + " ", 1), e.shortcut ? (o(), F(B(rD), { key: 0 }, {
									default: u(() => [H(U(e.shortcut), 1)]),
									_: 2
								}, 1024)) : N("", !0)]),
								_: 2
							}, 1032, ["disabled", "onClick"]))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024)) : (o(), F(B(ZE), {
						key: 5,
						inset: t.inset,
						disabled: t.disabled,
						onClick: (e) => m(t.value)
					}, {
						default: u(() => [H(U(t.label) + " ", 1), t.shortcut ? (o(), F(B(rD), { key: 0 }, {
							default: u(() => [H(U(t.shortcut), 1)]),
							_: 2
						}, 1024)) : N("", !0)]),
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
}), lD = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, uD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), D("div", lD, [G(B(ag), L({ "data-slot": "navigation-menu-viewport" }, B(n), { class: B($)("bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:zoom-out-90 data-open:zoom-in-90 ring-foreground/10 rounded-lg shadow ring-1 duration-100 origin-top-center relative mt-1.5 h-(--reka-navigation-menu-viewport-height) w-full overflow-hidden md:w-(--reka-navigation-menu-viewport-width)", t.class) }), null, 16, ["class"])]));
	}
}), dD = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class", "viewport"), i);
		return (t, i) => (o(), F(B(Yh), L({
			"data-slot": "navigation-menu",
			"data-viewport": e.viewport
		}, B(a), { class: B($)("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", n.class) }), {
			default: u((n) => [v(t.$slots, "default", P(r(n))), e.viewport ? (o(), F(uD, { key: 0 })) : N("", !0)]),
			_: 3
		}, 16, ["data-viewport", "class"]));
	}
}), fD = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(eg), L({ "data-slot": "navigation-menu-content" }, B(i), { class: B($)("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:ring-foreground/10 p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:duration-300 top-0 left-0 w-full group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), pD = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(Qh), L({ "data-slot": "navigation-menu-item" }, B(n), { class: B($)("relative", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), mD = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r);
		return (e, t) => (o(), F(B(tg), L({ "data-slot": "navigation-menu-link" }, B(i), { class: B($)("data-active:focus:bg-muted data-active:hover:bg-muted data-active:bg-muted/50 focus-visible:ring-ring/50 hover:bg-muted focus:bg-muted flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none focus-visible:ring-3 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md [&_svg:not([class*=size-])]:size-4", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(ng), L({ "data-slot": "navigation-menu-list" }, B(n), { class: B($)("gap-0 group flex flex-1 list-none items-center justify-center", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(ig), L({ "data-slot": "navigation-menu-trigger" }, B(n), { class: B($)(B(_D)(), "group", t.class) }), {
			default: u(() => [v(e.$slots, "default"), G(B(Zn), {
				class: "relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180",
				"aria-hidden": "true"
			})]),
			_: 3
		}, 16, ["class"]));
	}
}), _D = CC("hover:bg-muted focus:bg-muted data-open:hover:bg-muted data-open:focus:bg-muted data-open:bg-muted/50 focus-visible:ring-ring/50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all focus-visible:ring-3 focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center outline-none disabled:pointer-events-none"), vD = ["innerHTML"], yD = {
	type: "button",
	class: "inline-flex h-9 w-max items-center justify-center px-2.5 py-1.5 text-sm font-medium"
}, bD = /* @__PURE__ */ W({
	__name: "NavigationMenu.ce",
	setup(e) {
		let t = _e()?._light.sections ?? [];
		return (e, n) => (o(), F(B(dD), null, {
			default: u(() => [G(B(hD), null, {
				default: u(() => [(o(!0), D(V, null, f(B(t), (e) => (o(), F(B(pD), { key: e.value }, {
					default: u(() => [e.html.trim() ? (o(), D(V, { key: 0 }, [G(B(gD), null, {
						default: u(() => [H(U(e.title), 1)]),
						_: 2
					}, 1024), G(B(fD), null, {
						default: u(() => [R("div", { innerHTML: e.html }, null, 8, vD)]),
						_: 2
					}, 1024)], 64)) : (o(), F(B(mD), {
						key: 1,
						"as-child": ""
					}, {
						default: u(() => [R("button", yD, U(e.title), 1)]),
						_: 2
					}, 1024))]),
					_: 2
				}, 1024))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), xD = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r), a = k(/* @__PURE__ */ new Map()), s = k(/* @__PURE__ */ new Map()), { contains: c } = ds({ sensitivity: "base" }), l = ve({
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
		}), MD({
			allItems: a,
			allGroups: s,
			filterState: l
		}), (e, t) => (o(), F(B(Il), L({ "data-slot": "command" }, B(i), { class: B($)("bg-popover text-popover-foreground rounded-xl! p-1 flex size-full flex-col overflow-hidden", n.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), SD = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class"), { filterState: r } = jD(), i = z(() => !!r.search && r.filtered.count === 0);
		return (e, r) => i.value ? (o(), F(B(X), L({
			key: 0,
			"data-slot": "command-empty"
		}, B(n), { class: B($)("py-6 text-center text-sm", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"])) : N("", !0);
	}
}), CD = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class"), { allGroups: r, filterState: i } = jD(), a = Fs(), s = z(() => i.search ? i.filtered.groups.has(a) : !0);
		return PD({ id: a }), p(() => {
			r.value.has(a) || r.value.set(a, /* @__PURE__ */ new Set());
		}), m(() => {
			r.value.delete(a);
		}), (r, i) => (o(), F(B(Vl), L(B(n), {
			id: B(a),
			"data-slot": "command-group",
			class: B($)("text-foreground **:[[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium", t.class),
			hidden: s.value ? void 0 : !0
		}), {
			default: u(() => [e.heading ? (o(), F(B(Hl), {
				key: 0,
				"data-slot": "command-group-heading",
				class: ""
			}, {
				default: u(() => [H(U(e.heading), 1)]),
				_: 1
			})) : N("", !0), v(r.$slots, "default")]),
			_: 3
		}, 16, [
			"id",
			"class",
			"hidden"
		]));
	}
}), wD = {
	"data-slot": "command-input-wrapper",
	class: "p-1 pb-0"
}, TD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class")), { filterState: r } = jD();
		return (e, i) => (o(), D("div", wD, [G(B(_w), { class: "bg-input/30 border-input/30 h-8! rounded-lg! shadow-none! *:data-[slot=input-group-addon]:pl-2!" }, {
			default: u(() => [G(B(Rl), L({
				...B(n),
				...e.$attrs
			}, {
				modelValue: B(r).search,
				"onUpdate:modelValue": i[0] ||= (e) => B(r).search = e,
				"data-slot": "command-input",
				"auto-focus": "",
				class: B($)("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", t.class)
			}), null, 16, ["modelValue", "class"]), G(B(yw), null, {
				default: u(() => [G(B(dr), { class: "size-4 shrink-0 opacity-50" })]),
				_: 1
			})]),
			_: 1
		})]));
	}
}), ED = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class"), r), a = Fs(), { filterState: s, allItems: c, allGroups: l } = jD(), d = ND(), f = z(() => {
			if (s.search) {
				let e = s.filtered.items.get(a);
				return e === void 0 ? !0 : e > 0;
			} else return !0;
		}), h = k(), g = Nn(h);
		return p(() => {
			if (!(g.value instanceof HTMLElement)) return;
			c.value.set(a, g.value.textContent ?? n.value?.toString() ?? "");
			let e = d?.id;
			e && (l.value.has(e) ? l.value.get(e)?.add(a) : l.value.set(e, new Set([a])));
		}), m(() => {
			c.value.delete(a);
		}), (e, t) => f.value ? (o(), F(B(Kl), L({ key: 0 }, B(i), {
			id: B(a),
			ref_key: "itemRef",
			ref: h,
			"data-slot": "command-item",
			class: B($)("data-selected:bg-muted data-selected:text-foreground data-selected:*:[svg]:text-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! [&_svg:not([class*=size-])]:size-4 group/command-item data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", n.class),
			onSelect: t[0] ||= () => {
				B(s).search = "";
			}
		}), {
			default: u(() => [v(e.$slots, "default"), G(B(Xn), { class: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]),
			_: 3
		}, 16, ["id", "class"])) : N("", !0);
	}
}), DD = { role: "presentation" }, OD = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Ll), L({ "data-slot": "command-list" }, B(n), { class: B($)("no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto", t.class) }), {
			default: u(() => [R("div", DD, [v(e.$slots, "default")])]),
			_: 3
		}, 16, ["class"]));
	}
}), kD = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(wv), L({ "data-slot": "command-separator" }, B(n), { class: B($)("bg-border -mx-1 h-px", t.class) }), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), AD = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("span", {
			"data-slot": "command-shortcut",
			class: I(B($)("text-muted-foreground group-data-selected/command-item:text-foreground ml-auto text-xs tracking-widest", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), [jD, MD] = q("Command"), [ND, PD] = q("CommandGroup"), FD = /* @__PURE__ */ W({
	__name: "Command.ce",
	setup(e) {
		let t = _e();
		function n(e) {
			return {
				value: e.getAttribute("value") ?? e.textContent?.trim() ?? "",
				label: e.textContent?.trim() ?? "",
				disabled: e.hasAttribute("disabled"),
				shortcut: e.getAttribute("shortcut") ?? ""
			};
		}
		let r = z(() => {
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
		return (e, t) => (o(), F(B(xD), null, {
			default: u(() => [G(B(TD), { placeholder: "Pesquisar comando..." }), G(B(OD), null, {
				default: u(() => [G(B(SD), null, {
					default: u(() => [...t[0] ||= [H("Sem resultados.", -1)]]),
					_: 1
				}), (o(!0), D(V, null, f(r.value, (e, t) => (o(), D(V, { key: t }, [t > 0 ? (o(), F(B(kD), { key: 0 })) : N("", !0), G(B(CD), { heading: e.heading || void 0 }, {
					default: u(() => [(o(!0), D(V, null, f(e.items, (e) => (o(), F(B(ED), {
						key: e.value,
						value: e.value,
						disabled: e.disabled,
						onSelect: (t) => i(e.value)
					}, {
						default: u(() => [R("span", null, U(e.label), 1), e.shortcut ? (o(), F(B(AD), { key: 0 }, {
							default: u(() => [H(U(e.shortcut), 1)]),
							_: 2
						}, 1024)) : N("", !0)]),
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
function ID(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function LD(e) {
	return ID(e) || Array.isArray(e);
}
function RD() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function zD(e, t) {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length !== r.length || JSON.stringify(Object.keys(e.breakpoints || {})) !== JSON.stringify(Object.keys(t.breakpoints || {})) ? !1 : n.every((n) => {
		let r = e[n], i = t[n];
		return typeof r == "function" ? `${r}` == `${i}` : !LD(r) || !LD(i) ? r === i : zD(r, i);
	});
}
function BD(e) {
	return e.concat().sort((e, t) => e.name > t.name ? 1 : -1).map((e) => e.options);
}
function VD(e, t) {
	if (e.length !== t.length) return !1;
	let n = BD(e), r = BD(t);
	return n.every((e, t) => {
		let n = r[t];
		return zD(e, n);
	});
}
//#endregion
//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
function HD(e) {
	return typeof e == "number";
}
function UD(e) {
	return typeof e == "string";
}
function WD(e) {
	return typeof e == "boolean";
}
function GD(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function KD(e) {
	return Math.abs(e);
}
function qD(e) {
	return Math.sign(e);
}
function JD(e, t) {
	return KD(e - t);
}
function YD(e, t) {
	return e === 0 || t === 0 || KD(e) <= KD(t) ? 0 : KD(JD(KD(e), KD(t)) / e);
}
function XD(e) {
	return Math.round(e * 100) / 100;
}
function ZD(e) {
	return nO(e).map(Number);
}
function QD(e) {
	return e[$D(e)];
}
function $D(e) {
	return Math.max(0, e.length - 1);
}
function eO(e, t) {
	return t === $D(e);
}
function tO(e, t = 0) {
	return Array.from(Array(e), (e, n) => t + n);
}
function nO(e) {
	return Object.keys(e);
}
function rO(e, t) {
	return [e, t].reduce((e, t) => (nO(t).forEach((n) => {
		let r = e[n], i = t[n];
		e[n] = GD(r) && GD(i) ? rO(r, i) : i;
	}), e), {});
}
function iO(e, t) {
	return t.MouseEvent !== void 0 && e instanceof t.MouseEvent;
}
function aO(e, t) {
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
		return UD(e) ? n[e](r) : e(t, r, i);
	}
	return { measure: o };
}
function oO() {
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
function sO(e, t, n, r) {
	let i = oO(), a = 1e3 / 60, o = null, s = 0, c = 0;
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
function cO(e, t) {
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
function lO(e = 0, t = 0) {
	let n = KD(e - t);
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
function uO(e, t, n) {
	let { constrain: r } = lO(0, e), i = e + 1, a = o(t);
	function o(e) {
		return n ? KD((i + e) % i) : r(e);
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
		return uO(e, s(), n);
	}
	let d = {
		get: s,
		set: c,
		add: l,
		clone: u
	};
	return d;
}
function dO(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
	let { cross: y, direction: b } = e, x = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	], S = { passive: !1 }, C = oO(), w = oO(), T = lO(50, 225).constrain(p.measure(20)), E = {
		mouse: 300,
		touch: 400
	}, D = {
		mouse: 500,
		touch: 600
	}, O = m ? 43 : 25, ee = !1, k = 0, te = 0, A = !1, ne = !1, re = !1, j = !1;
	function M(e) {
		if (!v) return;
		function n(t) {
			(WD(v) || v(e, t)) && I(t);
		}
		let r = t;
		C.add(r, "dragstart", (e) => e.preventDefault(), S).add(r, "touchmove", () => void 0, S).add(r, "touchend", () => void 0).add(r, "touchstart", n).add(r, "mousedown", n).add(r, "touchcancel", se).add(r, "contextmenu", se).add(r, "click", ce, !0);
	}
	function ie() {
		C.clear(), w.clear();
	}
	function ae() {
		let e = j ? n : t;
		w.add(e, "touchmove", oe, S).add(e, "touchend", se).add(e, "mousemove", oe, S).add(e, "mouseup", se);
	}
	function N(e) {
		let t = e.nodeName || "";
		return x.includes(t);
	}
	function P() {
		return (m ? D : E)[j ? "mouse" : "touch"];
	}
	function F(e, t) {
		let n = d.add(qD(e) * -1), r = u.byDistance(e, !m).distance;
		return m || KD(e) < T ? r : g && t ? r * .5 : u.byIndex(n.get(), 0).distance;
	}
	function I(e) {
		let t = iO(e, r);
		j = t, re = m && t && !e.buttons && ee, ee = JD(i.get(), o.get()) >= 2, !(t && e.button !== 0) && (N(e.target) || (A = !0, a.pointerDown(e), l.useFriction(0).useDuration(0), i.set(o), ae(), k = a.readPoint(e), te = a.readPoint(e, y), f.emit("pointerDown")));
	}
	function oe(e) {
		if (!iO(e, r) && e.touches.length >= 2) return se(e);
		let t = a.readPoint(e), n = a.readPoint(e, y), o = JD(t, k), c = JD(n, te);
		if (!ne && !j && (!e.cancelable || (ne = o > c, !ne))) return se(e);
		let u = a.pointerMove(e);
		o > h && (re = !0), l.useFriction(.3).useDuration(.75), s.start(), i.add(b(u)), e.preventDefault();
	}
	function se(e) {
		let t = u.byDistance(0, !1).index !== d.get(), n = a.pointerUp(e) * P(), r = F(b(n), t), i = YD(n, r), o = O - 10 * i, s = _ + i / 50;
		ne = !1, A = !1, w.clear(), l.useDuration(o).useFriction(s), c.distance(r, !m), j = !1, f.emit("pointerUp");
	}
	function ce(e) {
		re &&= (e.stopPropagation(), e.preventDefault(), !1);
	}
	function L() {
		return A;
	}
	return {
		init: M,
		destroy: ie,
		pointerDown: L
	};
}
function fO(e, t) {
	let n, r;
	function i(e) {
		return e.timeStamp;
	}
	function a(n, r) {
		let i = `client${(r || e.scroll) === "x" ? "X" : "Y"}`;
		return (iO(n, t) ? n : n.touches[0])[i];
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
		return o && !s && KD(c) > .1 ? c : 0;
	}
	return {
		pointerDown: o,
		pointerMove: s,
		pointerUp: c,
		readPoint: a
	};
}
function pO() {
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
function mO(e) {
	function t(t) {
		return t / 100 * e;
	}
	return { measure: t };
}
function hO(e, t, n, r, i, a, o) {
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
				if (KD(f(n ? e : r[o]) - s) >= .5) {
					i.reInit(), t.emit("resize");
					break;
				}
			}
		}
		c = new ResizeObserver((e) => {
			(WD(a) || a(i, e)) && o(e);
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
function gO(e, t, n, r, i, a) {
	let o = 0, s = 0, c = i, l = a, u = e.get(), d = 0;
	function f() {
		let t = r.get() - e.get(), i = !c, a = 0;
		return i ? (o = 0, n.set(r), e.set(r), a = t) : (n.set(e), o += t / c, o *= l, u += o, e.add(o), a = u - d), s = qD(a), d = u, x;
	}
	function p() {
		return KD(r.get() - t.get()) < .001;
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
function _O(e, t, n, r, i) {
	let a = i.measure(10), o = i.measure(50), s = lO(.1, .99), c = !1;
	function l() {
		return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
	}
	function u(i) {
		if (!l()) return;
		let c = KD(e[e.reachedMin(t.get()) ? "min" : "max"] - t.get()), u = n.get() - t.get(), d = s.constrain(c / o);
		n.subtract(u * d), !i && KD(u) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
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
function vO(e, t, n, r, i) {
	let a = lO(-t + e, 0), o = d(), s = u(), c = f();
	function l(e, t) {
		return JD(e, t) <= 1;
	}
	function u() {
		let e = o[0], t = QD(o);
		return lO(o.lastIndexOf(e), o.indexOf(t) + 1);
	}
	function d() {
		return n.map((e, t) => {
			let { min: r, max: i } = a, o = a.constrain(e), s = !t, c = eO(n, t);
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
function yO(e, t, n) {
	let r = t[0];
	return { limit: lO(n ? r - e : QD(t), r) };
}
function bO(e, t, n, r) {
	let i = .1, { reachedMin: a, reachedMax: o } = lO(t.min + i, t.max + i);
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
function xO(e) {
	let { max: t, length: n } = e;
	function r(e) {
		let r = e - t;
		return n ? r / -n : 0;
	}
	return { get: r };
}
function SO(e, t, n, r, i) {
	let { startEdge: a, endEdge: o } = e, { groupSlides: s } = i, c = d().map(t.measure), l = f(), u = p();
	function d() {
		return s(r).map((e) => QD(e)[o] - e[0][a]).map(KD);
	}
	function f() {
		return r.map((e) => n[a] - e[a]).map((e) => -KD(e));
	}
	function p() {
		return s(l).map((e) => e[0]).map((e, t) => e + c[t]);
	}
	return {
		snaps: l,
		snapsAligned: u
	};
}
function CO(e, t, n, r, i, a) {
	let { groupSlides: o } = i, { min: s, max: c } = r, l = u();
	function u() {
		let r = o(a), i = !e || t === "keepSnaps";
		return n.length === 1 ? [a] : i ? r : r.slice(s, c).map((e, t, n) => {
			let r = !t, i = eO(n, t);
			return r ? tO(QD(n[0]) + 1) : i ? tO($D(a) - QD(n)[0] + 1, QD(n)[0]) : e;
		});
	}
	return { slideRegistry: l };
}
function wO(e, t, n, r, i) {
	let { reachedAny: a, removeOffset: o, constrain: s } = r;
	function c(e) {
		return e.concat().sort((e, t) => KD(e) - KD(t))[0];
	}
	function l(n) {
		let r = e ? o(n) : s(n), { index: i } = t.map((e, t) => ({
			diff: u(e - r, 0),
			index: t
		})).sort((e, t) => KD(e.diff) - KD(t.diff))[0];
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
		let a = i.filter((e) => qD(e) === r);
		return a.length ? c(a) : QD(i) - n;
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
function TO(e, t, n, r, i, a, o) {
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
function EO(e, t, n, r, i, a, o, s) {
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
			HD(a) && (i.useDuration(0), r.index(a, 0), o.emit("slideFocus"));
		}
		a.add(document, "keydown", d, !1), t.forEach((e, t) => {
			a.add(e, "focus", (e) => {
				(WD(s) || s(u, e)) && f(t);
			}, c);
		});
	}
	function d(e) {
		e.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
	}
	return { init: u };
}
function DO(e) {
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
		return HD(e) ? e : e.get();
	}
	return {
		get: n,
		set: r,
		add: i,
		subtract: a
	};
}
function OO(e, t) {
	let n = e.scroll === "x" ? o : s, r = t.style, i = null, a = !1;
	function o(e) {
		return `translate3d(${e}px,0px,0px)`;
	}
	function s(e) {
		return `translate3d(0px,${e}px,0px)`;
	}
	function c(t) {
		if (a) return;
		let o = XD(e.direction(t));
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
function kO(e, t, n, r, i, a, o, s, c) {
	let l = .5, u = ZD(i), d = ZD(i).reverse(), f = _().concat(v());
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
				slideLocation: DO(-1),
				translate: OO(e, c[t]),
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
function AO(e, t, n) {
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
			i || (WD(n) || n(a, e)) && o(e);
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
function jO(e, t, n, r) {
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
		return nO(i).reduce((t, n) => {
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
function MO(e, t, n, r, i, a) {
	let { measureSize: o, startEdge: s, endEdge: c } = e, l = n[0] && i, u = m(), d = h(), f = n.map(o), p = g();
	function m() {
		if (!l) return 0;
		let e = n[0];
		return KD(t[s] - e[s]);
	}
	function h() {
		if (!l) return 0;
		let e = a.getComputedStyle(QD(r));
		return parseFloat(e.getPropertyValue(`margin-${c}`));
	}
	function g() {
		return n.map((e, t, n) => {
			let r = !t, i = eO(n, t);
			return r ? f[t] + u : i ? f[t] + d : n[t + 1][s] - e[s];
		}).map(KD);
	}
	return {
		slideSizes: f,
		slideSizesWithGaps: p,
		startGap: u,
		endGap: d
	};
}
function NO(e, t, n, r, i, a, o, s, c) {
	let { startEdge: l, endEdge: u, direction: d } = e, f = HD(n);
	function p(e, t) {
		return ZD(e).filter((e) => e % t === 0).map((n) => e.slice(n, n + t));
	}
	function m(e) {
		return e.length ? ZD(e).reduce((n, f, p) => {
			let m = QD(n) || 0, h = m === 0, g = f === $D(e), _ = i[l] - a[m][l], v = i[l] - a[f][u], y = !r && h ? d(o) : 0, b = KD(v - (!r && g ? d(s) : 0) - (_ + y));
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
function PO(e, t, n, r, i, a, o) {
	let { align: s, axis: c, direction: l, startIndex: u, loop: d, duration: f, dragFree: p, dragThreshold: m, inViewThreshold: h, slidesToScroll: g, skipSnaps: _, containScroll: v, watchResize: y, watchSlides: b, watchDrag: x, watchFocus: S } = a, C = pO(), w = C.measure(t), T = n.map(C.measure), E = cO(c, l), D = E.measureSize(w), O = mO(D), ee = aO(s, D), k = !d && !!v, { slideSizes: te, slideSizesWithGaps: A, startGap: ne, endGap: re } = MO(E, w, T, n, d || !!v, i), j = NO(E, D, g, d, w, T, ne, re, 2), { snaps: M, snapsAligned: ie } = SO(E, ee, w, T, j), ae = -QD(M) + QD(A), { snapsContained: N, scrollContainLimit: P } = vO(D, ae, ie, v, 2), F = k ? N : ie, { limit: I } = yO(ae, F, d), oe = uO($D(F), u, d), se = oe.clone(), ce = ZD(n), L = ({ dragHandler: e, scrollBody: t, scrollBounds: n, options: { loop: r } }) => {
		r || n.constrain(e.pointerDown()), t.seek();
	}, le = ({ scrollBody: e, translate: t, location: n, offsetLocation: r, previousLocation: i, scrollLooper: a, slideLooper: o, dragHandler: s, animation: c, eventHandler: l, scrollBounds: u, options: { loop: d } }, f) => {
		let p = e.settled(), m = !u.shouldConstrain(), h = d ? p : p && m, g = h && !s.pointerDown();
		g && c.stop();
		let _ = n.get() * f + i.get() * (1 - f);
		r.set(_), d && (a.loop(e.direction()), o.loop()), t.to(r.get()), g && l.emit("settle"), h || l.emit("scroll");
	}, ue = sO(r, i, () => L(Se), (e) => le(Se, e)), R = .68, de = F[oe.get()], fe = DO(de), pe = DO(de), me = DO(de), he = DO(de), z = gO(fe, me, pe, he, f, R), B = wO(d, F, ae, I, he), ge = TO(ue, oe, se, z, B, he, o), _e = xO(I), ve = oO(), ye = jO(t, n, o, h), { slideRegistry: be } = CO(k, v, F, P, j, ce), xe = EO(e, n, be, ge, z, ve, o, S), Se = {
		ownerDocument: r,
		ownerWindow: i,
		eventHandler: o,
		containerRect: w,
		slideRects: T,
		animation: ue,
		axis: E,
		dragHandler: dO(E, e, r, i, he, fO(E, i), fe, ue, ge, z, B, oe, o, O, p, m, _, R, x),
		eventStore: ve,
		percentOfView: O,
		index: oe,
		indexPrevious: se,
		limit: I,
		location: fe,
		offsetLocation: me,
		previousLocation: pe,
		options: a,
		resizeHandler: hO(t, o, i, n, E, y, C),
		scrollBody: z,
		scrollBounds: _O(I, me, he, z, O),
		scrollLooper: bO(ae, I, me, [
			fe,
			me,
			pe,
			he
		]),
		scrollProgress: _e,
		scrollSnapList: F.map(_e.get),
		scrollSnaps: F,
		scrollTarget: B,
		scrollTo: ge,
		slideLooper: kO(E, D, ae, te, A, M, F, me, n),
		slideFocus: xe,
		slidesHandler: AO(t, o, b),
		slidesInView: ye,
		slideIndexes: ce,
		slideRegistry: be,
		slidesToScroll: j,
		target: he,
		translate: OO(E, t)
	};
	return Se;
}
function FO() {
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
var IO = {
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
function LO(e) {
	function t(e, t) {
		return rO(e, t || {});
	}
	function n(n) {
		let r = n.breakpoints || {};
		return t(n, nO(r).filter((t) => e.matchMedia(t).matches).map((e) => r[e]).reduce((e, n) => t(e, n), {}));
	}
	function r(t) {
		return t.map((e) => nO(e.breakpoints || {})).reduce((e, t) => e.concat(t), []).map(e.matchMedia);
	}
	return {
		mergeOptions: t,
		optionsAtMedia: n,
		optionsMediaQueries: r
	};
}
function RO(e) {
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
function zO(e, t, n) {
	let r = e.ownerDocument, i = r.defaultView, a = LO(i), o = RO(a), s = oO(), c = FO(), { mergeOptions: l, optionsAtMedia: u, optionsMediaQueries: d } = a, { on: f, off: p, emit: m } = c, h = D, g = !1, _, v = l(IO, zO.globalOptions), y = l(v), b = [], x, S, C;
	function w() {
		let { container: t, slides: n } = y;
		S = (UD(t) ? e.querySelector(t) : t) || e.children[0];
		let r = UD(n) ? S.querySelectorAll(n) : n;
		C = [].slice.call(r || S.children);
	}
	function T(t) {
		let n = PO(e, S, C, r, i, t, c);
		return t.loop && !n.slideLooper.canLoop() ? T(Object.assign({}, t, { loop: !1 })) : n;
	}
	function E(e, t) {
		g || (v = l(v, e), y = u(v), b = t || b, w(), _ = T(y), d([v, ...b.map(({ options: e }) => e)]).forEach((e) => s.add(e, "change", D)), y.active && (_.translate.to(_.location.get()), _.animation.init(), _.slidesInView.init(), _.slideFocus.init(L), _.eventHandler.init(L), _.resizeHandler.init(L), _.slidesHandler.init(L), _.options.loop && _.slideLooper.loop(), S.offsetParent && C.length && _.dragHandler.init(L), x = o.init(L, b)));
	}
	function D(e, t) {
		let n = ie();
		O(), E(l({ startIndex: n }, e), t), c.emit("reInit");
	}
	function O() {
		_.dragHandler.destroy(), _.eventStore.clear(), _.translate.clear(), _.slideLooper.clear(), _.resizeHandler.destroy(), _.slidesHandler.destroy(), _.slidesInView.destroy(), _.animation.destroy(), o.destroy(), s.clear();
	}
	function ee() {
		g || (g = !0, s.clear(), O(), c.emit("destroy"), c.clear());
	}
	function k(e, t, n) {
		!y.active || g || (_.scrollBody.useBaseFriction().useDuration(t === !0 ? 0 : y.duration), _.scrollTo.index(e, n || 0));
	}
	function te(e) {
		k(_.index.add(1).get(), e, -1);
	}
	function A(e) {
		k(_.index.add(-1).get(), e, 1);
	}
	function ne() {
		return _.index.add(1).get() !== ie();
	}
	function re() {
		return _.index.add(-1).get() !== ie();
	}
	function j() {
		return _.scrollSnapList;
	}
	function M() {
		return _.scrollProgress.get(_.offsetLocation.get());
	}
	function ie() {
		return _.index.get();
	}
	function ae() {
		return _.indexPrevious.get();
	}
	function N() {
		return _.slidesInView.get();
	}
	function P() {
		return _.slidesInView.get(!1);
	}
	function F() {
		return x;
	}
	function I() {
		return _;
	}
	function oe() {
		return e;
	}
	function se() {
		return S;
	}
	function ce() {
		return C;
	}
	let L = {
		canScrollNext: ne,
		canScrollPrev: re,
		containerNode: se,
		internalEngine: I,
		destroy: ee,
		off: p,
		on: f,
		emit: m,
		plugins: F,
		previousScrollSnap: ae,
		reInit: h,
		rootNode: oe,
		scrollNext: te,
		scrollPrev: A,
		scrollProgress: M,
		scrollSnapList: j,
		scrollTo: k,
		selectedScrollSnap: ie,
		slideNodes: ce,
		slidesInView: N,
		slidesNotInView: P
	};
	return E(t, n), setTimeout(() => c.emit("init"), 0), L;
}
zO.globalOptions = void 0;
//#endregion
//#region node_modules/embla-carousel-vue/esm/embla-carousel-vue.esm.js
function BO(e = {}, t = []) {
	let n = M(e), r = M(t), i = n ? e.value : e, a = r ? t.value : t, o = be(), s = be();
	function c() {
		s.value && s.value.reInit(i, a);
	}
	return p(() => {
		!RD() || !o.value || (zO.globalOptions = BO.globalOptions, s.value = zO(o.value, i, a));
	}), ce(() => {
		s.value && s.value.destroy();
	}), n && C(e, (e) => {
		zD(i, e) || (i = e, c());
	}), r && C(t, (e) => {
		VD(a, e) || (a = e, c());
	}), [o, s];
}
BO.globalOptions = void 0;
//#endregion
//#region src/components/ui/carousel/useCarousel.ts
var [VO, HO] = It(({ opts: e, orientation: t, plugins: n }, r) => {
	let [i, a] = BO({
		...e,
		axis: t === "horizontal" ? "x" : "y"
	}, n);
	function o() {
		a.value?.scrollPrev();
	}
	function s() {
		a.value?.scrollNext();
	}
	let c = k(!1), l = k(!1);
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
function UO() {
	let e = HO();
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
//#endregion
//#region src/components/ui/carousel/Carousel.vue
var WO = /* @__PURE__ */ W({
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
		let r = e, { canScrollNext: i, canScrollPrev: a, carouselApi: s, carouselRef: c, orientation: l, scrollNext: u, scrollPrev: d } = VO(r, n);
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
		return (e, t) => (o(), D("div", {
			"data-slot": "carousel",
			class: I(B($)("relative", r.class)),
			role: "region",
			"aria-roledescription": "carousel",
			tabindex: "0",
			onKeydown: f
		}, [v(e.$slots, "default", {
			canScrollNext: B(i),
			canScrollPrev: B(a),
			carouselApi: B(s),
			carouselRef: B(c),
			orientation: B(l),
			scrollNext: B(u),
			scrollPrev: B(d)
		})], 34));
	}
}), GO = /* @__PURE__ */ W({
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
		let t = e, { carouselRef: n, orientation: r } = UO();
		return (e, i) => (o(), D("div", {
			ref_key: "carouselRef",
			ref: n,
			"data-slot": "carousel-content",
			class: "overflow-hidden"
		}, [R("div", L({ class: B($)("flex", B(r) === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t.class) }, e.$attrs), [v(e.$slots, "default")], 16)], 512));
	}
}), KO = /* @__PURE__ */ W({
	__name: "CarouselItem",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { orientation: n } = UO();
		return (e, r) => (o(), D("div", {
			"data-slot": "carousel-item",
			role: "group",
			"aria-roledescription": "slide",
			class: I(B($)("min-w-0 shrink-0 grow-0 basis-full", B(n) === "horizontal" ? "pl-4" : "pt-4", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), qO = /* @__PURE__ */ W({
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
		let t = e, { orientation: n, canScrollNext: r, scrollNext: i } = UO();
		return (a, s) => (o(), F(B(wC), {
			"data-slot": "carousel-next",
			disabled: !B(r),
			class: I(B($)("rounded-full absolute touch-manipulation", B(n) === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: B(i)
		}, {
			default: u(() => [v(a.$slots, "default", {}, () => [G(B($n), { class: "cn-rtl-flip" }), s[0] ||= R("span", { class: "sr-only" }, "Next slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), JO = /* @__PURE__ */ W({
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
		let t = e, { orientation: n, canScrollPrev: r, scrollPrev: i } = UO();
		return (a, s) => (o(), F(B(wC), {
			"data-slot": "carousel-previous",
			disabled: !B(r),
			class: I(B($)("rounded-full absolute touch-manipulation", B(n) === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", t.class)),
			variant: e.variant,
			size: e.size,
			onClick: B(i)
		}, {
			default: u(() => [v(a.$slots, "default", {}, () => [G(B(Qn), { class: "cn-rtl-flip" }), s[0] ||= R("span", { class: "sr-only" }, "Previous slide", -1)])]),
			_: 3
		}, 8, [
			"disabled",
			"class",
			"variant",
			"size",
			"onClick"
		]));
	}
}), YO = ["innerHTML"], XO = /* @__PURE__ */ W({
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
		}[Math.max(1, Math.min(6, Number(t.itemsPerView ?? 1) || 1))] ?? "basis-full", r = _e()?._light, i = r?.sections ?? [], a = r?.options ?? [], s = i.length ? i.map((e) => e.html) : a.length ? a.map((e) => `<span>${e.label}</span>`) : r?.defaultHtml ? [r.defaultHtml] : [];
		return (e, r) => (o(), F(B(WO), {
			orientation: t.orientation ?? "horizontal",
			class: "relative w-full max-w-sm"
		}, {
			default: u(() => [
				G(B(GO), null, {
					default: u(() => [(o(!0), D(V, null, f(B(s), (e, t) => (o(), F(B(KO), {
						key: t,
						class: I(B(n))
					}, {
						default: u(() => [R("div", { innerHTML: e }, null, 8, YO)]),
						_: 2
					}, 1032, ["class"]))), 128))]),
					_: 1
				}),
				G(B(JO)),
				G(B(qO))
			]),
			_: 1
		}, 8, ["orientation"]));
	}
}), ZO = ["data-size"], QO = ["data-size"], $O = /* @__PURE__ */ W({
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
		let n = e, r = zn(n, "modelValue", t, {
			passive: !0,
			defaultValue: ""
		}), i = K(n, "class", "size");
		return (e, t) => (o(), D("div", {
			class: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
			"data-slot": "native-select-wrapper",
			"data-size": n.size ?? "default"
		}, [T(R("select", L({
			...e.$attrs,
			...B(i)
		}, {
			"onUpdate:modelValue": t[0] ||= (e) => M(r) ? r.value = e : null,
			"data-slot": "native-select",
			"data-size": n.size ?? "default",
			class: B($)("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 outline-none disabled:pointer-events-none disabled:cursor-not-allowed", n.class)
		}), [v(e.$slots, "default")], 16, QO), [[oe, B(r)]]), G(B(Zn), {
			class: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})], 8, ZO));
	}
}), ek = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("option", {
			"data-slot": "native-select-option",
			class: I(B($)("bg-[Canvas] text-[CanvasText]", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), tk = { class: "**:data-[slot=native-select-icon]:right-1" }, nk = { class: "relative" }, rk = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, ik = { class: "**:data-[slot=native-select-icon]:right-1" }, ak = { class: "relative" }, ok = { class: "absolute inset-0 flex h-full items-center text-sm pl-2 pointer-events-none" }, sk = { class: "flex items-center gap-1 absolute top-0 inset-x-0 justify-between" }, ck = {
	key: 0,
	class: "flex items-center justify-center gap-1"
}, lk = {
	key: 1,
	class: "flex items-center justify-center gap-1"
}, uk = {
	key: 2,
	class: "flex items-center justify-center gap-1"
}, dk = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, fk = /* @__PURE__ */ W({
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
		let n = e, r = t, i = K(n, "class", "layout", "placeholder"), a = zn(n, "placeholder", r, {
			passive: !0,
			defaultValue: n.defaultPlaceholder ?? ai(di())
		}), s = cs(n.locale ?? "en"), c = z(() => n.yearRange ?? os({
			start: n?.minValue ?? (ne(n.placeholder) ?? n.defaultPlaceholder ?? ai(di())).cycle("year", -100),
			end: n?.maxValue ?? (ne(n.placeholder) ?? n.defaultPlaceholder ?? ai(di())).cycle("year", 10)
		})), [l, d] = gn(), [p, m] = gn(), h = Y(i, r);
		return (t, r) => (o(), D(V, null, [
			G(B(l), null, {
				default: u(({ date: e }) => [R("div", tk, [R("div", nk, [R("div", rk, U(B(s).custom(B(zo)(e), { month: "short" })), 1), G(B($O), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: r[0] ||= (e) => {
						a.value = B(a).set({ month: Number(e?.target?.value) });
					}
				}, {
					default: u(() => [(o(!0), D(V, null, f(B(is)({ dateObj: e }), (t) => (o(), F(B(ek), {
						key: t.toString(),
						value: t.month,
						selected: e.month === t.month
					}, {
						default: u(() => [H(U(B(s).custom(B(zo)(t), { month: "short" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			G(B(p), null, {
				default: u(({ date: e }) => [R("div", ik, [R("div", ak, [R("div", ok, U(B(s).custom(B(zo)(e), { year: "numeric" })), 1), G(B($O), {
					class: "text-xs h-8 pr-6 pl-2 text-transparent relative",
					onChange: r[1] ||= (e) => {
						a.value = B(a).set({ year: Number(e?.target?.value) });
					}
				}, {
					default: u(() => [(o(!0), D(V, null, f(c.value, (t) => (o(), F(B(ek), {
						key: t.toString(),
						value: t.year,
						selected: e.year === t.year
					}, {
						default: u(() => [H(U(B(s).custom(B(zo)(t), { year: "numeric" })), 1)]),
						_: 2
					}, 1032, ["value", "selected"]))), 128))]),
					_: 2
				}, 1024)])])]),
				_: 1
			}),
			G(B(Nf), L(B(h), {
				placeholder: B(a),
				"onUpdate:placeholder": r[2] ||= (e) => M(a) ? a.value = e : null,
				"data-slot": "calendar",
				class: B($)("p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", n.class)
			}), {
				default: u(({ grid: n, weekDays: r, date: i }) => [G(B(bk), { class: "pt-0" }, {
					default: u(() => [R("nav", sk, [G(B(Ck), null, {
						default: u(() => [v(t.$slots, "calendar-prev-icon")]),
						_: 3
					}), G(B(Sk), null, {
						default: u(() => [v(t.$slots, "calendar-next-icon")]),
						_: 3
					})]), v(t.$slots, "calendar-heading", {
						date: i,
						month: B(d),
						year: B(m)
					}, () => [e.layout === "month-and-year" ? (o(), D("div", ck, [G(B(d), { date: i }, null, 8, ["date"]), G(B(m), { date: i }, null, 8, ["date"])])) : e.layout === "month-only" ? (o(), D("div", lk, [G(B(d), { date: i }, null, 8, ["date"]), H(" " + U(B(s).custom(B(zo)(i), { year: "numeric" })), 1)])) : e.layout === "year-only" ? (o(), D("div", uk, [H(U(B(s).custom(B(zo)(i), { month: "short" })) + " ", 1), G(B(m), { date: i }, null, 8, ["date"])])) : (o(), F(B(xk), { key: 3 }))])]),
					_: 2
				}, 1024), R("div", dk, [(o(!0), D(V, null, f(n, (e) => (o(), F(B(hk), { key: e.value.toString() }, {
					default: u(() => [G(B(_k), null, {
						default: u(() => [G(B(vk), null, {
							default: u(() => [(o(!0), D(V, null, f(r, (e) => (o(), F(B(yk), { key: e }, {
								default: u(() => [H(U(e), 1)]),
								_: 2
							}, 1024))), 128))]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024), G(B(gk), null, {
						default: u(() => [(o(!0), D(V, null, f(e.rows, (t, n) => (o(), F(B(vk), {
							key: `weekDate-${n}`,
							class: "mt-2 w-full"
						}, {
							default: u(() => [(o(!0), D(V, null, f(t, (t) => (o(), F(B(pk), {
								key: t.toString(),
								date: t
							}, {
								default: u(() => [G(B(mk), {
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
}), pk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Pf), L({
			"data-slot": "calendar-cell",
			class: B($)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), mk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Ff), L({
			"data-slot": "calendar-cell-trigger",
			class: B($)(B(TC)({ variant: "ghost" }), "size-8 p-0 font-normal aria-selected:opacity-100 cursor-default", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground", "data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground", "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through", "data-[outside-view]:text-muted-foreground", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), hk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(If), L({
			"data-slot": "calendar-grid",
			class: B($)("w-full border-collapse space-x-1", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), gk = /* @__PURE__ */ W({
	__name: "CalendarGridBody",
	props: {
		asChild: { type: Boolean },
		as: {}
	},
	setup(e) {
		let t = e;
		return (e, n) => (o(), F(B(Lf), L({ "data-slot": "calendar-grid-body" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), _k = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(Rf), L({ "data-slot": "calendar-grid-head" }, t), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16));
	}
}), vk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(zf), L({
			"data-slot": "calendar-grid-row",
			class: B($)("flex", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), yk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Bf), L({
			"data-slot": "calendar-head-cell",
			class: B($)("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem]", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), bk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Vf), L({
			"data-slot": "calendar-header",
			class: B($)("flex justify-center pt-1 relative items-center w-full px-8", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), xk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Hf), L({
			"data-slot": "calendar-heading",
			class: B($)("text-sm font-medium", t.class)
		}, B(n)), {
			default: u(({ headingValue: t }) => [v(e.$slots, "default", { headingValue: t }, () => [H(U(t), 1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), Sk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Uf), L({
			"data-slot": "calendar-next-button",
			class: B($)(B(TC)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B($n), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), Ck = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class"));
		return (e, r) => (o(), F(B(Wf), L({
			"data-slot": "calendar-prev-button",
			class: B($)(B(TC)({ variant: "outline" }), "size-7 bg-transparent p-0 opacity-50 hover:opacity-100", t.class)
		}, B(n)), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(Qn), { class: "cn-rtl-flip size-4" })])]),
			_: 3
		}, 16, ["class"]));
	}
}), wk = /* @__PURE__ */ W({
	__name: "Calendar.ce",
	props: {
		locale: { type: String },
		layout: { type: String }
	},
	setup(e) {
		let t = e, n = _e(), r = k(void 0);
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
		return p(() => {}), (e, n) => (o(), F(B(fk), {
			locale: t.locale ?? "en",
			layout: t.layout,
			"onUpdate:modelValue": i
		}, null, 8, ["locale", "layout"]));
	}
}), Tk = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(Rg), L({ "data-slot": "pagination" }, B(a), { class: B($)("mx-auto flex w-full justify-center", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Ek = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, i) => (o(), F(B(Ug), L({ "data-slot": "pagination-content" }, B(n), { class: B($)("gap-0.5 flex items-center", t.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Dk = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class");
		return (e, r) => (o(), F(B(Fg), L({ "data-slot": "pagination-ellipsis" }, B(n), { class: B($)("size-8 [&_svg:not([class*=size-])]:size-4 flex items-center justify-center", t.class) }), {
			default: u(() => [v(e.$slots, "default", {}, () => [G(B(ir)), r[0] ||= R("span", { class: "sr-only" }, "More pages", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), Ok = /* @__PURE__ */ W({
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
		let t = e, n = K(t, "class", "size", "isActive");
		return (r, i) => (o(), F(B(Wg), L({ "data-slot": "pagination-item" }, B(n), { class: B($)(B(TC)({
			variant: e.isActive ? "outline" : "ghost",
			size: e.size
		}), t.class) }), {
			default: u(() => [v(r.$slots, "default")]),
			_: 3
		}, 16, ["class"]));
	}
}), kk = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class", "size"));
		return (r, i) => (o(), F(B(Gg), L({
			"data-slot": "pagination-next",
			class: B($)(B(TC)({
				variant: "ghost",
				size: e.size
			}), "pr-1.5!", t.class)
		}, B(n)), {
			default: u(() => [v(r.$slots, "default", {}, () => [i[0] ||= R("span", { class: "hidden sm:block" }, "Next", -1), G(B($n), {
				"data-icon": "inline-end",
				class: "cn-rtl-flip"
			})])]),
			_: 3
		}, 16, ["class"]));
	}
}), Ak = /* @__PURE__ */ W({
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
		let t = e, n = gs(K(t, "class", "size"));
		return (r, i) => (o(), F(B(Kg), L({
			"data-slot": "pagination-previous",
			class: B($)(B(TC)({
				variant: "ghost",
				size: e.size
			}), "pl-1.5!", t.class)
		}, B(n)), {
			default: u(() => [v(r.$slots, "default", {}, () => [G(B(Qn), {
				"data-icon": "inline-start",
				class: "cn-rtl-flip"
			}), i[0] ||= R("span", { class: "hidden sm:block" }, "Previous", -1)])]),
			_: 3
		}, 16, ["class"]));
	}
}), jk = /* @__PURE__ */ W({
	__name: "Pagination.ce",
	props: {
		total: { type: Number },
		itemsPerPage: { type: Number },
		defaultPage: { type: Number }
	},
	setup(e) {
		let t = _e();
		function n(e) {
			t?.dispatchEvent(new CustomEvent("change", {
				detail: { page: e },
				bubbles: !0,
				composed: !0
			}));
		}
		return (t, r) => (o(), F(B(Tk), {
			total: e.total ?? 0,
			"items-per-page": e.itemsPerPage ?? 10,
			"default-page": e.defaultPage ?? 1,
			"sibling-count": 1,
			"show-edges": "",
			"onUpdate:page": n
		}, {
			default: u(({ page: e }) => [G(B(Ek), null, {
				default: u(({ items: t }) => [
					G(B(Ak)),
					(o(!0), D(V, null, f(t, (t, n) => (o(), D(V, { key: n }, [t.type === "page" ? (o(), F(B(Ok), {
						key: 0,
						value: t.value,
						"is-active": t.value === e
					}, {
						default: u(() => [H(U(t.value), 1)]),
						_: 2
					}, 1032, ["value", "is-active"])) : (o(), F(B(Dk), {
						key: 1,
						index: n
					}, null, 8, ["index"]))], 64))), 128)),
					G(B(kk))
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
}), Mk = {
	key: 0,
	class: "bg-border h-6 w-1 rounded-lg z-10 flex shrink-0"
}, Nk = /* @__PURE__ */ W({
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
		let n = e, r = t, i = Y(K(n, "class", "withHandle"), r);
		return (e, t) => (o(), F(B(Wy), L({ "data-slot": "resizable-handle" }, B(i), { class: B($)("relative flex w-px items-center justify-center bg-border ring-offset-background after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", n.class) }), {
			default: u(() => [n.withHandle ? (o(), D("div", Mk, [v(e.$slots, "default")])) : N("", !0)]),
			_: 3
		}, 16, ["class"]));
	}
}), Pk = /* @__PURE__ */ W({
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
		return J(), (e, t) => (o(), F(B(Hy), L({ "data-slot": "resizable-panel" }, B(n)), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16));
	}
}), Fk = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class"), i);
		return (e, t) => (o(), F(B(Vy), L({ "data-slot": "resizable-panel-group" }, B(a), { class: B($)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", n.class) }), {
			default: u((t) => [v(e.$slots, "default", P(r(t)))]),
			_: 3
		}, 16, ["class"]));
	}
}), Ik = ["innerHTML"], Lk = /* @__PURE__ */ W({
	__name: "Resizable.ce",
	props: { direction: { type: String } },
	setup(e) {
		let t = e, n = _e(), r = n?._light.sections ?? [], i = r.length ? r : n?._light.defaultHtml ? [{
			html: n._light.defaultHtml,
			title: "",
			value: "0",
			disabled: !1
		}] : [];
		return (e, n) => (o(), F(B(Fk), {
			direction: t.direction ?? "horizontal",
			class: "min-h-40 max-w-full rounded-lg border"
		}, {
			default: u(() => [(o(!0), D(V, null, f(B(i), (e, t) => (o(), D(V, { key: t }, [t > 0 ? (o(), F(B(Nk), {
				key: 0,
				"with-handle": ""
			})) : N("", !0), G(B(Pk), { "default-size": 100 / B(i).length }, {
				default: u(() => [R("div", {
					class: "flex h-full items-start justify-start p-2",
					innerHTML: e.html
				}, null, 8, Ik)]),
				_: 2
			}, 1032, ["default-size"])], 64))), 128))]),
			_: 1
		}, 8, ["direction"]));
	}
}), Rk = /* @__PURE__ */ W({
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
		let n = e, i = t, a = Y(K(n, "class", "size", "variant"), i);
		return (t, i) => (o(), F(B(Db), L({ "data-slot": "toggle" }, B(a), { class: B($)(B(zk)({
			variant: e.variant,
			size: e.size
		}), n.class) }), {
			default: u((e) => [v(t.$slots, "default", P(r(e)))]),
			_: 3
		}, 16, ["class"]));
	}
}), zk = CC("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[state=on]:bg-muted gap-1 rounded-lg text-sm font-medium transition-all [&_svg:not([class*=size-])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
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
}), Bk = ["innerHTML"], Vk = ["innerHTML"], Hk = /* @__PURE__ */ W({
	__name: "Toggle.ce",
	props: {
		defaultPressed: { type: Boolean },
		variant: { type: String },
		size: { type: String },
		disabled: { type: Boolean }
	},
	setup(e) {
		let t = e, n = _e(), r = n?._light, i = k(t.defaultPressed ?? !1);
		function a(e) {
			i.value = e, n?.dispatchEvent(new CustomEvent("change", {
				detail: { pressed: e },
				bubbles: !0,
				composed: !0
			}));
		}
		return p(() => {}), (e, n) => (o(), F(B(Rk), {
			pressed: i.value,
			variant: t.variant ?? "default",
			size: t.size ?? "default",
			disabled: t.disabled ?? !1,
			"onUpdate:pressed": a
		}, {
			default: u(() => [B(r)?.slots?.default ? (o(), D("span", {
				key: 0,
				innerHTML: B(r).slots.default
			}, null, 8, Bk)) : B(r)?.defaultHtml ? (o(), D("span", {
				key: 1,
				innerHTML: B(r).defaultHtml
			}, null, 8, Vk)) : N("", !0)]),
			_: 1
		}, 8, [
			"pressed",
			"variant",
			"size",
			"disabled"
		]));
	}
}), Uk = /* @__PURE__ */ W({
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
		let a = Y(K(n, "class", "size", "variant"), i);
		return (t, i) => (o(), F(B(Eb), L({
			"data-slot": "toggle-group",
			"data-size": e.size,
			"data-variant": e.variant,
			"data-spacing": e.spacing,
			style: { "--gap": e.spacing }
		}, B(a), { class: B($)("rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] data-vertical:flex-col data-vertical:items-stretch", n.class) }), {
			default: u((e) => [v(t.$slots, "default", P(r(e)))]),
			_: 3
		}, 16, [
			"data-size",
			"data-variant",
			"data-spacing",
			"style",
			"class"
		]));
	}
}), Wk = /* @__PURE__ */ W({
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
		let t = e, n = a("toggleGroup"), i = gs(K(t, "class", "size", "variant"));
		return (a, s) => (o(), F(B(Ob), L({
			"data-slot": "toggle-group-item",
			"data-variant": B(n)?.variant || e.variant,
			"data-size": B(n)?.size || e.size,
			"data-spacing": B(n)?.spacing
		}, B(i), { class: B($)("group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg shrink-0 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", B(zk)({
			variant: B(n)?.variant || e.variant,
			size: B(n)?.size || e.size
		}), t.class) }), {
			default: u((e) => [v(a.$slots, "default", P(r(e)))]),
			_: 3
		}, 16, [
			"data-variant",
			"data-size",
			"data-spacing",
			"class"
		]));
	}
}), Gk = /* @__PURE__ */ W({
	__name: "ToggleGroup.ce",
	props: {
		type: { type: String },
		variant: { type: String },
		size: { type: String },
		value: { type: String }
	},
	setup(e) {
		let t = e, n = _e(), r = n?._light.options ?? [], i = k(t.value ?? ""), a = k(t.value ? t.value.split(",").map((e) => e.trim()) : []);
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
		return p(() => {}), (e, n) => (t.type ?? "single") === "single" ? (o(), F(B(Uk), {
			key: 0,
			type: "single",
			"model-value": i.value,
			variant: t.variant,
			size: t.size,
			"onUpdate:modelValue": s
		}, {
			default: u(() => [(o(!0), D(V, null, f(B(r), (e) => (o(), F(B(Wk), {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, {
				default: u(() => [H(U(e.label), 1)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"variant",
			"size"
		])) : (o(), F(B(Uk), {
			key: 1,
			type: "multiple",
			"model-value": a.value,
			variant: t.variant,
			size: t.size,
			"onUpdate:modelValue": c
		}, {
			default: u(() => [(o(!0), D(V, null, f(B(r), (e) => (o(), F(B(Wk), {
				key: e.value,
				value: e.value,
				disabled: e.disabled
			}, {
				default: u(() => [H(U(e.label), 1)]),
				_: 2
			}, 1032, ["value", "disabled"]))), 128))]),
			_: 1
		}, 8, [
			"model-value",
			"variant",
			"size"
		]));
	}
}), Kk = /* @__PURE__ */ W({
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
		return (e, n) => (o(), F(B(St), L({
			class: B($)("toaster group", t.class),
			style: {
				"--normal-bg": "var(--popover)",
				"--normal-text": "var(--popover-foreground)",
				"--normal-border": "var(--border)",
				"--border-radius": "var(--radius)"
			},
			"toast-options": { classes: { toast: "rounded-2xl" } }
		}, t), {
			"success-icon": u(() => [G(B(nr), { class: "size-4" })]),
			"info-icon": u(() => [G(B(ar), { class: "size-4" })]),
			"warning-icon": u(() => [G(B(fr), { class: "size-4" })]),
			"error-icon": u(() => [G(B(cr), { class: "size-4" })]),
			"loading-icon": u(() => [R("div", null, [G(B(or), { class: "size-4 animate-spin" })])]),
			"close-icon": u(() => [G(B(pr), { class: "size-4" })]),
			_: 1
		}, 16, ["class"]));
	}
}), qk = /* @__PURE__ */ W({
	__name: "Sonner.ce",
	props: {
		position: { type: String },
		richColors: { type: Boolean }
	},
	setup(e) {
		return (t, n) => (o(), F(B(Kk), {
			position: e.position ?? "bottom-right",
			"rich-colors": e.richColors
		}, null, 8, ["position", "rich-colors"]));
	}
}), Jk = "sidebar_state", Yk = 3600 * 24 * 7, Xk = "16rem", Zk = "18rem", Qk = "3rem", [$k, eA] = q("Sidebar"), tA = { class: "flex h-full w-full flex-col" }, nA = [
	"data-state",
	"data-collapsible",
	"data-variant",
	"data-side"
], rA = ["data-side"], iA = {
	"data-sidebar": "sidebar",
	"data-slot": "sidebar-inner",
	class: "bg-sidebar group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 flex size-full flex-col"
}, aA = /* @__PURE__ */ W({
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
		let t = e, { isMobile: n, state: r, openMobile: i, setOpenMobile: a } = $k();
		return (s, c) => e.collapsible === "none" ? (o(), D("div", L({
			key: 0,
			"data-slot": "sidebar",
			class: B($)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
		}, s.$attrs), [v(s.$slots, "default")], 16)) : B(n) ? (o(), F(B(qT), L({
			key: 1,
			open: B(i)
		}, s.$attrs, { "onUpdate:open": B(a) }), {
			default: u(() => [G(B(YT), {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar",
				"data-mobile": "true",
				side: e.side,
				class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
				style: O({ "--sidebar-width": B(Zk) })
			}, {
				default: u(() => [G(QT, { class: "sr-only" }, {
					default: u(() => [G($T, null, {
						default: u(() => [...c[0] ||= [H("Sidebar", -1)]]),
						_: 1
					}), G(XT, null, {
						default: u(() => [...c[1] ||= [H("Displays the mobile sidebar.", -1)]]),
						_: 1
					})]),
					_: 1
				}), R("div", tA, [v(s.$slots, "default")])]),
				_: 3
			}, 8, ["side", "style"])]),
			_: 3
		}, 16, ["open", "onUpdate:open"])) : (o(), D("div", {
			key: 2,
			class: "group peer text-sidebar-foreground hidden md:block",
			"data-slot": "sidebar",
			"data-state": B(r),
			"data-collapsible": B(r) === "collapsed" ? e.collapsible : "",
			"data-variant": e.variant,
			"data-side": e.side
		}, [R("div", {
			"data-slot": "sidebar-gap",
			class: I(B($)("transition-[width] duration-200 ease-linear relative w-(--sidebar-width) bg-transparent", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"))
		}, null, 2), R("div", L({
			"data-slot": "sidebar-container",
			"data-side": e.side,
			class: B($)("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", t.class)
		}, s.$attrs), [R("div", iA, [v(s.$slots, "default")])], 16, rA)], 8, nA));
	}
}), oA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sidebar-content",
			"data-sidebar": "content",
			class: I(B($)("no-scrollbar gap-0 flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), sA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sidebar-footer",
			"data-sidebar": "footer",
			class: I(B($)("gap-2 p-2 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), cA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sidebar-group",
			"data-sidebar": "group",
			class: I(B($)("p-2 relative flex w-full min-w-0 flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), lA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sidebar-group-content",
			"data-sidebar": "group-content",
			class: I(B($)("text-sm w-full", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), uA = /* @__PURE__ */ W({
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
		return (n, r) => (o(), F(B(X), {
			"data-slot": "sidebar-group-label",
			"data-sidebar": "group-label",
			as: e.as,
			"as-child": e.asChild,
			class: I(B($)("text-sidebar-foreground/70 ring-sidebar-ring h-8 rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0", t.class))
		}, {
			default: u(() => [v(n.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
}), dA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("div", {
			"data-slot": "sidebar-header",
			"data-sidebar": "header",
			class: I(B($)("gap-2 p-2 flex flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), fA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("main", {
			"data-slot": "sidebar-inset",
			class: I(B($)("bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 relative flex w-full flex-1 flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), pA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("ul", {
			"data-slot": "sidebar-menu",
			"data-sidebar": "menu",
			class: I(B($)("gap-0 flex w-full min-w-0 flex-col", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), mA = /* @__PURE__ */ W({
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
		return (n, r) => (o(), F(B(X), L({
			"data-slot": "sidebar-menu-button",
			"data-sidebar": "menu-button",
			"data-size": e.size,
			"data-active": e.isActive,
			class: B($)(B(yA)({
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
}), hA = /* @__PURE__ */ W({
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
		let t = e, { isMobile: n, state: i } = $k(), a = K(t, "tooltip");
		return (t, s) => e.tooltip ? (o(), F(B(pE), { key: 1 }, {
			default: u(() => [G(B(gE), { "as-child": "" }, {
				default: u(() => [G(mA, P(r({
					...B(a),
					...t.$attrs
				})), {
					default: u(() => [v(t.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}), G(B(mE), {
				side: "right",
				align: "center",
				hidden: B(i) !== "collapsed" || B(n)
			}, {
				default: u(() => [typeof e.tooltip == "string" ? (o(), D(V, { key: 0 }, [H(U(e.tooltip), 1)], 64)) : (o(), F(Ee(e.tooltip), { key: 1 }))]),
				_: 1
			}, 8, ["hidden"])]),
			_: 3
		})) : (o(), F(mA, P(L({ key: 0 }, {
			...B(a),
			...t.$attrs
		})), {
			default: u(() => [v(t.$slots, "default")]),
			_: 3
		}, 16));
	}
}), gA = /* @__PURE__ */ W({
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
		return (e, n) => (o(), D("li", {
			"data-slot": "sidebar-menu-item",
			"data-sidebar": "menu-item",
			class: I(B($)("group/menu-item relative", t.class))
		}, [v(e.$slots, "default")], 2));
	}
}), _A = /* @__PURE__ */ W({
	__name: "SidebarProvider",
	props: {
		defaultOpen: {
			type: Boolean,
			default: !yn?.cookie.includes(`${Jk}=false`)
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
		let n = e, r = t, i = jn("(max-width: 768px)"), a = k(!1), s = zn(n, "open", r, {
			defaultValue: n.defaultOpen ?? !1,
			passive: n.open === void 0
		});
		function c(e) {
			s.value = e, document.cookie = `${Jk}=${s.value}; path=/; max-age=${Yk}`;
		}
		function l(e) {
			a.value = e;
		}
		function d() {
			return i.value ? l(!a.value) : c(!s.value);
		}
		return xn("keydown", (e) => {
			e.key === "b" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), d());
		}), eA({
			state: z(() => s.value ? "expanded" : "collapsed"),
			open: s,
			setOpen: c,
			isMobile: i,
			openMobile: a,
			setOpenMobile: l,
			toggleSidebar: d
		}), (e, t) => (o(), F(B(Mb), { "delay-duration": 0 }, {
			default: u(() => [R("div", L({
				"data-slot": "sidebar-wrapper",
				style: {
					"--sidebar-width": B(Xk),
					"--sidebar-width-icon": B(Qk)
				},
				class: B($)("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", n.class)
			}, e.$attrs), [v(e.$slots, "default")], 16)]),
			_: 3
		}));
	}
}), vA = /* @__PURE__ */ W({
	__name: "SidebarTrigger",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(e) {
		let t = e, { toggleSidebar: n } = $k();
		return (e, r) => (o(), F(B(wC), {
			"data-sidebar": "trigger",
			"data-slot": "sidebar-trigger",
			variant: "ghost",
			size: "icon-sm",
			class: I(B($)("", t.class)),
			onClick: B(n)
		}, {
			default: u(() => [G(B(lr), { class: "cn-rtl-flip" }), r[0] ||= R("span", { class: "sr-only" }, "Toggle Sidebar", -1)]),
			_: 1
		}, 8, ["class", "onClick"]));
	}
}), yA = CC("ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground gap-2 rounded-md p-2 text-left text-sm transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 data-active:font-medium peer/menu-button group/menu-button flex w-full items-center overflow-hidden outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
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
}), bA = {
	key: 0,
	class: "go-sb-nav"
}, xA = ["innerHTML"], SA = {
	key: 0,
	class: "go-sb-lbl"
}, CA = [
	"href",
	"aria-current",
	"data-disabled",
	"onClick"
], wA = ["innerHTML"], TA = { class: "flex h-12 items-center gap-2 border-b px-4" }, EA = ["innerHTML"], DA = /* @__PURE__ */ W({
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
		let t = e, n = _e(), r = n?._light, i = r?.slots ?? {}, a = (r?.sections ?? []).map((e) => {
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
		return (e, n) => t.mode === "nav" ? (o(), D("nav", bA, [
			B(i).header ? (o(), D("div", {
				key: 0,
				class: "go-sb-hd",
				innerHTML: B(i).header
			}, null, 8, xA)) : N("", !0),
			(o(!0), D(V, null, f(B(a), (e, n) => (o(), D("div", {
				key: n,
				class: "go-sb-grp"
			}, [e.title ? (o(), D("div", SA, U(e.title), 1)) : N("", !0), (o(!0), D(V, null, f(e.items, (e, n) => (o(), D("a", {
				key: n,
				href: e.disabled ? void 0 : e.value,
				class: "go-sb-item",
				"aria-current": e.value === t.active ? "page" : void 0,
				"data-disabled": e.disabled ? "" : void 0,
				onClick: (t) => !e.disabled && s(e.value)
			}, U(e.label), 9, CA))), 128))]))), 128)),
			B(i).footer ? (o(), D("div", {
				key: 1,
				class: "go-sb-ft",
				innerHTML: B(i).footer
			}, null, 8, wA)) : N("", !0)
		])) : (o(), F(B(_A), { key: 1 }, {
			default: u(() => [G(B(aA), {
				side: t.side ?? "left",
				variant: t.variant ?? "sidebar",
				collapsible: t.collapsible ?? "offcanvas"
			}, {
				default: u(() => [
					B(i).header ? (o(), F(B(dA), {
						key: 0,
						innerHTML: B(i).header
					}, null, 8, ["innerHTML"])) : N("", !0),
					G(B(oA), null, {
						default: u(() => [(o(!0), D(V, null, f(B(a), (e, t) => (o(), F(B(cA), { key: t }, {
							default: u(() => [e.title ? (o(), F(B(uA), { key: 0 }, {
								default: u(() => [H(U(e.title), 1)]),
								_: 2
							}, 1024)) : N("", !0), G(B(lA), null, {
								default: u(() => [G(B(pA), null, {
									default: u(() => [(o(!0), D(V, null, f(e.items, (e, t) => (o(), F(B(gA), { key: t }, {
										default: u(() => [G(B(hA), {
											disabled: e.disabled,
											onClick: (t) => s(e.value)
										}, {
											default: u(() => [R("span", null, U(e.label), 1)]),
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
					B(i).footer ? (o(), F(B(sA), {
						key: 1,
						innerHTML: B(i).footer
					}, null, 8, ["innerHTML"])) : N("", !0)
				]),
				_: 1
			}, 8, [
				"side",
				"variant",
				"collapsible"
			]), G(B(fA), null, {
				default: u(() => [R("header", TA, [G(B(vA))]), R("div", {
					class: "p-4",
					innerHTML: B(i).content || B(r)?.defaultHtml || ""
				}, null, 8, EA)]),
				_: 1
			})]),
			_: 1
		}));
	}
}), OA = {
	class: "go-chart-root",
	style: {
		display: "block",
		width: "100%"
	}
}, kA = te({
	loader: () => import("./go-ui-ChartUnovis-D8vg7mAG.js"),
	loadingComponent: () => we("div", {
		class: "go-chart-skel",
		style: "width:100%;height:100%;min-height:200px;border-radius:8px;background:var(--muted,#f4f4f5);animation:go-chart-pulse 1.4s ease-in-out infinite"
	}),
	delay: 120
}), AA = /* @__PURE__ */ W({
	__name: "Chart.ce",
	props: {
		type: { type: String },
		data: { type: String },
		title: { type: String },
		description: { type: String }
	},
	setup(e) {
		return (t, n) => (o(), D(V, null, [R("div", OA, [G(B(kA), {
			type: e.type || "area",
			raw: e.data,
			"chart-title": e.title,
			"chart-description": e.description
		}, null, 8, [
			"type",
			"raw",
			"chart-title",
			"chart-description"
		])]), (o(), F(Ee("style"), null, {
			default: u(() => [...n[0] ||= [H("@keyframes go-chart-pulse{0%,100%{opacity:1}50%{opacity:.55}}", -1)]]),
			_: 1
		}))], 64));
	}
}), jA = {
	class: "go-dt-root",
	style: {
		display: "block",
		width: "100%"
	}
}, MA = te({
	loader: () => import("./go-ui-DataTableImpl-Dc2fT4uW.js"),
	loadingComponent: () => we("div", { style: "width:100%;height:240px;border-radius:8px;background:var(--muted,#f4f4f5);animation:go-dt-pulse 1.4s ease-in-out infinite" }),
	delay: 120
}), NA = /* @__PURE__ */ W({
	__name: "DataTable.ce",
	props: { data: { type: String } },
	setup(e) {
		return (t, n) => (o(), D(V, null, [R("div", jA, [G(B(MA), { raw: e.data }, null, 8, ["raw"])]), (o(), F(Ee("style"), null, {
			default: u(() => [...n[0] ||= [H("@keyframes go-dt-pulse{0%,100%{opacity:1}50%{opacity:.55}}", -1)]]),
			_: 1
		}))], 64));
	}
}), PA = ["data-invalid"], FA = ["for"], IA = { class: "go-ff-control" }, LA = {
	key: 1,
	class: "go-ff-error"
}, RA = {
	key: 2,
	class: "go-ff-desc"
}, zA = /* @__PURE__ */ W({
	__name: "FormField.ce",
	props: {
		fieldLabel: { type: String },
		fieldDescription: { type: String },
		fieldError: { type: String },
		fieldFor: { type: String }
	},
	setup(e) {
		return (t, n) => (o(), D("div", {
			class: "go-ff",
			"data-invalid": !!e.fieldError
		}, [
			e.fieldLabel ? (o(), D("label", {
				key: 0,
				class: "go-ff-label",
				for: e.fieldFor
			}, U(e.fieldLabel), 9, FA)) : N("", !0),
			R("div", IA, [v(t.$slots, "default")]),
			e.fieldError ? (o(), D("p", LA, U(e.fieldError), 1)) : e.fieldDescription ? (o(), D("p", RA, U(e.fieldDescription), 1)) : N("", !0)
		], 8, PA));
	}
}), BA = /* @__PURE__ */ W({
	__name: "Spinner.ce",
	props: { size: { type: String } },
	setup(e) {
		let t = e, n = {
			xs: "size-3",
			sm: "size-4",
			md: "size-6",
			lg: "size-8",
			xl: "size-10"
		}, r = z(() => t.size ? n[t.size] ?? "size-4" : "size-4");
		return (e, t) => (o(), D("svg", {
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
			class: I(B($)(r.value, "animate-spin"))
		}, [...t[0] ||= [R("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }, null, -1)]], 2));
	}
}), VA = ["data-content"], HA = {
	key: 0,
	class: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
	"data-slot": "field-separator-content"
}, UA = {
	key: 1,
	"data-slot": "field-group",
	class: "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4"
}, WA = {
	key: 2,
	"data-slot": "field-set",
	class: "flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3"
}, GA = ["data-variant"], KA = { key: 0 }, qA = ["innerHTML"], JA = {
	key: 1,
	"data-slot": "field-description",
	class: "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
}, YA = { key: 0 }, XA = ["innerHTML"], ZA = ["data-orientation", "data-invalid"], QA = ["for"], $A = { key: 0 }, ej = ["innerHTML"], tj = {
	key: 1,
	"data-slot": "field-content",
	class: "group/field-content flex flex-1 flex-col gap-1.5 leading-snug"
}, nj = {
	key: 2,
	"data-slot": "field-label",
	class: "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50"
}, rj = { key: 0 }, ij = ["innerHTML"], aj = {
	key: 3,
	"data-slot": "field-description",
	class: "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
}, oj = { key: 0 }, sj = ["innerHTML"], cj = {
	key: 4,
	role: "alert",
	"data-slot": "field-error",
	class: "text-destructive text-sm font-normal"
}, lj = { key: 0 }, uj = ["innerHTML"], dj = /* @__PURE__ */ W({
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
		let t = e, n = x(), r = _e()?._light?.slots ?? {}, i = z(() => t.as ?? "field"), a = z(() => t.orientation ?? "vertical"), s = z(() => !!t.legend || !!r.legend), c = z(() => !!t.description || !!r.description), l = z(() => !!t.error || !!r.error), u = z(() => !!t.title || !!r.title), d = z(() => !!t.label || !!r.label), f = z(() => !!n.content), p = z(() => $("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
			vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
			horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
			responsive: "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
		}[a.value]));
		return (m, h) => i.value === "separator" ? (o(), D("div", {
			key: 0,
			"data-slot": "field-separator",
			"data-content": !!(B(n).default || m.$slots.default),
			class: "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2"
		}, [h[0] ||= R("div", {
			"data-slot": "separator",
			role: "separator",
			class: "bg-border shrink-0 h-px w-full absolute inset-0 top-1/2"
		}, null, -1), B(n).default ? (o(), D("span", HA, [v(m.$slots, "default")])) : N("", !0)], 8, VA)) : i.value === "group" ? (o(), D("div", UA, [v(m.$slots, "default")])) : i.value === "set" ? (o(), D("fieldset", WA, [
			s.value ? (o(), D("legend", {
				key: 0,
				"data-slot": "field-legend",
				"data-variant": e.legendVariant ?? "legend",
				class: "mb-3 font-medium data-[variant=legend]:text-base data-[variant=label]:text-sm"
			}, [e.legend ? (o(), D("span", KA, U(e.legend), 1)) : (o(), D("span", {
				key: 1,
				innerHTML: B(r).legend
			}, null, 8, qA))], 8, GA)) : N("", !0),
			c.value ? (o(), D("p", JA, [e.description ? (o(), D("span", YA, U(e.description), 1)) : (o(), D("span", {
				key: 1,
				innerHTML: B(r).description
			}, null, 8, XA))])) : N("", !0),
			v(m.$slots, "default")
		])) : (o(), D("div", {
			key: 3,
			role: "group",
			"data-slot": "field",
			"data-orientation": a.value,
			"data-invalid": e.invalid ? !0 : void 0,
			class: I(p.value)
		}, [
			d.value ? (o(), D("label", {
				key: 0,
				"data-slot": "field-label",
				for: t.for,
				class: "group/field-label peer/field-label flex w-fit gap-2 leading-snug items-center text-sm font-medium select-none group-data-[disabled=true]/field:opacity-50"
			}, [e.label ? (o(), D("span", $A, U(e.label), 1)) : (o(), D("span", {
				key: 1,
				innerHTML: B(r).label
			}, null, 8, ej))], 8, QA)) : N("", !0),
			f.value ? (o(), D("div", tj, [v(m.$slots, "content")])) : N("", !0),
			u.value ? (o(), D("div", nj, [e.title ? (o(), D("span", rj, U(e.title), 1)) : (o(), D("span", {
				key: 1,
				innerHTML: B(r).title
			}, null, 8, ij))])) : N("", !0),
			v(m.$slots, "default"),
			c.value ? (o(), D("p", aj, [e.description ? (o(), D("span", oj, U(e.description), 1)) : (o(), D("span", {
				key: 1,
				innerHTML: B(r).description
			}, null, 8, sj))])) : N("", !0),
			l.value ? (o(), D("div", cj, [e.error ? (o(), D("span", lj, U(e.error), 1)) : (o(), D("span", {
				key: 1,
				innerHTML: B(r).error
			}, null, 8, uj))])) : N("", !0)
		], 10, ZA));
	}
}), fj = ["aria-expanded"], pj = /* @__PURE__ */ W({
	__name: "Combobox.ce",
	props: {
		placeholder: { type: String },
		searchPlaceholder: { type: String },
		emptyText: { type: String },
		value: { type: String }
	},
	setup(e) {
		let t = e, n = _e(), r = z(() => [...n?._light.options ?? []]), i = k(!1), a = k(t.value ?? ""), s = z(() => r.value.find((e) => e.value === a.value)?.label ?? "");
		function c(e) {
			a.value = a.value === e ? "" : e, i.value = !1, n?.dispatchEvent(new CustomEvent("change", {
				bubbles: !0,
				composed: !0,
				detail: { value: a.value }
			}));
		}
		return (t, n) => (o(), F(B(rE), {
			open: i.value,
			"onUpdate:open": n[0] ||= (e) => i.value = e
		}, {
			default: u(() => [G(B(aE), { "as-child": "" }, {
				default: u(() => [R("button", {
					type: "button",
					role: "combobox",
					"aria-expanded": i.value,
					class: "border-input bg-background ring-offset-background focus-visible:ring-ring inline-flex h-9 w-[220px] items-center justify-between rounded-md border px-3 py-2 text-sm font-normal whitespace-nowrap shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				}, [R("span", { class: I(s.value ? "" : "text-muted-foreground") }, U(s.value || e.placeholder || "Selecione uma opção..."), 3), G(B(tr), { class: "ml-2 size-4 shrink-0 opacity-50" })], 8, fj)]),
				_: 1
			}), G(B(iE), { class: "w-[220px] p-0" }, {
				default: u(() => [G(B(xD), null, {
					default: u(() => [G(B(TD), { placeholder: e.searchPlaceholder || "Pesquisar..." }, null, 8, ["placeholder"]), G(B(OD), null, {
						default: u(() => [G(B(SD), null, {
							default: u(() => [H(U(e.emptyText || "Sem resultados."), 1)]),
							_: 1
						}), G(B(CD), null, {
							default: u(() => [(o(!0), D(V, null, f(r.value, (e) => (o(), F(B(ED), {
								key: e.value,
								value: e.value,
								disabled: e.disabled,
								onSelect: (t) => c(e.value)
							}, {
								default: u(() => [R("span", null, U(e.label), 1), G(B(Xn), { class: I(["ml-auto size-4", a.value === e.value ? "opacity-100" : "opacity-0"]) }, null, 8, ["class"])]),
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
				})]),
				_: 1
			})]),
			_: 1
		}, 8, ["open"]));
	}
}), mj = {
	key: 0,
	class: "flex flex-col gap-1 border-b p-2"
}, hj = ["onClick"], gj = /* @__PURE__ */ W({
	__name: "DatePicker.ce",
	props: {
		placeholder: { type: String },
		value: { type: String },
		locale: { type: String }
	},
	setup(e) {
		let t = e, n = _e(), r = z(() => [...n?._light.options ?? []]);
		function i(e) {
			if (e) try {
				return sa(e);
			} catch {
				return;
			}
		}
		let a = k(!1), s = k(i(t.value)), c = z(() => new Intl.DateTimeFormat(t.locale === "en" ? "en-US" : "pt-PT", { dateStyle: "long" })), l = z(() => s.value ? c.value.format(s.value.toDate(di())) : t.placeholder ?? "Escolher data");
		function d() {
			let e = s.value, t = e ? `${e.year}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}` : "";
			n?.dispatchEvent(new CustomEvent("change", {
				bubbles: !0,
				composed: !0,
				detail: { value: t }
			}));
		}
		function p(e) {
			if (e && typeof e == "object" && "year" in e) {
				let t = e;
				s.value = new ha(t.year, t.month, t.day);
			} else s.value = void 0;
			a.value = !1, d();
		}
		function m(e) {
			s.value = i(e), a.value = !1, d();
		}
		let h = ai(di());
		return (e, n) => (o(), F(B(rE), {
			open: a.value,
			"onUpdate:open": n[1] ||= (e) => a.value = e
		}, {
			default: u(() => [G(B(aE), { "as-child": "" }, {
				default: u(() => [R("button", {
					type: "button",
					class: I(["border-input bg-background ring-offset-background focus-visible:ring-ring inline-flex h-9 w-[240px] items-center justify-start gap-2 rounded-md border px-3 py-2 text-left text-sm font-normal whitespace-nowrap shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", s.value ? "" : "text-muted-foreground"])
				}, [G(B(Yn), { class: "size-4 shrink-0 opacity-70" }), R("span", null, U(l.value), 1)], 2)]),
				_: 1
			}), G(B(iE), {
				class: "w-auto p-0",
				align: "start"
			}, {
				default: u(() => [r.value.length ? (o(), D("div", mj, [(o(!0), D(V, null, f(r.value, (e) => (o(), D("button", {
					key: e.value,
					type: "button",
					class: "ring-offset-background focus-visible:ring-ring inline-flex h-8 items-center rounded-md px-3 text-left text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
					onClick: (t) => m(e.value)
				}, U(e.label), 9, hj))), 128))])) : N("", !0), G(B(fk), {
					modelValue: s.value,
					"onUpdate:modelValue": [n[0] ||= (e) => s.value = e, p],
					locale: t.locale ?? "pt",
					"default-placeholder": B(h),
					layout: "month-and-year",
					"initial-focus": ""
				}, null, 8, [
					"modelValue",
					"locale",
					"default-placeholder"
				])]),
				_: 1
			})]),
			_: 1
		}, 8, ["open"]));
	}
}), _j = { class: "flex items-center gap-1" }, vj = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, yj = /* @__PURE__ */ W({
	__name: "RangeCalendar.ce",
	props: {
		locale: { type: String },
		value: { type: String },
		numberOfMonths: { type: Number }
	},
	setup(e) {
		let t = e, n = _e();
		function r(e) {
			if (!e) return;
			let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e.trim());
			if (t) try {
				return new ha(Number(t[1]), Number(t[2]), Number(t[3]));
			} catch {
				return;
			}
		}
		function i(e) {
			if (!e) return {
				start: void 0,
				end: void 0
			};
			let [t, n] = e.split("/");
			return {
				start: r(t),
				end: r(n)
			};
		}
		function a(e) {
			return e ? `${e.year}-${String(e.month).padStart(2, "0")}-${String(e.day).padStart(2, "0")}` : "";
		}
		let s = k(i(t.value));
		C(() => t.value, (e) => {
			s.value = i(e);
		});
		function c(e) {
			let t = e ?? {}, r = t.start, i = t.end;
			s.value = {
				start: r,
				end: i
			}, r && i && n?.dispatchEvent(new CustomEvent("change", {
				bubbles: !0,
				composed: !0,
				detail: {
					start: a(r),
					end: a(i)
				}
			}));
		}
		return (e, n) => (o(), F(B(Bm), {
			modelValue: s.value,
			"onUpdate:modelValue": [n[0] ||= (e) => s.value = e, c],
			"data-slot": "range-calendar",
			class: "p-3",
			locale: t.locale ?? "pt",
			"number-of-months": t.numberOfMonths ?? 2,
			"disable-days-outside-current-view": ""
		}, {
			default: u(({ grid: e, weekDays: t }) => [G(B(Jm), {
				"data-slot": "range-calendar-header",
				class: "flex justify-center pt-1 relative items-center w-full"
			}, {
				default: u(() => [G(B(Ym), {
					"data-slot": "range-calendar-heading",
					class: "text-sm font-medium"
				}), R("div", _j, [G(B(Zm), {
					"data-slot": "range-calendar-prev-button",
					class: I(B($)(B(TC)({ variant: "outline" }), "absolute left-1", "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"))
				}, {
					default: u(() => [G(B(Qn), { class: "size-4" })]),
					_: 1
				}, 8, ["class"]), G(B(Xm), {
					"data-slot": "range-calendar-next-button",
					class: I(B($)(B(TC)({ variant: "outline" }), "absolute right-1", "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"))
				}, {
					default: u(() => [G(B($n), { class: "size-4" })]),
					_: 1
				}, 8, ["class"])])]),
				_: 1
			}), R("div", vj, [(o(!0), D(V, null, f(e, (e) => (o(), F(B(Um), {
				key: e.value.toString(),
				"data-slot": "range-calendar-grid",
				class: "w-full border-collapse space-x-1"
			}, {
				default: u(() => [G(B(Gm), { "data-slot": "range-calendar-grid-head" }, {
					default: u(() => [G(B(Km), {
						"data-slot": "range-calendar-grid-row",
						class: "flex"
					}, {
						default: u(() => [(o(!0), D(V, null, f(t, (e) => (o(), F(B(qm), {
							key: e,
							"data-slot": "range-calendar-head-cell",
							class: "w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground"
						}, {
							default: u(() => [H(U(e), 1)]),
							_: 2
						}, 1024))), 128))]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024), G(B(Wm), { "data-slot": "range-calendar-grid-body" }, {
					default: u(() => [(o(!0), D(V, null, f(e.rows, (t, n) => (o(), F(B(Km), {
						key: `weekDate-${n}`,
						"data-slot": "range-calendar-grid-row",
						class: "flex mt-2 w-full"
					}, {
						default: u(() => [(o(!0), D(V, null, f(t, (t) => (o(), F(B(Vm), {
							key: t.toString(),
							date: t,
							"data-slot": "range-calendar-cell",
							class: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md"
						}, {
							default: u(() => [G(B(Hm), {
								day: t,
								month: e.value,
								"data-slot": "range-calendar-trigger",
								class: I(B($)(B(TC)({ variant: "ghost" }), "h-8 w-8 p-0 font-normal data-[selected]:opacity-100", "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground", "data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground [&[data-selection-start]:hover]:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground", "data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground [&[data-selection-end]:hover]:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground", "data-[outside-view]:text-muted-foreground", "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50", "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through"))
							}, null, 8, [
								"day",
								"month",
								"class"
							])]),
							_: 2
						}, 1032, ["date"]))), 128))]),
						_: 2
					}, 1024))), 128))]),
					_: 2
				}, 1024)]),
				_: 2
			}, 1024))), 128))])]),
			_: 1
		}, 8, [
			"modelValue",
			"locale",
			"number-of-months"
		]));
	}
}), bj = ["data-slot", "innerHTML"], xj = "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none [&_svg:not([class*='size-'])]:size-3 [[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10", Sj = "inline-flex items-center gap-1", Cj = /* @__PURE__ */ W({
	__name: "Kbd.ce",
	props: { group: { type: Boolean } },
	setup(e) {
		let t = e, n = (_e()?._light.defaultHtml ?? "").trim(), r = z(() => t.group ? Sj : xj), i = z(() => t.group ? "kbd-group" : "kbd");
		return (e, t) => (o(), D("kbd", {
			"data-slot": i.value,
			class: I(r.value),
			innerHTML: B(n)
		}, null, 10, bj));
	}
}), wj = ["data-orientation"], Tj = "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2", Ej = /* @__PURE__ */ W({
	__name: "ButtonGroup.ce",
	props: { orientation: { type: String } },
	setup(e) {
		let t = e, n = z(() => t.orientation ?? "horizontal"), r = {
			horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)>button]:rounded-l-none [&>*:not(:first-child)>button]:border-l-0 [&>*:not(:last-child)>button]:rounded-r-none",
			vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)>button]:rounded-t-none [&>*:not(:first-child)>button]:border-t-0 [&>*:not(:last-child)>button]:rounded-b-none"
		}, i = z(() => $(Tj, r[n.value]));
		return (e, t) => (o(), D("div", {
			role: "group",
			"data-slot": "button-group",
			"data-orientation": n.value,
			class: I(i.value)
		}, [v(e.$slots, "default")], 10, wj));
	}
}), Dj = {
	"data-slot": "empty",
	class: "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12"
}, Oj = {
	key: 0,
	"data-slot": "empty-header",
	class: "flex max-w-sm flex-col items-center gap-2 text-center"
}, kj = ["data-variant", "innerHTML"], Aj = {
	key: 1,
	"data-slot": "empty-title",
	class: "text-lg font-medium tracking-tight"
}, jj = {
	key: 2,
	"data-slot": "empty-description",
	class: "text-muted-foreground text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary"
}, Mj = {
	key: 1,
	"data-slot": "empty-content",
	class: "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance"
}, Nj = /* @__PURE__ */ W({
	__name: "Empty.ce",
	props: {
		emptyTitle: { type: String },
		emptyDescription: { type: String },
		mediaVariant: { type: String }
	},
	setup(e) {
		let t = e, n = _e()?._light, r = n?.slots ?? {}, i = z(() => !!n?.defaultHtml?.trim()), a = z(() => !!r.media), s = z(() => a.value || !!t.emptyTitle || !!t.emptyDescription), c = z(() => $("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", (t.mediaVariant ?? "default") === "icon" ? "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6" : "bg-transparent"));
		return (t, n) => (o(), D("div", Dj, [s.value ? (o(), D("div", Oj, [
			a.value ? (o(), D("div", {
				key: 0,
				"data-slot": "empty-icon",
				"data-variant": e.mediaVariant ?? "default",
				class: I(c.value),
				innerHTML: B(r).media
			}, null, 10, kj)) : N("", !0),
			e.emptyTitle ? (o(), D("div", Aj, U(e.emptyTitle), 1)) : N("", !0),
			e.emptyDescription ? (o(), D("p", jj, U(e.emptyDescription), 1)) : N("", !0)
		])) : N("", !0), i.value ? (o(), D("div", Mj, [v(t.$slots, "default")])) : N("", !0)]));
	}
}), Pj = ["data-variant", "data-size"], Fj = ["innerHTML"], Ij = ["innerHTML"], Lj = {
	key: 2,
	"data-slot": "item-content",
	class: "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none"
}, Rj = {
	key: 0,
	"data-slot": "item-title",
	class: "flex w-fit items-center gap-2 text-sm leading-snug font-medium"
}, zj = ["innerHTML"], Bj = {
	key: 1,
	"data-slot": "item-description",
	class: "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
}, Vj = ["innerHTML"], Hj = ["innerHTML"], Uj = ["innerHTML"], Wj = ["innerHTML"], Gj = "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", Kj = "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5", qj = /* @__PURE__ */ W({
	__name: "Item.ce",
	props: {
		variant: { type: String },
		size: { type: String },
		itemTitle: { type: String },
		itemDescription: { type: String }
	},
	setup(e) {
		let t = e, n = _e()?._light, r = n?.slots ?? {}, i = !!r.media, a = !!r.actions, s = !!r.header, c = !!r.footer, l = !!r.title || !!t.itemTitle, u = !!r.description || !!t.itemDescription, d = (n?.defaultHtml ?? "").trim(), f = l || u || !!d, p = {
			default: "bg-transparent",
			outline: "border-border",
			muted: "bg-muted/50"
		}, m = {
			default: "p-4 gap-4",
			sm: "py-3 px-4 gap-2.5"
		}, h = z(() => $(Gj, p[t.variant ?? "default"] ?? p.default, m[t.size ?? "default"] ?? m.default));
		return (e, n) => (o(), D("div", {
			"data-slot": "item",
			"data-variant": t.variant ?? "default",
			"data-size": t.size ?? "default",
			class: I(h.value)
		}, [
			s ? (o(), D("div", {
				key: 0,
				"data-slot": "item-header",
				class: "flex basis-full items-center justify-between gap-2",
				innerHTML: B(r).header
			}, null, 8, Fj)) : N("", !0),
			i ? (o(), D("div", {
				key: 1,
				"data-slot": "item-media",
				"data-variant": "default",
				class: I(Kj),
				innerHTML: B(r).media
			}, null, 8, Ij)) : N("", !0),
			B(f) ? (o(), D("div", Lj, [
				B(l) ? (o(), D("div", Rj, [B(r).title ? (o(), D("span", {
					key: 0,
					innerHTML: B(r).title
				}, null, 8, zj)) : (o(), D(V, { key: 1 }, [H(U(t.itemTitle), 1)], 64))])) : N("", !0),
				B(u) ? (o(), D("p", Bj, [B(r).description ? (o(), D("span", {
					key: 0,
					innerHTML: B(r).description
				}, null, 8, Vj)) : (o(), D(V, { key: 1 }, [H(U(t.itemDescription), 1)], 64))])) : N("", !0),
				!B(l) && !B(u) && B(d) ? (o(), D("div", {
					key: 2,
					innerHTML: B(d)
				}, null, 8, Hj)) : N("", !0)
			])) : N("", !0),
			a ? (o(), D("div", {
				key: 3,
				"data-slot": "item-actions",
				class: "flex items-center gap-2",
				innerHTML: B(r).actions
			}, null, 8, Uj)) : N("", !0),
			c ? (o(), D("div", {
				key: 4,
				"data-slot": "item-footer",
				class: "flex basis-full items-center justify-between gap-2",
				innerHTML: B(r).footer
			}, null, 8, Wj)) : N("", !0)
		], 10, Pj));
	}
}), Jj = {
	class: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
	"data-slot": "native-select-wrapper"
}, Yj = ["disabled", "required"], Xj = ["label", "disabled"], Zj = ["value", "disabled"], Qj = ["value", "disabled"], $j = /* @__PURE__ */ W({
	__name: "NativeSelect.ce",
	props: {
		name: { type: String },
		required: { type: Boolean },
		disabled: { type: Boolean },
		value: { type: String }
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = _e();
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
		let c = k(s());
		function l() {
			for (let e of c.value) {
				if (e.kind === "option" && !e.opt.disabled) return e.opt.value;
				if (e.kind === "group") {
					for (let t of e.options) if (!t.disabled) return t.value;
				}
			}
			return "";
		}
		let u = k(n.value ?? l()), d = k(!1);
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
		}), (t, n) => (o(), D("div", Jj, [T(R("select", {
			"onUpdate:modelValue": n[0] ||= (e) => u.value = e,
			disabled: e.disabled || d.value,
			required: e.required,
			"data-slot": "native-select",
			class: "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-8 w-full min-w-0 appearance-none rounded-lg border bg-transparent py-1 pr-8 pl-2.5 text-sm transition-colors select-none focus-visible:ring-3 aria-invalid:ring-3 outline-none disabled:pointer-events-none disabled:cursor-not-allowed",
			onChange: h
		}, [(o(!0), D(V, null, f(c.value, (e, t) => (o(), D(V, { key: t }, [e.kind === "group" ? (o(), D("optgroup", {
			key: 0,
			label: e.label,
			disabled: e.disabled,
			"data-slot": "native-select-optgroup",
			class: "bg-[Canvas] text-[CanvasText]"
		}, [(o(!0), D(V, null, f(e.options, (e, t) => (o(), D("option", {
			key: t,
			value: e.value,
			disabled: e.disabled,
			"data-slot": "native-select-option",
			class: "bg-[Canvas] text-[CanvasText]"
		}, U(e.label), 9, Zj))), 128))], 8, Xj)) : (o(), D("option", {
			key: 1,
			value: e.opt.value,
			disabled: e.opt.disabled,
			"data-slot": "native-select-option",
			class: "bg-[Canvas] text-[CanvasText]"
		}, U(e.opt.label), 9, Qj))], 64))), 128))], 40, Yj), [[oe, u.value]]), G(B(Zn), {
			class: "text-muted-foreground top-1/2 right-2.5 size-4 -translate-y-1/2 pointer-events-none absolute select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]));
	}
});
Et(vS, "go-checkbox"), Et(xS, "go-switch"), Et(CS, "go-input"), Et(TS, "go-textarea"), Et(OS, "go-slider"), Et(MS, "go-radio-group"), Et(VS, "go-select"), Et(qS, "go-number-field"), Et(QS, "go-pin-input"), Et(iC, "go-tags-input"), Et($j, "go-native-select"), Dt(pC, "go-card"), Dt(yC, "go-accordion"), Dt(PC, "go-dialog"), Dt(zC, "go-alert"), Dt(HC, "go-aspect-ratio"), Dt(JC, "go-avatar"), Dt($C, "go-badge"), Dt(sw, "go-breadcrumb"), Dt(lw, "go-separator"), Dt(dw, "go-skeleton"), Dt(pw, "go-button"), Dt(hw, "go-progress"), Dt(gw, "go-label"), Dt(Cw, "go-input-group"), Dt(Ew, "go-scroll-area"), Dt(Ow, "go-table"), Dt(Fw, "go-tabs"), Dt(Vw, "go-collapsible"), Dt(Xw, "go-stepper"), Dt(aT, "go-alert-dialog"), Dt(KT, "go-drawer"), Dt(nE, "go-sheet"), Dt(sE, "go-popover"), Dt(fE, "go-hover-card"), Dt(vE, "go-tooltip"), Dt(AE, "go-dropdown-menu"), Dt(KE, "go-context-menu"), Dt(cD, "go-menubar"), Dt(bD, "go-navigation-menu"), Dt(FD, "go-command"), Dt(XO, "go-carousel"), Dt(wk, "go-calendar"), Dt(jk, "go-pagination"), Dt(Lk, "go-resizable"), Dt(Hk, "go-toggle"), Dt(Gk, "go-toggle-group"), Dt(qk, "go-toaster"), Dt(DA, "go-sidebar"), Dt(AA, "go-chart"), Dt(NA, "go-data-table"), Dt(zA, "go-form-field"), Dt(BA, "go-spinner"), Dt(dj, "go-field"), Dt(pj, "go-combobox"), Dt(gj, "go-date-picker"), Dt(yj, "go-range-calendar"), Dt(Cj, "go-kbd"), Dt(Ej, "go-button-group"), Dt(Nj, "go-empty"), Dt(qj, "go-item"), globalThis.goToast = je;
//#endregion
