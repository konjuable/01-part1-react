const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <section>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born {bornYear()}.</p>
    </section>
  );
};
const Time = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <section>
      <p>
        Hello World, it is
        <span> {now.toLocaleDateString()} today,</span>
        <span> and time is now {now.toLocaleTimeString()}</span>
      </p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </section>
  );
};
const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <p>2024 &copy; Juha Konttinen</p>
    </footer>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 10;
  return (
    <>
      <h1>Päivämäärä</h1>
      <Time />
      <hr></hr>
      <h1>Greetings</h1>

      <Hello name="Maija" age={26 + 10} />
      <Hello name={nimi} age={ika} />

      <hr></hr>
      <h1>Komponenttien apufunktiot</h1>
      <Footer />
    </>
  );
};

export default App;
