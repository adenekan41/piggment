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
	const color = rgb.split('rgb').slice(1)[index];
	const [r, g, b] = color.match(/\d+/g);
	return `#${hexConverter(r)}${hexConverter(g)}${hexConverter(b)}`;
};

/**
 * Gradient Core
 * @returns {String}
 */
export const generateGradient = () => {
	const n = (u) => ~~(Math.random() * (u + 1));
	const r = () => `rgb(${n(255)}, ${n(255)}, ${n(255)})`;
	return `linear-gradient(${n(360)}deg, ${r()} ${n(23)}%, ${r()} 100%)`;
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
	let timeout;
	return function() {
		const context = this;
		const args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

/**
 * create a unique ID for the data object
 * @returns {String}
 */
export const guidGenerator = () => {
	const S4 = () => {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};

/**
 * Luminace function by  kirilloid https://stackoverflow.com/a/9733420/3695983
 * @param {String} r
 * @param {String} g
 * @param {String} b
 */
export const luminanace = (r, g, b) => {
	const a = [r, g, b].map((v) => {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : (v + 0.055) / 1.055 ** 2.4;
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

/**
 * Hex to RGB
 * @param {String} hex
 */
export const hexToRgb = (hex) => {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, (m, r, g, b) => {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
};

/**
 * @private
 * @param {String} strColor
 */
export const isColor = (strColor) => {
	const s = new Option().style;
	s.color = strColor;
	const test1 = s.color === strColor;
	const test2 = /^#[0-9A-F]{3}$|^#[0-9A-F]{6}/i.test(strColor);
	if (test1 === true || test2 === true) {
		return true;
	}
	return false;
};

export const calculateContrast = (color1, color2) => {
	const splittedRgb = (rgb) => rgb.match(/\d+/g);
	if (!color1 && !color2) return;
	if (isColor(color1) && isColor(color2)) {
		const $color1$ =
			color1.trim().indexOf('#') === 0
				? luminanace(hexToRgb(color1).r, hexToRgb(color1).g, hexToRgb(color1).b)
				: color1.trim().indexOf('rgb') === 0
				? luminanace(
						splittedRgb(color1)[0],
						splittedRgb(color1)[1],
						splittedRgb(color1)[2]
				  )
				: null;
		const $color2$ =
			color2.trim().indexOf('#') === 0
				? luminanace(hexToRgb(color2).r, hexToRgb(color2).g, hexToRgb(color2).b)
				: color2.trim().indexOf('rgb') === 0
				? luminanace(
						splittedRgb(color2)[0],
						splittedRgb(color2)[1],
						splittedRgb(color2)[2]
				  )
				: null;

		const ratio =
			$color1$ > $color2$
				? ($color2$ + 0.05) / ($color1$ + 0.05)
				: ($color1$ + 0.05) / ($color2$ + 0.05);
		const ratioObj =
			(Math.max($color1$, $color2$) + 0.05) /
			(Math.min($color1$, $color2$) + 0.05);

		// eslint-disable-next-line consistent-return
		return ratio
			? {
					ratio: ratioObj.toFixed(2),
					AA_level_large_text: ratio < 1 / 3 ? 'PASS' : 'FAIL',
					AA_level_small_text: ratio < 1 / 4.5 ? 'PASS' : 'FAIL',
					AAA_level_large_text: ratio < 1 / 4.5 ? 'PASS' : 'FAIL',
					AAA_level_small_text: ratio < 1 / 7 ? 'PASS' : 'FAIL',
			  }
			: null;
	}
};

export const ratioStatus = (ratio) => {
	if (!ratio) return;
	if (ratio) {
		// eslint-disable-next-line consistent-return
		return {
			color: ratio < 4.5 ? '#b10808' : ratio <= 7 ? '#ce6f02' : '#10880f',
			status: ratio < 4.5 ? 'Poor' : ratio <= 7 ? 'Fair' : 'Good',
			background: ratio < 4.5 ? '#ffb5b4' : ratio <= 7 ? '#ffce97' : '#beffbd',
		};
	}
};
