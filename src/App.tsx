import "./App.css";

function App() {

  const name = "Bharath";

  let printName: (name: string) => void;

  const greetUser = (name: string) : unknown => {
    alert(`Hello ${name}`);
    return;
  }
  return (
    <div className="container mx-auto text-lg">
      <p className="font-bold text-center">Hello Todist, {name}</p>
      <div className="">
        {greetUser(name)}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla voluptas
        quia, quas labore totam recusandae veritatis magnam enim velit fugit
        beatae similique? Exercitationem optio modi esse blanditiis nobis.
        Dolorum, ducimus!
      </div>
    </div>
  );
}

export default App;
