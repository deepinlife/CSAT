import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import ProjectInsight from './Project_Insight.js';
import ActiveProject from './Active_Project.js';
import CsatReceived from './Csat_Received.js';
import Animate from './Animate.js';
import jdata from '../data/data.json';
import { addRoute } from "../redux/Action/addRoute";
import { connect } from 'react-redux'
import DummyIntro from './DummyIntro.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mtime: 3000
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
        jdata.map((i, d) => {
            i.route = rt[d % 3];
        })
        setTimeout(() => this.props.changeStateToReducer(jdata), 3000);

    }

    componentWillReceiveProps() {
        console.log("PROP REDCEIVED", this.props.counter);
        (this.props.counter != -1) ? this.handleRoute() : ""
    }
    // componentWillMount() {
    //     //  this.props.initRedux();
    //     this.props.next();

    // }
    handelButton() {
    }
    handleRoute() {
        let r = "/";
        r = this.props.data[this.props.counter].route;
        console.log(r);
        this.props.history.push(r);
    }
    render() {
        return (
            <div>
                <button onClick={this.handelButton.bind(this)} />
                <Switch>
                    <Route path='/projectinsight' exact component={Animate(ProjectInsight)} />
                    <Route path='/activeproject' exact component={Animate(ActiveProject)} />
                    <Route path='/csatreceived' exact component={Animate(CsatReceived)} />
                    <Route path='/' exact component={Animate(DummyIntro)} />
                </Switch>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return ({
        data: state.rootRecuer.data,
        counter: state.rootRecuer.counter
    })
}
function mapDispatchToPropsCsat(dispatch) {
    return ({
        changeStateToReducer: (csat) => {
            dispatch(addRoute(csat))
        },
        initRedux: () => {
            dispatch({ type: "DUMMY" })
        },
        next: () => {
            console.log("CLICK");
            dispatch({ type: "NEXT" })
        }
    });
}

export default connect(mapStateToProps, mapDispatchToPropsCsat)(withRouter(App));