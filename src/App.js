import Confirm from "./Confirm";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";

function App() {
  return (
    <div className="maincard">
      <div className="imagediv">
        <img className="image1" src={image1} />
        <img className="image2" src={image2} />
      </div>
      <Confirm />
    </div>
  );
}

export default App;
