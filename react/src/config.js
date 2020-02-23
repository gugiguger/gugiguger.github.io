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
        url: "https://github.com/gugiguger/tekatekikota",
        copy:
            "A simple react app that walks players through a scavenger hunt I set up in Jakarta, Indonesia as part of airbnb experience"
    },
    {
        title: "Class of '85",
        url: "https://github.com/gugiguger/Classof85",
        copy:
            "Class of 85 is social network app for students who wants to keep in touch within their classmates after graduation. I built it with BIOS theme style for the nostalgic look."
    },
    {
        title: "This is Home",
        url: "https://thisishome.herokuapp.com",
        copy:
            "A simple react app that walks player through a choose adventure game with the plot of journey of migrants from Germany to Syria."
    },
    {
        title: "Plant Marriage Petition",
        url: "https://github.com/gugiguger/plantmarriagepetition",
        copy:
            "All through out history men and women have had their heart broken by another person. Plants was there for them as a comfort and never judged their appearance. It's only natural that we would fall in love with plants. Love is love. Sign the petition and make plants marriage legal today!"
    },
    {
        title: "Gugergram",
        url: "https://github.com/gugiguger/gugergram",
        copy:
            "Gugergram is an imageboard app for comic lovers who to share their favorites comic's cover within the community they can upload image and also put comment."
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
