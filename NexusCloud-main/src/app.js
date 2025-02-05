import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

function App() {
    return (
        <div>
            <h1>Welcome to NexusCloud</h1>
            <SignInButton />
            <SignOutButton />
        </div>
    );
}

import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from './graphql/queries';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            try {
                const postData = await API.graphql(graphqlOperation(listPosts));
                setPosts(postData.data.listPosts.items);
            } catch (error) {
                console.log('Error fetching posts:', error);
            }
        }
        getPosts();
    }, []);

    return (
        <div>
            <h1>Welcome to NexusCloud</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
