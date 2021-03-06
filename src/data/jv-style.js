export const jvStyle = `
@import url('https://fonts.googleapis.com/css?family=Open+Sans:600|Roboto&display=swap');

/*
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif;
*/

html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

*,
*::before,
*::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
}

body {
    background: rgb(22, 22, 22) url("../images/logo/noir.png") no-repeat;
    background-size: 50%;
    background-position: 120% 18%;
}

.interface {
    color: lightgray;
    width: 60vw;
    margin: 0 auto;
}

header {
    margin-bottom: 8em;
    position: fixed;
    background-color: rgba(22, 22, 22, 0.8);
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.active::before {
    content: '';
    position: absolute;
    top: 0;
    width: 4rem;
    height: 100%;
    border-bottom: 2px solid white;
}

.logo {
    max-width: 8em;
    max-height: 8em;
}

a {
    text-decoration: none;
    color: white;
}

nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    font-size: 1.2em;
    width: 60vw;
}

nav a {
    margin-right: 2em;
}

nav a:hover {
    transition: 0.5s;
    color: grey;
}

nav div {
    padding: 1em 0;
}

.main {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
}

.a {
    margin-top: 8em;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 20em;
}

.a h1 {
    font-size: 5em;
}

.a p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25em;
    line-height: 1.5em;
}

.a>div {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
}

.a>div>div {
    flex: 1;
}

.elements {
    display: flex;
    flex-flow: column wrap;
    margin-top: 5em;
}

.elements>div {
    display: flex;
    flex-flow: row wrap;
}

.elements div a {
    margin: 1em;
    display: flex;
    width: 28%;
}

.elements img {
    max-width: 100%;
    max-height: auto;
}

.button {
    display: flex;
    flex-flow: column wrap;
}

.button h2 {
    position: absolute;
    margin-top: 14%;
    margin-left: 1%;
}

#Chat {
    border-top: 3px solid #89ACA1;
}

#Chien {
    border-top: 3px solid #F3B96C;
}

#Cochon {
    border-top: 3px solid #7A9150;
}

#Rat {
    border-top: 3px solid #DB2E2A;
}

#Furet {
    border-top: 3px solid #DB2E2A;
}

#Lapin {
    border-top: 3px solid #89ACA1;
}

footer {
    color: white;
    margin-top: 4em;
    width: 100%;
    height: 15em;
    background-color: rgb(46, 46, 46);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

footer section {
    width: 60vw;
    display: flex;
    align-items: center;
}

footer img {
    max-width: 1.5em;
    max-height: 1.5em;
    margin-left: 1em;
}

footer a:nth-of-type(4) p {
    margin-left: 5em;
}

footer a p {
    margin-left: 2em;
}

#arrow {
    margin-left: auto;
    margin-right: 1em;
}

form {
    width: 60vw;
    text-align: center;
}

input {
    border-radius: 50em;
    padding: 0.5rem;
}

#courriel,
#name {
    width: 100%;
    margin: 0.25em 0;
}

#button {
    color: black;
    background-color: white;
    border: 0.5em solid white;
    border-radius: 100em;
    float: right;
}
`;
