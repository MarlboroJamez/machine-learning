import React, { useEffect, useState } from 'react'
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort'
import './sortVisualiser.css'

function SortVisualiser() {
    const [ar, setAr] = useState([])

    const ANIMATION_SPEED_MS = 1;

    const NUMBER_OF_ARRAY_BARS = 310;

    const PRIMARY_COLOR = 'turquoise';

    const SECONDARY_COLOR = 'red';

    useEffect(() => {
        resetArray()
    }, [])

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        setAr(array)
    }

    //Sorting sortingAlgorithms
    const mergeSort = () => {
        const animations = getMergeSortAnimations(ar);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    return (
        <div>
            <button onClick={resetArray}>Reset Array</button>
            <button onClick={mergeSort}>Merge Sort</button>
            <button>Bubble Sort</button>

            <div className="array-container">
                {ar.map((value, idx) => (
                <div
                    className="array-bar"
                    key={idx}
                    style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                }}></div>
            ))}
            </div>
        </div>
    )
}

export default SortVisualiser

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}