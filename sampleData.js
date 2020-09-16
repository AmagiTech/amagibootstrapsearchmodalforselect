var commonWordsData = [
  { "value": "1", "display": "claim – I claim to be a fast reader, but actually I am average." }
  , { "value": "2", "display": "be – Will you be my friend?" }
  , { "value": "3", "display": "and – You and I will always be friends." }
  , { "value": "4", "display": "of – Today is the first of November." }
  , { "value": "5", "display": "a – I saw a bear today." }
  , { "value": "6", "display": "in – She is in her room." }
  , { "value": "7", "display": "to – Let’s go to the park." }
  , { "value": "8", "display": "have – I have a few questions." }
  , { "value": "9", "display": "too – I like her too." }
  , { "value": "10", "display": "it – It is sunny outside." }
  , { "value": "11", "display": "I – I really like it here." }
  , { "value": "12", "display": "that – That door is open." }
  , { "value": "13", "display": "for – This letter is for you." }
  , { "value": "14", "display": "you – You are really nice." }
  , { "value": "15", "display": "he – He is my brother." }
  , { "value": "16", "display": "with – I want to go with you." }
  , { "value": "17", "display": "on – I watch movies on my iPad." }
  , { "value": "18", "display": "do – What will you do now?" }
  , { "value": "19", "display": "say – Can I say something?" }
  , { "value": "20", "display": "this – This is my favorite cookie." }
  , { "value": "21", "display": "they – They are here!" }
  , { "value": "22", "display": "at – Can you pick me up at the mall?" }
  , { "value": "23", "display": "but – I’m sorry but she’s away." }
  , { "value": "24", "display": "we – We are going to watch a movie." }
  , { "value": "25", "display": "his – This is his box." }
  , { "value": "26", "display": "from – This card came from my cousin." }
  , { "value": "27", "display": "that – That’s a really cool trick!" }
  , { "value": "28", "display": "not – That’s not what I want." }
  , { "value": "29", "display": "can’t – I can’t open it." }
  , { "value": "30", "display": "won’t – I won’t open it." }
  , { "value": "31", "display": "by – Will you come by and see me?" }
  , { "value": "32", "display": "she – She is very happy." }
  , { "value": "33", "display": "or – Do you like blue or yellow?" }
  , { "value": "34", "display": "as – Her role as an English teacher is very important." }
  , { "value": "35", "display": "what – What are you thinking of?" }
  , { "value": "36", "display": "go – I want to go there." }
  , { "value": "37", "display": "their – This is their house." }
  , { "value": "38", "display": "can – What can I do for you?" }
  , { "value": "39", "display": "who – Who can help me?" }
  , { "value": "40", "display": "get – Can you get me my eyeglasses?" }
  , { "value": "41", "display": "if – What if I fail?" }
  , { "value": "42", "display": "would – Would you help me out?" }
  , { "value": "43", "display": "her – I have her book." }
  , { "value": "44", "display": "all – All my favorite books are on this shelf." }
  , { "value": "45", "display": "my – My mom is coming to visit." }
  , { "value": "46", "display": "make – Can we make our projects together?" }
  , { "value": "47", "display": "about – What is this movie about?" }
  , { "value": "48", "display": "know – Do you know where this place is?" }
  , { "value": "49", "display": "will – I will help you find that place." }
  , { "value": "50", "display": "as – As soon as she’s here, I’ll talk to her." }
  , { "value": "51", "display": "up – I live up in the mountains." }
  , { "value": "52", "display": "one – She is one of my English teachers." }
  , { "value": "53", "display": "time – There was a time I liked to play golf." }
  , { "value": "54", "display": "there – There are so many things I want to learn." }
  , { "value": "55", "display": "year – This is the year I’m finally going to learn English." }
  , { "value": "56", "display": "so – I am so sorry." }
  , { "value": "57", "display": "think – I think I need to lie down." }
  , { "value": "58", "display": "when – When will I see you again?" }
  , { "value": "59", "display": "which – Which of these slippers are yours?" }
  , { "value": "60", "display": "them – Please give this to them." }
  , { "value": "61", "display": "some – Please give them some of the apples I brought home." }
  , { "value": "62", "display": "me – Can you give me some apples?" }
  , { "value": "63", "display": "people – There are so many people at the mall today." }
  , { "value": "64", "display": "take – Please take home some of these apples" }
  , { "value": "65", "display": "out – Please throw the trash out." }
  , { "value": "66", "display": "into – My puppy ran into the woods." }
  , { "value": "67", "display": "just – Just close your eyes." }
  , { "value": "68", "display": "see – Did you see that?" }
  , { "value": "69", "display": "him – I heard him singing earlier." }
  , { "value": "70", "display": "your – Your mom is here." }
  , { "value": "71", "display": "come – Can your mom and dad come to the party?" }
  , { "value": "72", "display": "could – Could you help me with my project?" }
  , { "value": "73", "display": "now – I want to watch this now." }
  , { "value": "74", "display": "than – I like this cake better than the other one you showed me." }
  , { "value": "75", "display": "like – I like this bag better than the other one you showed me." }
  , { "value": "76", "display": "other – I like these shoes better than the other ones you showed me." }
  , { "value": "77", "display": "how – How do I turn this on?" }
  , { "value": "78", "display": "then – We had breakfast and then we went to church." }
  , { "value": "79", "display": "its – I need to read its manual." }
  , { "value": "80", "display": "our – This is our home now." }
  , { "value": "81", "display": "two – Two cheeseburgers, please." }
  , { "value": "82", "display": "more – Can I have some more milk shake?" }
  , { "value": "83", "display": "these – Do you like these ribbons?" }
  , { "value": "84", "display": "want – Do you want these ribbons?" }
  , { "value": "85", "display": "way – Can you look this way?" }
  , { "value": "86", "display": "look – Please look this way." }
  , { "value": "87", "display": "first – She was my very first teacher." }
  , { "value": "88", "display": "also – She was also my best friend." }
  , { "value": "89", "display": "new – I have new shoes." }
  , { "value": "90", "display": "because – I am crying because I’m sad." }
  , { "value": "91", "display": "day – Today is National Friendship day." }
  , { "value": "92", "display": "more – I have more stickers at home." }
  , { "value": "93", "display": "use – How do I use this?" }
  , { "value": "94", "display": "no – There’s no electricity now." }
  , { "value": "95", "display": "man – There’s a man outside looking for you." }
  , { "value": "96", "display": "find – Where can I find rare furniture?" }
  , { "value": "97", "display": "here – My mom is here." }
  , { "value": "98", "display": "thing – One thing led to another." }
  , { "value": "99", "display": "give – Give her these pearls." }
  , { "value": "100", "display": "many – We shared many dreams together." }
  , { "value": "101", "display": "well – You know me so well." }
  , { "value": "102", "display": "only – You are my only friend here." }
  , { "value": "103", "display": "those – Those boots belong to my friend." }
  , { "value": "104", "display": "tell – Can you tell me which way to go?" }
  , { "value": "105", "display": "one – She’s the one he’s been waiting for." }
  , { "value": "106", "display": "very – I’m very upset right now." }
  , { "value": "107", "display": "her – Her grandmother is sick." }
  , { "value": "108", "display": "even – She can’t even stand on her own." }
  , { "value": "109", "display": "back – I’ll be right back." }
  , { "value": "110", "display": "any – Have you had any luck on your research?" }
  , { "value": "111", "display": "good – You’re a good person." }
  , { "value": "112", "display": "woman – That woman looks so polished." }
  , { "value": "113", "display": "through – Your faith will see you through tough times." }
  , { "value": "114", "display": "us – Do you want to go with us?" }
  , { "value": "115", "display": "life – This is the best day of my life." }
  , { "value": "116", "display": "child – I just saw a child cross the street by herself." }
  , { "value": "117", "display": "there – Did you go there?" }
  , { "value": "118", "display": "work – I have to go to work." }
  , { "value": "119", "display": "down – Let’s go down." }
  , { "value": "120", "display": "may – You may take your seats." }
  , { "value": "121", "display": "after – Let’s have dinner after work." }
  , { "value": "122", "display": "should – Should I buy this dress?" }
  , { "value": "123", "display": "call – Call me when you get home, okay?" }
  , { "value": "124", "display": "world – I want to travel and see the world." }
  , { "value": "125", "display": "over – I can’t wait for this day to be over." }
  , { "value": "126", "display": "school – My cousin goes to school here." }
  , { "value": "127", "display": "still – I still think you should go." }
  , { "value": "128", "display": "try – Can you try to be nicer to him?" }
  , { "value": "129", "display": "in – What’s in that box?" }
  , { "value": "130", "display": "as – As soon as I get home, I’m going to start watching that series." }
  , { "value": "131", "display": "last – This is my last slice of cake, I promise!" }
  , { "value": "132", "display": "ask – Can you ask the waiter to bring us some wine?" }
  , { "value": "133", "display": "need – I need some wine tonight!" }
  , { "value": "134", "display": "too – I need some wine, too!" }
  , { "value": "135", "display": "feel – I feel so tired, I just need to relax and unwind." }
  , { "value": "136", "display": "three – I have three sisters." }
  , { "value": "137", "display": "when – When was the last time you saw them?" }
  , { "value": "138", "display": "state – Check out the state of that shed, it’s falling apart." }
  , { "value": "139", "display": "never – I’m never going to drink wine again." }
  , { "value": "140", "display": "become – Over the years we’ve become really close." }
  , { "value": "141", "display": "between – This is just between you and me." }
  , { "value": "142", "display": "high – Give me a high five!" }
  , { "value": "143", "display": "really – I really like your painting!" }
  , { "value": "144", "display": "something – I have something for you." }
  , { "value": "145", "display": "most – She’s the most beautiful girl I’ve ever seen." }
  , { "value": "146", "display": "another – I’ll have another glass of wine, please." }
  , { "value": "147", "display": "much – I love you guys so much." }
  , { "value": "148", "display": "family – You are like family to me." }
  , { "value": "149", "display": "own – I want to get my own place." }
  , { "value": "150", "display": "out – Get out of my room." }
  , { "value": "151", "display": "leave – I want you to leave." }
  , { "value": "152", "display": "put – Please put down that book and listen to me." }
  , { "value": "153", "display": "old – I feel so old!" }
  , { "value": "154", "display": "while – I can wait for you here while you shop." }
  , { "value": "155", "display": "mean – I didn’t mean to sound so angry." }
  , { "value": "156", "display": "on – Can you turn on the lights?" }
  , { "value": "157", "display": "keep – Can we keep the lights on tonight?" }
  , { "value": "158", "display": "student – I’ve always been a diligent student." }
  , { "value": "159", "display": "why – This is why I don’t go out anymore." }
  , { "value": "160", "display": "let – Why won’t you let him know how you feel?" }
  , { "value": "161", "display": "great – This ice cream place is great for families with kids!" }
  , { "value": "162", "display": "same – Hey, we’re wearing the same shirt!" }
  , { "value": "163", "display": "big – I have this big crush on Brad Pitt." }
  , { "value": "164", "display": "group – The group sitting across our table is so noisy." }
  , { "value": "165", "display": "begin – Where do I begin with this huge project?" }
  , { "value": "166", "display": "seem – She may seem quiet, but she’s really outgoing once you get to know her." }
  , { "value": "167", "display": "country – Japan is such a beautiful country!" }
  , { "value": "168", "display": "help – I need help with my Math homework." }
  , { "value": "169", "display": "talk – Can we talk in private?" }
  , { "value": "170", "display": "where – Where were you last night?" }
  , { "value": "171", "display": "turn – If only I could turn back time." }
  , { "value": "172", "display": "problem – The problem is we think we have plenty of time." }
  , { "value": "173", "display": "every – Every person has his own big goal to fulfill." }
  , { "value": "174", "display": "start – This is a great to start to learn the English language." }
  , { "value": "175", "display": "hand – Don’t let go of my hand." }
  , { "value": "176", "display": "might – This might actually work." }
  , { "value": "177", "display": "American – The American culture is so dynamic." }
  , { "value": "178", "display": "show – Can you show me how to use this vacuum cleaner?" }
  , { "value": "179", "display": "part – This is my favorite part of the movie!" }
  , { "value": "180", "display": "about – What is the story about?" }
  , { "value": "181", "display": "against – I am so against domestic abuse!" }
  , { "value": "182", "display": "place – This place is wonderful!" }
  , { "value": "183", "display": "over – She kept saying this over and over again." }
  , { "value": "184", "display": "such – He is such an annoying person." }
  , { "value": "185", "display": "again – Can we play that game again?" }
  , { "value": "186", "display": "few – Just a few more errands and I’m done!" }
  , { "value": "187", "display": "case – What an interesting case you are working on now!" }
  , { "value": "188", "display": "most – That’s the most interesting story I’ve ever heard." }
  , { "value": "189", "display": "week – I had a rough week." }
  , { "value": "190", "display": "company – Will you keep me company?" }
  , { "value": "191", "display": "where – Where are we going?" }
  , { "value": "192", "display": "system – What’s wrong with the airport’s system?" }
  , { "value": "193", "display": "each – Can you give each of them an apple?" }
  , { "value": "194", "display": "right – I’m right this time." }
  , { "value": "195", "display": "program – This community program for teens is really helpful." }
  , { "value": "196", "display": "hear – Did you hear that?" }
  , { "value": "197", "display": "so – I’m so sleepy." }
  , { "value": "198", "display": "question – I have a question for you." }
  , { "value": "199", "display": "during – During the session, I saw him fall asleep." }
  , { "value": "200", "display": "work – I have to work this weekend." }
  , { "value": "201", "display": "play – We can play soccer next weekend instead." }
  , { "value": "202", "display": "government – I hope the government does something about the poverty in this country." }
  , { "value": "203", "display": "run – If you see a bear here, run for your life." }
  , { "value": "204", "display": "small – I have a small favor to ask you." }
  , { "value": "205", "display": "number – I have a number of favors to ask you." }
  , { "value": "206", "display": "off – Please turn off the television." }
  , { "value": "207", "display": "always – I always bring pepper spray with me." }
  , { "value": "208", "display": "move – Let’s move on to the next tourist spot." }
  , { "value": "209", "display": "like – I really like you." }
  , { "value": "210", "display": "night – The night is young." }
  , { "value": "211", "display": "live – I’m going to live like there’s no tomorrow." }
  , { "value": "212", "display": "Mr. – Mr. Morris is here." }
  , { "value": "213", "display": "point – You have a point." }
  , { "value": "214", "display": "believe – I believe in you." }
  , { "value": "215", "display": "hold – Just hold my hand." }
  , { "value": "216", "display": "today – I’m going to see you today." }
  , { "value": "217", "display": "bring – Please bring a pen." }
  , { "value": "218", "display": "happen – What will happen if you don’t submit your report on time?" }
  , { "value": "219", "display": "next – This is the next best thing." }
  , { "value": "220", "display": "without – I can’t live without my phone." }
  , { "value": "221", "display": "before – Before I go to bed I always wash my face." }
  , { "value": "222", "display": "large – There’s a large amount of data online about that topic." }
  , { "value": "223", "display": "all – That’s all I know about Dinosaurs." }
  , { "value": "224", "display": "million – I have a million questions about this book." }
  , { "value": "225", "display": "must – We must watch this movie together." }
  , { "value": "226", "display": "home – Can we go home now?" }
  , { "value": "227", "display": "under – I hid it under my bed." }
  , { "value": "228", "display": "water – I filled the tub with water." }
  , { "value": "229", "display": "room – His room is at the end of the corridor." }
  , { "value": "230", "display": "write – Can you write me a prescription for this?" }
  , { "value": "231", "display": "mother – His mother is a very lovely woman." }
  , { "value": "232", "display": "area – This area of this house needs to be fixed." }
  , { "value": "233", "display": "national – That virus has become a national concern." }
  , { "value": "234", "display": "money – She needs money to buy her medicine." }
  , { "value": "235", "display": "story – She shared her story to the media." }
  , { "value": "236", "display": "young – She is so young and so hopeful." }
  , { "value": "237", "display": "fact – It’s a fact: shopping can improve your mood." }
  , { "value": "238", "display": "month – It’s that time of the month!" }
  , { "value": "239", "display": "different – Just because she’s different, it doesn’t mean she’s bad." }
  , { "value": "240", "display": "lot – You have a lot of explaining to do." }
  , { "value": "241", "display": "right – Turn right when you reach the corner." }
  , { "value": "242", "display": "study – Let’s study our English lessons together." }
  , { "value": "243", "display": "book – Can I borrow your English book?" }
  , { "value": "244", "display": "eye – She has the pink eye." }
  , { "value": "245", "display": "job – I love my job." }
  , { "value": "246", "display": "word – Describe yourself in one word." }
  , { "value": "247", "display": "though – Though you are angry now, I’m sure you will forget about this later." }
  , { "value": "248", "display": "business – His business is thriving." }
  , { "value": "249", "display": "issue – This is not an issue for me." }
  , { "value": "250", "display": "side – Whose side are you on, anyway?" }
  , { "value": "251", "display": "kind – Always be kind, even to strangers." }
  , { "value": "252", "display": "four – There are four seasons in a year." }
  , { "value": "253", "display": "head – Let’s head back, it’s freezing out here." }
  , { "value": "254", "display": "far – We’ve gone too far and now we’re lost." }
  , { "value": "255", "display": "black – She has long, black hair." }
  , { "value": "256", "display": "long – She has long, brown hair." }
  , { "value": "257", "display": "both – They both love chocolate ice cream." }
  , { "value": "258", "display": "little – I have two little boys with me now." }
  , { "value": "259", "display": "house – The house is so quiet without you." }
  , { "value": "260", "display": "yes – I hope you say yes." }
  , { "value": "261", "display": "after – After all this time, he has finally learned to love." }
  , { "value": "262", "display": "since – Ever since his mom died, he has been cranky and angry at the world." }
  , { "value": "263", "display": "long – That was such a long time ago." }
  , { "value": "264", "display": "provide – Please provide me with a list of your services." }
  , { "value": "265", "display": "service – Do you have a specific dental service to treat this?" }
  , { "value": "266", "display": "around – We went around the block." }
  , { "value": "267", "display": "friend – You’re a good friend." }
  , { "value": "268", "display": "important – You’re important to me." }
  , { "value": "269", "display": "father – My father is so important to me." }
  , { "value": "270", "display": "sit – Let’s sit outside together." }
  , { "value": "271", "display": "away – He’s away right now." }
  , { "value": "272", "display": "until – Until when will you be away?" }
  , { "value": "273", "display": "power – With great power comes great responsibility." }
  , { "value": "274", "display": "hour – I’ve been checking his temperature every hour." }
  , { "value": "275", "display": "game – Let’s play a game." }
  , { "value": "276", "display": "often – I buy from his bakery as often as I can." }
  , { "value": "277", "display": "yet – He’s not yet home." }
  , { "value": "278", "display": "line – There’s a long line at the grocery cashier." }
  , { "value": "279", "display": "political – I stay away from political discussions." }
  , { "value": "280", "display": "end – It’s the end of an era." }
  , { "value": "281", "display": "among – Among all my pets, he’s my most favorite." }
  , { "value": "282", "display": "ever – Have you ever tried this cake?" }
  , { "value": "283", "display": "stand – Can you stand still for a minute?" }
  , { "value": "284", "display": "bad – What you did was so bad." }
  , { "value": "285", "display": "lose – I can’t lose you." }
  , { "value": "286", "display": "however – I want to buy this bag, however, I need to save up for it first." }
  , { "value": "287", "display": "member – She’s a member of the babysitter’s club." }
  , { "value": "288", "display": "pay – Let’s pay for our groceries." }
  , { "value": "289", "display": "law – There’s a law against jay-walking." }
  , { "value": "290", "display": "meet – I want you to meet my aunt." }
  , { "value": "291", "display": "car – Let’s go inside my car." }
  , { "value": "292", "display": "city – This is the city that never sleeps." }
  , { "value": "293", "display": "almost – I’m almost done with my report." }
  , { "value": "294", "display": "include – Did you remember to include the summary in your report?" }
  , { "value": "295", "display": "continue – Can we continue working tomorrow?" }
  , { "value": "296", "display": "set – Great, let me set an appointment for you." }
  , { "value": "297", "display": "later – I’ll finish it later." }
  , { "value": "298", "display": "community – Our community is very tight knit." }
  , { "value": "299", "display": "much – There’s so much to learn in the English language." }
  , { "value": "300", "display": "name – What’s your name?" }
  , { "value": "301", "display": "five – I can give you five reasons why you need to watch that video." }
  , { "value": "302", "display": "once – I once had a puppy named Bark." }
  , { "value": "303", "display": "white – I love my white sneakers." }
  , { "value": "304", "display": "least – She’s the least productive among all the employees." }
  , { "value": "305", "display": "president – She was our class president back in high school." }
  , { "value": "306", "display": "learn – I’d love to learn more about the English language." }
  , { "value": "307", "display": "real – What is her real name?" }
  , { "value": "308", "display": "change – What can we change so that things will get better?" }
  , { "value": "309", "display": "team – They hired a team to do the design of their new office." }
  , { "value": "310", "display": "minute – She’s laughing every minute of every day." }
  , { "value": "311", "display": "best – This is the best potato salad I’ve ever tasted." }
  , { "value": "312", "display": "several – I have several old clothes I need to donate." }
  , { "value": "313", "display": "idea – It was your idea to go to the beach, remember?" }
  , { "value": "314", "display": "kid – I loved that toy when I was a kid." }
  , { "value": "315", "display": "body – She worked out hard to achieve a toned body." }
  , { "value": "316", "display": "information – This is the information I need." }
  , { "value": "317", "display": "nothing – There’s nothing we can do now." }
  , { "value": "318", "display": "ago – Three years ago, I visited Japan for the first time." }
  , { "value": "319", "display": "right – You’re right, I want to go back there." }
  , { "value": "320", "display": "lead – Just lead the way and I’ll follow." }
  , { "value": "321", "display": "social – I feel awkward in these social gatherings." }
  , { "value": "322", "display": "understand – I understand how you feel." }
  , { "value": "323", "display": "whether – Whether in big groups or small groups, I always feel a little shy at first." }
  , { "value": "324", "display": "back – Looking back, I knew I was always an introvert." }
  , { "value": "325", "display": "watch – Let’s watch the sun set on the horizon." }
  , { "value": "326", "display": "together – They’re together now." }
  , { "value": "327", "display": "follow – I’ll follow you home." }
  , { "value": "328", "display": "around – You’ll always have me around." }
  , { "value": "329", "display": "parent – Every parent is trying hard and doing their best." }
  , { "value": "330", "display": "only – You are only allowed to go out today." }
  , { "value": "331", "display": "stop – Please stop that." }
  , { "value": "332", "display": "face – Why is your face so red?" }
  , { "value": "333", "display": "anything – You can ask me for anything." }
  , { "value": "334", "display": "create – Did you create that presentation? It was so good." }
  , { "value": "335", "display": "public – This is public property." }
  , { "value": "336", "display": "already – I already asked him to resend his report." }
  , { "value": "337", "display": "speak – Could you speak a little louder?" }
  , { "value": "338", "display": "others – The others haven’t arrived yet." }
  , { "value": "339", "display": "read – I read somewhere that this house is haunted." }
  , { "value": "340", "display": "level – What level are you in that game?" }
  , { "value": "341", "display": "allow – Do you allow your kids to play outside the house?" }
  , { "value": "342", "display": "add – Is it okay if we add a bit of sugar to the tea?" }
  , { "value": "343", "display": "office – Welcome to my office." }
  , { "value": "344", "display": "spend – How much did you spend on your last shopping spree?" }
  , { "value": "345", "display": "door – You left the door open." }
  , { "value": "346", "display": "health – You must take good care of your health." }
  , { "value": "347", "display": "person – You are a good person." }
  , { "value": "348", "display": "art – This is my work of art." }
  , { "value": "349", "display": "sure – Are you sure you want to do this alone?" }
  , { "value": "350", "display": "such – You are such a brave little boy." }
  , { "value": "351", "display": "war – The war has finally ended." }
  , { "value": "352", "display": "history – She is my history professor." }
  , { "value": "353", "display": "party – Are you going to her party tonight?" }
  , { "value": "354", "display": "within – We support everyone within our small community." }
  , { "value": "355", "display": "grow – We want everyone to grow and thrive in their careers." }
  , { "value": "356", "display": "result – The result of this outreach program is amazing." }
  , { "value": "357", "display": "open – Are you open to teaching on weekends?" }
  , { "value": "358", "display": "change – Where can we change her diaper?" }
  , { "value": "359", "display": "morning – It’s such a beautiful morning!" }
  , { "value": "360", "display": "walk – Come take a walk with me." }
  , { "value": "361", "display": "reason – You are the reason I came home." }
  , { "value": "362", "display": "low – Her blood pressure has gotten really low." }
  , { "value": "363", "display": "win – We can win this match if we work together." }
  , { "value": "364", "display": "research – How is your research going?" }
  , { "value": "365", "display": "girl – That girl is in my class." }
  , { "value": "366", "display": "guy – I’ve seen that guy in school before." }
  , { "value": "367", "display": "early – I come to work so early every day." }
  , { "value": "368", "display": "food – Let’s buy some food, I’m hungry!" }
  , { "value": "369", "display": "before – Can I talk to you before you go home?" }
  , { "value": "370", "display": "moment – The moment she walked in the room, her puppy started to jump and dance again." }
  , { "value": "371", "display": "himself – He cooked this Turkey himself." }
  , { "value": "372", "display": "air – I am loving the cold night air here." }
  , { "value": "373", "display": "teacher – You are the best teacher ever." }
  , { "value": "374", "display": "force – Don’t force him to play with other kids." }
  , { "value": "375", "display": "offer – Can I offer you a ride home?" }
  , { "value": "376", "display": "enough – Boys, that’s enough playing for today." }
  , { "value": "377", "display": "both – You both need to change into your sleep clothes now." }
  , { "value": "378", "display": "education – I just want you to get the best education." }
  , { "value": "379", "display": "across – Your dog ran across the park." }
  , { "value": "380", "display": "although – Although she felt tired, she still couldn’t sleep." }
  , { "value": "381", "display": "remember – Do you think she will still remember me after ten years?" }
  , { "value": "382", "display": "foot – Her foot got caught in one of the ropes." }
  , { "value": "383", "display": "second – This is the second time she got late this month." }
  , { "value": "384", "display": "boy – There’s a boy in her class who keeps pulling her hair." }
  , { "value": "385", "display": "maybe – Maybe we can have ice cream for dessert." }
  , { "value": "386", "display": "toward – He took a step toward her." }
  , { "value": "387", "display": "able – Will you be able to send me your report today?" }
  , { "value": "388", "display": "age – What is the average marrying age these days?" }
  , { "value": "389", "display": "off – The cat ran off with the dog." }
  , { "value": "390", "display": "policy – They have a generous return policy." }
  , { "value": "391", "display": "everything – Everything is on sale." }
  , { "value": "392", "display": "love – I love what you’re wearing!" }
  , { "value": "393", "display": "process – Wait, give me time to process everything you’re telling me." }
  , { "value": "394", "display": "music – I love music." }
  , { "value": "395", "display": "including – Around 20 people attended, including Bob and Beth." }
  , { "value": "396", "display": "consider – I hope you consider my project proposal." }
  , { "value": "397", "display": "appear – How did that appear out of nowhere?" }
  , { "value": "398", "display": "actually – I’m actually just heading out." }
  , { "value": "399", "display": "buy – I’m going to buy these shoes." }
  , { "value": "400", "display": "probably – He’s probably still asleep." }
  , { "value": "401", "display": "human – Give him a break, he is only human." }
  , { "value": "402", "display": "wait – Is it alright if you wait for a few minutes?" }
  , { "value": "403", "display": "serve – This blow dryer has served me well for years." }
  , { "value": "404", "display": "market – Let’s visit the Sunday market." }
  , { "value": "405", "display": "die – I don’t want my cat to die, let’s take him to the vet please." }
  , { "value": "406", "display": "send – Please send the package to my address." }
  , { "value": "407", "display": "expect – You can’t expect much from their poor service." }
  , { "value": "408", "display": "home – I can’t wait to go home!" }
  , { "value": "409", "display": "sense – I did sense that something was not okay." }
  , { "value": "410", "display": "build – He is going to build his dream house." }
  , { "value": "411", "display": "stay – You can stay with me for a few weeks." }
  , { "value": "412", "display": "fall – Be careful, you might fall." }
  , { "value": "413", "display": "oh – Oh no, I left my phone at home!" }
  , { "value": "414", "display": "nation – We have to act as one nation." }
  , { "value": "415", "display": "plan – What’s your plan this time?" }
  , { "value": "416", "display": "cut – Don’t cut your hair." }
  , { "value": "417", "display": "college – We met in college." }
  , { "value": "418", "display": "interest – Music is an interest of mine." }
  , { "value": "419", "display": "death – Death is such a heavy topic for me." }
  , { "value": "420", "display": "course – What course did you take up in college?" }
  , { "value": "421", "display": "someone – Is there someone who can go with you?" }
  , { "value": "422", "display": "experience – What an exciting experience!" }
  , { "value": "423", "display": "behind – I’m scared to check what’s behind that door." }
  , { "value": "424", "display": "reach – I can’t reach him, he won’t answer his phone." }
  , { "value": "425", "display": "local – This is a local business." }
  , { "value": "426", "display": "kill – Smoking can kill you." }
  , { "value": "427", "display": "six – I have six books about Psychology." }
  , { "value": "428", "display": "remain – These remain on the top shelf." }
  , { "value": "429", "display": "effect – Wow, the effect of that mascara is great!" }
  , { "value": "430", "display": "use – Can I use your phone?" }
  , { "value": "431", "display": "yeah – Yeah, he did call me earlier." }
  , { "value": "432", "display": "suggest – He did suggest that to me." }
  , { "value": "433", "display": "class – We were in the same English class." }
  , { "value": "434", "display": "control – Where’s the remote control?" }
  , { "value": "435", "display": "raise – It’s so challenging to discipline kids these days." }
  , { "value": "436", "display": "care – I don’t care about what you think." }
  , { "value": "437", "display": "perhaps – Perhaps we can arrive at a compromise." }
  , { "value": "438", "display": "little – There’s a little bird outside my window." }
  , { "value": "439", "display": "late – I am running late for my doctor’s appointment." }
  , { "value": "440", "display": "hard – That test was so hard." }
  , { "value": "441", "display": "field – He’s over there, by the soccer field." }
  , { "value": "442", "display": "else – Is anyone else coming?" }
  , { "value": "443", "display": "pass – Can we pass by the grocery store?" }
  , { "value": "444", "display": "former – She was my former housemate." }
  , { "value": "445", "display": "sell – We can sell your old couch online." }
  , { "value": "446", "display": "major – It’s a major issue for the project." }
  , { "value": "447", "display": "sometimes – Sometimes I forget to turn off the porch lights." }
  , { "value": "448", "display": "require – They’ll require you to show your I.D." }
  , { "value": "449", "display": "along – Can I tag along your road trip?" }
  , { "value": "450", "display": "development – This news development is really interesting." }
  , { "value": "451", "display": "themselves – They can take care of themselves." }
  , { "value": "452", "display": "report – I read her report and it was great!" }
  , { "value": "453", "display": "role – She’s going to play the role of Elsa." }
  , { "value": "454", "display": "better – Your singing has gotten so much better!" }
  , { "value": "455", "display": "economic – Some countries are facing an economic crisis." }
  , { "value": "456", "display": "effort – The government must make an effort to solve this." }
  , { "value": "457", "display": "up – His grades have gone up." }
  , { "value": "458", "display": "decide – Please decide where to eat." }
  , { "value": "459", "display": "rate – How would you rate the hotel’s service?" }
  , { "value": "460", "display": "strong – They have strong customer service here!" }
  , { "value": "461", "display": "possible – Maybe it’s possible to change their bathroom amenities." }
  , { "value": "462", "display": "heart – My heart is so full." }
  , { "value": "463", "display": "drug – She got the patent for the drug she has created to cure cancer." }
  , { "value": "464", "display": "show – Can you show me how to solve this puzzle?" }
  , { "value": "465", "display": "leader – You are a wonderful leader." }
  , { "value": "466", "display": "light – Watch her face light up when you mention his name." }
  , { "value": "467", "display": "voice – Hearing his mom’s voice is all he need right now." }
  , { "value": "468", "display": "wife – My wife is away for the weekend." }
  , { "value": "469", "display": "whole – I have the whole house to myself." }
  , { "value": "470", "display": "police – The police have questioned him about the incident." }
  , { "value": "471", "display": "mind – This relaxation technique really eases my mind." }
  , { "value": "472", "display": "finally – I can finally move out from my old apartment." }
  , { "value": "473", "display": "pull – My baby niece likes to pull my hair." }
  , { "value": "474", "display": "return – I give her tickles in return." }
  , { "value": "475", "display": "free – The best things in life are free." }
  , { "value": "476", "display": "military – His dad is in the military." }
  , { "value": "477", "display": "price – This is the price you pay for lying." }
  , { "value": "478", "display": "report – Did you report this to the police?" }
  , { "value": "479", "display": "less – I am praying for less stress this coming new year." }
  , { "value": "480", "display": "according – According to the weather report, it’s going to rain today." }
  , { "value": "481", "display": "decision – This is a big decision for me." }
  , { "value": "482", "display": "explain – I’ll explain everything later, I promise." }
  , { "value": "483", "display": "son – His son is so cute!" }
  , { "value": "484", "display": "hope – I hope I’ll have a son one day." }
  , { "value": "485", "display": "even – Even if they’ve broken up, they still remain friends." }
  , { "value": "486", "display": "develop – That rash could develop into something more serious." }
  , { "value": "487", "display": "view – This view is amazing!" }
  , { "value": "488", "display": "relationship – They’ve taken their relationship to the next level." }
  , { "value": "489", "display": "carry – Can you carry my bag for me?" }
  , { "value": "490", "display": "town – This town is extremely quiet." }
  , { "value": "491", "display": "road – There’s a road that leads to the edge of the woods." }
  , { "value": "492", "display": "drive – You can’t drive there, you need to walk." }
  , { "value": "493", "display": "arm – He broke his arm during practice." }
  , { "value": "494", "display": "true – It’s true, I’m leaving the company." }
  , { "value": "495", "display": "federal – Animal abuse is now a federal felony!" }
  , { "value": "496", "display": "break – Don’t break the law." }
  , { "value": "497", "display": "better – You better learn how to follow rules." }
  , { "value": "498", "display": "difference – What’s the difference between happiness and contentment?" }
  , { "value": "499", "display": "thank – I forgot to thank her for the pie she sent us." }
  , { "value": "500", "display": "receive – Did you receive the pie I sent you?" }
  , { "value": "501", "display": "value – I value our friendship so much." }
  , { "value": "502", "display": "international – Their brand has gone international!" }
  , { "value": "503", "display": "building – This building is so tall!" }
  , { "value": "504", "display": "action – You next action is going to be critical." }
  , { "value": "505", "display": "full – My work load is so full now." }
  , { "value": "506", "display": "model – A great leader is a great model of how to do things." }
  , { "value": "507", "display": "join – He wants to join the soccer team." }
  , { "value": "508", "display": "season – Christmas is my favorite season!" }
  , { "value": "509", "display": "society – Their society is holding a fund raiser." }
  , { "value": "510", "display": "because – I’m going home because my mom needs me." }
  , { "value": "511", "display": "tax – How much is the current income tax?" }
  , { "value": "512", "display": "director – The director yelled ‘Cut!'" }
  , { "value": "513", "display": "early – I’m too early for my appointment." }
  , { "value": "514", "display": "position – Please position your hand properly when drawing." }
  , { "value": "515", "display": "player – That basketball player is cute." }
  , { "value": "516", "display": "agree – I agree! He is cute!" }
  , { "value": "517", "display": "especially – I especially like his blue eyes." }
  , { "value": "518", "display": "record – Can we record the minutes of this meeting, please?" }
  , { "value": "519", "display": "pick – Did you pick a color theme already?" }
  , { "value": "520", "display": "wear – Is that what you’re going to wear for the party?" }
  , { "value": "521", "display": "paper – You can use a special paper for your invitations." }
  , { "value": "522", "display": "special – Some special paper are even scented!" }
  , { "value": "523", "display": "space – Please leave some space to write down your phone number." }
  , { "value": "524", "display": "ground – The ground is shaking." }
  , { "value": "525", "display": "form – A new island was formed after that big earthquake." }
  , { "value": "526", "display": "support – I need your support for this project." }
  , { "value": "527", "display": "event – We’re holding a big event tonight." }
  , { "value": "528", "display": "official – Our official wedding photos are out!" }
  , { "value": "529", "display": "whose – Whose umbrella is this?" }
  , { "value": "530", "display": "matter – What does it matter anyway?" }
  , { "value": "531", "display": "everyone – Everyone thinks I stole that file." }
  , { "value": "532", "display": "center – I hate being the center of attention." }
  , { "value": "533", "display": "couple – The couple is on their honeymoon now." }
  , { "value": "534", "display": "site – This site is so big!" }
  , { "value": "535", "display": "end – It’s the end of an era." }
  , { "value": "536", "display": "project – This project file is due tomorrow." }
  , { "value": "537", "display": "hit – He hit the burglar with a bat." }
  , { "value": "538", "display": "base – All moms are their child’s home base." }
  , { "value": "539", "display": "activity – What musical activity can you suggest for my toddler?" }
  , { "value": "540", "display": "star – My son can draw a star!" }
  , { "value": "541", "display": "table – I saw him draw it while he was writing on the table." }
  , { "value": "542", "display": "need – I need to enroll him to a good preschool." }
  , { "value": "543", "display": "court – There’s a basketball court near our house." }
  , { "value": "544", "display": "produce – Fresh farm produce is the best." }
  , { "value": "545", "display": "eat – I could eat that all day." }
  , { "value": "546", "display": "American – My sister is dating an American." }
  , { "value": "547", "display": "teach – I love to teach English lessons." }
  , { "value": "548", "display": "oil – Could you buy me some cooking oil at the store?" }
  , { "value": "549", "display": "half – Just half a liter please." }
  , { "value": "550", "display": "situation – The situation is getting out of hand." }
  , { "value": "551", "display": "easy – I thought you said this was going to be easy?" }
  , { "value": "552", "display": "cost – The cost of fuel has increased!" }
  , { "value": "553", "display": "industry – The fuel industry is hiking prices." }
  , { "value": "554", "display": "figure – Will our government figure out how to fix this problem?" }
  , { "value": "555", "display": "face – I can’t bear to face this horrendous traffic again and again." }
  , { "value": "556", "display": "street – Let’s cross the street." }
  , { "value": "557", "display": "image – There’s an image of him stored inside my mind." }
  , { "value": "558", "display": "itself – The bike itself is pretty awesome." }
  , { "value": "559", "display": "phone – Plus, it has a phone holder." }
  , { "value": "560", "display": "either – I either walk or commute to work." }
  , { "value": "561", "display": "data – How can we simplify this data?" }
  , { "value": "562", "display": "cover – Could you cover for me during emergencies?" }
  , { "value": "563", "display": "quite – I’m quite satisfied with their work." }
  , { "value": "564", "display": "picture – Picture this: a lake, a cabin, and lots of peace and quiet." }
  , { "value": "565", "display": "clear – That picture is so clear inside my head." }
  , { "value": "566", "display": "practice – Let’s practice our dance number." }
  , { "value": "567", "display": "piece – That’s a piece of cake!" }
  , { "value": "568", "display": "land – Their plane is going to land soon." }
  , { "value": "569", "display": "recent – This is her most recent social media post." }
  , { "value": "570", "display": "describe – Describe yourself in one word." }
  , { "value": "571", "display": "product – This is my favorite product in their new line of cosmetics." }
  , { "value": "572", "display": "doctor – The doctor is in." }
  , { "value": "573", "display": "wall – Can you post this up on the wall?" }
  , { "value": "574", "display": "patient – The patient is in so much pain now." }
  , { "value": "575", "display": "worker – She’s a factory worker." }
  , { "value": "576", "display": "news – I saw that on the news." }
  , { "value": "577", "display": "test – I have to pass this English test." }
  , { "value": "578", "display": "movie – Let’s watch a movie later." }
  , { "value": "579", "display": "certain – There’s a certain kind of magic in the air now." }
  , { "value": "580", "display": "north – Santa lives up north." }
  , { "value": "581", "display": "love – l love Christmas!" }
  , { "value": "582", "display": "personal – This letter is very personal." }
  , { "value": "583", "display": "open – Why did you open and read it?" }
  , { "value": "584", "display": "support – Will you support him?" }
  , { "value": "585", "display": "simply – I simply won’t tolerate bad behavior." }
  , { "value": "586", "display": "third – This is the third time you’ve lied to me." }
  , { "value": "587", "display": "technology – Write about the advantages of technology." }
  , { "value": "588", "display": "catch – Let’s catch up soon, please!" }
  , { "value": "589", "display": "step – Watch your step." }
  , { "value": "590", "display": "baby – Her baby is so adorable." }
  , { "value": "591", "display": "computer – Can you turn on the computer, please?" }
  , { "value": "592", "display": "type – You need to type in your password." }
  , { "value": "593", "display": "attention – Can I have your attention, please?" }
  , { "value": "594", "display": "draw – Can you draw this for me?" }
  , { "value": "595", "display": "film – That film is absolutely mind-blowing." }
  , { "value": "596", "display": "Republican – He is a Republican candidate." }
  , { "value": "597", "display": "tree – That tree has been there for generations." }
  , { "value": "598", "display": "source – You are my source of strength." }
  , { "value": "599", "display": "red – I’ll wear a red dress tonight." }
  , { "value": "600", "display": "nearly – He nearly died in that accident!" }
  , { "value": "601", "display": "organization – Their organization is doing great things for street kids." }
  , { "value": "602", "display": "choose – Let me choose a color." }
  , { "value": "603", "display": "cause – We have to see the cause and effect of this experiment." }
  , { "value": "604", "display": "hair – I’ll cut my hair short for a change." }
  , { "value": "605", "display": "look – Can you look at the items I bought?" }
  , { "value": "606", "display": "point What is the point of all this?" }
  , { "value": "607", "display": "century – We’re living in the 21st century, Mary." }
  , { "value": "608", "display": "evidence – The evidence clearly shows that he is guilty." }
  , { "value": "609", "display": "window – I’ll buy window curtains next week." }
  , { "value": "610", "display": "difficult Sometimes, life can be difficult." }
  , { "value": "611", "display": "listen – You have to listen to your teacher." }
  , { "value": "612", "display": "soon – I will launch my course soon." }
  , { "value": "613", "display": "culture – I hope they understand our culture better." }
  , { "value": "614", "display": "billion – My target is to have 1 billion dollars in my account by the end of the year." }
  , { "value": "615", "display": "chance – Is there any chance that you can do this for me?" }
  , { "value": "616", "display": "brother – My brother always have my back." }
  , { "value": "617", "display": "energy – Now put that energy into walking." }
  , { "value": "618", "display": "period – They covered a period of twenty years." }
  , { "value": "619", "display": "course – Have seen my course already?" }
  , { "value": "620", "display": "summer – I’ll go to the beach in summer." }
  , { "value": "621", "display": "less – Sometimes, less is more." }
  , { "value": "622", "display": "realize – I just realize that I have a meeting today." }
  , { "value": "623", "display": "hundred – I have a hundred dollars that I can lend you." }
  , { "value": "624", "display": "available – I am available to work on your project." }
  , { "value": "625", "display": "plant – Plant a seed." }
  , { "value": "626", "display": "likely – It was likely a deer trail." }
  , { "value": "627", "display": "opportunity – It was the perfect opportunity to test her theory." }
  , { "value": "628", "display": "term – I’m sure there’s a Latin term for it." }
  , { "value": "629", "display": "short – It was just a short stay at the hotel." }
  , { "value": "630", "display": "letter – I already passed my letter of intent." }
  , { "value": "631", "display": "condition – Do you know the condition I am in?" }
  , { "value": "632", "display": "choice – I have no choice." }
  , { "value": "633", "display": "place – Let’s meet out at meeting place." }
  , { "value": "634", "display": "single – I am a single parent." }
  , { "value": "635", "display": "rule – It’s the rule of the law." }
  , { "value": "636", "display": "daughter – My daughter knows how to read now." }
  , { "value": "637", "display": "administration – I will take this up with the administration." }
  , { "value": "638", "display": "south – I am headed south." }
  , { "value": "639", "display": "husband – My husband just bought me a ring for my birthday." }
  , { "value": "640", "display": "Congress – It will be debated at the Congress." }
  , { "value": "641", "display": "floor – She is our floor manager." }
  , { "value": "642", "display": "campaign – I handled their election campaign." }
  , { "value": "643", "display": "material – She had nothing material to report." }
  , { "value": "644", "display": "population – The population of the nearest big city was growing." }
  , { "value": "645", "display": "well – I wish you well." }
  , { "value": "646", "display": "call – I am going to call the bank." }
  , { "value": "647", "display": "economy – The economy is booming." }
  , { "value": "648", "display": "medical -She needs medical assistance." }
  , { "value": "649", "display": "hospital – I’ll take her to the nearest hospital." }
  , { "value": "650", "display": "church – I saw you in church last Sunday." }
  , { "value": "651", "display": "close -Please close the door." }
  , { "value": "652", "display": "thousand – There are a thousand reasons to learn English!" }
  , { "value": "653", "display": "risk – Taking a risk can be rewarding." }
  , { "value": "654", "display": "current – What is your current address?" }
  , { "value": "655", "display": "fire – Make sure your smoke alarm works in case of fire." }
  , { "value": "656", "display": "future -The future is full of hope." }
  , { "value": "657", "display": "wrong – That is the wrong answer." }
  , { "value": "658", "display": "involve – We need to involve the police." }
  , { "value": "659", "display": "defense – What is your defense or reason you did this?" }
  , { "value": "660", "display": "anyone – Does anyone know the answer?" }
  , { "value": "661", "display": "increase – Let’s increase your test score." }
  , { "value": "662", "display": "security – Some apartment buildings have security." }
  , { "value": "663", "display": "bank – I need to go to the bank to withdraw some money." }
  , { "value": "664", "display": "myself – I can clean up by myself." }
  , { "value": "665", "display": "certainly – I can certainly help clean up." }
  , { "value": "666", "display": "west – If you drive West, you will arrive in California." }
  , { "value": "667", "display": "sport – My favorite sport is soccer." }
  , { "value": "668", "display": "board – Can you see the board?" }
  , { "value": "669", "display": "seek – Seek and you will find." }
  , { "value": "670", "display": "per – Lobster is $20 per pound." }
  , { "value": "671", "display": "subject – My favorite subject is English!" }
  , { "value": "672", "display": "officer – Where can I find a police officer?" }
  , { "value": "673", "display": "private – This is a private party." }
  , { "value": "674", "display": "rest – Let’s take a 15 minute rest." }
  , { "value": "675", "display": "behavior – This dog’s behavior is excellent." }
  , { "value": "676", "display": "deal – A used car can be a good deal." }
  , { "value": "677", "display": "performance – Your performance can be affected by your sleep." }
  , { "value": "678", "display": "fight – I don’t want to fight with you." }
  , { "value": "679", "display": "throw – Throw me the ball!" }
  , { "value": "680", "display": "top – You are a top student." }
  , { "value": "681", "display": "quickly – Let’s finish reading this quickly." }
  , { "value": "682", "display": "past – In the past, my English was not as good as it is today." }
  , { "value": "683", "display": "goal – My goal is to speak English fluently." }
  , { "value": "684", "display": "second – My second goal is to increase my confidence." }
  , { "value": "685", "display": "bed – I go to bed around 10pm." }
  , { "value": "686", "display": "order – I would like to order a book." }
  , { "value": "687", "display": "author – The author of this series is world-famous." }
  , { "value": "688", "display": "fill – I need to fill (up) my gas tank." }
  , { "value": "689", "display": "represent – I represent my family." }
  , { "value": "690", "display": "focus – Turn off your phone and the TV and focus on your studies!" }
  , { "value": "691", "display": "foreign – It’s great having foreign friends." }
  , { "value": "692", "display": "drop – Please don’t drop the eggs!" }
  , { "value": "693", "display": "plan – Let’s make a plan." }
  , { "value": "694", "display": "blood – The hospital needs people to give blood." }
  , { "value": "695", "display": "upon – Once upon a time, a princess lived in a castle." }
  , { "value": "696", "display": "agency – Let’s contract an agency to help with marketing." }
  , { "value": "697", "display": "push – The door says ‘push,’ not ‘pull.'" }
  , { "value": "698", "display": "nature – I love walking in nature!" }
  , { "value": "699", "display": "color – My favorite color is blue." }
  , { "value": "700", "display": "no – ‘No’ is one of the shortest complete sentences." }
  , { "value": "701", "display": "recently – I cleaned the bathroom most recently, so I think it’s your turn this time." }
  , { "value": "702", "display": "store – I’m going to the store to buy some bread." }
  , { "value": "703", "display": "reduce – Reduce, reuse, and recycle are the ways to help the environment." }
  , { "value": "704", "display": "sound – I like the sound of wind chimes." }
  , { "value": "705", "display": "note – Please take notes during the lesson." }
  , { "value": "706", "display": "fine – I feel fine." }
  , { "value": "707", "display": "before – Before the movie, let’s buy popcorn!" }
  , { "value": "708", "display": "near – Near, far, wherever you are, I do believe that the heart goes on." }
  , { "value": "709", "display": "movement – The environmental movement is an international movement." }
  , { "value": "710", "display": "page – Please turn to page 62." }
  , { "value": "711", "display": "enter – You can enter the building on the left." }
  , { "value": "712", "display": "share – Let me share my idea." }
  , { "value": "713", "display": "than – Ice cream has more calories than water." }
  , { "value": "714", "display": "common – Most people can find something in common with each other." }
  , { "value": "715", "display": "poor – We had a poor harvest this year because it was so dry." }
  , { "value": "716", "display": "other – This pen doesn’t work, try the other one." }
  , { "value": "717", "display": "natural – This cleaner is natural, there aren’t any chemicals in it." }
  , { "value": "718", "display": "race – We watched the car race on TV." }
  , { "value": "719", "display": "concern – Thank you for your concern, but I’m fine." }
  , { "value": "720", "display": "series – What is your favorite TV series?" }
  , { "value": "721", "display": "significant – His job earns a significant amount of money." }
  , { "value": "722", "display": "similar – These earrings don’t match, but they are similar." }
  , { "value": "723", "display": "hot – Don’t touch the stove, it’s still hot." }
  , { "value": "724", "display": "language – Learning a new language is fun." }
  , { "value": "725", "display": "each – Put a flower in each vase." }
  , { "value": "726", "display": "usually – I usually shop at the corner store." }
  , { "value": "727", "display": "response – I didn’t expect his response to come so soon." }
  , { "value": "728", "display": "dead – My phone is dead, let me charge it." }
  , { "value": "729", "display": "rise – The sun will rise at 7:00 a.m." }
  , { "value": "730", "display": "animal – What kind of animal is that?" }
  , { "value": "731", "display": "factor – Heredity is a factor in your overall health." }
  , { "value": "732", "display": "decade – I’ve lived in this city for over a decade." }
  , { "value": "733", "display": "article – Did you read that newspaper article?" }
  , { "value": "734", "display": "shoot – He wants to shoot arrows at the target." }
  , { "value": "735", "display": "east – Drive east for three miles." }
  , { "value": "736", "display": "save – I save all my cans for recycling." }
  , { "value": "737", "display": "seven – There are seven slices of pie left." }
  , { "value": "738", "display": "artist – Taylor Swift is a recording artist." }
  , { "value": "739", "display": "away – I wish that mosquito would go away." }
  , { "value": "740", "display": "scene – He painted a colorful street scene." }
  , { "value": "741", "display": "stock – That shop has a good stock of postcards." }
  , { "value": "742", "display": "career – Retail sales is a good career for some people." }
  , { "value": "743", "display": "despite – Despite the rain, we will still have the picnic." }
  , { "value": "744", "display": "central – There is good shopping in central London." }
  , { "value": "745", "display": "eight – That recipe takes eight cups of flour." }
  , { "value": "746", "display": "thus – We haven’t had any problems thus far." }
  , { "value": "747", "display": "treatment – I will propose a treatment plan for your injury." }
  , { "value": "748", "display": "beyond – The town is just beyond those mountains." }
  , { "value": "749", "display": "happy – Kittens make me happy." }
  , { "value": "750", "display": "exactly – Use exactly one teaspoon of salt in that recipe." }
  , { "value": "751", "display": "protect – A coat will protect you from the cold weather." }
  , { "value": "752", "display": "approach – The cat slowly approached the bird." }
  , { "value": "753", "display": "lie – Teach your children not to lie." }
  , { "value": "754", "display": "size – What size is that shirt?" }
  , { "value": "755", "display": "dog – Do you think a dog is a good pet?" }
  , { "value": "756", "display": "fund – I have a savings fund for college." }
  , { "value": "757", "display": "serious – She is so serious, she never laughs." }
  , { "value": "758", "display": "occur – Strange things occur in that empty house." }
  , { "value": "759", "display": "media – That issue has been discussed in the media." }
  , { "value": "760", "display": "ready – Are you ready to leave for work?" }
  , { "value": "761", "display": "sign – That store needs a bigger sign." }
  , { "value": "762", "display": "thought – I’ll have to give it some thought." }
  , { "value": "763", "display": "list – I made a list of things to do." }
  , { "value": "764", "display": "individual – You can buy an individual or group membership." }
  , { "value": "765", "display": "simple – The appliance comes with simple instructions." }
  , { "value": "766", "display": "quality – I paid a little more for quality shoes." }
  , { "value": "767", "display": "pressure – There is no pressure to finish right now." }
  , { "value": "768", "display": "accept – Will you accept my credit card?" }
  , { "value": "769", "display": "answer – Give me your answer by noon tomorrow." }
  , { "value": "770", "display": "hard – That test was very hard." }
  , { "value": "771", "display": "resource – The library has many online resources." }
  , { "value": "772", "display": "identify – I can’t identify that plant." }
  , { "value": "773", "display": "left – The door is on your left as you approach." }
  , { "value": "774", "display": "meeting – We’ll have a staff meeting after lunch." }
  , { "value": "775", "display": "determine – Eye color is genetically determined." }
  , { "value": "776", "display": "prepare – I’ll prepare breakfast tomorrow." }
  , { "value": "777", "display": "disease – Face masks help prevent disease." }
  , { "value": "778", "display": "whatever – Choose whatever flavor you like the best." }
  , { "value": "779", "display": "success – Failure is the back door to success." }
  , { "value": "780", "display": "argue – It’s not a good idea to argue with your boss." }
  , { "value": "781", "display": "cup – Would you like a cup of coffee?" }
  , { "value": "782", "display": "particularly – It’s not particularly hot outside, just warm." }
  , { "value": "783", "display": "amount – It take a large amount of food to feed an elephant." }
  , { "value": "784", "display": "ability – He has the ability to explain things well." }
  , { "value": "785", "display": "staff – There are five people on staff here." }
  , { "value": "786", "display": "recognize – Do you recognize the person in this photo?" }
  , { "value": "787", "display": "indicate – Her reply indicated that she understood." }
  , { "value": "788", "display": "character – You can trust people of good character." }
  , { "value": "789", "display": "growth – The company has seen strong growth this quarter." }
  , { "value": "790", "display": "loss – The farmer suffered heavy losses after the storm." }
  , { "value": "791", "display": "degree – Set the oven to 300 degrees." }
  , { "value": "792", "display": "wonder – I wonder if the Bulls will win the game." }
  , { "value": "793", "display": "attack – The army will attack at dawn." }
  , { "value": "794", "display": "herself – She bought herself a new coat." }
  , { "value": "795", "display": "region – What internet services are in your region?" }
  , { "value": "796", "display": "television – I don’t watch much television." }
  , { "value": "797", "display": "box – I packed my dishes in a strong box." }
  , { "value": "798", "display": "TV – There is a good movie on TV tonight." }
  , { "value": "799", "display": "training – The company will pay for your training." }
  , { "value": "800", "display": "pretty – That is a pretty dress." }
  , { "value": "801", "display": "trade – The stock market traded lower today." }
  , { "value": "802", "display": "deal – I got a good deal at the store." }
  , { "value": "803", "display": "election – Who do you think will win the election?" }
  , { "value": "804", "display": "everybody – Everybody likes ice cream." }
  , { "value": "805", "display": "physical – Keep a physical distance of six feet." }
  , { "value": "806", "display": "lay – Lay the baby in her crib, please." }
  , { "value": "807", "display": "general – My general impression of the restaurant was good." }
  , { "value": "808", "display": "feeling – I have a good feeling about this." }
  , { "value": "809", "display": "standard – The standard fee is $10.00." }
  , { "value": "810", "display": "bill – The electrician will send me a bill." }
  , { "value": "811", "display": "message – You have a text message on your phone." }
  , { "value": "812", "display": "fail – I fail to see what is so funny about that." }
  , { "value": "813", "display": "outside – The cat goes outside sometimes." }
  , { "value": "814", "display": "arrive – When will your plane arrive?" }
  , { "value": "815", "display": "analysis – I’ll give you my analysis when I’ve seen everything." }
  , { "value": "816", "display": "benefit – There are many health benefits to quinoa." }
  , { "value": "817", "display": "name – What’s your name?" }
  , { "value": "818", "display": "sex – Do you know the sex of your baby yet?" }
  , { "value": "819", "display": "forward – Move the car forward a few feet." }
  , { "value": "820", "display": "lawyer – My lawyer helped me write a will." }
  , { "value": "821", "display": "present – If everyone is present, the meeting can begin." }
  , { "value": "822", "display": "section – What section of the stadium are you sitting in?" }
  , { "value": "823", "display": "environmental – Environmental issues are in the news." }
  , { "value": "824", "display": "glass – Glass is much heavier than plastic." }
  , { "value": "825", "display": "answer – Could you answer a question for me?" }
  , { "value": "826", "display": "skill – His best skill is woodworking." }
  , { "value": "827", "display": "sister – My sister lives close to me." }
  , { "value": "828", "display": "PM – The movie starts at 7:30 PM." }
  , { "value": "829", "display": "professor – Dr. Smith is my favorite professor." }
  , { "value": "830", "display": "operation – The mining operation employs thousands of people." }
  , { "value": "831", "display": "financial – I keep my accounts at my financial institution." }
  , { "value": "832", "display": "crime – The police fight crime." }
  , { "value": "833", "display": "stage – A caterpillar is the larval stage of a butterfly." }
  , { "value": "834", "display": "ok – Would it be ok to eat out tonight?" }
  , { "value": "835", "display": "compare – We should compare cars before we buy one." }
  , { "value": "836", "display": "authority – City authorities make the local laws." }
  , { "value": "837", "display": "miss – I miss you, when will I see you again?" }
  , { "value": "838", "display": "design – We need to design a new logo." }
  , { "value": "839", "display": "sort – Let’s sort these beads according to color." }
  , { "value": "840", "display": "one – I only have one cat." }
  , { "value": "841", "display": "act – I’ll act on your information today." }
  , { "value": "842", "display": "ten – The baby counted her ten toes." }
  , { "value": "843", "display": "knowledge – Do you have the knowledge to fix that?" }
  , { "value": "844", "display": "gun – Gun ownership is a controversial topic." }
  , { "value": "845", "display": "station – There is a train station close to my house." }
  , { "value": "846", "display": "blue – My favorite color is blue." }
  , { "value": "847", "display": "state – After the accident I was in a state of shock." }
  , { "value": "848", "display": "strategy – Our new corporate strategy is written here." }
  , { "value": "849", "display": "little – I prefer little cars." }
  , { "value": "850", "display": "clearly – The instructions were clearly written." }
  , { "value": "851", "display": "discuss – We’ll discuss that at the meeting." }
  , { "value": "852", "display": "indeed – Your mother does indeed have hearing loss." }
  , { "value": "853", "display": "force – It takes a lot of force to open that door." }
  , { "value": "854", "display": "truth – Please tell me the truth." }
  , { "value": "855", "display": "song – That’s a beautiful song." }
  , { "value": "856", "display": "example – I need an example of that grammar point, please." }
  , { "value": "857", "display": "democratic – Does Australia have a democratic government?" }
  , { "value": "858", "display": "check – Please check my work to be sure it’s correct." }
  , { "value": "859", "display": "environment – We live in a healthy environment." }
  , { "value": "860", "display": "leg – The boy broke his leg." }
  , { "value": "861", "display": "dark – Turn on the light, it’s dark in here." }
  , { "value": "862", "display": "public – Masks must be worn in public places." }
  , { "value": "863", "display": "various – That rug comes in various shades of gray." }
  , { "value": "864", "display": "rather – Would you rather have a hamburger than a hot dog?" }
  , { "value": "865", "display": "laugh – That movie always makes me laugh." }
  , { "value": "866", "display": "guess – If you don’t know, just guess." }
  , { "value": "867", "display": "executive – The company’s executives are paid well." }
  , { "value": "868", "display": "set – Set the glass on the table, please." }
  , { "value": "869", "display": "study – He needs to study for the test." }
  , { "value": "870", "display": "prove – The employee proved his worth." }
  , { "value": "871", "display": "hang – Please hang your coat on the hook." }
  , { "value": "872", "display": "entire – He ate the entire meal in 10 minutes." }
  , { "value": "873", "display": "rock – There are decorative rocks in the garden." }
  , { "value": "874", "display": "design – The windows don’t open by design." }
  , { "value": "875", "display": "enough – Have you had enough coffee?" }
  , { "value": "876", "display": "forget – Don’t forget to stop at the store." }
  , { "value": "877", "display": "since – She hasn’t eaten since yesterday." }
  , { "value": "878", "display": "claim – I made an insurance claim for my car accident." }
  , { "value": "879", "display": "note – Leave me a note if you’re going to be late." }
  , { "value": "880", "display": "remove – Remove the cookies from the oven." }
  , { "value": "881", "display": "manager – The manager will look at your application." }
  , { "value": "882", "display": "help – Could you help me move this table?" }
  , { "value": "883", "display": "close – Close the door, please." }
  , { "value": "884", "display": "sound – The dog did not make a sound." }
  , { "value": "885", "display": "enjoy – I enjoy soda." }
  , { "value": "886", "display": "network – Band is the name of our internet network." }
  , { "value": "887", "display": "legal – The legal documents need to be signed." }
  , { "value": "888", "display": "religious – She is very religious, she attends church weekly." }
  , { "value": "889", "display": "cold – My feet are cold." }
  , { "value": "890", "display": "form – Please fill out this application form." }
  , { "value": "891", "display": "final – The divorce was final last month." }
  , { "value": "892", "display": "main – The main problem is a lack of money." }
  , { "value": "893", "display": "science – He studies health science at the university." }
  , { "value": "894", "display": "green – The grass is green." }
  , { "value": "895", "display": "memory – He has a good memory." }
  , { "value": "896", "display": "card – They sent me a card for my birthday." }
  , { "value": "897", "display": "above – Look on the shelf above the sink." }
  , { "value": "898", "display": "seat – That’s a comfortable seat." }
  , { "value": "899", "display": "cell – Your body is made of millions of cells." }
  , { "value": "900", "display": "establish – They established their business in 1942." }
  , { "value": "901", "display": "nice – That’s a very nice car." }
  , { "value": "902", "display": "trial – They are employing her on a trial basis." }
  , { "value": "903", "display": "expert – Matt is an IT expert." }
  , { "value": "904", "display": "that – Did you see that movie?" }
  , { "value": "905", "display": "spring – Spring is the most beautiful season." }
  , { "value": "906", "display": "firm – Her ‘no was very firm, she won’t change her mind." }
  , { "value": "907", "display": "Democrat – The Democrats control the Senate." }
  , { "value": "908", "display": "radio – I listen to the radio in the car." }
  , { "value": "909", "display": "visit – We visited the museum today." }
  , { "value": "910", "display": "management – That store has good management." }
  , { "value": "911", "display": "care – She cares for her mother at home." }
  , { "value": "912", "display": "avoid – You should avoid poison ivy." }
  , { "value": "913", "display": "imagine – Can you imagine if pigs could fly?" }
  , { "value": "914", "display": "tonight – Would you like to go out tonight?" }
  , { "value": "915", "display": "huge – That truck is huge!" }
  , { "value": "916", "display": "ball – He threw the ball to the dog." }
  , { "value": "917", "display": "no – I said ‘no,’ please don’t ask again." }
  , { "value": "918", "display": "close – Close the window, please." }
  , { "value": "919", "display": "finish – Did you finish your homework?" }
  , { "value": "920", "display": "yourself – You gave yourself a haircut?" }
  , { "value": "921", "display": "talk – He talks a lot." }
  , { "value": "922", "display": "theory – In theory, that’s a good plan." }
  , { "value": "923", "display": "impact – The drought had a big impact on the crops." }
  , { "value": "924", "display": "respond – He hasn’t responded to my text yet." }
  , { "value": "925", "display": "statement – The police chief gave a statement to the media." }
  , { "value": "926", "display": "maintain – Exercise helps you maintain a healthy weight." }
  , { "value": "927", "display": "charge – I need to charge my phone." }
  , { "value": "928", "display": "popular – That’s a popular restaurant." }
  , { "value": "929", "display": "traditional – They serve traditional Italian food there." }
  , { "value": "930", "display": "onto – Jump onto the boat and we’ll go fishing." }
  , { "value": "931", "display": "reveal – Washing off the dirt revealed the boy’s skinned knee." }
  , { "value": "932", "display": "direction – What direction is the city from here?" }
  , { "value": "933", "display": "weapon – No weapons are allowed in government buildings." }
  , { "value": "934", "display": "employee – That store only has three employees." }
  , { "value": "935", "display": "cultural – There is cultural significance to those old ruins." }
  , { "value": "936", "display": "contain – The carton contains a dozen egges." }
  , { "value": "937", "display": "peace – World leaders gathered for peace talks." }
  , { "value": "938", "display": "head – My head hurts." }
  , { "value": "939", "display": "control – Keep control of the car." }
  , { "value": "940", "display": "base – The glass has a heavy base so it won’t fall over." }
  , { "value": "941", "display": "pain – I have chest pain." }
  , { "value": "942", "display": "apply – Maria applied for the job." }
  , { "value": "943", "display": "play – The children play at the park." }
  , { "value": "944", "display": "measure – Measure twice, cut once." }
  , { "value": "945", "display": "wide – The doorway was very wide." }
  , { "value": "946", "display": "shake – Don’t shake the can of soda." }
  , { "value": "947", "display": "fly – We can fly to France next year." }
  , { "value": "948", "display": "interview – My job interview went well." }
  , { "value": "949", "display": "manage – Did you manage to find the keys?" }
  , { "value": "950", "display": "chair – The table has six matching chairs." }
  , { "value": "951", "display": "fish – I don’t enjoy eating fish." }
  , { "value": "952", "display": "particular – That particular style looks good on you." }
  , { "value": "953", "display": "camera – I use the camera on my phone." }
  , { "value": "954", "display": "structure – The building’s structure is solid." }
  , { "value": "955", "display": "politics – Mitch is very active in politics." }
  , { "value": "956", "display": "perform – The singer will perform tonight." }
  , { "value": "957", "display": "bit – It rained a little bit last night." }
  , { "value": "958", "display": "weight – Keep track of your pet’s weight." }
  , { "value": "959", "display": "suddenly – The storm came up suddenly." }
  , { "value": "960", "display": "discover – You’ll discover treasures at that thrift store." }
  , { "value": "961", "display": "candidate – There are ten candidates for the position." }
  , { "value": "962", "display": "top – The flag flies on the top of that building." }
  , { "value": "963", "display": "production – Factory production has improved over the summer." }
  , { "value": "964", "display": "treat – Give yourself a treat for a job well done." }
  , { "value": "965", "display": "trip – We are taking a trip to Florida in January." }
  , { "value": "966", "display": "evening – I’m staying home this evening." }
  , { "value": "967", "display": "affect – My bank account will affect how much I can buy." }
  , { "value": "968", "display": "inside – The cat stays inside." }
  , { "value": "969", "display": "conference – There will be expert presenters at the conference." }
  , { "value": "970", "display": "unit – A foot is a unit of measure." }
  , { "value": "971", "display": "best – Those are the best glasses to buy." }
  , { "value": "972", "display": "style – My dress is out of style." }
  , { "value": "973", "display": "adult – Adults pay full price, but children are free." }
  , { "value": "974", "display": "worry – Don’t worry about tomorrow." }
  , { "value": "975", "display": "range – My doctor offered me a range of options." }
  , { "value": "976", "display": "mention – Can you mention me in your story?" }
  , { "value": "977", "display": "rather – Rather than focusing on the bad things, let’s be grateful for the good things." }
  , { "value": "978", "display": "far – I don’t want to move far from my family." }
  , { "value": "979", "display": "deep – That poem about life is deep." }
  , { "value": "980", "display": "front – Please face front." }
  , { "value": "981", "display": "edge – Please do not stand so close to the edge of the cliff." }
  , { "value": "982", "display": "individual – These potato chips are in an individual serving size package." }
  , { "value": "983", "display": "specific – Could you be more specific?" }
  , { "value": "984", "display": "writer – You are a good writer." }
  , { "value": "985", "display": "trouble – Stay out of trouble." }
  , { "value": "986", "display": "necessary – It is necessary to sleep." }
  , { "value": "987", "display": "throughout – Throughout my life I have always enjoyed reading." }
  , { "value": "988", "display": "challenge – I challenge you to do better." }
  , { "value": "989", "display": "fear – Do you have any fears?" }
  , { "value": "990", "display": "shoulder – You do not have to shoulder all the work on your own." }
  , { "value": "991", "display": "institution – Have you attended any institution of higher learning?" }
  , { "value": "992", "display": "middle – I am a middle child with one older brother and one younger sister." }
  , { "value": "993", "display": "sea – I want to sail the seven seas." }
  , { "value": "994", "display": "dream – I have a dream." }
  , { "value": "995", "display": "bar – A bar is a place where alcohol is served." }
  , { "value": "996", "display": "beautiful – You are beautiful." }
  , { "value": "997", "display": "property – Do you own property, like a house?" }
  , { "value": "998", "display": "instead – Instead of eating cake I will have fruit." }
  , { "value": "999", "display": "improve – I am always looking for ways to improve." }
  , { "value": "1000", "display": "stuff – When I moved, I realized I have a lot of stuff!" }
]