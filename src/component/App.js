import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import ProjectInsight from './Project_Insight.js';
import ActiveProject from './Active_Project.js';
import CsatReceived from './Csat_Received.js';
import ProjectDetails from './Project_Details';
import Animate from './Animate.js';
import jdata from '../data/data.json';
import DummyIntro from './DummyIntro.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mtime: 3000,
            auth: false
        }

    }
    // componentWillMount() {
    //     let i = 0;
    //     const data = ['3', '5', '10'];
    //     let time = 3000;
    //     const rt = ['/projectinsight', '/activeproject', '/csatreceived'];
    //     const c = setInterval(() => {
    //         // time = 3000;
    //         // let qt = Math.floor((Number(data[i]) / 4));
    //         // let rem = (Number(data[i] % 4));
    //         // if (qt >= 1 && rem === 0)
    //         //     time = time * qt;
    //         // else if (qt >= 1 && rem != 0) { time = time * (qt + 1) }
    //         // else if (qt === 0) { time = 3000; }
    //         // this.setState({ mtime: time });
    //         // console.log(qt, " ", rem, " ", time, " ", this.state.mtime);

    //         this.props.history.push(rt[i]);
    //         if (i === rt.length - 1) {
    //             i = 0;
    //         } else {
    //             i++;
    //         }
    //     }, this.state.mtime);
    // }
    componentDidMount() {
        const rt = ['/projectinsight', '/activeproject', '/csatreceived'];
        const data = ['3', '5', '10'];
        jdata.map((i, d) => {
            i.route = rt[d % 3];
            i.developers = data[d % 3];
        })
        console.log("data received");
        //  this.setState({ auth: true });
        let t = 0;
        setTimeout(() => {
            this.props.history.push({
                pathname: '/projectinsight',
                state: { apidata: jdata[0] }
            })
            console.log(jdata[0])
        }, 100)
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/projectinsight' exact component={Animate(ProjectInsight)} />
                    <Route path='/activeproject' exact component={Animate(ActiveProject)} />
                    <Route path='/csatreceived' exact component={Animate(CsatReceived)} />
                    <Route path='/projectdetails' exact component={Animate(ProjectDetails)} />
                </Switch>
            </div>
        );
    }
}


export default withRouter(App);