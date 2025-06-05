import HammerPriceScreenshot from "@/assets/img/hammerprice.png";
import FykeScreenshot from "@/assets/img/fyke.png";
import HolidazeScreenshot from "@/assets/img/holidaze.png";

export const projects = [
  {
    id: 1,
    title: "Semester Project 2 | HammerPrice",
    slug: "semester-project-2",
    repoLink: "https://github.com/vicwinsj/Semester-Project-2",
    siteLink: "https://semester-project-2-vicwinsj.netlify.app/",
    description: {
      short:
        "An auction website where you can place bids on auctioned items – as well as auction items yourself.",
      detailed:
        "With the HammerPrice website I utilized my skills in JavaScript to build an interface where you can search for specific items – and register a user to make bids using credits and list your own items. You start with 1000 credits and increase or decrease the amount based on selling items and winning auctions.",
    },
    mainContent: [
      "The Semester Project 2 project was probably the most real life like project I had taken my hands at the time. I went ahead with a very clean and serious design suitable for the audience of such a site and focused strictly on the project brief – focusing more on quality over quantity taking the limited time into consideration.",
      "The biggest challenge of this project was perhaps to implement the search functionality, making it possible to search for items throughout the site. I did as well have to implement plural functions to figure out f.ex. what the current leading bid amount on a specific listing is, how long time is remaining on the bidding round and to figure out if a listing is expired. I know I could have added more complex functionalities for a better UX, like options to update more than just one’s profile avatar f.ex.",
      "The tutor feedback raised some concerns about security and testing. Thereby I chose to do some enhancements on the project, like adding a couple of tests (both unit and E2E). I did as well relocate the API key to a .env file.",
    ],
    image: {
      url: HammerPriceScreenshot,
      alt: "Screenshot of the Semester Project 2 website (HammerPrice)",
    },
    tags: ["JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    id: 2,
    title: "JavaScript Frameworks | Fyke",
    slug: "javascript-frameworks",
    repoLink: "https://github.com/vicwinsj/javascript-frameworks",
    siteLink: "https://fyke.netlify.app/",
    description: {
      short:
        "This e-commerce store lets you search through products add adding them to cart before checking out.",
      detailed:
        "The Fyke website was an attempt to make a modern e-commerce store using React with Styled Components. Here you can search for a specific product using the search bar, add products to the cart and place an order when finished.",
    },
    mainContent: [
      "This was my first attempt at using React in a project. I was getting more used to the fundamentals as I progressed through. As with other projects, I focused specifically on the brief to make sure I solved it in a decent way using the time at hand. Therefore some UX could definitely have been improved.",
      "The tutor raised a couple of issues, like labels lacking htmlFor property and the use of index as the key instead of f.ex. unique IDs while mapping through items. I resorted to generate static UUIDs for mapping through items without ID.",
    ],
    image: {
      url: FykeScreenshot,
      alt: "Screenshot of the JavaScript Frameworks website (Fyke)",
    },
    tags: ["JavaScript", "HTML", "CSS", "Styled Components", "React"],
  },
  {
    id: 3,
    title: "Project Exam 2 | Holidaze",
    slug: "project-exam-2",
    repoLink: "https://github.com/vicwinsj/Project-Exam-2",
    siteLink: "https://project-exam-2-holidaze-vicwinsj.netlify.app/",
    description: {
      short:
        "A booking website where you can search through venues – as well as booking, creating, updating and deleting your own.",
      detailed:
        "The Holidaze website, built using React, was my final exam submission at my front-end studies. Here you can filter through different venues based on plural criteria. As a registered user you can book stays, and even upload, update and delete own venues for others to book.",
    },
    mainContent: [
      "The final Project Exam was an intriguing challenge for me, as I still didn’t feel very confident with React (or JavaScript in general), but I figured that doing this task was really beneficial for my learning. I noticed that I slowly but steadily picked up more details of React as it was required by the brief. It was a relief to figure out that adding a calendar was way more simple than I had thought, using React Day Picker.",
      "It’s worth noting that I had plans to make a more complete site than it turned out to be, including adding a favorites functionality. But as time was running out I had to focus on getting the specific functionalities answering the brief work well.",
    ],
    image: {
      url: HolidazeScreenshot,
      alt: "Screenshot of the Project Exam 2 website (Holidaze)",
    },
    tags: ["TypeScript", "HTML", "CSS", "Tailwind", "React"],
  },
];
