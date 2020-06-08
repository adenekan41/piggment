/* eslint-disable react/jsx-curly-brace-presence */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { rgbToHex } from 'utils';
import { setState, getState } from 'codewonders-helpers';

import { logEvent } from 'utils/analytics';
import LargeCard from './large-card';
import GeneratorCard from './generator-card';
import SmallCard from './small-card';
import PaletteCard from './palette-card';
import GeneratorPaletteCard from './generate-palette';

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

		const [loved, setLoved] = useState(false);

		// Get and draw canvas URL
		useEffect(() => {
			if (!palette) {
				const canvasObj = textCanvas.current;
				const ctx = canvasObj.getContext('2d');
				const dataAngle = data.color.match(/\d+/g).shift();

				// console.log(dataAngle);
				const angle = (dataAngle * Math.PI) / 360;
				const x2 = Math.cos(angle) * 1360;
				const y2 = Math.sin(angle) * 768;

				const grd = ctx.createLinearGradient(0, 0, x2, y2);
				// light blue

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
			}
		};
		const savePalette = (datas) => {
			if (!getState('SAVED_PALETTE')) {
				setState('SAVED_PALETTE', []);
			}
			if (!getState('SAVED_PALETTE').find((state) => state.id === datas.id)) {
				logEvent('SAVE', 'Pallet added to pocket', 'SAVED PALETTE');
				setState('SAVED_PALETTE', [datas, ...getState('SAVED_PALETTE')]);
				setLoved(true);
			}
		};

		const copyText = () => {
			const textField = document.createElement('textarea');

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
			document.body.appendChild(textField);
			textField.select();
			document.execCommand('copy');
			textField.remove();
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

Card.propTypes = {
	data: PropTypes.object,
	mode: PropTypes.string,
	layout: PropTypes.string,
	type: PropTypes.string,
	palette: PropTypes.bool,
	next: PropTypes.func,
	cardMode: PropTypes.string,
	prev: PropTypes.func,
};

export default Card;
