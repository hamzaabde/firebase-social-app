import React from 'react'

// router
import { Switch, Route } from 'react-router-dom'

// views
import Profile from '@views/profile'
import Home from '@views/home'
import Login from '@views/login'
import Signup from '@views/signup'

export default () => {
	return (
		<div>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/profile/:uid">
					<Profile />
				</Route>
			</Switch>
		</div>
	)
}
