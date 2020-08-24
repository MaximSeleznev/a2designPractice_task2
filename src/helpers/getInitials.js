export const getInitials = (str) => {
    var parts = str.split(' ')
    var initials = parts.reduce((current, total) => (
        current.slice(0,1) + total.slice(0,1)
    ))
    return initials
}