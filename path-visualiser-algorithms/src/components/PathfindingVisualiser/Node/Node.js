import React from 'react'
import './Node.css'

function Node({isFinish, isStart}) {
    const extraClassName = isFinish ? 'node-finish': isStart ? 'node-start' :'';

    return (
        <div className={`w-6 h-6 border border-gray-400 inline-block ${extraClassName}`}/>
    )
}

export default Node

export const DEFAULT_NODE = {
    row: 0,
    col: 0,
}