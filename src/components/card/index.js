/* eslint-disable react/jsx-curly-brace-presence */
/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { setState, getState } from 'codewonders-helpers';

/* -------------------------- Internal Dependencies ------------------------- */
import { rgbToHex } from 'utils';
import { logEvent } from 'utils/analytics';

import GradientContext from 'context';
import LargeCard from './large-card';
import GeneratorCard from './generator-card';
import SmallCard from './small-card';
import PaletteCard from './palette-card';
import GeneratorPaletteCard from './generate-palette';

/* ----------------------------- Card PropTypes ----------------------------- */
const propTypes = {
	cardMode: PropTypes.string,
	data: PropTypes.object,
	layout: PropTypes.string,
	mode: PropTypes.string,
	next: PropTypes.func,
	palette: PropTypes.bool,
	prev: PropTypes.func,
	type: PropTypes.string,
};

const Card = React.memo(
	({
		data,
		mode,
		layout,
		palette = false,
		cardMode,
		type = 'small',
		next = () => {},
		prev = () => {},
	}) => {
		const textCanvas = useRef(null);
		const [url, setUrl] = useState('');
		const { setSnarkbar } = useContext(GradientContext);
		const [loved, setLoved] = useState(false);

		// Get gradient and draw canvas URL
		useEffect(() => {
			if (!palette) {
				const canvasObj = textCanvas.current;
				const ctx = canvasObj.getContext('2d');
				const dataAngle = data.color.match(/\d+/g).shift();

				const angle = (dataAngle * Math.PI) / 360;
				const x2 = Math.cos(angle) * 1360;
				const y2 = Math.sin(angle) * 768;

				const grd = ctx.createLinearGradient(0, 0, x2, y2);
				grd.addColorStop(
					parseInt(
						data.color
							.substring(data.color.indexOf('rgb'), data.color.indexOf('%'))
							.match(/\d+/g)
							.pop(),
						10
					) / 100,
					rgbToHex(data.color, 0)
				);
				grd.addColorStop(
					parseInt(data.color.match(/\d+/g).pop(), 10) / 100,
					rgbToHex(data.color, 1)
				);
				ctx.fillStyle = grd;
				ctx.fillRect(0, 0, 1360, 768);
				setUrl(ctx.canvas.toDataURL());
			}
		}, [data, palette]);

		const saveGradient = (datas) => {
			if (!getState('SAVED_GRADIENTS')) {
				setState('SAVED_GRADIENTS', []);
			}

			if (!getState('SAVED_GRADIENTS').find((state) => state.id === datas.id)) {
				logEvent('SAVE', 'Gradient added to pocket', 'SAVED GRADIENT');
				setState('SAVED_GRADIENTS', [datas, ...getState('SAVED_GRADIENTS')]);

				setLoved(true);
				setSnarkbar('Gradient saved succesfully. <a href="/saved">View</a>');
			}
		};
		const savePalette = (datas) => {
			if (!getState('SAVED_PALETTE')) {
				setState('SAVED_PALETTE', []);
			}
			if (!getState('SAVED_PALETTE').find((state) => state.id === datas.id)) {
				logEvent('SAVE', 'Palette added to pocket', 'SAVED PALETTE');
				setState('SAVED_PALETTE', [datas, ...getState('SAVED_PALETTE')]);
				setLoved(true);
				setSnarkbar('Palette saved succesfully. <a href="/saved">View</a>');
			}
		};

		const copyText = (text) => {
			const textField = document.createElement('textarea');
			let msg = 'CSS code copied to clipboard';
			if (!text) {
				if (palette) {
					textField.innerText = `
        background: ${data.colors[0]}; /* fallback for old browsers */ \n
        :root{
          ${data.colors.map((color, index) => `--color${index + 1}: ${color};`)}
        }`;
				} else {
					textField.innerText = `
        background: ${rgbToHex(
					data.color,
					0
				)}; /* fallback for old browsers */ \n
        background: -webkit-${data.color}; /* Chrome 10-25, Safari 5.1-6 */ \n
        background: ${data.color}`;
				}
			} else {
				textField.innerText = text;
				msg = 'Color code copied to clipboard';
			}

			document.body.appendChild(textField);
			textField.select();
			document.execCommand('copy');
			textField.remove();
			setSnarkbar(msg);
		};

		return (
			<>
				{!palette ? (
					<>
						{type === 'small' ? (
							<SmallCard
								copyText={copyText}
								data={data}
								loved={loved}
								saveGradient={saveGradient}
								url={url}
								layout={layout}
								mode={mode}
							>
								<canvas ref={textCanvas} width="1360" height="768" />
							</SmallCard>
						) : type === 'large' ? (
							<LargeCard
								copyText={copyText}
								data={data}
								loved={loved}
								saveGradient={saveGradient}
								url={url}
							>
								<canvas ref={textCanvas} width="1360" height="768" />
							</LargeCard>
						) : (
							<GeneratorCard
								copyText={copyText}
								data={data}
								loved={loved}
								saveGradient={saveGradient}
								url={url}
								next={next}
								prev={prev}
							>
								<canvas ref={textCanvas} width="1360" height="768" />
							</GeneratorCard>
						)}
					</>
				) : type === 'generate' ? (
					<GeneratorPaletteCard
						copyText={copyText}
						data={data}
						loved={loved}
						saveGradient={savePalette}
						next={next}
						prev={prev}
					/>
				) : (
					<PaletteCard
						copyText={copyText}
						data={data}
						loved={loved}
						saveGradient={savePalette}
						layout={layout}
						cardMode={cardMode}
						mode={mode}
					/>
				)}
			</>
		);
	}
);

Card.propTypes = propTypes;

export default Card;
