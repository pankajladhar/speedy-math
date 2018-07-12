const colors = () => {
    const COLORS_OBJ = {
        "reset" : "\x1b[0m",
        "black": "\x1b[30m",
        "red": "\x1b[31m",
        "green": "\x1b[32m",
        "yellow": "\x1b[33m",
        "blue": "\x1b[34m",
        "magenta": "\x1b[35m",
        "cyan": "\x1b[36m",
        "white": "\x1b[37m",
        "bgblack": "\x1b[40m",
        "bgred": "\x1b[41m",
        "bggreen": "\x1b[42m",
        "bgyellow": "\x1b[43m",
        "bgblue": "\x1b[44m",
        "bgmagenta": "\x1b[45m",
        "bgcyan": "\x1b[46m",
        "bgwhite": "\x1b[47m"
    }

    return {
        green : (msg) => {
            return `${COLORS_OBJ['green']}${msg}${COLORS_OBJ['reset']}`
        },
        red : (msg) => {
            return `${COLORS_OBJ['red']}${msg}${COLORS_OBJ['reset']}`
        }
    }
}

module.exports = colors();