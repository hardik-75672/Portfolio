import python from './photo/ai_new.jpg'
import tic from './photo/tic tac.jpg'
import news from './photo/dnes.jpg'
import todo from './photo/todo.jpg'
import youtube from './photo/y1.jpg'
import weather2 from './photo/weather2.jpg'
import drive from './photo/drive.jpg'
import ecommerce from './photo/ecommerce.jpg'
import chat from './photo/chat.jpg'
import { sudoku } from '../assets'


const data = [
    {
        imgsrc:ecommerce,
        title: "Ecommerce",
        link: "https://github.com/Hardik-75672/ecommerce-backend",
        desc:"Ecommerce website use for update personal information, view order history, and add items to their cart, review selections, and proceed to checkout."

    },
      {
        imgsrc:chat,
        title: "TalkBuddy",
        link: "https://github.com/Hardik-75672/TalkBuddy",
        desc:" A real-time chat application features such as user authentication ,group chat and message notifications to enhance user experience."

    },

  {
    imgsrc:drive,
    title: "DriveMaster",
    link: "https://github.com/hardik-75672/DriveMaster",
    desc:"Collaborative cloud storage application similar to Google Drive,solution enabling secure file sharing, real-time editing, and seamless teamwork."
    },
    {
        imgsrc:weather2,
        title: "Weather Website",
        link: "https://github.com/Hardik-75672/Weather-app",
        desc:"WeatherNow is a web application that provides users with up-to-date weather information for their location and any city worldwide. "
    },
    {
        imgsrc:  todo ,
        title: "To-Do List",
        link: "",
        desc:"Taskify is a web-based todo list application designed to help users manage their tasks efficiently and stay organized."
    }, {
        imgsrc:  sudoku ,
        title: "Dynamic sudoku",
        link: "https://github.com/Hardik-75672/Dynamic_sudoku",
        desc:" Sudoku is a popular logic-based puzzle game where players fill a 9x9 grid with numbers from 1 to 9."
    }, {
        imgsrc:  python ,
        title: "Python Base Ai",
        link: "https://github.com/Hardik-75672/personal-ai",
        desc:"PersonalAI is a Python-based personal assistant designed to assist users with various tasks, provide useful information, and automate routine activities"
    }, {
        imgsrc:  tic ,
        title: "Tic-Tac Toe",
        link: "/",
        desc:"Tic Tac Toe is a timeless classic game enjoyed by people of all ages. This project aims to recreate the traditional Tic Tac Toe game in a digital format"
    }

]

export default data;