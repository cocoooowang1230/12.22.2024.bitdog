import { Task } from '../types/task';

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "首要任務：身份驗證",
    image: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28",
    type: "Survey",
    provider: "Twin3",
    reward: 0.03
  },
  {
    id: 2,
    title: "Welcome to Bitdog",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
    type: "Social Media",
    provider: "Bitdog",
    reward: 0.01
  },
  {
    id: 3,
    title: "Unlock Exclusive Rewards",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    type: "Video",
    provider: "Bitdog",
    reward: 0.05
  },
  {
    id: 4,
    title: "Boost Your Social Influence",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68",
    type: "Social Media",
    provider: "9starst",
    reward: 0.01
  }
];