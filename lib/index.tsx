import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/button';
import Icon from './icon/icon';

const handlerClick = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    console.log(event.target)
}

ReactDOM.render(
    <div>
        <Button/>
        <Icon name="add" onClick={handlerClick} onMouseEnter={()=>{console.log('mouseEnter')}}/>
        <Icon name="add" className="test-icon test-icon-2" onClick={handlerClick} onMouseEnter={()=>{console.log('mouseEnter')}}/>
    </div>,
    document.getElementById('root')
);
