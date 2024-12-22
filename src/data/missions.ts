export interface Mission {
  id: number;
  title: string;
  provider: string;
  reward: number;
  category: 'survey' | 'social media' | 'video';
  popularity: number;
  imageUrl: string;
  gleamUrl?: string;
  campaignId?: string;
  description?: string;
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "首要任務：身份驗證",
    provider: "Twin3",
    reward: 0.03,
    category: 'survey',
    popularity: 999,
    imageUrl: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Complete identity verification to start earning rewards"
  },
  {
    id: 2,
    title: "Welcome to Bitdog",
    provider: "Bitdog",
    reward: 0.01,
    category: 'social media',
    popularity: 999,
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    description: "Get started with your Bitdog journey"
  },
  {
    id: 3,
    title: "Unlock Exclusive Rewards",
    provider: "Bitdog",
    reward: 0.05,
    category: 'video',
    popularity: 999,
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    gleamUrl: "https://gleam.io/A0gBK/watch-video-win-bitcoin",
    campaignId: "A0gBK",
    description: "Watch a video and earn BTC rewards"
  },
  {
    id: 4,
    title: "Boost Your Social Influence",
    provider: "9starst",
    reward: 0.01,
    category: 'social media',
    popularity: 999,
    imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    gleamUrl: "https://gleam.io/w9Ja7/like-the-post-get-bitcoin",
    campaignId: "w9Ja7",
    description: "Increase your social media presence and earn rewards"
  }
];