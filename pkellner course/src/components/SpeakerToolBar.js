import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeProvider";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

function SpeakerToolBar() {
    const { setTheme, theme } = useContext(ThemeContext);
    const { showSession, setShowSession, eventYear, setEventYear, setSearchQuery, EVENT_YEARS } = useContext(SpeakerFilterContext);

    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Session &nbsp; &nbsp;</b>
                            <label className="fav">
                                <input type="checkbox" checked={showSession} onChange={(event) => {
                                    setShowSession(event.target.checked)
                                }}></input>
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row">
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select className="form-control theme" value={theme} onChange={(event) => {
                                    setTheme(event.target.value)
                                }}>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..." onChange={(event) => {
                                    setSearchQuery(event.target.value)
                                }} />
                            </div>
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </li>
                        <li className="d-flex flex-column flex md row">
                            <strong>Year</strong>
                            <label className="drop-menu">
                                <select className="form-control" value={eventYear} onChange={(event) => {
                                    setEventYear(event.target.value)
                                }}>
                                    {EVENT_YEARS.map((year) => {
                                       return <option value={year} key={year} >{year}</option>
                                    })}
                                </select>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpeakerToolBar;