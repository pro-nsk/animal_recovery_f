import Tick from '@pqina/flip'
import '@pqina/flip/dist/flip.min.css'
import * as React from 'react'
import { useEffect } from 'react'
import '../css/flipClock.css'
import { api } from '../api/api'

// const OPERATIONS_COUNT = 1521

const FlipCounter = () => {

    let counterOP
    let tickInstance
    const tickRef = React.createRef<HTMLDivElement>()

    const getOperationsCount = async () => {
        try {
            const resp = await api.counter('5f4f058d330e7c20807391df')
            counterOP = resp.counter
            // return await api.counterCreate()
        } catch (error) {
            //
        }
    }

    useEffect(() => {
        getOperationsCount()

        tickInstance = Tick.DOM.create(tickRef.current)

        const counter = document.getElementById('operations-counter')

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && entries[0].target === counter) {
                setTimeout(function () {
                    tickInstance.value = counterOP
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