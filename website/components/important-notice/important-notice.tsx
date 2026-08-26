import "./important-notice.scss";

function ImportantNotice() {
  return (
    <section className="important-notice">
      <div className="important-notice-announcement">
        <div>
          <h1>OBAVEŠTENJE</h1>
          <center>
            <p>
              Poštovani učenici i roditelji,
              Školska 2026/2027. godina počinje u utorak 1. septembra 2026. godine.
            </p>
          </center>
        </div>

        <div>
          <h2>Raspored smena:</h2>
          <ul>
            <li>
              Prvi i treći razred: <strong>pre podne</strong>
            </li>
            <li>
              Drugi i četvrti razred: <strong>poslepodne</strong>
            </li>
          </ul>
        </div>

        <p>Prijem, prozivka i upoznavanje prvaka sa odeljenjskim starešinama biće od 7:30 časova u dvorištu škole. Prva dva časa svi učenici će imati sa svojim odeljenjskim starešinama, a od 3. časa prema rasporedu časova.</p>

        <p>Budućim prvacima i ostalim učenicima Elektrotehničke škole Zemun želimo srećan početak školske godine i mnogo uspeha u učenju!</p>

        <p>Kolektiv i direktor Elektrotehničke škole Zemun!</p>
      </div>
    </section>
  );
}

export default ImportantNotice;
