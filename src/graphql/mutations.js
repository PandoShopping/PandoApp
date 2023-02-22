/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
