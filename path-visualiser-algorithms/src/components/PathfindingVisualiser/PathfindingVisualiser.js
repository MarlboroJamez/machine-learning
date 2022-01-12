import React, { useEffect, useState } from 'react'
import Node from './Node/Node'

function PathfindingVisualiser() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const node = []
        for (let row = 0; row < 20; row++){
            const currentRow = []
            for (let col = 0; col < 50; col++){
                const currentNode = {
                    col,
                    row,
                    isStart: row === 10 && col === 5,
                    isFinish: row === 10 && col === 45
                }
                currentRow.push(currentNode);
            }
            node.push(currentRow);
        }
        setNodes(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[nodes])

    return (
        <div className="p-6">
            {nodes.map((row, i) => {
                return (
                    <div key={i}>
                        {row.map((node, idx) => {
                        const {isStart, isFinish} = node;
                        return <Node 
                            key={idx} 
                            isFinish={isFinish} 
                            isStart={isStart} 
                            test={'foo'}
                            />
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default PathfindingVisualiser
