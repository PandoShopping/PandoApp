/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      contactMethods
      profilePicture
      locationPermissionsEnabled
      location
      hasShop
      listings {
        id
        name
        storeName
        description
        category
        price
        ogPrice
        brand
        size
        gender
        isPurchased
        owner {
          id
          username
          contactMethods
          profilePicture
          locationPermissionsEnabled
          location
          hasShop
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        contactMethods
        profilePicture
        locationPermissionsEnabled
        location
        hasShop
        listings {
          id
          name
          storeName
          description
          category
          price
          ogPrice
          brand
          size
          gender
          isPurchased
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        contactMethods
        profilePicture
        locationPermissionsEnabled
        location
        hasShop
        listings {
          id
          name
          storeName
          description
          category
          price
          ogPrice
          brand
          size
          gender
          isPurchased
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      name
      storeName
      description
      category
      price
      ogPrice
      brand
      size
      gender
      isPurchased
      owner {
        id
        username
        contactMethods
        profilePicture
        locationPermissionsEnabled
        location
        hasShop
        listings {
          id
          name
          storeName
          description
          category
          price
          ogPrice
          brand
          size
          gender
          isPurchased
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        storeName
        description
        category
        price
        ogPrice
        brand
        size
        gender
        isPurchased
        owner {
          id
          username
          contactMethods
          profilePicture
          locationPermissionsEnabled
          location
          hasShop
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncListings = /* GraphQL */ `
  query SyncListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncListings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        storeName
        description
        category
        price
        ogPrice
        brand
        size
        gender
        isPurchased
        owner {
          id
          username
          contactMethods
          profilePicture
          locationPermissionsEnabled
          location
          hasShop
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      storeName
      user {
        id
        username
        contactMethods
        profilePicture
        locationPermissionsEnabled
        location
        hasShop
        listings {
          id
          name
          storeName
          description
          category
          price
          ogPrice
          brand
          size
          gender
          isPurchased
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storeName
        user {
          id
          username
          contactMethods
          profilePicture
          locationPermissionsEnabled
          location
          hasShop
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        storeName
        user {
          id
          username
          contactMethods
          profilePicture
          locationPermissionsEnabled
          location
          hasShop
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
