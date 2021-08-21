export default (a, b) => {
	const arrA = a.split(' ')
	const arrB = b.split(' ')

	let match = false

	arrA.forEach(wordA => {
		const regex = new RegExp(wordA, 'ig')

		arrB.forEach(wordB => {
			if (regex.test(wordB)) {
				match = true
			}
		})
	})

	return match
}
