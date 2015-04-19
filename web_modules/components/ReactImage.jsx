'use strict'


var ReactImage = React.createClass({
    render: function () {

        var html = '<image ' + Object.keys(this.props).map(function (k) {
                return k === 'src'
                    ? 'xlink:href="' + this.props[k] + '"'
                    : k + '="' + this.props[k] + '"'
            }, this).join(' ') + '/>'
        return (
            <g dangerouslySetInnerHTML={{__html: html}}></g>
        )
    }
})

module.exports = ReactImage
