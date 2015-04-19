'use strict'

var ReactImage = require('./components/ReactImage')

React.render(
    <ReactImage src="http://insolitebuzz.fr/wp-content/uploads/2014/10/test-all-the-things.jpg" width="100%" height="100%"/>,
    document.querySelector('svg')
)