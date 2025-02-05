import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from './graphql/queries';

async function fetchPosts() {
    try {
        const postData = await API.graphql(graphqlOperation(listPosts));
        console.log('Posts:', postData.data.listPosts.items);
    } catch (error) {
        console.log('Error fetching posts:', error);
    }
}

fetchPosts();
