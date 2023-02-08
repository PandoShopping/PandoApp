import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ListingCategory {
  CLOTHING = "CLOTHING",
  OTHER = "OTHER"
}

export enum ListingSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XL = "XL",
  XS = "XS"
}

export enum ListingGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerListing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Listing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly category?: ListingCategory | keyof typeof ListingCategory | null;
  readonly price: number;
  readonly ogPrice?: number | null;
  readonly brand: string;
  readonly size?: ListingSize | keyof typeof ListingSize | null;
  readonly gender?: ListingGender | keyof typeof ListingGender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyListing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Listing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly category?: ListingCategory | keyof typeof ListingCategory | null;
  readonly price: number;
  readonly ogPrice?: number | null;
  readonly brand: string;
  readonly size?: ListingSize | keyof typeof ListingSize | null;
  readonly gender?: ListingGender | keyof typeof ListingGender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Listing = LazyLoading extends LazyLoadingDisabled ? EagerListing : LazyListing

export declare const Listing: (new (init: ModelInit<Listing>) => Listing) & {
  copyOf(source: Listing, mutator: (draft: MutableModel<Listing>) => MutableModel<Listing> | void): Listing;
}