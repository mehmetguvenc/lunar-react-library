import React, { useState } from 'react';
import './style.scss';

export interface TabProps {
    items: { title: string, content: string }[],
    isLarge: boolean
}

const Tab = ({
    items = [], isLarge = false,
    ...props }: TabProps) => {

    const [index, setIndex] = useState<number>(0)
    return (
        <div className="tab">
            <div className="tab-head">
                {items.map((x, i) => {
                    return <div className="tab-header" onClick={() => setIndex(i)}>{x.title}</div>
                })}
            </div>
            <div className="tab-body">
                <div className="tab-content">
                    {items[index].content}
                </div>
            </div>
        </div>
    )
}

export default Tab;