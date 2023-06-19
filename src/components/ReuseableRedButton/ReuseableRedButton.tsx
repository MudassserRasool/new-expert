import React from 'react';
import Style from './ReuseableRedButton.module.css';

const ReuseableRedButton = () => {
  return (
    <div>
      <div className={Style.buttonBackground}>
        <p className={Style.buttonText}>Create New Role</p>
      </div>
    </div>
  )
}

export default ReuseableRedButton