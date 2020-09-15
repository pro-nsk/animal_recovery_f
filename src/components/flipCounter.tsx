import Tick from '@pqina/flip'
import '@pqina/flip/dist/flip.min.css'
import * as React from 'react'
import { useEffect } from 'react'
import '../css/flipClock.css'
import { fetchOperationsCount } from '../util/util'

const FlipCounter = () => {

    let counterOPP
    let tickInstance
    const tickRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        fetchOperationsCount().then(counter => counterOPP = counter)
        tickInstance = Tick.DOM.create(tickRef.current)

        const counter = document.getElementById('operations-counter')

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].target === counter) {
                // console.log(counterS)
                setTimeout(function () {
                    tickInstance.value = counterOPP
                }, 100)
            } else {
                //
            }
        }, { threshold: [0.5] })

        counter && observer.observe(counter)

        return () => {
            if (tickInstance) {
                Tick.DOM.destroy(tickRef.current)
            }
            counter && observer.unobserve(counter)
        }
    }, [])

    return (
        <div id="operations-counter" ref={tickRef} className="tick" data-value="0">
            <div data-repeat="true" aria-hidden="true" data-transform="arrive(50, 1) -> round -> pad('    ') -> split -> delay(rtl, 100, 150)">
                <span data-view="flip">Tick</span>
            </div>
        </div>
    )
}

export default FlipCounter