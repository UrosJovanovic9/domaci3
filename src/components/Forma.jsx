import React from "react";

function Forma({ prijava }) {
  return (
    <div>
      <form className="forma">
        {prijava === "ne" ? (
          <>
            <h2 className="prijavaforma" for="forma">
              Registracija
            </h2>
            <div className="form-group">
              <label for="formGroupExampleInput">Ime</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Ime"
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Prezime</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Prezime"
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Email</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Lozinka</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Lozinka"
              />
            </div>
            <div className="btnForma">
              <button className="dugme1" type="submit">
                Registracija
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="prijavaforma" for="forma">
              Prijava
            </h2>

            <div className="form-group">
              <label for="formGroupExampleInput">Email</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Lozinka</label>
              <input
                type="password"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Lozinka"
              />
            </div>
            <div className="btnForma">
              <button className="dugme1" type="submit">
                Prijava
              </button>
            </div>
            <div className="btnForma1">
              <button className="dugme2" type="submit">
                Zaboravljena lozinka?
              </button>
            </div>
            <div className="btnForma1">
              <button className="dugme3" type="submit">
                Još uvek niste registrovani?
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Forma;
