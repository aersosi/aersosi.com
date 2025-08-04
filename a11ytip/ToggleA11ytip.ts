export function toggleA11ytip() {
	const selectors = [
		"[data-a11ytip-top]",
		"[data-a11ytip-top-left]",
		"[data-a11ytip-top-right]",
		"[data-a11ytip-right]",
		"[data-a11ytip-right-top]",
		"[data-a11ytip-right-bottom]",
		"[data-a11ytip-bottom]",
		"[data-a11ytip-bottom-left]",
		"[data-a11ytip-bottom-right]",
		"[data-a11ytip-left]",
		"[data-a11ytip-left-top]",
		"[data-a11ytip-left-bottom]",
	];

	const a11ytip = document.querySelectorAll(selectors.join(", "));
	const activeTooltipDelays = new WeakMap(); // Element removed from DOM = automatically removed from WeakMap
	const SHOW_DELAY = 500;
	const A11YTIP_CLASS = "a11ytip-active";

	// Get delay from data-a11ytip-delay attribute or use default SHOW_DELAY
	const getDelay = (element) => {
		const delayAttr = element.getAttribute("data-a11ytip-delay");
		if (delayAttr !== null) {
			const delay = parseInt(delayAttr, 10);
			return !isNaN(delay) ? delay : SHOW_DELAY;
		}
		return SHOW_DELAY;
	};

	a11ytip.forEach((el) => {
		// initial check after DOMContentLoaded whether the mouse is over an element
		if (el.matches(":hover")) {
			const timeout = setTimeout(() => {
				el.classList.add(A11YTIP_CLASS);
			}, getDelay(el));
			activeTooltipDelays.set(el, timeout);
		}

		const show = () => {
			if (!activeTooltipDelays.has(el)) {
				const timeout = setTimeout(() => {
					el.classList.add(A11YTIP_CLASS);
					activeTooltipDelays.delete(el);
				}, getDelay(el));
				activeTooltipDelays.set(el, timeout);
			}
		};

		const hide = () => {
			const timeout = activeTooltipDelays.get(el);
			if (timeout) {
				clearTimeout(timeout);
				activeTooltipDelays.delete(el);
			}
			el.classList.remove(A11YTIP_CLASS);
		};

		el.addEventListener("mouseenter", show);
		el.addEventListener("mouseleave", hide);
		el.addEventListener("focus", show);
		el.addEventListener("blur", hide);
	});
}
