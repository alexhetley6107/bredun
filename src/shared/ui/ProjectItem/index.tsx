import { ProjectType } from '@/shared/models';
import React, { FC } from 'react';

export const ProjectItem: FC<ProjectType> = ({ title }) => {
  return <div>{title}</div>;
};
