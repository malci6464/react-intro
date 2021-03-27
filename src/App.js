import React from "react";

function Header() {
  return <h1>Bekkstagram</h1>;
}

function Image(props) {
  return <img src={props.src} alt={props.alt} className="image" />;
}

  //return <h1>Bekkstagram</h1>;
  //const MinKomponent = (props) => {
  //return React.createElement("h1", {}, "Hei verden");
  function App() {
    return (
      <div className="App">
        <Header />
        <div className="images">
          {images.map(image => (
            <Image key={image.id} src={image.url} alt={image.description} />
          ))}
        </div>
      </div>
    );
  }

export default App;
