 export const randomColor = () => {
    const color = Math.floor(Math.random()*360).toString()
    return `hsl(${color}, 40%, 50%)`
}