import React from 'react';

import {
  CardContainer,
} from './card-elements';

const Card = ({ children, colors }) => {
  return (
    <CardContainer color={colors.tumble}>
      {children}
    </CardContainer>
  )
}

export default Card;