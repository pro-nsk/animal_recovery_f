import { useEffect, useState } from 'react'
import { api } from '../api/api'
import { StorageKey } from './storage'

export function isAuthenticated() {
    if (localStorage.getItem(StorageKey.Authenticated) === 'true') {
        return true
    }
    return false
}

export function isEnter(e) {
    if (e.key == 'Enter') {
        return true
    }
    return false
}

export const SITE_NAME = 'База Реабилитации Животных НСО Кольцово'

export function stripHtml(html) {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    return tempDiv.textContent || tempDiv.innerText || ''
}

export function backToTop() {
    const navBar = document.getElementById('top-bar')
    navBar && navBar.scrollIntoView()
}

export enum Paragraphs {
    pre = 'pre',
    about = 'about',
    operations = 'operations',
    partners = 'partners',
    menuRequisites = 'menu-requisites'
}

export function goToElementId(elementId) {
    const targetElement = document.getElementById(elementId)
    if (targetElement) {
        targetElement.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
}

export async function fetchOperationsCount() {
    try {
        const resp = await api.counterGet()
        return resp.counter
    } catch (error) {
        //
    }
}

export function fetchOperationsCountHook() {
    const [counterOP, setCounterOP] = useState(0)

    useEffect(() => {
        fetchOperationsCount().then(counter => setCounterOP(counter))
    }, [])

    return counterOP
}