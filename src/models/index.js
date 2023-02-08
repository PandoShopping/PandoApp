// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ListingCategory = {
  "CLOTHING": "CLOTHING",
  "OTHER": "OTHER"
};

const ListingSize = {
  "SMALL": "SMALL",
  "MEDIUM": "MEDIUM",
  "LARGE": "LARGE",
  "XL": "XL",
  "XS": "XS"
};

const ListingGender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};

const { Todo, Listing } = initSchema(schema);

export {
  Todo,
  Listing,
  ListingCategory,
  ListingSize,
  ListingGender
};