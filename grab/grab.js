const
	entities = {
				Products:   {  tokens: 4 },
				Suppliers:  { tokens: 1 },
				Categories: {
					tokens: 1,
					fields: [
							{ label: 'ID'					, value: 'CategoryID'},
							{ label: 'name'			  , value: 'CategoryName'},
							{ label: 'description', value: 'Description'},
					]
				}
	},
	axios = require('axios'),
  fs = require('fs'),
	json2csv = require('json2csv').parse,

	buildurl = (entity, n) =>
			'http://localhost:8000/ENTITY-TOKEN'
			.replace(/ENTITY/, entity)
			.replace(/TOKEN/, n*20)

	range = x => [...Array(x).keys()],

	// is = (val, x) => x === val,
	is = val => x => x === val,
	onlyCategories = is('Categories'),

	grab = entity => axios
						.all(range(entities[entity].tokens).map(x => axios.get(buildurl(entity,x))))
						.then(xs => xs.reduce((a, x) => a.concat(x.data.value), []))

Object
	.keys(entities)
	.filter(onlyCategories)
	// .filter(is(Categories))
	.forEach(entity => grab(entity)
				// .then(xs => xs.length)
				.then(xs => json2csv(xs, { fields: entities[entity].fields }))
				// .then(JSON.stringify)
				// .then(console.log)
				.then(xs => fs.writeFileSync('data/' + entity + '.csv', xs))
	)
	 // .forEach(entity => console.log(grab(entity)))
//grab('Products')
//	.then(xs => xs.length)
//	.then(console.log)
