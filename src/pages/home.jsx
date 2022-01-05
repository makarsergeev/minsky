import React, {Component} from 'react';
import SecHero from "../components/secHero";
import SecHowItWorks from "../components/secHowItWorks";
import SecCases from "../components/secCases";
import SecResearch from "../components/secResearch";
import SecPlatform from "../components/secPlatform";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <SecHero/>
                <SecHowItWorks/>
                {/*<SecPlatform/>*/}
                <SecCases/>
                <SecResearch/>
            </React.Fragment>
        );
    }
}

export default Home;
