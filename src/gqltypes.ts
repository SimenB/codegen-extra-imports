export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Annotation = {
  __typename?: 'Annotation';
  id: Scalars['ID'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
  annotation?: Maybe<Annotation>;
  receipts: Array<Receipt>;
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  receipt?: Maybe<Receipt>;
  receipts: Array<Receipt>;
};

export type Receipt = {
  __typename?: 'Receipt';
  id: Scalars['ID'];
};
