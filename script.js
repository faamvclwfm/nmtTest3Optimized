const questions=[
  {
      image: "easterbooks.jpeg",
      correct:0,
      question:'Which advertisement is about ___?',
      options: [
          "Buying things at a discount with a promo code",
          "Occupation opportunity for a specific gender",
          "Exhibition about electronic devices",
          "Volunteership at grocery shop",
          "Volunteery work with a little lunch provided",
          "Opportunity to drink certain beverages with discount",
          "Being able to work with pigs on the farm",
          "Job opportunity without knowledge of a particular language"
        ]
  },
  {
      image: "jobOccupation.jpg",
      correct:1,
      question:'Which advertisement is about ___?',
      options: [
        "Buying things at a discount with a promo code",
        "Occupation opportunity for a specific gender",
        "Exhibition about electronic devices",
        "Volunteership at grocery shop",
        "Volunteery work with a little lunch provided",
        "Opportunity to drink certain beverages with discount",
        "Being able to work with pigs on the farm",
        "Job opportunity without knowledge of a particular language"
      ]
  },
  {
      image: "farmJob.png",
      correct:7,
      question:'Which advertisement is about ___?',
      options: [
        "Buying things at a discount with a promo code",
        "Occupation opportunity for a specific gender",
        "Exhibition about electronic devices",
        "Volunteership at grocery shop",
        "Volunteery work with a little lunch provided",
        "Opportunity to drink certain beverages with discount",
        "Being able to work with pigs on the farm",
        "Job opportunity without knowledge of a particular language"
      ]
  },
  {
      image: "cafeeCoffee.jpeg",
      correct:5,
      question:'Which advertisement is about ___?',
      options: [
        "Buying things at a discount with a promo code",
        "Occupation opportunity for a specific gender",
        "Exhibition about electronic devices",
        "Volunteership at grocery shop",
        "Volunteery work with a little lunch provided",
        "Opportunity to drink certain beverages with discount",
        "Being able to work with pigs on the farm",
        "Job opportunity without knowledge of a particular language"
      ]
  },
  {
      image: "farmVolunteering.png",
      correct:4,
      question:'Which advertisement is about ___?',
      options: [
        "Buying things at a discount with a promo code",
        "Occupation opportunity for a specific gender",
        "Exhibition about electronic devices",
        "Volunteership at grocery shop",
        "Volunteery work with a little lunch provided",
        "Opportunity to drink certain beverages with discount",
        "Being able to work with pigs on the farm",
        "Job opportunity without knowledge of a particular language"
      ]
  }
]

const questionsTask2=[
    {
        correct:2,
        question:'6. How do colours primarily influence human behavior?',
        options: [
            "Colours have no significant impact on human behavior.",
            "Colours affect our physical health but not our emotions.",
            "Colours can activate particular emotions and influence decisions.",
            "Colours only influence artistic and creative fields.",
          ]
    },
    {
        correct:0,
        question:'7. What is the general psychological effect of warm colours like red and yellow?',
        options: [
            "They can stimulate energy and excitement.",
            "They tend to create a calming and relaxing atmosphere.",
            "They are often associated with negative emotions.",
            "They have no consistent psychological impact.",
            
          ]
    },
    {
        correct:2,
        question:'8. What does the phrase "cultural conditioning" mean in the context of the text?',
        options: [
            "The process of learning and adapting to a new culture.",
            "The biological basis for colour preferences.",
            "The influence of society on how we perceive colours.",
            "The personal experiences that shape colour choices.",
            
          ]
    },
    {
        correct:1,
        question:'9. According to the ecological valence theory, what is a primary reason for our colour preferences?',
        options: [
            "Personal experiences and cultural conditioning.",
            "Evolutionary processes related to survival.",
            "Marketing strategies and brand associations.",
            "Seasonal trends and fashion changes.",
            
          ]
    },
    {
        correct:3,
        question:'10. What is the practical application of color psychology?',
        options: [
            "It is primarily used in the art world.",
            "It has no real-world applications.",
            "It is only relevant to the field of psychology.",
            "It can be used to create specific atmospheres or moods.",
            
          ]
    }
  
  ]

const questionsTask3 = [
    {
      heading:'Hermanus Whale Festival, South Africa',
      text: `The charming coastal town of Hermanus, South Africa, hosts a three-day festival each September, coinciding with whale activity. The festival celebrates the return of whales to the coastal waters of Hermanus. The festival attracts 75,000-130,000 visitors annually. The Eco-Marine Tent, the heartbeat of the festival, features eco- and marine-related exhibitions, interactive displays, films, music, arts, food, and talks by marine biologists. It aims to inspire visitors about ocean conservation. Visitors enjoy the marine giants and great on-land entertainment, scenic hikes, water sports, local food, crafts, and fun activities for kids, making it a perfect destination for nature lovers and adventure seckers alike.`,
      questionText: "11.",
      options: [
        "guards the people against some natural disasters",
        "offers you to watch the animals in their natural environment",
        "is a famous music festival on a small island in the Danube River",
        "changed the original colour because of the national symbol",
        "is the oldest film festival in the world",
        "makes sky especially spectacular after dark",
        "is a remembrance of the loved ones who have passed away",
        "is not celebrated annually"
      ],
      correct: 1 // Please fill in the correct option index (0-7)
    },
    {
        heading:'Albuquerque International Balloon Fiesta, USA',
      text: "The Albuquerque International Balloon Fiesta is the world's largest hot air balloon festival, held annually in Albuquerque, New Mexico. This autumn event transforms the skies with vibrant colours and imaginative balloon shapes. The Special Shape Glowdeo is a magical event at the Albuquerque Balloon Fiesta, featuring unique hot air balloons at night, turning them into glowing, colourful lanterns. This enchanting display creates a stunning landscape of illuminated spheres. The Glowdeo includes balloons shaped like unusual animals, fantastical characters, spaceships, aliens, and more. Accompanied by music and often ending with fireworks, this event offers an inspiring experience, delighting visitors of all ages.",
      questionText: "12.",
      options: [
        "guards the people against some natural disasters",
        "offers you to watch the animals in their natural environment",
        "is a famous music festival on a small island in the Danube River",
        "changed the original colour because of the national symbol",
        "is the oldest film festival in the world",
        "makes sky especially spectacular after dark",
        "is a remembrance of the loved ones who have passed away",
        "is not celebrated annually"
      ],
      correct: 5 // Please fill in the correct option index (0-7)
    },
    {
        heading:'Dia De Los Muertos, Mexico',
      text: "Día de los Muertos, or Day of the Dead, is a two-day festival celebrated in Mexico and among Mexican communities worldwide. Held on November 1 and 2, this holiday honors deceased family members. Families come together to pray and offer the deceased their favorite food and drinks. Altars with photos and offerings are created, welcoming everyone to join in remembrance. On November 2, families visit cemeteries to clean and decorate graves. Rooted in ancient Pre-Columbian rituals, Día de los Muertos emphasizes love, respect, and the enduring connection between the living and the dead.",
      questionText: "13.",
      options: [
        "guards the people against some natural disasters",
        "offers you to watch the animals in their natural environment",
        "is a famous music festival on a small island in the Danube River",
        "changed the original colour because of the national symbol",
        "is the oldest film festival in the world",
        "makes sky especially spectacular after dark",
        "is a remembrance of the loved ones who have passed away",
        "is not celebrated annually"
      ],
      correct: 6 // Please fill in the correct option index (0-7)
    },
    {
        heading:"St. Patrick's Day",
      text: "St. Patrick's Day, observed every March 17, is packed with parades, good luck charms, and all things green. Initially a religious holiday, it has evolved into a celebration of Irish culture. St.\nPatrick, a real person, is surrounded by myths, such as chasing snakes out of Ireland, although snakes never lived there. Originally associated with blue, green became the colour of St.\nPatrick's Day in the 18th century when the green shamrock became a national symbol. Also March 17 is a day for huge celebrations in Ireland and around the world, from Boston to Tokyo. The largest parade is in New York, with 150,000 participants, followed by Dublin. Even small Irish villages have their own mini parades. St. Patrick's Day is celebrated in more countries than any other national festival,\nshowcasing\nthe\nwidespread influence of Irish culture.",
      questionText: "14.",
      options: [
        "guards the people against some natural disasters",
        "offers you to watch the animals in their natural environment",
        "is a famous music festival on a small island in the Danube River",
        "changed the original colour because of the national symbol",
        "is the oldest film festival in the world",
        "makes sky especially spectacular after dark",
        "is a remembrance of the loved ones who have passed away",
        "is not celebrated annually"
      ],
      correct: 3 // Please fill in the correct option index (0-7)
    },
    {
        heading:"Gion Matsuri, Japan",
      text: "One of the oldest festivals in the world, Gion Matsuri, dates back to 869, originating as a religious ceremony to appease the gods during a plague. Since then, it has protected Kyoto's citizens from fires, floods, and earthquakes. The highlight is the Yamahoko Float Procession, a parade featuring elaborate floats. The city is adorned with breathtaking lanterns, food stalls, and endless sake. The festival takes place over the entire month of July. A local boy is selected as a divine messenger and cannot touch the ground from July 13 until after the parade on the 17th. From July 10 to 14 and 18 to 21, visitors can watch the floats being assembled from scratch without nails.",
      questionText: "15.",
      options: [
        "guards the people against some natural disasters",
        "offers you to watch the animals in their natural environment",
        "is a famous music festival on a small island in the Danube River",
        "changed the original colour because of the national symbol",
        "is the oldest film festival in the world",
        "makes sky especially spectacular after dark",
        "is a remembrance of the loved ones who have passed away",
        "is not celebrated annually"
      ],
      correct: 0 // Please fill in the correct option index (0-7)
    },
    {
        heading:"Glastonbury Festival",
      text: "Glastonbury Festival is an outdoor cultural event featuring musical acts, performance art, and visual installations, held near Glastonbury in southwestern England. It is considered the largest greenfield music festival globally. Starting in the early 1970s, it became famous in the 1980s, featuring big music stars and new artists.\nGlastonbury keeps the 1960s \"hippie\" spirit alive with peace gardens, spiritual healers, and green spaces. The five-day festival covers 900 acres and draws over 200,000 people. To protect the land, the festival takes a break every five years.\nFamous acts include David Bowie, Beyoncé, Radiohead, Coldplay, and Dolly Parton. By 2017, more than 200,000 people attended.",
      questionText: "16.",
      options: [
        "guards the people against some natural disasters",
        "offers you to watch the animals in their natural environment",
        "is a famous music festival on a small island in the Danube River",
        "changed the original colour because of the national symbol",
        "is the oldest film festival in the world",
        "makes sky especially spectacular after dark",
        "is a remembrance of the loved ones who have passed away",
        "is not celebrated annually"
      ],
      correct: 7 // Please fill in the correct option index (0-7)
    }
  ];
  
  const questionsTask4 = [
    {
      text: "Fashion is more than just clothing; it's a way to express\nwho you are without speaking. What you wear reveals\nyour mood, and individuality, <b>(17)___</b>\nEmbracing your personal style means celebrating what\nmakes you unique. It's about choosing clothes that (18)___\n. Discover which styles, colors, and shapes make\nyou feel confident and comfortable. Whether you prefer\nclassic or bold looks, (19)___\n a style that feels\nauthentic to you. This helps you stand out and be\nmemorable.\nIncorporating trends can refresh your look, but it's\nimportant to choose trends that fit your personal style and\ncomplement your wardrobe. Don't feel pressured (20)___\n; select those that resonate with you.\nDressing appropriately for various occasions is also\nimportant. Balance your personal style with the event's\ndress code. Attention to details, such as choosing the right\naccessories and ensuring a polished appearance, can\nelevate your look.\nFashion is about creativity and self-expression. (21)___\nand adapt trends to suit your personal taste. Confidence is\nthe key to making any outfit shine. Expressing yourself\nthrough fashion is a fun way to show (22)___ and make\na lasting impression.",
      questionText: "17.",
      options: [
        "to follow every trend",
        "who you are",
        "reflect your personality and values",
        "while adding your unique flair to",
        "experiment with new styles",
        "balance with the dress code",
        "mix and match pieces to create",
        "whether you're at work, the gym, or out with friends"
      ],
      correct: 7 // Please fill in the correct option index (0-7)
    },
    {
      text: "Fashion is more than just clothing; it's a way to express\nwho you are without speaking. What you wear reveals\nyour mood, and individuality, (17)___\nEmbracing your personal style means celebrating what\nmakes you unique. It's about choosing clothes that <b>(18)___</b>\n. Discover which styles, colors, and shapes make\nyou feel confident and comfortable. Whether you prefer\nclassic or bold looks, (19)___\n a style that feels\nauthentic to you. This helps you stand out and be\nmemorable.\nIncorporating trends can refresh your look, but it's\nimportant to choose trends that fit your personal style and\ncomplement your wardrobe. Don't feel pressured (20)___\n; select those that resonate with you.\nDressing appropriately for various occasions is also\nimportant. Balance your personal style with the event's\ndress code. Attention to details, such as choosing the right\naccessories and ensuring a polished appearance, can\nelevate your look.\nFashion is about creativity and self-expression. (21)___\nand adapt trends to suit your personal taste. Confidence is\nthe key to making any outfit shine. Expressing yourself\nthrough fashion is a fun way to show (22)___ and make\na lasting impression.",
      questionText: "18.", // Corresponds to (18)___ in the text
      options: [
        "to follow every trend",
        "who you are",
        "reflect your personality and values",
        "while adding your unique flair to",
        "experiment with new styles",
        "balance with the dress code",
        "mix and match pieces to create",
        "whether you're at work, the gym, or out with friends"
      ],
      correct: 2 // Please fill in the correct option index (0-7)
    },
    {
      text: "Fashion is more than just clothing; it's a way to express\nwho you are without speaking. What you wear reveals\nyour mood, and individuality, (17)___\nEmbracing your personal style means celebrating what\nmakes you unique. It's about choosing clothes that (18)___\n. Discover which styles, colors, and shapes make\nyou feel confident and comfortable. Whether you prefer\nclassic or bold looks, <b>(19)___</b>\n a style that feels\nauthentic to you. This helps you stand out and be\nmemorable.\nIncorporating trends can refresh your look, but it's\nimportant to choose trends that fit your personal style and\ncomplement your wardrobe. Don't feel pressured (20)___\n; select those that resonate with you.\nDressing appropriately for various occasions is also\nimportant. Balance your personal style with the event's\ndress code. Attention to details, such as choosing the right\naccessories and ensuring a polished appearance, can\nelevate your look.\nFashion is about creativity and self-expression. (21)___\nand adapt trends to suit your personal taste. Confidence is\nthe key to making any outfit shine. Expressing yourself\nthrough fashion is a fun way to show (22)___ and make\na lasting impression.",
      questionText: "19.", // Corresponds to (19)___ in the text
      options: [
        "to follow every trend",
        "who you are",
        "reflect your personality and values",
        "while adding your unique flair to",
        "experiment with new styles",
        "balance with the dress code",
        "mix and match pieces to create",
        "whether you're at work, the gym, or out with friends"
      ],
      correct: 6 // Please fill in the correct option index (0-7)
    },
    {
      text: "Fashion is more than just clothing; it's a way to express\nwho you are without speaking. What you wear reveals\nyour mood, and individuality, (17)___\nEmbracing your personal style means celebrating what\nmakes you unique. It's about choosing clothes that (18)___\n. Discover which styles, colors, and shapes make\nyou feel confident and comfortable. Whether you prefer\nclassic or bold looks, (19)___\n a style that feels\nauthentic to you. This helps you stand out and be\nmemorable.\nIncorporating trends can refresh your look, but it's\nimportant to choose trends that fit your personal style and\ncomplement your wardrobe. Don't feel pressured <b>(20)___</b>\n; select those that resonate with you.\nDressing appropriately for various occasions is also\nimportant. Balance your personal style with the event's\ndress code. Attention to details, such as choosing the right\naccessories and ensuring a polished appearance, can\nelevate your look.\nFashion is about creativity and self-expression. (21)___\nand adapt trends to suit your personal taste. Confidence is\nthe key to making any outfit shine. Expressing yourself\nthrough fashion is a fun way to show (22)___ and make\na lasting impression.",
      questionText: "20.", // Corresponds to (20)___ in the text
      options: [
        "to follow every trend",
        "who you are",
        "reflect your personality and values",
        "while adding your unique flair to",
        "experiment with new styles",
        "balance with the dress code",
        "mix and match pieces to create",
        "whether you're at work, the gym, or out with friends"
      ],
      correct: 0 // Please fill in the correct option index (0-7)
    },
    {
      text: "Fashion is more than just clothing; it's a way to express\nwho you are without speaking. What you wear reveals\nyour mood, and individuality, (17)___\nEmbracing your personal style means celebrating what\nmakes you unique. It's about choosing clothes that (18)___\n. Discover which styles, colors, and shapes make\nyou feel confident and comfortable. Whether you prefer\nclassic or bold looks, (19)___\n a style that feels\nauthentic to you. This helps you stand out and be\nmemorable.\nIncorporating trends can refresh your look, but it's\nimportant to choose trends that fit your personal style and\ncomplement your wardrobe. Don't feel pressured (20)___\n; select those that resonate with you.\nDressing appropriately for various occasions is also\nimportant. Balance your personal style with the event's\ndress code. Attention to details, such as choosing the right\naccessories and ensuring a polished appearance, can\nelevate your look.\nFashion is about creativity and self-expression. <b>(21)___</b>\nand adapt trends to suit your personal taste. Confidence is\nthe key to making any outfit shine. Expressing yourself\nthrough fashion is a fun way to show (22)___ and make\na lasting impression.",
      questionText: "21.", // Corresponds to (21)___ in the text
      options: [
        "to follow every trend",
        "who you are",
        "reflect your personality and values",
        "while adding your unique flair to",
        "experiment with new styles",
        "balance with the dress code",
        "mix and match pieces to create",
        "whether you're at work, the gym, or out with friends"
      ],
      correct: 4 // Please fill in the correct option index (0-7)
    },
    {
      text: "Fashion is more than just clothing; it's a way to express\nwho you are without speaking. What you wear reveals\nyour mood, and individuality, (17)___\nEmbracing your personal style means celebrating what\nmakes you unique. It's about choosing clothes that (18)___\n. Discover which styles, colors, and shapes make\nyou feel confident and comfortable. Whether you prefer\nclassic or bold looks, (19)___\n a style that feels\nauthentic to you. This helps you stand out and be\nmemorable.\nIncorporating trends can refresh your look, but it's\nimportant to choose trends that fit your personal style and\ncomplement your wardrobe. Don't feel pressured (20)___\n; select those that resonate with you.\nDressing appropriately for various occasions is also\nimportant. Balance your personal style with the event's\ndress code. Attention to details, such as choosing the right\naccessories and ensuring a polished appearance, can\nelevate your look.\nFashion is about creativity and self-expression. (21)___\nand adapt trends to suit your personal taste. Confidence is\nthe key to making any outfit shine. Expressing yourself\nthrough fashion is a fun way to show <b>(22)___</b> and make\na lasting impression.",
      questionText: "22.", // Corresponds to (22)___ in the text
      options: [
        "to follow every trend",
        "who you are",
        "reflect your personality and values",
        "while adding your unique flair to",
        "experiment with new styles",
        "balance with the dress code",
        "mix and match pieces to create",
        "whether you're at work, the gym, or out with friends"
      ],
      correct: 1 // Please fill in the correct option index (0-7)
    }
  ];
  
  const questionsTask5 = [
    {
      text: "Tea has been a staple in Chinese culture for centuries, but recently, coffee is gaining <b>(23)___</b> In major\ncities like Beijing, coffee shops are everywhere, and global brands like Starbucks, along with businesses from\nSouth Korea and Taiwan, are (24) ___. Many young Chinese people are (25)___ to coffee, influenced\nby global trends and social settings. BeiBei Su, who has lived in the U.S. for eight years, notes that while she\nstill prefers tea, younger generations in China are increasingly enjoying coffee. Yang Lin, a Chinese\nexpatriate in the U.S., says coffee has become a social staple for her, though tea still holds sentimental (26)___\nfrom her childhood in Fujian. Despite coffee (27)___ being lower in China compared to global\naverages, it is growing by 15% annually, with domestic coffee production expanding, particularly in Yunnan",
      questionText: "23.",
      options: [
        "popularity",
        "strength",
        "anxiety",
        "ease"
      ],
      correct: 0 // Please fill in the correct option index (0-3)
    },
    {
      text: "Tea has been a staple in Chinese culture for centuries, but recently, coffee is gaining (23)___ In major\ncities like Beijing, coffee shops are everywhere, and global brands like Starbucks, along with businesses from\nSouth Korea and Taiwan, are <b>(24) ___</b>. Many young Chinese people are (25)___ to coffee, influenced\nby global trends and social settings. BeiBei Su, who has lived in the U.S. for eight years, notes that while she\nstill prefers tea, younger generations in China are increasingly enjoying coffee. Yang Lin, a Chinese\nexpatriate in the U.S., says coffee has become a social staple for her, though tea still holds sentimental (26)___\nfrom her childhood in Fujian. Despite coffee (27)___ being lower in China compared to global\naverages, it is growing by 15% annually, with domestic coffee production expanding, particularly in Yunnan",
      questionText: "24.",
      options: [
        "failing",
        "thriving",
        "declining",
        "disappearing"
      ],
      correct: 1 // Please fill in the correct option index (0-3)
    },
    {
      text: "Tea has been a staple in Chinese culture for centuries, but recently, coffee is gaining (23)___ In major\ncities like Beijing, coffee shops are everywhere, and global brands like Starbucks, along with businesses from\nSouth Korea and Taiwan, are (24) ___. Many young Chinese people are <b>(25)___</b> to coffee, influenced\nby global trends and social settings. BeiBei Su, who has lived in the U.S. for eight years, notes that while she\nstill prefers tea, younger generations in China are increasingly enjoying coffee. Yang Lin, a Chinese\nexpatriate in the U.S., says coffee has become a social staple for her, though tea still holds sentimental (26)___\nfrom her childhood in Fujian. Despite coffee (27)___ being lower in China compared to global\naverages, it is growing by 15% annually, with domestic coffee production expanding, particularly in Yunnan",
      questionText: "25.",
      options: [
        "drinking",
        "preferring",
        "exchanging",
        "shifting"
      ],
      correct: 3 // Please fill in the correct option index (0-3)
    },
    {
      text: "Tea has been a staple in Chinese culture for centuries, but recently, coffee is gaining (23)___ In major\ncities like Beijing, coffee shops are everywhere, and global brands like Starbucks, along with businesses from\nSouth Korea and Taiwan, are (24) ___. Many young Chinese people are (25)___ to coffee, influenced\nby global trends and social settings. BeiBei Su, who has lived in the U.S. for eight years, notes that while she\nstill prefers tea, younger generations in China are increasingly enjoying coffee. Yang Lin, a Chinese\nexpatriate in the U.S., says coffee has become a social staple for her, though tea still holds sentimental <b>(26)___</b>\nfrom her childhood in Fujian. Despite coffee (27)___ being lower in China compared to global\naverages, it is growing by 15% annually, with domestic coffee production expanding, particularly in Yunnan",
      questionText: "26.",
      options: [
        "value",
        "price",
        "charge",
        "cost"
      ],
      correct: 0 // Please fill in the correct option index (0-3)
    },
    {
      text: "Tea has been a staple in Chinese culture for centuries, but recently, coffee is gaining (23)___ In major\ncities like Beijing, coffee shops are everywhere, and global brands like Starbucks, along with businesses from\nSouth Korea and Taiwan, are (24) ___. Many young Chinese people are (25)___ to coffee, influenced\nby global trends and social settings. BeiBei Su, who has lived in the U.S. for eight years, notes that while she\nstill prefers tea, younger generations in China are increasingly enjoying coffee. Yang Lin, a Chinese\nexpatriate in the U.S., says coffee has become a social staple for her, though tea still holds sentimental (26)___\nfrom her childhood in Fujian. Despite coffee <b>(27)___</b> being lower in China compared to global\naverages, it is growing by 15% annually, with domestic coffee production expanding, particularly in Yunnan",
      questionText: "27.",
      options: [
        "compression",
        "consumption",
        "comparison",
        "challenge"
      ],
      correct: 1 // Please fill in the correct option index (0-3)
    }
  ];
  
  const questionsTask6 = [
    {
      text: "Some time ago archaeologists dug up a rare stash of Viking treasures in Denmark, including several ancient silver bracelets. One bracelet, which dates back to the ninth century, <b>(28)___</b>\nby Ukrainian designs, (29)___\nothers had a Scandinavian style that (30)___ influenced bangles in Ireland. According (31)___ historian Kasper Andersen, the early findings give us clues about how Vikings worked globally, from Asia to the North Atlantic. The discovery was made earlier this year by a 22-year-old student who (32)___ the treasure with a metal detector.",
      questionText: "28.",
      options: [
        "inspired",
        "was inspired",
        "was inspiring",
        "had inspired"
      ],
      correct: 1 // Please fill in the correct option index (0-3)
    },
    {
      text: "Some time ago archaeologists dug up a rare stash of Viking treasures in Denmark, including several ancient silver bracelets. One bracelet, which dates back to the ninth century, (28)___\nby Ukrainian designs, <b>(29)___</b>\nothers had a Scandinavian style that (30)___ influenced bangles in Ireland. According (31)___ historian Kasper Andersen, the early findings give us clues about how Vikings worked globally, from Asia to the North Atlantic. The discovery was made earlier this year by a 22-year-old student who (32)___ the treasure with a metal detector.",
      questionText: "29.",
      options: [
        "whose",
        "while",
        "when",
        "where"
      ],
      correct: 1 // Please fill in the correct option index (0-3)
    },
    {
      text: "Some time ago archaeologists dug up a rare stash of Viking treasures in Denmark, including several ancient silver bracelets. One bracelet, which dates back to the ninth century, (28)___\nby Ukrainian designs, (29)___\nothers had a Scandinavian style that <b>(30)___</b> influenced bangles in Ireland. According (31)___ historian Kasper Andersen, the early findings give us clues about how Vikings worked globally, from Asia to the North Atlantic. The discovery was made earlier this year by a 22-year-old student who (32)___ the treasure with a metal detector.",
      questionText: "30.",
      options: [
        "later",
        "later on",
        "later to",
        "later than"
      ],
      correct: 0 // Please fill in the correct option index (0-3)
    },
    {
      text: "Some time ago archaeologists dug up a rare stash of Viking treasures in Denmark, including several ancient silver bracelets. One bracelet, which dates back to the ninth century, (28)___\nby Ukrainian designs, (29)___\nothers had a Scandinavian style that (30)___ influenced bangles in Ireland. According <b>(31)___</b> historian Kasper Andersen, the early findings give us clues about how Vikings worked globally, from Asia to the North Atlantic. The discovery was made earlier this year by a 22-year-old student who (32)___ the treasure with a metal detector.",
      questionText: "31.",
      options: [
        "with",
        "from",
        "to",
        "on"
      ],
      correct: 2 // Please fill in the correct option index (0-3)
    },
    {
      text: "Some time ago archaeologists dug up a rare stash of Viking treasures in Denmark, including several ancient silver bracelets. One bracelet, which dates back to the ninth century, (28)___\nby Ukrainian designs, (29)___\nothers had a Scandinavian style that (30)___ influenced bangles in Ireland. According (31)___ historian Kasper Andersen, the early findings give us clues about how Vikings worked globally, from Asia to the North Atlantic. The discovery was made earlier this year by a 22-year-old student who <b>(32)___</b> the treasure with a metal detector.",
      questionText: "32.",
      options: [
        "came across",
        "came into",
        "came round",
        "came up with"
      ],
      correct: 0 // Please fill in the correct option index (0-3)
    }
  ];

  const allQuestions = [
    {correct:2},
    {correct:0},
    {correct:2},
    {correct:1},
    {correct:3},

    {correct:1},
    {correct:5},
    {correct:6},
    {correct:3},
    {correct:0},
    {correct:7},

    {correct:7},
    {correct:2},
    {correct:6},
    {correct:0},
    {correct:4},
    {correct:1},

    {correct:0},
    {correct:1},
    {correct:3},
    {correct:0},
    {correct:1},

    {correct:1},
    {correct:1},
    {correct:0},
    {correct:2},
    {correct:0},
  ]
  const questionsContainer = document.getElementById("questions");

  questions.forEach((q, index) => {
    const qNumber = index + 1;
    const div = document.createElement("div");

    div.className = "question" + (index === 0 ? " active" : "");
  
    div.innerHTML = `
      <img src="${q.image}" alt="question image" width="500px" style="margin-bottom: 20px;"><br/>
      <p style="font-weight: bold;">${q.question}</p>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
      </div>
    `;
  
    questionsContainer.appendChild(div);
  });

  questionsTask2.forEach((q, index) => {
    const qNumber = index + questionsTask2.length + 1; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML = `
      <h2 style="font-size:40px; font-weight:600">How Colours Affect Emotions and Behaviors </h2>
      <p>Colours are more than just visual elements; they play a significant role in shaping our emotions and behaviors. Understanding colour psychology helps us navigate our environment and make informed choices about colour in various aspects of our lives. </p>
        <p>Colours can evoke specific emotions and impact our behavior. For example, bright colours like red and yellow are often associated with high energy and strong emotions. Red can increase feelings of passion and urgency, making it a popular choice for stimulating action. Yellow, on the other hand, is linked to happiness and optimism, though too much can cause anxiety.</p>
      <p>Cool colours such as blue and green are known for their calming effects. Blue often creates a sense of tranquility and trust, making it a common choice for professional settings. Green, the colour of nature, promotes balance and renewal, providing a soothing atmosphere. Purple combines the calm of blue and the energy of red, fostering creativity and
sophistication.</p>
      <p>Neutral colours like gray, beige, and white do not evoke strong emotions but provide stability and balance. They are often used as backgrounds to highlight other colours or create a calming environment.</p>
      <p>Two main theories explain how we react to colours:
Associative Learning: This theory suggests that we form emotional connections to colours based on * personal experiences and <b>cultural conditioning</b>.
For example, red might evoke excitement because it is commonly used in signs that signal warnings or sales. Ecological Valence Theory: This theory posits that our preferences for certain colours have evolutionary roots. Early humans may have favored colours associated with survival, such as green for vegetation and blue for water.</p>
        <p>Cultural context significantly shapes our colour perceptions. For instance, while white represents purity and new beginnings in many Western cultures, it symbolizes mourning in some Eastern cultures. These cultural differences must be considered, especially in marketing and design, to ensure that colours communicate the intended message.</p>
        <p>To create a positive environment or enhance your mood, choose colours that align with your goals.
For a relaxing space, opt for calming cool colours.
To boost energy or motivation, incorporate warm colours like red and yellow. Balancing these with neutral tones can provide stability and focus.</p>
        <p>Understanding and using colour psychology can improve your well-being and help you create spaces that reflect your personality and desired atmosphere.</p>
        <br>
      <p style="font-weight: bold;">${q.question}</p>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
      </div>
    `

    questionsContainer.appendChild(div);
});

  questionsTask3.forEach((q,index)=>{
    const qNumber = index + questionsTask4.length + 10; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2><b>${q.heading}</b></h2>
      <br>
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText} <b>Which festival ___?</b></p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })
  
  questionsTask4.forEach((q,index)=>{
    const qNumber = index + questionsTask3.length + 20; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2 style="text-align: center; font-size:40px; font-weight:600">Expressing Yourself Through Fashion</h2>
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText}</p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })
  
  questionsTask5.forEach((q,index)=>{
    const qNumber = index + questionsTask4.length + 30; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
      
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText}</p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })
  questionsTask6.forEach((q,index)=>{
    const qNumber = index + questionsTask5.length + 40; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText}</p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })

  function markSelected(radio) {
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach(opt => opt.classList.remove("selected"));
    radio.nextElementSibling.classList.add("selected");
  }

  const Questions = document.querySelectorAll('.question'); 
const nav = document.getElementById('taskNav');
const buttons = [];
let currentQuestion=0
    Questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.textContent = i + 1;
      btn.onclick = () => showQuestion(i);
      if (i === 0) btn.classList.add('active');
      nav.appendChild(btn);
      buttons.push(btn);
    });

    function showQuestion(index) {
      Questions.forEach(q => {q.classList.remove('active');
      });
      Questions[index].classList.add('active');

      buttons.forEach(btn => btn.classList.remove('active'));
      buttons[index].classList.add('active');
      currentQuestion = index;
    }

    function checkAnswers() {
      const allQuestions = [...questions, ...questionsTask2, ...questionsTask3, ...questionsTask4, ...questionsTask5, ...questionsTask6];
      let score = 0;
      const tryAgainButton = document.getElementById('again');
      tryAgainButton.style.display = 'block';
      
      // Fix: Use document.getElementsByClassName to get elements with class 'CorrectAnswer'
      const correctAnswers = document.getElementsByClassName('CorrectAnswer');
      Array.from(correctAnswers).forEach((el) => {
        el.style.display = 'block';
      });
      
      Questions.forEach((qElement, i) => {
        const selected = qElement.querySelector('input[type="radio"]:checked');
        const selectedIndex = selected ? Array.from(qElement.querySelectorAll('input[type="radio"]')).indexOf(selected) : -1;
        const isCorrect = selectedIndex === allQuestions[i].correct;
    
        qElement.querySelectorAll('label').forEach(label => {
          label.classList.remove('correct-answer', 'incorrect-answer');
        });
    
        const correctRadio = qElement.querySelectorAll('input[type="radio"]')[allQuestions[i].correct];
        if (correctRadio && correctRadio.nextElementSibling) {
          correctRadio.nextElementSibling.classList.add('correct-answer');
        }
    
        if (selected && !isCorrect && selected.nextElementSibling) {
          selected.nextElementSibling.classList.add('incorrect-answer');
        }
    
        buttons[i].classList.remove('correct-answer', 'incorrect-answer');
        if (isCorrect) {
          score++;
          buttons[i].classList.add('correct-answer');
        } else {
          buttons[i].classList.add('incorrect-answer');
        }
    
        qElement.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = true;
        });
      });
    
      document.getElementById('result').textContent = `Ваш результат: ${score} з ${allQuestions.length}`;
    }
      
    

    function nextQuestion() {
      // Hide current question
      Questions[currentQuestion].classList.remove('active');
      buttons[currentQuestion].classList.remove('active');

      // Move to next question
      currentQuestion = (currentQuestion + 1) % Questions.length;

      // Show the next question
      Questions[currentQuestion].classList.add('active');
      buttons[currentQuestion].classList.add('active');
    }
    function tryAgain() {
      buttons.length = 0;
      nav.innerHTML = '';
      const correctAnswers = document.getElementsByClassName('CorrectAnswer');
      Array.from(correctAnswers).forEach((el) => {
        el.style.display = 'none';
      });
    
      Questions.forEach((q, i) => {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        btn.onclick = () => showQuestion(i);
        if (i === 0) btn.classList.add('active');
        nav.appendChild(btn);
        buttons.push(btn);
    
        // Reset all radio buttons and styling
        q.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = false;
          radio.checked = false;
        });
    
        // Remove correct-answer, incorrect-answer, and selected classes from option-btn divs
        q.querySelectorAll('.option-btn').forEach(option => {
          option.classList.remove('correct-answer', 'incorrect-answer', 'selected');
        });
      });
    
      showQuestion(0);
      document.getElementById('result').textContent = '';
      document.getElementById('again').style.display = 'none';
    }
