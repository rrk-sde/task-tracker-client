import Header from "../components/auth/Header";
import Signup from "../components/auth/Signup";

export default function SignupPage() {
    return (
        <div className="max-w-[20rem] w-full space-y-8 bg-white border bg-opacity-20 px-6 py-4 pb-8" >
            <Header
                heading="Signup an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup />
        </div>
    )
}