import React from 'react'

// router
import { Switch, Route } from 'react-router-dom'

// views
import Search from '@views/search'
import Friends from '@views/friends'
import PublishPost from '@views/create-post'
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
				<Route path="/create-post">
					<PublishPost />
				</Route>
				<Route path="/friends">
					<Friends />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
			</Switch>
		</div>
	)
}
