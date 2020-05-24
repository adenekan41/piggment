/**
 * Hex Converter
 * @param {Number} rgb
 * @returns {Number}
 */

export const hexConverter = (rgb) => {
	let hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = `0${hex}`;
	}
	return hex;
};

/**
 * Convert each RGB to an hex string
 * @param {String} rgb
 * @param {Number} index
 */
export const rgbToHex = (rgb, index) => {
	const [r, g, b] = rgb
		.split('rgb')
		.slice(1)
		[index].slice(0, -5)
		.replace('(', '')
		.replace(')', '')
		.split(',');

	return `#${hexConverter(r)}${hexConverter(g)}${hexConverter(b)}`;
};

/**
 * Gradient Core
 * @returns {String}
 */
export const generateGradient = () => {
	const n = (u) => ~~(Math.random() * (u + 1));
	const r = () => `rgb(${n(255)}, ${n(255)}, ${n(255)})`;
	return `linear-gradient(${n(360)}deg, ${r()} ${n(20)}%, ${r()} 100%)`;
};

/**
 * Get Random Item In An Array
 * @param {Array} list
 */
export const get_random = (list) => {
	return list[Math.floor(Math.random() * list.length)];
};

/**
 *
 * @param {Function} func
 * @param {Number|String} wait
 * @param {Number|String} immediate
 */
export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
