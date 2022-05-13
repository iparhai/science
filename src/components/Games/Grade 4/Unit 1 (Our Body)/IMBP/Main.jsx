import React, { useEffect, useRef } from 'react'
import { useDrop } from "react-dnd";
import human from './assets/humanAnatomy.png'
import problemGenerator from './problemGenerator';
import Drag from './Drag';
export default function Main({ props }) {
    const image = useRef()
    const [options, setOptions] = React.useState(problemGenerator.generateOptions())
    const [name, setName] = React.useState(null)
    const positions = problemGenerator.positons
    const [randPosition, setRandomPosition] = React.useState(parseInt(Math.random() * positions.length))
    const [{ isOver }, dropRef] = useDrop({
        accept: 'part',
        drop: (item) => {
            setName(item.name)

        }
    });
    const handleClick = () => {
        console.log(props)
        if (positions[randPosition].toLocaleLowerCase() == name.toLocaleLowerCase()) {
            props.onCorrectAnswer()
        }
        else {
            props.onWrongAnswer()
        }
    }
    const drawOptions = () => {
        return (
            <div style={{ display: 'flex', width: "60vw", justifyContent: "space-around" }}>
                {options.map(item => {
                    return (
                        <Drag name={item} />
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            <div className='humanContainer'>
                <img ref={image} src={human} className="human" />
                <div >
                    {positions.map((itm, idx) => {
                        return (
                            <div className={'box b' + (idx + 1) + " " + (name ? 'dragBox' : '')} ref={dropRef} c>
                                {name}
                            </div>
                        )
                    })[randPosition]}
                </div>
            </div>
            <div className='options' >
                {drawOptions()}
            </div>
            <div className='checkAnswer'>
                <i className='fa fa-paper-plane' onClick={handleClick}></i>
            </div>
        </div>
    )
}
