

function Header ({loggedIn, toggleLoggedIn}) {
    return(
        <>
            <p>Please click Login!</p>
            <button onClick={toggleLoggedIn}>
                {loggedIn ? "Log Out" : "Log In"}
            </button>
        </>
    )
}

export default Header