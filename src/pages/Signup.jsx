import Header from "../components/auth/Header";
import Signup from "../components/auth/Signup";
import AuthLayout from "../layout/AuthLayout";

export default function SignupPage() {

    const header = <Header
        heading="Signup for an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login" />

    return (

        <AuthLayout header={header}>
            <Signup />
        </AuthLayout>
    )
}