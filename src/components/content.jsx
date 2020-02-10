import React, {Component} from 'react';
import PlayerPanel from "./playerPanel";
import wall from "../img/wall.png";
class Content extends Component {
    render() {
        return (
            <section id="content" className="container">
                <img src={wall} className="bg" />
                <PlayerPanel />
            </section>
        );
    }
}

export default Content;