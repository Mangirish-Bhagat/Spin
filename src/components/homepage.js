import React from "react";
// import WheelComponent from 'react-wheel-of-prizes'
// import 'react-wheel-of-prizes/dist/index.css'
import "./homepage.css";

class HomePage extends React.Component {

    state = {
        name: "circle",
    }

    startRotation = () => {
        console.log("rotate")
        this.setState({ name: "circle start-rotate" });

        setTimeout(() => {
            this.setState({ name: "circle start-rotate stop-rotate" });
        }, Math.floor(Math.random() * 10000) + 1)
    }

    render() {
        return (
            <>
                <div className="homepage">

                    <div className="header">
                        <h1> Spin-n-Win</h1>
                    </div>

                    <div className="arrow"> </div>

                    <ul className={this.state.name}>
                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 1 </div>
                        </li>

                        <li>
                            <div className="text"> 2 </div>
                        </li>

                        <li>
                            <div className="text"> 3 </div>
                        </li>

                        <li>
                            <div className="text"> 1fyfhgfgh </div>
                        </li>

                    </ul>
                    <div className="spin-Btn">
                        <button onClick={this.startRotation} className="btn-Text">Spin</button>
                    </div>
                    {/* <div className="spin-btn">Spin</div> */}
                </div>
            </>

        )
    }

}

export default HomePage;