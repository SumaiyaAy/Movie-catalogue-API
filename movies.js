const movies = [
  {
    id: 1,
    title: "Inception",
    releaseYear: 2010,
    genre: "Sci-Fi",
    actorIds: [1,4],
    imageURL: "/images/inception.png",
    synopsis: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move."
  },

  {
    id: 2,
    title: "Interstellar",
    releaseYear: 2014,
    genre: "Sci-Fi",
    actorIds: [3,8],
    imageURL: "/images/interstellar.png",
    synopsis: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
  },

  {
    id: 3,
    title: "Iron Man",
    releaseYear: 2008,
    genre: "Sci-Fi",
    actorIds: [6],
    imageURL: "/images/ironman.png",
    synopsis: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism."
  },

  {
    id: 4,
    title: "The Martian",
    releaseYear: 2015,
    genre: "Sci-Fi",
    actorIds: [8],
    imageURL: "/images/themartian.png",
    synopsis: "When astronauts blast off from the planet Mars, they leave behind Mark Watney, presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission."
  },

  {
    id: 5,
    title: "Harry Potter and the philosopher's stone",
    releaseYear: [2001],
    genre: "Fantasy",
    actorIds: [2],
    imageURL: "/images/hp.png",
    synopsis: "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."
  },

  {
    id: 6,
    title: "Beauty and the beast",
    releaseYear: 2017,
    genre: "Fantasy" ,
    actorIds: [2],
    imageURL: "/images/beauty.png",
    synopsis: "An arrogant prince is cursed to live as a terrifying beast until he finds true love. Strangely, his chance comes when he captures an unwary clockmaker, whose place is then taken by his bold and beautiful daughter Belle. Helped by the Beast's similarly enchanted servants, including a clock, a teapot and a candelabra, Belle begins to see the sensitive soul behind the fearsome facade. But as time runs out, it soon becomes obvious that Belle's cocky suitor Gaston is the real beast of the piece."
  },

  {
    id: 7,
    title: "Alice in Wonderland",
    releaseYear: 2010,
    genre: "Fantasy" ,
    actorIds: [3,9],
    imageURL: "/images/alice.png",
    synopsis: "A young girl when she first visited magical Underland, Alice Kingsleigh is now a teenager with no memory of the place -- except in her dreams. Her life takes a turn for the unexpected when, at a garden party for her fiancé and herself, she spots a certain white rabbit and tumbles down a hole after him. Reunited with her friends the Mad Hatter, the Cheshire Cat and others, Alice learns it is her destiny to end the Red Queen's reign of terror."
  },

  {
    id: 8,
    title: "Charlie and the Chocolate Factory",
    releaseYear: 2005,
    genre: "Fantasy" ,
    actorIds: [9],
    imageURL: "/images/charlie.png",
    synopsis: "Based on the beloved Roald Dahl tale, this comedic and fantastical film follows young Charlie Bucket (Freddie Highmore) and his Grandpa Joe (David Kelly) as they join a small group of contest winners who get to tour the magical and mysterious factory of eccentric candy maker Willy Wonka (Johnny Depp). Aided by his diminutive Oompa Loompa workers (Deep Roy), Wonka has a hidden motivation for the tour, one that he will reveal only after the children in the group show their true colors."
  },

  {
    id: 9,
    title: "Titanic",
    releaseYear: 1997,
    genre: "Drama",
    actorIds: [1],
    imageURL: "/images/titanic.png",
    synopsis: "Poor artist Jack and rich debutante Rose fall in love with each other while aboard the unsinkable Titanic. However, the trip takes a turn for the worse when the ship hits an iceberg."
  },

  {
    id: 10,
    title: "Little women",
    releaseYear: 2019,
    genre: 'Drama',
    actorIds: [2],
    imageURL: "/images/littlewomen.png",
    synopsis: "In the years after the Civil War, Jo March lives in New York and makes her living as a writer, while her sister Amy studies painting in Paris. Amy has a chance encounter with Theodore, a childhood crush who proposed to Jo but was ultimately rejected. Their oldest sibling, Meg, is married to a schoolteacher, while shy sister Beth develops a devastating illness that brings the family back together"
  },

  {
    id: 11,
    title: "Oppenheimer",
    releaseYear: 2023,
    genre: "Drama",
    actorIds: [4,6,7],
    imageURL: "/images/oppen.png",
    synopsis: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history."
  },

  {
    id: 12,
    title: "The Devil Wears Prada",
    releaseYear: 2006,
    genre: "Drama" ,
    actorIds: [3,7],
    imageURL: "/images/prada.png",
    synopsis: "Andy is a recent college graduate with big dreams. Upon landing a job at prestigious Runway magazine, she finds herself the assistant to diabolical editor Miranda Priestly. Andy questions her ability to survive her grim tour as Miranda's whipping girl without getting scorched."
  },

  {
    id: 13,
    title: "The Notebook",
    releaseYear: 2004,
    genre: "Romance" ,
    actorIds: [5],
    imageURL: "/images/notebook.png",
    synopsis: "In the 1940s South Carolina, mill worker Noah Calhoun (Ryan Gosling) and rich girl Allie (Rachel McAdams) are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man (James Marsden). But when Noah returns to their small town years later, on the cusp of Allie's marriage, it soon becomes clear that their romance is anything but over."
  },

  {
    id: 14,
    title: "LaLa Land",
    releaseYear: 2016,
    genre: "Romance" ,
    actorIds: [5],
    imageURL: "/images/lala.png",
    synopsis: "Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart."
  },

  {
    id: 15,
    title: "Romeo + Juliet",
    releaseYear: 1996,
    genre: "Romance" ,
    actorIds: [1],
    imageURL: "/images/romeo.png",
    synopsis: "Baz Luhrmann helped adapt this classic Shakespearean romantic tragedy for the screen, updating the setting to a post-modern city named Verona Beach. In this version, the Capulets and the Montagues are two rival gangs. Juliet (Claire Danes) is attending a costume ball thrown by her parents. Her father Fulgencio Capulet (Paul Sorvino) has arranged her marriage to the boorish Paris (Paul Rudd) as part of a strategic investment plan. Romeo attends the masked ball and he and Juliet fall in love."
  },

  {
    id: 16,
    title: "Crazy, Stupid, Love",
    releaseYear: 2011,
    genre: "Romance" ,
    actorIds: [5],
    imageURL: "/images/crazy.png",
    synopsis: "Cal Weaver is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily. Cal's seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce. Over 40 and suddenly single, Cal is adrift in the fickle world of dating. Enter, Jacob Palmer (Ryan Gosling), a self-styled player who takes Cal under his wing and teaches him how to be a hit with the ladies."
  }

]

module.exports = movies
