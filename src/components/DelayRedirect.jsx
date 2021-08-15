import React, { useState, useEffect } from 'react'

// router
import { Redirect } from 'react-router-dom'

export default ({ delay, ...props }) => {
	const [timeToRedirect, setTimeToRedirect] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setTimeToRedirect(true)
		}, delay)
		return () => clearTimeout(timeout)
	}, [delay])

	return timeToRedirect ? <Redirect {...props} /> : null
}
