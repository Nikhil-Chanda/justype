import React, { useEffect } from 'react';
import Graph from './Graph';
import { auth, db } from '../firebaseConfig';

const Stats = ({
    wpm,
    accuracy,
    correctChars,
    incorrectChars,
    missedChars,
    extraChars,
    graphData
}) => {
    let timeSet = new Set()
    const newGraph = graphData.filter(i => {
        if (!timeSet.has(i[0])) {
            timeSet.add(i[0]);
            return i;
        }
    })

    const pushDataToDB = () => {
        if (isNaN(accuracy)) {
            alert("invalid test");
            return;
        }
        const resultsRef = db.collection('Results');
        const {uid} = auth.currentUser;
        resultsRef.add({
            wpm: wpm,
            accuracy: accuracy,
            timeStamp: new Date(),
            characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
            userId: uid,
        }).then((res) => {
            alert("Data saved");
        }).catch((err) => {
            alert(err);
        })
    }

    useEffect(() => {
        if (auth.currentUser) {
            pushDataToDB();
        }
        else {
            alert("Login to save results");
        }
    })

    return (
        <div className="stats-box">
            <div className="left-stats">
                <div className='title'>WPM</div>
                <div className='subtitle'>{wpm}</div>
                <div className='title'>Accuracy</div>
                <div className='subtitle'>{accuracy}</div>
                <div className='title'>Characters</div>
                <div className='subtitle'>{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
            </div>
            <div className='right-stats'>
                <Graph graphData={newGraph}/>
            </div>
        </div>
    )
}

export default Stats
