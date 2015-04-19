'use strict'

var ReactImage = React.createClass({
    render: function(){

        var image = {
            __html: '<image xlink:href="http://insolitebuzz.fr/wp-content/uploads/2014/10/test-all-the-things.jpg" />'
        }

        return (
            <g dangerouslySetInnerHTML={image}>
            </g>
        )
    }
})


module.exports = ReactImage
