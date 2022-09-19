import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";
import { useEffect, useState } from "react";
import db from "./firebase";

function App() {
  const [pins, setPins] = useState([]);
  const makeAPICall = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const onSearchSubmit = (term) => {
    let promises = [];
    let searchedPins = [];
    promises.push(
      makeAPICall(term).then((res) => {
        let results = res.data.results;
        results.map((pin) => {
          searchedPins.push(pin);
        });
      })
    );
    Promise.all(promises).then(() => {
      setPins(searchedPins);
      console.log(searchedPins, "what is in searchedPins");
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    db.collection("terms").onSnapshot((snapshot) => {
      let snapShotData = snapshot.docs;

      if (snapShotData.length >= 10) {
        snapShotData = snapShotData.slice(
          snapShotData.length - 5,
          snapShotData.length
        );
      }
      snapShotData.map((doc) => {
        promises.push(
          makeAPICall(doc.data().term).then((res) => {
            let results = res.data.results;
            results.map((obj) => {
              pinData.push(obj);
            });
            pinData.sort((a, b) => {
              return 0.5 - Math.random();
            });
          })
        );
        Promise.all(promises).then(() => {
          setPins(pinData);
        });
      });
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <Header onSubmit={onSearchSubmit} />
      </div>
      <div className="app__body">
        <MainBoard pins={pins} />
      </div>
    </div>
  );
}

export default App;
