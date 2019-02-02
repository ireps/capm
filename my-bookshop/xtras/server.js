// standard express server.js setup...
const express = require('express'), app = express()
app.use(express.static('app'))
app.use((req, res, next) => { console.log(req.method, req.url); next() })
app.get('/', (req, res) => res.send(index.html))  //> if there is none in ./app

const { PORT = 4004 } = process.env
app.listen(PORT, () => (
	console.log(`\n[cds] - server listens at http://localhost:${PORT}`)
))

// bootstrap cds services...
const cds = require('../index')
app.serve = (all) => Promise.resolve(console.time(`[cds] - launched in`))
	.then(() => cds.env.requires.db && cds.connect())
	.then(() => cds.serve(all).in(app)
		.on('add', _logService)
		.on('done', _logModels)
	).then(() => console.timeEnd(`[cds] - launched in`))


// ------------------------------------------------------------------

/** Log each constructed service */
function _logService({ name, path, impl }) {
	console.log(`[cds] - serving ${name} at ${path}${impl ? ' - impl: ' + _local(impl._source) : ''}`)
}

/** Log all added services */
function _logModels({ _sources }) {
	console.log(`[cds] - service definitions loaded from:\n\n  ${_sources.map(_local).join('\n  ')}\n`)
}

/** Helper: in-place index.html */
const index = {
	get html() {

		if (index._html) return index._html

		let [, cmd] = process.argv
		if (!cmd || cmd.endsWith('cds')) cmd = 'cds'
		if (!cmd || cmd.endsWith('cds/bin/run.js')) cmd = 'cds run in ' + process.cwd()

		//		< body style = "margin: 44px; font-family: xChalkboard, sans-serif" >
		return index._html = `
    <html>
        <body link="white" vlink="green" alink="green" style="margin: 44px; font-family: Helvetica, sans-serif; background: black;color: white;>
<h1 style="font-weight:200"><svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   version="1.1"
   width="100"
   height="50"
   viewBox="-1.33278 -1.33278 92.44656 47.09156"
   id="svg5220">
  <defs
     id="defs5222">
    <linearGradient
       x1="0"
       y1="0"
       x2="0.957213"
       y2="2.61726e-16"
       id="linearGradient3048"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0,-37.1015,37.1015,0,69.9034,70.5065)"
       spreadMethod="pad">
      <stop
         id="stop3050"
         style="stop-color:#00b8f1;stop-opacity:1"
         offset="0" />
      <stop
         id="stop3052"
         style="stop-color:#06a5e5;stop-opacity:1"
         offset="0.219864" />
      <stop
         id="stop3054"
         style="stop-color:#06a5e5;stop-opacity:1"
         offset="0.219864" />
      <stop
         id="stop3056"
         style="stop-color:#1870c5;stop-opacity:1"
         offset="0.794312" />
      <stop
         id="stop3058"
         style="stop-color:#1d61bc;stop-opacity:1"
         offset="1" />
    </linearGradient>
    <linearGradient
       x1="0"
       y1="0"
       x2="0.957213"
       y2="2.61726e-16"
       id="linearGradient5318"
       xlink:href="#linearGradient3048"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0,-37.1015,37.1015,0,69.9034,70.5065)"
       spreadMethod="pad" />
    <linearGradient
       x1="0"
       y1="0"
       x2="0.957213"
       y2="2.61726e-16"
       id="linearGradient5323"
       xlink:href="#linearGradient3048"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0,-37.1015,37.1015,0,69.9034,70.5065)"
       spreadMethod="pad" />
    <linearGradient
       x1="0"
       y1="0"
       x2="0.957213"
       y2="2.61726e-16"
       id="linearGradient5331"
       xlink:href="#linearGradient3048"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0,-37.1015,37.1015,0,69.9034,70.5065)"
       spreadMethod="pad" />
    <linearGradient
       x1="0"
       y1="0"
       x2="0.957213"
       y2="2.61726e-16"
       id="linearGradient5334"
       xlink:href="#linearGradient3048"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0,46.3769,46.3769,0,44.859,0.024)"
       spreadMethod="pad" />
  </defs>
  <path
     d="m 0,0 0,44.415 45.371,0 44.41,-44.41 0,0 -89.781,0 z"
     id="path3060"
     style="fill:url(#linearGradient5334);fill-opacity:1;stroke:none" />
  <path
     d="m 57.4688,39.875 0,3.3125 0.5,0 0,-1.4375 0.5624,0 0.9063,1.4375 0.5625,0 -0.9688,-1.4375 c 0.4841,-0.06 0.875,-0.3415 0.875,-0.9375 0,-0.653 -0.3996,-0.9375 -1.1874,-0.9375 l -1.25,0 z m 0.5,0.4375 0.6874,0 c 0.3381,0 0.7188,0.055 0.7188,0.4687 0,0.5171 -0.3855,0.5626 -0.8125,0.5626 l -0.5937,0 0,-1.0313 z m 0.625,-1.6563 c -1.586,0 -2.9376,1.2221 -2.9376,2.875 0,1.665 1.3515,2.9063 2.9376,2.9063 1.564,0 2.875,-1.2411 2.875,-2.9063 0,-1.6529 -1.311,-2.875 -2.875,-2.875 z m 0,0.4688 c 1.2939,0 2.3124,1.0453 2.3124,2.4062 0,1.3842 -1.0185,2.4063 -2.3124,2.4063 -1.3161,0 -2.375,-1.0221 -2.375,-2.4063 0,-1.3609 1.0589,-2.4062 2.375,-2.4062 z"
     id="path5384"
     style="fill:#1870c5;fill-opacity:1;fill-rule:nonzero;stroke:none" />
  <path
     d="m 53.797,21.252 -1.946,0 0,-7.117 1.946,0 c 2.598,0 4.666,0.856 4.666,3.513 0,2.744 -2.068,3.604 -4.666,3.604 M 32.852,26.34 c -1.03,0 -1.996,-0.188 -2.831,-0.502 l 2.803,-8.84 0.06,0 2.745,8.864 c -0.827,0.296 -1.768,0.478 -2.774,0.478 m 20.426,-17.987 -8.837,0 0,21.013 -7.72,-21.013 -7.652,0 -6.596,17.568 c -0.697,-4.428 -5.284,-5.961 -8.89,-7.104 -2.377,-0.765 -4.907,-1.889 -4.884,-3.134 0.02,-1.018 1.359,-1.962 4,-1.821 1.78,0.09 3.35,0.234 6.467,1.741 l 3.07,-5.348 C 19.395,8.802 15.454,7.89 12.23,7.883 l -0.02,0 c -3.761,0 -6.895,1.226 -8.839,3.233 -1.351,1.404 -2.082,3.18 -2.115,5.157 -0.05,2.708 0.947,4.63 3.034,6.167 1.766,1.294 4.019,2.127 6.009,2.751 2.455,0.757 4.459,1.418 4.436,2.827 -0.02,0.513 -0.211,0.994 -0.582,1.374 -0.611,0.635 -1.55,0.87 -2.849,0.899 -2.504,0.05 -4.361,-0.34 -7.319,-2.088 l -2.729,5.423 c 2.949,1.679 6.44,2.661 10.003,2.661 l 0.461,0 c 3.1,-0.06 5.604,-0.945 7.605,-2.553 l 0.324,-0.283 -0.884,2.376 8.025,0 1.348,-4.099 c 1.41,0.477 3.016,0.745 4.716,0.745 1.659,0 3.224,-0.25 4.609,-0.706 l 1.296,4.06 13.094,0 0,-8.49 2.857,0 c 6.9,0 10.986,-3.512 10.986,-9.406 0,-6.56 -3.968,-9.569 -12.416,-9.569"
     id="path3100"
     style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" />
</svg></h1>
			<h1 style="font-weight:200">Welcome to <i>cds.services</i></h1>
            <p> These are the services and entities currently served through
            <br><i>${cmd} ${process.argv.slice(2).join(' ')}</i>...
            ${ cds.service.providers.map(service => {
			const srv = service.path
			return `
                <h3>
                    <a href="${srv}">${srv}</a>/
                    <a href="${srv}/$metadata">$metadata</a>
                </h3>
                <ul>
                    ${Object.keys(service.entities).map(e =>
				`\t\t\t\t<li><a href="${srv}/${e}">${e}</a></li>
                    `).join('')}
                </ul>`
		}).join('')}
        </body>
    </html>
    `
	}
}

const { relative } = require('path')
function _local(filename) { return relative('', filename) }

/* eslint no-console:off */
module.exports = app
if (!module.parent) app.serve(process.argv[2] || 'all')
