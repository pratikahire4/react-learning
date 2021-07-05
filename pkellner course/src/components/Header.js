function Header({theme}) {
    return (
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="justify-content-between d-flex">
                    <div>
                        <img src="/images/SVCCLogo.png" alt="lolololo logo"></img>
                    </div>
                    <div className="light">
                        <h4 className="header-title">
                            Silicon Vally Code Champ
                        </h4>
                    </div>
                    <div className={ theme === "light" ? "" : "text-info"}>
                        Konichiwa sencho &nbsp; &nbsp;
                        <span>
                            <a href="#">Sign Out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;