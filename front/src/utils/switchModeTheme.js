export function switchModeTheme(dark) {
    const body = document.getElementsByTagName("body")
    if (dark) { body[0].classList.add("dark") }
    else { body[0].classList.remove("dark") }
}