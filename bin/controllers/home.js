/* hepl-ria/meet-express
 *
 * /bin/controllers/home.js - Server main page
 *
 * coded by Mucht
 * started at 23/09/2016
 */

"use strict";

var Buddies = require( "../models/buddies" );

module.exports = function( oRequest, oResponse ){
    Buddies.get( function( oError, aBuddies ){
        if ( oError ) {
            console.log( 'Error: ', oError );
            // TODO: Manage errors!
        }

        // 1er param = fichier à aller chercher.
        // 2e param = variables qu'on transmet au template.
        // pas besoin de mettre le ".hbs"
        oResponse.render( "index.hbs", {
            "buddies": aBuddies || []
        } );
    } )
};
