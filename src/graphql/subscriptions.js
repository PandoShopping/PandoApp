/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onCreateListing(filter: $filter, owner: $owner) {
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
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onUpdateListing(filter: $filter, owner: $owner) {
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
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing(
    $filter: ModelSubscriptionListingFilterInput
    $owner: String
  ) {
    onDeleteListing(filter: $filter, owner: $owner) {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore(
    $filter: ModelSubscriptionStoreFilterInput
    $owner: String
  ) {
    onCreateStore(filter: $filter, owner: $owner) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore(
    $filter: ModelSubscriptionStoreFilterInput
    $owner: String
  ) {
    onUpdateStore(filter: $filter, owner: $owner) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore(
    $filter: ModelSubscriptionStoreFilterInput
    $owner: String
  ) {
    onDeleteStore(filter: $filter, owner: $owner) {
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
