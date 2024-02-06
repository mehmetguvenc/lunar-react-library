import React from 'react';

interface TabProps {
    headers: string[]
}

export const Tab = (props: TabProps) => {
    return (
        <div className="tab">
            <div className="tab-header">
                {props.headers.map(x => { return (<div className="tab-header-item">{x}</div>) })}
            </div>
        </div>
    )
}

export default Tab;