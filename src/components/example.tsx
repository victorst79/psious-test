import React, {useState} from 'react';

export const Timeline = () => {
    const [dataText, setDataText] = useState<string>('Example');

    return (
        <div>
            <p>Timeline</p>
            <input type="string" 
                value={dataText}
                onChange={e => setDataText(e.target.value)}
            />
            <p>{dataText}</p>
        </div>       
    )
}