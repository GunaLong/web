import self from "../img/me.png";
import DC from "../img/DC.png";
import mock3 from "../img/aboutme.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import pet from "../img/pet.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "林",
  lastName: "冠龍",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "Front-end engineer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "📖",
      text: "like reading",
    },
    {
      emoji: "🌎",
      text: "live in Taichung",
    },
    {
      emoji: "💼",
      text: "Front-end engineer",
    },
    {
      emoji: "📧",
      text: "ao122133@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/profile.php?id=100002292954899",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/long__0628/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/GunaLong",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/guanlong-lin-a27094258/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "我原本是職業軍人但厭倦了做無意義的事情,剛好有認識的轉職工程師成功我就也嘗試了一下python,發現寫程式帶來的成就感非常大所以我就毅然決然的決定退伍,然後參加資策會來幫助我快速入門,在資策會中我學會了前端三劍客html、CSS、js也學會使用bootstrap來做RWD響應式的網頁,而我在資策會的分組專題的主題是遊戲購物平台在前後端分離前提下,我負責的是前台的會員頁面、登入、註冊、購物車及後台系統全功能前端畫面使用react渲染畫面及串接api,後端使用node.js做api來串接mysql做資料的存取,這個專題讓我更熟悉react渲染畫面的原理及api串接的能力同時也擁有使用node.js做api跟sql指令的下達。",
  improve:
    "加入了許多關於程式的社團,關注新技術及去實作,例如學習mui來快速完成網頁及如render網路服務來部屬包含資料庫及後端的網頁,或是學習如何利用ai去輔助我寫出更簡潔效能好的程式碼。",
  wish: "目標能做出符合UI/UX要求的網頁且效能好,也想挑戰做APP來提供更多用戶使用上的方便,能做出各式各樣的作品我相信這就是寫程式的魅力!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "bootstrap",
      "html5",
      "css3",
      "figma",
      "ajax",
    ],
    exposedTo: ["node.js", "Mysql"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "資策會小專題(寵物收養網)",
      live: "https://gunalong.github.io/pet/index/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/GunaLong/pet", // this should be a link to the **repository** of the project, where the code is hosted.
      image: pet,
    },
    {
      title: "Discord串接AI",
      live: "https://github.com/GunaLong/discord-bot",
      source: "https://github.com/GunaLong/discord-bot",
      image: DC,
    },
    {
      title: "個人網站",
      live: "https://paytonpierce.dev",
      source: "https://github.com/GunaLong/web",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};
