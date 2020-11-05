import * as Types from '../gqltypes';

import { EventItemFragment } from '../common-queries.generated';
export type GetEventQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetEventQuery = (
  { __typename?: 'Query' }
  & { event?: Types.Maybe<(
    { __typename?: 'Event' }
    & EventItemFragment
  )> }
);
