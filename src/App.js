import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

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

    return (
        <div className="ui container">
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown options={options} selected={selected} onSelectedChange={setSelected} type='color'/> */}
            {/* <span style={{ color: selected.value}}> The text is {selected.value}</span> */}
            <Translate />
        </div>
    );
};
