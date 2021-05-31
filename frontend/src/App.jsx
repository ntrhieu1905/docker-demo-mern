function App() {
  return (
    <div className="App p-6 items-center justify-center">
      <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
      <p className="tracking-widest">React with Tailwindcss!</p>
      <p>{`API: ${process.env.REACT_APP_END_POINT}`}</p>
    </div>
  );
}

export default App;
