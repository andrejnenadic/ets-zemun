import Icon from "@/components/icon/icon";

export default function StudentsPageRegular() {
  return (
    <div className="regular-students-container">
      <h1>Učenici</h1>
      <p style={{marginBottom:'8rem'}}>
        Ovde možete pronaći termine otvorenih vrata i dopunske nastave, kao i
        rasporede pisanih provera za prvo polugodište. Ako dođe do izmena,
        ažurirani dokumenti biće objavljeni na ovoj stranici.

      </p>

      <h2>Termini</h2>
      <p>
        Otvorena vrata su termini u kojima nastavnici primaju roditelje i
        učenike radi razgovora o postignućima i ponašanju. Dopunska nastava je
        namenjena učenicima kojima je potrebna dodatna pomoć u savladavanju
        gradiva. Termini su različiti za prvu i drugu smenu.
      </p>
      <ul>
        <li>
          <a
            href="/documents/termini-otvorenih-vrata.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termini otvorenih vrata
            <Icon name="arrow-right" />
          </a>
        </li>
        <li>
          <a
            href="/documents/termini-dopunske-nastave.docx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termini dopunske nastave
            <Icon name="arrow-right" />
          </a>
        </li>
      </ul>

      <h2>Rasporedi pisanih provera</h2>
      <p>
        U rasporedima su navedeni predmet, vrsta provere (pismeni zadatak,
        kontrolni zadatak, test) i datum polaganja za svako odeljenje u prvom
        polugodištu školske 2026/27. godine.
      </p>
      <ul>
        <li>
          <a
            href="/documents/raspored-pisanih-provera-1-2-razred.xlsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raspored pisanih provera, 1. polugodište – 1. i 2. razred
            <Icon name="arrow-right" />
          </a>
        </li>
        <li>
          <a
            href="/documents/raspored-pisanih-provera-3-4-razred.xlsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raspored pisanih provera, 1. polugodište – 3. i 4. razred
            <Icon name="arrow-right" />
          </a>
        </li>
      </ul>
    </div>
  )
}
