import { Auth } from 'aws-amplify';

function SignInButton() {
    return (
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
    );
}

export default SignInButton;
