import React from 'react';

type Inputs = {
    isChecked: any;
    handleCheckBox: any;
};

const RememberDevice = ({ isChecked, handleCheckBox }: Inputs) => {

    return(
        <div className="RememberDeviceDiv">
            <input id="RememberDeviceCheckbox" checked={isChecked} type="checkbox" onChange={handleCheckBox}/>
            <label htmlFor="RememberDeviceCheckbox"  className="RememberDevice">Remember this device</label>
        </div>
    )
}

export default RememberDevice;