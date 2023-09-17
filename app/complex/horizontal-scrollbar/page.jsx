import React from "react";
import HorizontalScrollbar from "@/components/horizontal-scrollbar/HorizontalScrollbar";

const categories = [
  "Gaming",
  "Beauty and Makeup",
  "Travel and Adventure",
  "Food and Cooking",
  "Technology and Gadgets",
  "Fitness and Exercise",
  "Music and Music Videos",
  "Comedy and Humor",
  "DIY and Crafts",
  "Education and Learning",
  "Health and Wellness",
  "Science and Technology",
  "News and Current Affairs",
  "Fashion and Style",
  "Home Improvement",
  "Vlogs and Personal Stories",
  "Pets and Animals",
  "Sports and Athletics",
  "Film and Animation",
  "Art and Creativity",
  "Business and Entrepreneurship",
  "Parenting and Family",
  "Cars and Automotive",
  "Finance and Investing",
  "History and Documentaries",
  "Gardening and Landscaping",
  "ASMR (Autonomous Sensory Meridian Response)",
  "Travel Vlogs",
  "Hobbies and Interests",
  "Nature and Wildlife",
];

const users = new Array(20).fill(0).map((item,index) => {
  return {
    id: index,
    username: `U#${index}`,
    image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 50)}`,
  };
})
const HorizontalScrollbarPage = () => {
  console.log(users);

  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>HorizontalScrollbarPage</h1>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">YouTube categories</h1>
      <HorizontalScrollbar scrollbar={true}>
        {categories.map((item, index) => (
          <div key={index} className="border-2 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer">
            <h1>{item}</h1>
          </div>
        ))}
      </HorizontalScrollbar>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Instagram Stories</h1>
      <HorizontalScrollbar>
        {users.map((item) => (
          <div className="shrink-0">
            <img src={item.image} alt={item.username} className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200" />
          </div>
        ))}
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizontalScrollbarPage;
