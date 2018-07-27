const path = process.env.NODE_ENV === "production" ? "/speedy-math" : '/'

const Categories = [
    {
        text: "Addition",
        uri: `${path}/add`
    },
    {
        text: "Subtraction",
        uri: `${path}/sub`
    },
    {
        text: "Multiply",
        uri: `${path}/multiply`
    },
    {
        text: "Comparison",
        uri: `${path}/comparison`
    },
    // {
    //     text: "Division",
    //     uri: `${path}/division`
    // }
]

export default Categories