import Header from "../components/auth/Header"
import Login from "../components/auth/Login"
// import bgImg from "../assets/progreeBgLogoAuth.png"

// import Header from "../components/Header"


export default function LoginPage() {
    return (
        <div className="max-w-[20rem] w-full space-y-8 bg-white border bg-opacity-20 px-6 py-4 pb-8">
            {/* <img className="absolute w-[50vh] h-[82vh] opacity-20 -z-10" src={bgImg} alt="" srcset="" /> */}
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />

            <Login />

        </div>
    )
}