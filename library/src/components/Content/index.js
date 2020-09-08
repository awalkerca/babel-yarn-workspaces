import React from 'react';
import styles from './content.scss';

export function Content ({ text }) {
    return (
        <p className="content">
            {text}
        </p>
    )
}