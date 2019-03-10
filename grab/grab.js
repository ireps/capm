const
	entities = {
		Products: {
			tokens: 4
		},
		Suppliers: {
			tokens: 1
		},
		Categories: {
			tokens: 1
		}
	},
	axios = require('axios'),
	baseurl = 'http://localhost:8000/Products-',
	range = x => [...Array(x).keys()],
	grab = entity => axios
						.all(range(entities[entity].tokens + 1).map(x => axios.get(baseurl + (x*20))))
						.then(xs => xs.reduce((a, x) => a.concat(x.data.value), []))

Object
	.keys(entities)
	.forEach(entity => grab(entity).then(console.log))
// .forEach(entity => console.log(grab(entity)))
//grab('Products')
//	.then(xs => xs.length)
//	.then(console.log)
