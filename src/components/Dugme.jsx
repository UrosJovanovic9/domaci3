import React from 'react';

function Dugme() {
	return (
		<div className="dugmeKomponenta">
			<button className="dugmeSortiranje" onClick={window['sortirajOpadajuce']}>
				Prikaži prvo najbolje ocenjene
			</button>
		</div>
	);
}

export default Dugme;
