import React, { Fragment } from 'react'

export const Foods = ({
  match
}) => {
  return (
   <Fragment>
     food index
     <p>
       resturant_id:{match.params.restaurantsId}
     </p>
   </Fragment>
  )
}


