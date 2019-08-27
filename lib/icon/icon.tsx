import React, {FunctionComponent} from 'react';
import './importAllIcons'
interface Props {
    name: string
}

const Icon: FunctionComponent<Props> = (Props) => {
    return (
        <span>
           <svg>
              <use xlinkHref={`#${Props.name}`}/>
           </svg>
        </span>
    );
};

export default Icon;
