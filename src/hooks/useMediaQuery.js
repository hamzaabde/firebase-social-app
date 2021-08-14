import { useState, useEffect } from 'react'

export default query => {
    const mediaQuery = window.matchMedia(query)
    const [match, setMatch] = useState(mediaQuery.matches)

    useEffect(() => {
        const changeHandler = e => {
            setMatch(e.matches)
        }

        // add listener
        mediaQuery.addEventListener('change', changeHandler)

        // remove listener
        return () => mediaQuery.removeEventListener('change', changeHandler)
    }, [])

    return match
}
