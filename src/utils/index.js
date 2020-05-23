export const hexConverter = (rgb) => {
	let hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = `0${hex}`;
	}
	return hex;
};

export const rgbToHex = (r, g, b) => {
	const red = hexConverter(r);
	const green = hexConverter(g);
	const blue = hexConverter(b);
	return `#${red}${green}${blue}`;
};
