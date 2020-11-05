export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  receipt?: Maybe<Receipt>;
  receipts: Array<Receipt>;
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  annotation?: Maybe<Annotation>;
  receipts: Array<Receipt>;
};

export type Annotation = {
  __typename?: 'Annotation';
  id: Scalars['ID'];
};

export type Receipt = {
  __typename?: 'Receipt';
  id: Scalars['ID'];
};
