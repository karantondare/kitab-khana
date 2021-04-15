const products = [
  {
    name: "Becoming",
    image: "/images/becoming.jpg",
    description:
      "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address.With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms.Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same.",
    author: "Michelle Obama",
    category: "Nonfiction",
    price: 699,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Suheldev & the Battle of Bahraich",
    image: "/images/suheldev-the-battle-of-bahraich.jpg",
    description:
      "A Forgotten Hero. An Unforgettable Battle. India, 1025 AD. Repeated attacks by Mahmud of Ghazni and his barbaric Turkic hordes have weakened India’s northern regions. The invaders lay waste to vast swathes of the subcontinent—plundering, killing, raping, pillaging. Many of the old Indian kingdoms, tired and divided, fall to them. Those who do fight, battle with old codes of chivalry, and are unable to stop the savage Turkic army which repeatedly breaks all rules to win. Then the Turks raid and destroy one of the holiest temples in the land: the magnificent Lord Shiva temple at Somnath. At this most desperate of times, a warrior rises to defend the nation.King Suheldev - The ruler of a small kingdom, he sees what must be done for his motherland, and is willing to sacrifice his all for it. A fierce rebel. A charismatic leader. An inclusive patriot.",
    author: "Amish Tripathi",
    category: "Fiction",
    price: 399,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "The Tattooist of Auschwitz",
    image: "/images/the-tattooist-of-auschwitz.jpg",
    description:
      "In April 1942, Lale Sokolov, a Slovakian Jew, is forcibly transported to the concentration camps at Auschwitz-Birkenau. When his captors discover that he speaks several languages, he is put to work as a Tätowierer (the German word for tattooist), tasked with permanently marking his fellow prisoners. Imprisoned for more than two and a half years, Lale witnesses horrific atrocities and barbarism—but also incredible acts of bravery and compassion. Risking his own life, he uses his privileged position to exchange jewels and money from murdered Jews for food to keep his fellow prisoners alive. One day in July 1942, Lale, prisoner 32407, comforts a trembling young woman waiting in line to have the number 34902 tattooed onto her arm. Her name is Gita, and in that first encounter, Lale vows to somehow survive the camp and marry her. A vivid, harrowing, and ultimately hopeful re-creation of Lale Sokolov's experiences as the man who tattooed the arms of thousands of prisoners with what would become one of the most potent symbols of the Holocaust, The Tattooist of Auschwitz is also a testament to the endurance of love and humanity under the darkest possible conditions.",
    author: "Heather Morris",
    category: "Historical Fiction",
    price: 799,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "And Then There Were None",
    image: "/images/and-then-there-were-none.jpg",
    description:
      "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion: 'Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he'd stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got in Chancery and then there were four. Four little boys going out to sea; A red herring swallowed one and then there were three. Three little boys walking in the zoo; A big bear hugged one and then there were two. Two little boys sitting in the sun; One got frizzled up and then there was one. One little boy left all alone; He went out and hanged himself and then there were none.' When they realize that murders are occurring as described in the rhyme, terror mounts. One by one they fall prey. Before the weekend is out, there will be none. Who has choreographed this dastardly scheme? And who will be left to tell the tale? Only the dead are above suspicion. ",
    author: "Agatha Christie",
    category: "Mystery & Thriller",
    price: 399,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "1984",
    image: "/images/1984.jpg",
    description:
      "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
    category: "Fiction",
    author: "George Orwell",
    price: 249,
    countInStock: 7,
    rating: 4,
    numReviews: 10,
  },
  {
    name: "A Short History of Nearly Everything",
    image: "/images/a-short-history-of-nearly-everything.jpg",
    description:
      "In Bryson's biggest book, he confronts his greatest challenge: to understand—and, if possible, answer—the oldest, biggest questions we have posed about the universe and ourselves. Taking as territory everything from the Big Bang to the rise of civilization, Bryson seeks to understand how we got from there being nothing at all to there being us. To that end, he has attached himself to a host of the world’s most advanced (and often obsessed) archaeologists, anthropologists, and mathematicians, travelling to their offices, laboratories, and field camps. He has read (or tried to read) their books, pestered them with questions, apprenticed himself to their powerful minds. A Short History of Nearly Everything is the record of this quest, and it is a sometimes profound, sometimes funny, and always supremely clear and entertaining adventure in the realms of human knowledge, as only Bill Bryson can render it. Science has never been more involving or entertaining.",
    author: "Bill Bryson",
    category: "Nonfiction",
    price: 399,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "The Girl with the Dragon Tattoo",
    image: "/images/the-girl-with-the-dragon-tattoo.jpg",
    description:
      "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption. An international publishing sensation, Stieg Larsson’s The Girl with the Dragon Tattoo combines murder mystery, family saga, love story, and financial intrigue into one satisfyingly complex and entertainingly atmospheric novel. ",
    author: "Stieg Larsson",
    category: "Mystery & Thriller",
    price: 449,
    countInStock: 8,
    rating: 3.5,
    numReviews: 5,
  },
  {
    name: "The Diary of a Young Girl",
    image: "/images/the-diary-of-a-young-girl.jpg",
    description:
      "Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit. In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.",
    author: "Anne Frank",
    category: "Nonfiction",
    price: 249,
    countInStock: 14,
    rating: 4.5,
    numReviews: 17,
  },
];

export default products;
