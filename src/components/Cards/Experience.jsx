import React from "react";
import IMAGES from '../../utilities/images.js';

const Experience = () => {
	return (
		<div className="card experience">
			<div className="card__title">
				<h3>Industry Experience</h3>
			</div>

			<div className="tda__body">
				<div className="experience__card">
					<div className="row">
						<h4>Top Digital Agency</h4>
						<img src={IMAGES.arrow} alt="open" />
					</div>

					<div className="experience__info">
						<div className="info">
							<p>Product Designer</p>
							<div className="info__row">
								<p>2022 /</p>
								<p>Zagreb</p>
							</div>	
						</div>
						<p>As a Product Designer for a SaaS platform, my focus is on creating intuitive and visually engaging designs to help digital companies find the right jobs for their needs.</p>
					</div>
				</div>

				<div className="tda__bottom">
					<div className="tda__bottom__left"></div>
					<div className="tda__bottom__right">
						<div className="tda__bottom__left__mainBG">
							<div className="tda__bottom__left__mainBG__active"></div>
						</div>
					</div>
				</div>
			</div>


			<div className="experience__card">
				<div className="card__row">
					<h4>Croatel</h4>
					<img src={IMAGES.arrow} alt="open" />
				</div>
				<div className="experience__info">
					<div className="info">
						<p>Graphic Designer</p>
						<div className="info__row">
							<p>2020 / 2022</p>
							<p>Zagreb</p>
						</div>	
					</div>
					<p>Graphic designer for 2D and 3D graphics and virtual scenes. Work in the department of TV production and TV playout for Croatian Radio Television News.</p>
				</div>
			</div>

			<div className="experience__card">
				<div className="card__row">
					<h4>Combis</h4>
					<img src={IMAGES.arrow} alt="open" />
				</div>
				<div className="experience__info">
					<div className="info">
						<p>Front-end internship</p>
						<div className="info__row">
							<p>2019</p>
							<p>Zagreb</p>
						</div>	
					</div>
				</div>
			</div>
			
			<div className="experience__card">
				<div className="card__row">
					<h4>Deadalus</h4>
					<img src={IMAGES.arrow} alt="open" />
				</div>
				<div className="experience__info">
					<div className="info">
						<p>Game Artist</p>
						<div className="info__row">
							<p>2015</p>
							<p>Zagreb</p>
						</div>	
					</div>
				</div>
			</div>	
			
		</div>
	)
};

export default Experience;