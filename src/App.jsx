const Hello = () => {
  return (
    <section>
      <hr></hr>
      <h1>Greetings</h1>

      <p>Hello world</p>
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

const App = () => {
  return (
    <>
      <Time />
      <Hello />
      <Hello />
      <Hello />
    </>
  );
};

export default App;
