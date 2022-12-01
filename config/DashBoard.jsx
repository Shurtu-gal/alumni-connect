import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilUserPlus
} from "@iconscout/react-unicons";
import img1 from "../src/images/img1.png";
import img2 from "../src/images/img2.png";
import img3 from "../src/images/img3.png";


// Sidebar Data
export const SideBarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Tasks",
  },
  {
    icon: UilUsersAlt,
    heading: "Prizes",
  },
  {
    icon: UilPackage,
    heading: 'Mentors'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const CardsData = [
  {
    title: "Rewards",
    color: {
      background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  // {
  //   title: "Rewards",
  //   color: {
  //     background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
  //     boxShadow: "0px 10px 20px 0px #FDC0C7",
  //   },
  //   barValue: 80,
  //   value: "14,270",
  //   png: UilUserPlus,
  //   series: [
  //     {
  //       name: "Revenue",
  //       data: [10, 100, 50, 70, 80, 30, 40],
  //     },
  //   ],
  // },
  
];

export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: '"Looking for enthusiastic Graphic designers to join our team"',
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: '"A Thread on how to ace your interview"',
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: '"Tips to improve your coding skills and Work Life Balance"',
    time: "2 hours ago",
  },
];