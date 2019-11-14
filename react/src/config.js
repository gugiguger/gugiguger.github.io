const bot = require("./images/speak_and_spell.svg");
const email = require("./images/recorder.svg");
const briefcase = require("./images/simon.svg");
const moon = require("./images/moon.svg");

const apps = {
    messenger: "Chat",
    work: "Work",
    contact: "Contact",
    shutdown: "Shutdown"
};

const icons = {
    chat: {
        url: bot,
        alt: "Icon of bot"
    },
    work: {
        url: briefcase,
        alt: "Icon of briefcase"
    },
    contact: {
        url: email,
        alt: "Icon of email"
    },
    shutdown: {
        url: moon,
        alt: "Icon of moon"
    }
};

const resumeLink =
    "https://drive.google.com/file/d/1gRiwdQfVXiCPSMzgcAkZkT-zDAs0FJN-/view?usp=sharing";

const contact = {
    content: "Let's chat and collaborate!",
    emailLink: "mailto:gugi.gumilang@gmail.com",
    linkedin: "https://linkedin.com/in/gugigumilang",
    github: "http://github.com/gugiguger"
};

const work = [
    {
        title: "Tekatekikota",
        url: "",
        image: "",
        copy: "An app that I set it up with my friend"
    },
    {
        title: "Social Network",
        url: "//Social Network",
        copy: "I did this project when I joined the bootcamp."
    },
    {
        title: "Gugergram",
        url: "//Gugergram",
        copy: "Instagram like"
    },
    {
        title: "Connect 4",
        url: "//Connect 4",
        copy: "A game that I built."
    }
];

const initialResponse =
    'Hi there, welcome to my portfolio, I\'m Gugi and Thanks for stopping by for a chat. You can ask me anything using the "Free type" button below, but for now I made you some quick select options to help get you started. Go ahead and ask me something!';

const changeInputResponse = {
    free: "Feel free to ask me anything.",
    options: "A little guidance never hurt anybody :)"
};

const dialogFlow = {
    token: "0520d9a70397490fa0524084350fbf48"
};

module.exports = {
    apps,
    icons,
    resumeLink,
    contact,
    work,
    dialogFlow,
    initialResponse,
    changeInputResponse
};
