import React from 'react';

import { BaseCheckbox, Box } from '@strapi/design-system';

import { useFolderCard } from '../contexts/FolderCard';

export const FolderCardCheckbox = (props) => {
  const { id } = useFolderCard();

  return (
    <Box position="relative" zIndex={2}>
      <BaseCheckbox aria-labelledby={`${id}-title`} {...props} />
    </Box>
  );
};
