import { Auth } from 'aws-amplify';

function SignOutButton() {
    return (
        <button onClick={() => Auth.signOut()}>Sign Out</button>
    );
}

export default SignOutButton;
