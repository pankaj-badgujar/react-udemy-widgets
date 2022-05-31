import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color green',
        value: 'green'
    }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);
    
    const DropdownWrapper = (
        <div>
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} type='color' />
            <span style={{ color: selected.value}}> The text is {selected.value}</span>
        </div>);

    return (
        <div className="ui container">
            <Header />
            <Route path="/"> <Accordion items={items} /></Route>
            <Route path="/list"> <Search /></Route>
            <Route path="/dropdown"> {DropdownWrapper}</Route>
            <Route path="/translate"> <Translate /></Route>
        </div>
    );
};
