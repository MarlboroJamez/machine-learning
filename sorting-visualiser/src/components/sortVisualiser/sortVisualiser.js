import React, { useEffect, useState } from 'react'
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort'
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubbleSort'
import './sortVisualiser.css'

function SortVisualiser() {
    const [ar, setAr] = useState([]);
    const [numberBars, setNumberBars] = useState(310);
    const [animationSpeed, setAnimationSpeed] = useState(3);

    const ANIMATION_SPEED_MS = animationSpeed;

    const NUMBER_OF_ARRAY_BARS = numberBars;

    const PRIMARY_COLOR = 'turquoise';

    const SECONDARY_COLOR = 'green';

    useEffect(() => {
        resetArray()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberBars, animationSpeed])

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

    const bubbleSort = () => {
        const animations = getBubbleSortAnimations(ar);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 <= 1;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
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
            <div className="toolbar-container">
                <div className="toolbar-inputs">
                    <input value={animationSpeed} onChange={(e) => setAnimationSpeed(e.target.value)} type="text" placeholder="Animation Speed"/>
                    <input value={numberBars} onChange={(e) => setNumberBars(e.target.value)} type="text" placeholder="Number of Bars"/>
                </div>
                <div className="sort-toolbar">
                    <button id="reset-array" onClick={resetArray}>Generate Array</button>
                    <div className="sort-actions">
                        <button onClick={mergeSort}>Merge Sort</button>
                        <button onClick={bubbleSort}>Bubble Sort</button>
                        <button>Quick Sort</button>
                        <button>Cocktail Sort</button>
                        <button>Selection Sort</button>
                        <button>Comb Sort</button>
                        <button>Shell Sort</button>
                        <button>Strand Sort</button>
                    </div>
                </div>
            </div>

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
