import { API, graphqlOperation } from 'aws-amplify';
import { createListing, updateListing, deleteListing } from './graphql/mutations';

//TODO: move to test data in constnats 
const testListing = {
  name: "testName", 
  price: 4.20, 
  brand: "testBrand", 


  
}




/* create a todo */
await API.graphql(graphqlOperation(createListing, {input: testListing}));

/* update a todo. is testListingId right? */
await API.graphql(graphqlOperation(updateTodo, { input: { id: listingId, name: "Updated name" }}));

/* delete a todo */
await API.graphql(graphqlOperation(deleteTodo, { input: { id: listingId }}));

