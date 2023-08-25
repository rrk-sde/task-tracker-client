import Header from "../components/auth/Header"
import Login from "../components/auth/Login"

import AuthLayout from "../layout/AuthLayout"

// import Header from "../components/Header"


export default function LoginPage() {

    const header = <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup" />

    return (
        <AuthLayout header={header}>
            <Login />
        </AuthLayout>
    )
}