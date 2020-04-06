import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => (
    <div className={styles.ColorPicker}>
        {props.colors.map((color,idx) =>
            <button 
                className={styles.button} 
                key={color}
                style={{
                    backgroundColor: props.selColorIdx === idx ? 'white' : color,
                    borderColor: color
                }}
                onClick={() => props.handleColorSelection(idx)}
            />
        )}
    </div>
);

export default ColorPicker;