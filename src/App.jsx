const App = () => {
  // console.log("Hello from komponentti");
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <>
      <p>
        Hello World, it is
        <span> {now.toLocaleDateString()} today,</span>
        <span> and time is now {now.toLocaleTimeString()}</span>
      </p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </>
  );
};

export default App;
