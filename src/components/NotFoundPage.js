/* Link is imported from react-router and it is better than <a> because it is already configured
to preventDefault load which prevents the browser from trying to connect server. we are client side routing so we don't need server side hit
prop -> to="this is like the href in <a>
*/
import React from 'react'; 
import {Link} from 'react-router-dom'; 


export const NotFoundPage = () => (
    <div>
        404 Wrong page doooood <Link to="/">Try this one</Link>
    </div>
)