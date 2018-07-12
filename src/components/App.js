import React from "react";
import CapitalizedText from "./CapitalizedText";

class App extends React.Component {
    render() {
        return (
            <CapitalizedText text="the first word of this sentence will be capitalized." />
        );
    }
}

export default App;