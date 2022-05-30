import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React?',
        content: 'React is front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favorite js library'
    },
    {
        title: 'how do you use React?',
        content: 'You use react by creating components'
    }
];

class App extends React.Component {
    render(){
        return (
            <div className="ui container">
                {/* <Accordion items={items} /> */}
                <Search />
            </div>
        );
    }
}

export default App;