import logo from './logo.svg';
import './App.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function App() {
    var size = 5;
  const ll = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
  const llItems = ll.map((item) => (
      <div className="m-t-20 my-progress-box" id={`my-progress-box-${item}`} key={item}>
        <div className="d-flex no-block align-items-center">
          <span style={{fontSize: `${size * 13}px`}}>{item}%</span>
        </div>
        <div className="progress" style={{height: `${size * 15}px`, borderRadius: "30px"}}>
            <div className={`progress-bar ${item <= 20 ? "bg-1" : item < 50 ? "bg-2" : "bg-3"}`} role="progressbar" style={{width: `${item}%`}} aria-valuenow="10"
                 aria-valuemin="0" aria-valuemax="100"/>
        </div>
      </div>));

  return (
    <div className="App">
      <div style={{width: `${size * 400}px`, margin: `${size * 20}px`}}>
        {llItems}
      </div>
      <button onClick={() => clickButton()}>
        Save
      </button>
    </div>
  );
}

function clickButton() {
    const ll = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
    for (let item of ll) {
        createImage(item).catch(error =>console.error('oops, something went wrong!', error));
    }
}

async function createImage(item) {
    let img = await domtoimage.toPng(document.getElementById(`my-progress-box-${item}`), {quality: 1})
    window.saveAs(img, `my-progress-box-${item}.png`);
}


export default App;
