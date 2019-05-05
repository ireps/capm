const
	entities = {
		Products: {
			tokens: 4,
			fields: [
				{ label: 'ID', value: 'ProductID' },
				{ label: 'name', value: 'ProductName' },
				{ label: 'unitquantity', value: 'QuantityPerUnit' },
				{ label: 'unitprice', value: 'UnitPrice' },
				{ label: 'unitsinstock', value: 'UnitsInStock' },
				{ label: 'unitsonorder', value: 'UnitsOnOrder' },
				{ label: 'reorderlevel', value: 'ReorderLevel' },
				{ label: 'discontinued', value: 'Discontinued' },
				{ label: 'supplier_ID', value: 'SupplierID' },
				{ label: 'category_ID', value: 'CategoryID' },
			]
		},
		Suppliers: {
			tokens: 1,
			fields: [
				{ label: 'ID', value: 'SupplierID' },
				{ label: 'name', value: 'CompanyName' },
				{ label: 'country', value: 'Country' },
			]
		},
		Categories: {
			tokens: 1,
			fields: [
				{ label: 'ID', value: 'CategoryID' },
				{ label: 'name', value: 'CategoryName' },
				{ label: 'description', value: 'Description' },
			]
		}
	},
	axios = require('axios'),
	fs = require('fs'),
	json2csv = require('json2csv').parse,

	buildurl = (entity, n) =>
		// 'http://localhost:8000/ENTITY-TOKEN'
		'https://services.odata.org/V3/Northwind/Northwind.svc/ENTITY?$format=json&$skiptoken=TOKEN'
			.replace(/ENTITY/, entity)
			.replace(/TOKEN/, n * 20),

	range = x => [...Array(x).keys()],

	// is = (val, x) => x === val,
	is = val => x => x === val,
	onlyCategories = is('Categories'),

	grab = entity => axios
		.all(range(entities[entity].tokens).map(x => axios.get(buildurl(entity, x))))
		.then(xs => xs.reduce((a, x) => a.concat(x.data.value), []))

Object
	.keys(entities)
	// .filter(onlyCategories)
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
