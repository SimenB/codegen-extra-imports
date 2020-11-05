import * as Types from './gqltypes';

export type AnnotationItemFragment = (
  { __typename?: 'Annotation' }
  & Pick<Types.Annotation, 'id'>
);

export type ReceiptItemFragment = (
  { __typename?: 'Receipt' }
  & Pick<Types.Receipt, 'id'>
);

export type EventItemFragment = (
  { __typename?: 'Event' }
  & Pick<Types.Event, 'id'>
  & { receipts: Array<(
    { __typename?: 'Receipt' }
    & ReceiptItemFragment
  )> }
);
