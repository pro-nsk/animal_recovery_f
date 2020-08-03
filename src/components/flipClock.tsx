import Tick from '@pqina/flip'
import '@pqina/flip/dist/flip.min.css'
import * as React from 'react'
import { useEffect } from 'react'
import '../css/flipClock.css'



const OPERATIONS_COUNT = 1521

const FlipClock = () => {

    const tickRef = React.createRef<HTMLDivElement>()
    let tickInstance



    useEffect(() => {



        tickInstance = Tick.DOM.create(tickRef.current)

        setTimeout(function () {
            tickInstance.value = OPERATIONS_COUNT
        }, 100)


        return () => {
            if (tickInstance) {
                Tick.DOM.destroy(tickRef.current)
            }
        }
    }, [])

    return (
        <div ref={tickRef} className="tick" data-value="0">
            <div data-repeat="true" aria-hidden="true" data-transform="arrive(50, 1) -> round -> pad('    ') -> split -> delay(rtl, 100, 150)">
                <span data-view="flip">Tick</span>
            </div>
        </div>
    )

}

export default FlipClock