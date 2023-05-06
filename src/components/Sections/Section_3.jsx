import React from "react";
import Dashboard from '../Cards/Dashboard.jsx';
import Popcoin from '../Cards/Popcoin.jsx';
import Vespera from '../Cards/Vespera.jsx';



const Section_3 = () => {
	return (
		<div className="section_3">
			<div className='row'>
				

				<div className="col-7-sm col-3-md col-3-lg">
					<Dashboard />
				</div>
				<div className="col-7-sm col-3-md col-3-lg">
					<Vespera />
				</div>
				<div className="col-7-sm col-4-md col-4-lg">
					<Popcoin />
				</div>

			</div>
		</div>
	);
};

export default Section_3;