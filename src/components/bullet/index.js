import React from 'react'
import '../styles.css'

const BulletPoint = ({elem}) => {
    return (
        <li><span className="bulletpoint">{'</>'}</span><span className='body-text'>{elem}</span></li>
    );
}

export default BulletPoint