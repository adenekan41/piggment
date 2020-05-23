import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import randomWords from 'random-words';
import { ReactComponent as Banner } from '../../assets/icons/banner.svg';
import { rgbToHex } from 'utils';

const Home = () => {
	const [state, setState] = useState([]);
	const gradient = useCallback(() => {
		const n = (u) => ~~(Math.random() * (u + 1));
		const r = () => `rgb(${n(255)}, ${n(255)}, ${n(255)})`;
		const g = () =>
			`linear-gradient(${n(360)}deg, ${r()} ${n(20)}%, ${r()} 100%)`;

		for (let i = 0; i < 40; i++) {
			setState((s) => [...s, g()]);
		}
	}, []);
	useEffect(() => {
		if (state <= '40') {
			gradient();
		}
	}, [gradient, state]);
	const get_random = (list) => {
		return list[Math.floor(Math.random() * list.length)];
	};
	return (
		<main>
			<Header>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-md-7">
							<article>
								<h1>The gradient you have always wanted.</h1>
								<p>
									Generate, explore, easy CSS copy crossbrowser code all in one
									place
								</p>

								<button className="btn btn-pigment" type="button">
									Generate Gradients
								</button>
							</article>
						</div>
					</div>
				</div>
			</Header>
			<Section>
				{/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{state.map((mp) => (
						<>
							<div
								style={{
									background: mp,
									height: '200px',
									margin: '5px',
									width: '200px',
									borderRadius: '50%',
								}}
							/>
							<p>{mp}</p>
						</>
					))}
				</div>{' '} */}
				<div className="container">
					<h2>Discover.</h2>
					<div className="grid">
						{state.map((mp) => (
							<>
								<div className="card">
									<div className="card-bod">
										<figure
											style={{
												background: mp,
											}}
										/>{' '}
										<article>
											<h4>{randomWords({ exactly: 2, join: ' ' })}</h4>
											<p>
												{rgbToHex(
													mp
														.split('rgb')
														.slice(1)[1]
														.slice(0, -5)
														.split(',')[0]
														.slice(1),
													mp
														.split('rgb')
														.slice(1)[1]
														.slice(0, -5)
														.split(',')[1],
													mp
														.split('rgb')
														.slice(1)[1]
														.slice(0, -5)
														.split(',')[2]
														.slice(0, -2)
												)}{' '}
												-{' '}
												{rgbToHex(
													mp
														.split('rgb')
														.slice(1)[0]
														.slice(0, -5)
														.split(',')[0]
														.slice(1),
													mp
														.split('rgb')
														.slice(1)[0]
														.slice(0, -5)
														.split(',')[1],
													mp
														.split('rgb')
														.slice(1)[0]
														.slice(0, -5)
														.split(',')[2]
														.slice(0, -2)
												)}
											</p>
										</article>
										<div
											className="small__colors"
											style={{
												background: `rgb${mp
													.split('rgb')
													.slice(1)[1]
													.slice(0, -5)}`,
											}}
										/>
										<div
											className="small__colors"
											style={{
												background: `rgb${mp
													.split('rgb')
													.slice(1)[0]
													.slice(0, -5)}`,
											}}
										/>
										<p className="float-right">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												className="mr-2"
											>
												<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
											</svg>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
											>
												<path d="M16.965 2.381c3.593 1.946 6.035 5.749 6.035 10.119 0 6.347-5.153 11.5-11.5 11.5s-11.5-5.153-11.5-11.5c0-4.37 2.442-8.173 6.035-10.119l.608.809c-3.353 1.755-5.643 5.267-5.643 9.31 0 5.795 4.705 10.5 10.5 10.5s10.5-4.705 10.5-10.5c0-4.043-2.29-7.555-5.643-9.31l.608-.809zm-4.965-2.381v14.826l3.747-4.604.753.666-5 6.112-5-6.101.737-.679 3.763 4.608v-14.828h1z" />
											</svg>
											{/* <svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
											</svg> */}
										</p>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
			</Section>
		</main>
	);
};
const Header = styled.header`
	background: #fff8f0;
	height: 40em;
	align-items: center;
	justify-content: center;
	text-align: center;
	display: flex;
	h1 {
		font-weight: 900;
		font-size: 3.82em;
		color: var(--black);
		letter-spacing: -1.3px;
	}
	p {
		color: #717171;
		margin: 6px;
		font-size: 16px;
		font-weight: 400;
	}
	button {
		padding: 12px 40px;
		border: none;
		font-size: 15px;
		font-weight: 500;
		margin-top: 2rem;
	}
	/* .display-grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
	} */
`;

const Section = styled.section`
	margin-top: 5rem;
	h2 {
		font-weight: 600;
		font-size: 1.82em;
		color: var(--black);
		margin-bottom: 1.4rem;
		letter-spacing: -1.3px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		grid-template-rows: 1fr;
		grid-column-gap: 40px;
		grid-row-gap: 40px;
	}
	figure {
		min-height: 160px;
		height: 100%;
		border-radius: 8px;
	}
	.small__colors {
		height: 20px;
		width: 20px;
		margin: 0 1.5px;
		border-radius: 50%;
		display: inline-block;
	}
	.card {
		border: none !important;
		article {
			h4 {
				text-transform: capitalize;
				font-size: 1.15em;
				font-weight: 500;
				color: #0a0a0a;
			}
			p {
				font-size: 12px;
				color: #989898;
			}
		}
		svg {
			width: 15px;
			fill: #717171;
		}
		.card-body {
			padding: 14px;
		}
	}
`;
export default Home;
