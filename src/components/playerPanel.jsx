import React, {Component} from 'react';

class PlayerPanel extends Component {
    render() {
        return (
            <div className="playerPanel row">
                <div className="col-3">
                    <div className="playerAvatar">
                        <img src="/img/avatar.jpg" alt="Profile avatar"/>
                    </div>
                </div>
                <div className="col-9">
                    <h3 className="playerName">
                        PeterHighcash
                    </h3>
                    <span className="playerQuickStats">K 2625 | D 69 | A 420</span>
                    <p className="playerText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos ipsam necessitatibus vel? Alias aliquid atque cumque laborum modi natus nihil quisquam sit. Amet ducimus eaque laudantium neque, obcaecati porro!
                    </p>
                    <a href="#" className="btn btn-primary">Zobrazit profil</a>
                </div>
            </div>
        );
    }
}

export default PlayerPanel;