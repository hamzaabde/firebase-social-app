import React from 'react'

// hooks
import usePosts from '@hooks/usePosts'

// components
import Post from './Post'

export default ({ children }) => {
	const { posts, error } = usePosts()

	return (
		<div className="w-100">
			<div className="py-2 d-flex flex-column align-items-center bg-light w-100">
				{posts && posts.map(post => <Post key={post.postID} post={post} />)}
			</div>
		</div>
	)
}
