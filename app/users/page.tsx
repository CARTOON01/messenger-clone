import { signOut } from "next-auth/react";

const users = () => {
    return (
        <button onClick={() => signOut}>
            Logout
        </button>
    )
}

export default users;
