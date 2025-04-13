import { CategoryQuestionModel } from "./CategoryQuestionModel";

export interface CategoryModel {
  name: string;
  imgUrl: string;
  questions: CategoryQuestionModel[];
}

export const defaultCategories = () => {
  return [
    {
      name: "Shonen Anime",
      imgUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBsDWUcdfbuZwglgyeeQ9ChRoS4.jpg",
      questions: [
        {
          score: 10,
          question: "Who is the main protagonist of 'Naruto'?",
          answer: "Naruto Uzumaki",
        },
        {
          score: 10,
          question: "What is the name of Goku's rival in 'Dragon Ball Z'?",
          answer: "Vegeta",
        },
        {
          score: 10,
          question: "What is the name of Luffy's brother in 'One Piece'?",
          answer: "Ace",
        },
        {
          score: 20,
          question: "What is the name of the village in 'Naruto'?",
          answer: "Konoha (Hidden Leaf Village)",
        },
        {
          score: 20,
          question: "Who is the captain of the 11th Division in 'Bleach'?",
          answer: "Kenpachi Zaraki",
        },
        {
          score: 30,
          question:
            "What is the name of the titan-slaying weapon in 'Attack on Titan'?",
          answer: "ODM Gear (Omni-Directional Mobility Gear)",
        },
        {
          score: 40,
          question:
            "What is the name of the demon inside Tanjiro's sister in 'Demon Slayer'?",
          answer: "Nezuko Kamado",
        },
        {
          score: 50,
          question:
            "What is the name of the ultimate technique of Goku in 'Dragon Ball Super'?",
          answer: "Ultra Instinct",
        },
      ],
    },
    {
      name: "Studio Ghibli",
      imgUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBsDWUcdfbuZwglgyeeQ9ChRoS4.jpg",
      questions: [
        {
          score: 10,
          question: "What is the name of the cat bus in 'My Neighbor Totoro'?",
          answer: "Catbus",
        },
        {
          score: 10,
          question: "What is the name of the bathhouse in 'Spirited Away'?",
          answer: "Aburaya",
        },
        {
          score: 20,
          question:
            "What is the name of the cursed prince in 'Princess Mononoke'?",
          answer: "Ashitaka",
        },
        {
          score: 20,
          question:
            "What is the name of the witch in 'Kiki's Delivery Service'?",
          answer: "Kiki",
        },
        {
          score: 30,
          question:
            "What is the name of the spirit that helps Chihiro in 'Spirited Away'?",
          answer: "Haku",
        },
        {
          score: 40,
          question:
            "What is the name of the moving castle in 'Howl's Moving Castle'?",
          answer: "Howl's Castle",
        },
        {
          score: 50,
          question: "Who directed most Studio Ghibli films?",
          answer: "Hayao Miyazaki",
        },
      ],
    },
    {
      name: "Classic Anime",
      imgUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBsDWUcdfbuZwglgyeeQ9ChRoS4.jpg",
      questions: [
        {
          score: 10,
          question: "What is the name of the main character in 'Astro Boy'?",
          answer: "Astro",
        },
        {
          score: 20,
          question: "What year was the original 'Mobile Suit Gundam' released?",
          answer: "1979",
        },
        {
          score: 20,
          question:
            "What is the name of the bounty hunter ship in 'Cowboy Bebop'?",
          answer: "Bebop",
        },
        {
          score: 30,
          question: "Who is the main antagonist in 'Akira'?",
          answer: "Tetsuo Shima",
        },
        {
          score: 40,
          question:
            "What is the name of the organization in 'Neon Genesis Evangelion'?",
          answer: "NERV",
        },
        {
          score: 50,
          question: "What is the name of the mecha in 'Mobile Suit Gundam'?",
          answer: "RX-78-2 Gundam",
        },
      ],
    },
    {
      name: "Isekai Anime",
      imgUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBsDWUcdfbuZwglgyeeQ9ChRoS4.jpg",
      questions: [
        {
          score: 10,
          question: "What is the name of the protagonist in 'Re:Zero'?",
          answer: "Subaru Natsuki",
        },
        {
          score: 10,
          question: "What is the name of the MMORPG in 'Sword Art Online'?",
          answer: "Sword Art Online",
        },
        {
          score: 20,
          question:
            "What is the name of the slime in 'That Time I Got Reincarnated as a Slime'?",
          answer: "Rimuru Tempest",
        },
        {
          score: 30,
          question: "Who is the main character in 'No Game No Life'?",
          answer: "Sora and Shiro",
        },
        {
          score: 40,
          question:
            "What is the name of the shield hero in 'The Rising of the Shield Hero'?",
          answer: "Naofumi Iwatani",
        },
        {
          score: 50,
          question: "What is the name of the demon lord in 'Overlord'?",
          answer: "Ainz Ooal Gown",
        },
      ],
    },
    {
      name: "Sports Anime",
      imgUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBsDWUcdfbuZwglgyeeQ9ChRoS4.jpg",
      questions: [
        {
          score: 10,
          question: "What sport is featured in 'Haikyuu!!'?",
          answer: "Volleyball",
        },
        {
          score: 10,
          question:
            "What is the name of the main character in 'Kuroko no Basket'?",
          answer: "Tetsuya Kuroko",
        },
        {
          score: 20,
          question:
            "What is the name of the cycling anime featuring Onoda Sakamichi?",
          answer: "Yowamushi Pedal",
        },
        {
          score: 30,
          question:
            "What is the name of the boxing anime featuring Ippo Makunouchi?",
          answer: "Hajime no Ippo",
        },
        {
          score: 40,
          question:
            "What is the name of the swimming anime featuring Haruka Nanase?",
          answer: "Free!",
        },
        {
          score: 50,
          question:
            "What is the name of the soccer anime featuring Tsubasa Ozora?",
          answer: "Captain Tsubasa",
        },
      ],
    },
    {
      name: "Mecha Anime",
      imgUrl:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dBsDWUcdfbuZwglgyeeQ9ChRoS4.jpg",
      questions: [
        {
          score: 10,
          question: "What is the name of the main mecha in 'Code Geass'?",
          answer: "Lancelot",
        },
        {
          score: 10,
          question: "Who pilots the EVA Unit-01 in 'Neon Genesis Evangelion'?",
          answer: "Shinji Ikari",
        },
        {
          score: 20,
          question: "What is the name of the mecha in 'Gurren Lagann'?",
          answer: "Gurren Lagann",
        },
        {
          score: 30,
          question:
            "What is the name of the main Gundam in 'Mobile Suit Gundam Wing'?",
          answer: "Wing Gundam",
        },
        {
          score: 40,
          question: "Who is the main antagonist in 'Code Geass'?",
          answer: "Charles zi Britannia",
        },
        {
          score: 50,
          question:
            "What is the name of the space colony in 'Mobile Suit Gundam'?",
          answer: "Side 7",
        },
      ],
    },
  ];
};
