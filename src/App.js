import './App.css';


function App() {
  const data =[{"id":"1","name":"test1"},{"id":"2","name":"test2"}];
  const listItems = data.map((d) => <li key={d.id}>{d.name}</li>);
  
  
  return (
    <>
        <div className="container">
        <div className='container'>It is first demo app</div>
        <div>{listItems }</div>
        </div>     
    </>
  );
}

export default App;
