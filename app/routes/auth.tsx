import {usePuterStore} from "~/components/lib/puter";

export const meta=()=>([
    {title:'ResAnalyzer | Auth'},
    {name:'description',content:"Log in Your Account"}
])

const Auth = () => {
    const {isLoading, auth} = usePuterStore();
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
           <div className="gradient-border shadow-sm">
             <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
               <div className="flex flex-col items-center gap-2 text-center">
                   <h1>Welcome</h1>
                   <h2>Log In to Continue Your Job Journey</h2>
               </div>
                 <div>
                     {isLoading ? (
                         <button className="auth-button animate-pulse">
                             <p>Siging You In...</p>
                         </button>
                     ):
                     <>
                     {auth.isAuthenticated ? (
                         <button className="authbutton" onClick={auth.signOut}>
                             Log Out
                         </button>
                     ):
                         (
                             <button className="authbutton" onClick={auth.signIn}>
                                 LogIn
                             </button>
                         )
                     }
                     </>
                     }
                 </div>
             </section>
           </div>
        </main>
    )
}
export default Auth
