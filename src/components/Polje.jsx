import React from 'react';

function Polje() {
	return (
		<div>
			<div className="form-group">
				<label for="formGroupExampleInput">Email</label>
				<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email" />
			</div>
			<div className="form-group">
				<label for="formGroupExampleInput2">Lozinka</label>
				<input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Lozinka" />
			</div>
		</div>
	);
}

export default Polje;
