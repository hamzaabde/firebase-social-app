import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default ({ to }) => {
	const history = useHistory()

	function delayAndGo(e) {
		e.preventDefault()

		setTimeout(() => history.push(to), 3000)
	}

	return <Link to={to} onClick={delayAndGo} />
}
