import { FC } from 'react';
interface IRoutes {
  [index: string]: {
    path: string;
    element: FC;
  };
}

export type { IRoutes };
