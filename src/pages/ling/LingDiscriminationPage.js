import { React, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../../firebase-config";
import LingDiscrimination from "../../components/lingDiscrimination/lingDiscrimination";

//Page for Discrimination Game
function LingDiscriminationPage() {

  //Variables for progress, score, and sound states
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [soundsArr, setSoundsArr] = useState([[0, 0]]);

  //Handler to update progression and score
  const progressHandler = (newProgress, newScore) => {
    setProgress(newProgress);
    setScore(newScore);
  };

  useEffect(() => {
    //Retrieve sounds from db
    const getLingSounds = async function () {
      const docRef = doc(db, "audio", "ling"); // choose audio from database
      const docSnap = await getDoc(docRef);

      //Checking to make sure docs correctly grabbed
      if (docSnap.exists()) {
        //Set SoundsArr to sounds from db
        setSoundsArr(
          Object.keys(docSnap.data()).map((key) => [key, docSnap.data()[key]])
        );
      }
    };

    //Call func declared previously
    getLingSounds();
  }, []);
  return (
    <>
      {/* Calls LingDetection and passes required params. 
      If you'd like to edit Detection Game, please refer to -LingDiscrimination.js- */}
      <LingDiscrimination
        objKey={"lingActivitydiscrimination"}
        score={score}
        prog={progress}
        progressHandler={progressHandler}
        sound1={Math.floor(Math.random() * 2)}
        sound2={Math.floor(Math.random() * 2)}
        arr={soundsArr}
      />
    </>
  );
}

export default LingDiscriminationPage;
