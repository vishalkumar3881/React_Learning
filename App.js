
const div1 = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1"},
        [React.createElement(
            "h1",
            {id:"heading"},
            "I am a heading"
        ),React.createElement(
            "h2",
            {id:"heading"},
            "I am also a heading"
        )]
    ),React.createElement("div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {id:"heading"},
            "I am a heading"
        ),React.createElement(
            "h2",
            {id:"heading"},
            "I am also a heading"
        )]
    )]
)

console.log(div1)
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);