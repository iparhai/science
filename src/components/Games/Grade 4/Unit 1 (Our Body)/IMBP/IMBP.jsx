import React, { useEffect, useRef } from 'react'
import './IMBP.css'
import human from './assets/humanAnatomy.png'
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { DndProvider } from 'react-dnd-multi-backend';
import { useDrop } from "react-dnd";

import problemGenerator from './problemGenerator';
import Drag from './Drag';
import Main from './Main';


export default function IMBP(props) {

    return (
        <div>
            <DndProvider options={HTML5toTouch}>
                <Main props={props} />
            </DndProvider>
        </div>
    )
}
