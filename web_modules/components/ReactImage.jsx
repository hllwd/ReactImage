'use strict'


var ReactImage = React.createClass({
    render: function(){

        var html = '<image ' + Object.keys(this.props).map(function(k){
            if(k === 'src'){
                return 'xlink:href="' + this.props[k] + '"'
            }
            return k + '="' + this.props[k] + '"'
        }, this).join(' ') + '/>'

        return (
            <g dangerouslySetInnerHTML={{__html: html}}></g>
        )
    }
})

module.exports = ReactImage
