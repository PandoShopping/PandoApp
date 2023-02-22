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



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly contactMethods?: (string | null)[] | null;
  readonly profilePicture?: string | null;
  readonly locationPermissionsEnabled: boolean;
  readonly location?: string | null;
  readonly hasShop?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly contactMethods?: (string | null)[] | null;
  readonly profilePicture?: string | null;
  readonly locationPermissionsEnabled: boolean;
  readonly location?: string | null;
  readonly hasShop?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerListing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Listing, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly storeName: string;
  readonly description?: string | null;
  readonly category?: ListingCategory | keyof typeof ListingCategory | null;
  readonly price: number;
  readonly ogPrice?: number | null;
  readonly brand: string;
  readonly size?: ListingSize | keyof typeof ListingSize | null;
  readonly gender?: ListingGender | keyof typeof ListingGender | null;
  readonly isPurchased: boolean;
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
  readonly storeName: string;
  readonly description?: string | null;
  readonly category?: ListingCategory | keyof typeof ListingCategory | null;
  readonly price: number;
  readonly ogPrice?: number | null;
  readonly brand: string;
  readonly size?: ListingSize | keyof typeof ListingSize | null;
  readonly gender?: ListingGender | keyof typeof ListingGender | null;
  readonly isPurchased: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Listing = LazyLoading extends LazyLoadingDisabled ? EagerListing : LazyListing

export declare const Listing: (new (init: ModelInit<Listing>) => Listing) & {
  copyOf(source: Listing, mutator: (draft: MutableModel<Listing>) => MutableModel<Listing> | void): Listing;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storeName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}