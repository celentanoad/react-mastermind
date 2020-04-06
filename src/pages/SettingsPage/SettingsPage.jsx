import React from 'react';
import {Link} from 'react-router-dom';

const SettingsPage = (props) => {
    
    function handleDifficultyChange(level) {
        props.handleDifficultyChange(level);
        props.history.push('/');
    }
    
    const colorKeys = Object.keys(props.colorsLookup);

    const levels = colorKeys.map(level => (
        <div key={level}>
            <button 
                className='btn btn-default'
                disabled={level === props.difficulty}
                onClick={() => handleDifficultyChange(level)}
            >Level</button>
            <div>
                {props.colorsLookup[level].map(color =>
                    <div style={{backgroundColor: color}}
                    key={color} />)}
            </div>
        </div>
    ))

    return (
        //Always has to be wrapped in a div
        //otherwise it will not work!
        <div>
            <Link to='/'>Back</Link>
            <h1>Change Difficulty Settings</h1>
            <div>
                {levels}
            </div>
        </div>
    )
}


export default SettingsPage;