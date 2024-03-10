import python from './photo/ai1.jpg'
import tic from './photo/tic tac.jpg'
import news from './photo/dnes.jpg'
import todo from './photo/todo.jpg'
import youtube from './photo/y1.jpg'
import weather2 from './photo/weather2.jpg'
import { sudoku } from '../assets'


const data = [
    {
        imgsrc:weather2,
        title: "Weather Website",
        link: "https://github.com/Hardiksavaliya-211/Weather-app",
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
        link: "https://github.com/Hardiksavaliya-211/Dynamic_sudoku",
        desc:" Sudoku is a popular logic-based puzzle game where players fill a 9x9 grid with numbers from 1 to 9."
    }, {
        imgsrc:  python ,
        title: "Python Base Ai",
        link: "https://github.com/Hardiksavaliya-211/personal-ai",
        desc:"PersonalAI is a Python-based personal assistant designed to assist users with various tasks, provide useful information, and automate routine activities"
    }, {
        imgsrc:  tic ,
        title: "Tic-Tac Toe",
        link: "/",
        desc:"Tic Tac Toe is a timeless classic game enjoyed by people of all ages. This project aims to recreate the traditional Tic Tac Toe game in a digital format"
    }, {
        imgsrc:  youtube ,
        title: "Video Downloader",
        link: "",
        desc:"YTDownloader is a Python-based application that allows users to download videos from YouTube for offline viewing"
    }

]

export default data;