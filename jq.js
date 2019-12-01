'use strict'

$(document).ready(function() {

    $('#lien1').click(function() {
        $('.masque').css({
            'color': '#FF0000',
            'display': 'block',

        })
    })

    $('#lien2').click(function() {
        $('.masque').css({
            'display': 'none',
        })
    })

});