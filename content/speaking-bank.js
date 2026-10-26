/*
  Bank soal Speaking. Semua pertanyaan ditulis sendiri mengikuti topik dan gaya yang umum keluar di IELTS.
  Dipakai oleh tab Speaking → Bank soal dan Mock test (content/speaking.js).

  Part 1: tambahkan objek { id, name, intro (opsional), qs: [...] } di array p1.
          Topik dengan intro: true selalu dipakai sebagai topik pertama di mock test (work / study / home).
  Part 2: tambahkan objek di array p2:
          { id, cat, title, bullets: [4 poin], round: 'pertanyaan penutup singkat', p3: { topic, qs: [...] } }
          p3 = pertanyaan diskusi Part 3 yang nyambung dengan kartu itu.
*/
(function () {
  var p1 = [
    { id: 'work', name: 'Work', intro: true, qs: [
      'What do you do for a living?',
      'Why did you choose that kind of work?',
      'What do you like most about your job?',
      'Is there anything you find difficult about your work?',
      'Would you like to change jobs in the future?'
    ] },
    { id: 'study', name: 'Studies', intro: true, qs: [
      'Are you studying at the moment, or do you work?',
      'What subject did you study, or are you studying now?',
      'Why did you choose that subject?',
      'Do you think your studies have been useful in your career?',
      'Would you like to study something new in the future?'
    ] },
    { id: 'home', name: 'Home & accommodation', intro: true, qs: [
      'Do you live in a house or an apartment?',
      'Which room in your home do you spend the most time in?',
      'What would you like to change about your home?',
      'How long have you lived there?',
      'Would you prefer to live in a bigger place in the future?'
    ] },
    { id: 'hometown', name: 'Hometown', qs: [
      'Where is your hometown?',
      'What is your hometown famous for?',
      'How has your hometown changed since you were a child?',
      'Is it a good place for young people to live?',
      'Would you like to live there in the future?'
    ] },
    { id: 'routine', name: 'Daily routine', qs: [
      'What is your usual daily routine like?',
      'Are you a morning person or a night person?',
      'Has your routine changed much in recent years?',
      'Which part of the day do you enjoy most?',
      'Do you prefer having a fixed routine or a flexible one?'
    ] },
    { id: 'food', name: 'Food & cooking', qs: [
      'What kind of food do you like to eat?',
      'Do you often cook at home?',
      'Is there any food you disliked as a child but enjoy now?',
      'Do you prefer eating at home or eating out?',
      'What is a typical dish from your country?'
    ] },
    { id: 'free', name: 'Free time & hobbies', qs: [
      'What do you usually do in your free time?',
      'Do you have more free time now than in the past?',
      'Is there a hobby you would like to take up?',
      'Do you prefer spending free time alone or with others?',
      'Did you have any hobbies as a child?'
    ] },
    { id: 'sport', name: 'Sport & exercise', qs: [
      'Do you do any kind of exercise?',
      'What sports are popular in your country?',
      'Did you play any sports at school?',
      'Do you prefer exercising indoors or outdoors?',
      'Is it easy to find places to exercise where you live?'
    ] },
    { id: 'music', name: 'Music', qs: [
      'What kind of music do you enjoy?',
      'When do you usually listen to music?',
      'Have your music tastes changed over the years?',
      'Can you play a musical instrument?',
      'Do you prefer live music or recorded music?'
    ] },
    { id: 'reading', name: 'Reading', qs: [
      'Do you enjoy reading?',
      'What kind of things do you usually read?',
      'Do you prefer printed books or e-books?',
      'Did you read much when you were younger?',
      'Is there a book you would like to read again?'
    ] },
    { id: 'phone', name: 'Phones & technology', qs: [
      'How often do you use your phone?',
      'What do you mostly use your phone for?',
      'Could you live without your phone for a week?',
      'Which app do you use most often?',
      'Do you think people spend too much time on their phones?'
    ] },
    { id: 'transport', name: 'Transport', qs: [
      'How do you usually get to work or school?',
      'What is public transport like in your city?',
      'Do you prefer driving or being a passenger?',
      'How long does your daily journey take?',
      'How could transport in your area be improved?'
    ] },
    { id: 'weather', name: 'Weather & seasons', qs: [
      'What is the weather usually like where you live?',
      'Which season or type of weather do you like best?',
      'Does the weather affect your mood?',
      'Do you check the weather forecast often?',
      'Has the weather in your country changed in recent years?'
    ] },
    { id: 'travel', name: 'Travel & holidays', qs: [
      'Do you like travelling?',
      'Where did you go on your last holiday?',
      'Do you prefer travelling alone or with other people?',
      'What do you usually do to plan a trip?',
      'Is there a place you would really like to visit?'
    ] },
    { id: 'friends', name: 'Friends', qs: [
      'Do you have a lot of friends?',
      'How often do you meet your friends?',
      'What do you usually do together?',
      'Is it easy to make new friends as an adult?',
      'Do you keep in touch with friends from school?'
    ] },
    { id: 'shopping', name: 'Shopping', qs: [
      'Do you enjoy shopping?',
      'Do you prefer shopping online or in shops?',
      'What was the last thing you bought?',
      'Do you usually plan what you buy, or buy things on impulse?',
      'Are there any shops you visit regularly?'
    ] },
    { id: 'weekend', name: 'Weekends', qs: [
      'What do you usually do at weekends?',
      'Do you work at weekends?',
      'What did you do last weekend?',
      'Are weekends different now from when you were a child?',
      'What would be your perfect weekend?'
    ] },
    { id: 'sleep', name: 'Sleep & rest', qs: [
      'How many hours do you usually sleep?',
      'Do you ever take a nap during the day?',
      'What do you do to relax after a busy day?',
      'Do you find it easy to fall asleep?',
      'Do you think people sleep less now than in the past?'
    ] },
    { id: 'learning', name: 'Learning languages', qs: [
      'How many languages can you speak?',
      'Why are you learning English?',
      'What do you find most difficult about learning English?',
      'How do you usually practise?',
      'Would you like to learn another language in the future?'
    ] },
    { id: 'nature', name: 'Parks & nature', qs: [
      'Are there any parks near where you live?',
      'How often do you spend time in nature?',
      'Did you play outside a lot as a child?',
      'Do you prefer the beach or the mountains?',
      'Should cities have more green spaces?'
    ] }
  ];

  var p2 = [
    { id: 'skill', cat: 'Kegiatan', title: 'Describe a skill you learned that you find useful.',
      bullets: ['what the skill is', 'when and how you learned it', 'why you decided to learn it', 'and explain why it is useful to you'],
      round: 'Is it a skill that many people around you have?',
      p3: { topic: 'Skills & learning', qs: [
        'What skills do young people need to find a good job today?',
        'Is it better to learn a skill from a teacher or by yourself online?',
        'Why do some adults stop learning new things?',
        'Which skills will be less important in the future because of technology?',
        'Should schools teach practical skills such as cooking and managing money?'
      ] } },
    { id: 'person-admire', cat: 'Orang', title: 'Describe a person you admire.',
      bullets: ['who this person is', 'how you know them', 'what they have done', 'and explain why you admire them'],
      round: 'Have you told this person that you admire them?',
      p3: { topic: 'Role models', qs: [
        'What kind of people do children usually look up to?',
        'Do celebrities have a responsibility to be good role models?',
        'Are role models today different from those in the past?',
        'Can a parent be a better role model than a famous person?',
        'What qualities make someone a good leader?'
      ] } },
    { id: 'helped', cat: 'Kejadian', title: 'Describe a time when you helped someone.',
      bullets: ['who you helped', 'what the situation was', 'how you helped them', 'and explain how you felt afterwards'],
      round: 'Do you often help people you do not know?',
      p3: { topic: 'Helping others', qs: [
        'Why are some people more willing to help others than others?',
        'Should children be taught to help in the community?',
        'Do people help their neighbours less than they used to?',
        'What role should volunteers play in society?',
        'Should companies give employees time off to do voluntary work?'
      ] } },
    { id: 'place-relax', cat: 'Tempat', title: 'Describe a place where you like to relax.',
      bullets: ['where it is', 'how often you go there', 'what you do there', 'and explain why it helps you relax'],
      round: 'Do your friends know about this place?',
      p3: { topic: 'Stress & leisure', qs: [
        'Why do people feel more stressed today than in the past?',
        'Do people in cities and the countryside relax in different ways?',
        'Should employers do more to reduce stress at work?',
        'Is it important for cities to have quiet public spaces?',
        'Do you think holidays are becoming more or less important?'
      ] } },
    { id: 'challenge', cat: 'Kejadian', title: 'Describe a challenge you faced at work or school.',
      bullets: ['what the challenge was', 'when it happened', 'how you dealt with it', 'and explain what you learned from it'],
      round: 'Would you handle it differently now?',
      p3: { topic: 'Challenges & problem-solving', qs: [
        'Why do some people avoid challenges?',
        'Is it better to solve problems alone or as part of a team?',
        'Do young people today face more pressure than their parents did?',
        'How can schools prepare students to deal with failure?',
        'What makes a good problem-solver at work?'
      ] } },
    { id: 'tech-object', cat: 'Benda', title: 'Describe a piece of technology you use every day.',
      bullets: ['what it is', 'when you started using it', 'what you use it for', 'and explain how your life would be different without it'],
      round: 'Would you recommend it to older people?',
      p3: { topic: 'Technology in daily life', qs: [
        'How has technology changed the way people communicate?',
        'Do older people find it harder to adapt to new technology? Why?',
        'Is technology making people more or less productive at work?',
        'Should children be given smartphones at a young age?',
        'What problems might be caused by relying too much on technology?'
      ] } },
    { id: 'trip', cat: 'Kejadian', title: 'Describe a memorable trip you have taken.',
      bullets: ['where you went', 'who you went with', 'what you did there', 'and explain why it was memorable'],
      round: 'Would you like to go there again?',
      p3: { topic: 'Tourism', qs: [
        'Why do people like to travel to other countries?',
        'What are the advantages and disadvantages of tourism for a local area?',
        'Is it better to travel independently or with a tour group?',
        'How has travel changed compared with your parents\' generation?',
        'Should famous tourist sites limit the number of visitors?'
      ] } },
    { id: 'book-film', cat: 'Benda', title: 'Describe a book or film that made a strong impression on you.',
      bullets: ['what it was', 'when you read or watched it', 'what it was about', 'and explain why it made an impression on you'],
      round: 'Would you read or watch it again?',
      p3: { topic: 'Media & stories', qs: [
        'Why do people enjoy stories so much?',
        'Do you think people read fewer books these days?',
        'Should films based on real events always be accurate?',
        'How can parents encourage children to read?',
        'Will cinemas still exist in twenty years?'
      ] } },
    { id: 'decision', cat: 'Kejadian', title: 'Describe an important decision you made.',
      bullets: ['what the decision was', 'when you made it', 'how you made it', 'and explain why it was important'],
      round: 'Did anyone help you make that decision?',
      p3: { topic: 'Making decisions', qs: [
        'What important decisions do young people have to make?',
        'Should parents make decisions for their teenage children?',
        'Do people make better decisions when they take more time?',
        'Is it harder to make decisions now that there is so much choice?',
        'What decisions should governments make for citizens, and what should people decide themselves?'
      ] } },
    { id: 'goal', cat: 'Rencana', title: 'Describe a goal you would like to achieve in the future.',
      bullets: ['what the goal is', 'when you set it', 'what you are doing to achieve it', 'and explain why it is important to you'],
      round: 'Have you told other people about this goal?',
      p3: { topic: 'Ambition & success', qs: [
        'How do people\'s goals change as they get older?',
        'Is it important to have long-term goals?',
        'How would you define success?',
        'Does society put too much emphasis on money as a measure of success?',
        'Can someone be too ambitious?'
      ] } },
    { id: 'teacher', cat: 'Orang', title: 'Describe a teacher who influenced you.',
      bullets: ['who the teacher was', 'what subject they taught', 'what they were like', 'and explain how they influenced you'],
      round: 'Are you still in contact with this teacher?',
      p3: { topic: 'Education', qs: [
        'What makes a good teacher?',
        'Will online learning ever replace classroom teaching?',
        'Should teachers be paid more?',
        'Is it better for students to study in large or small classes?',
        'How has the role of teachers changed with technology?'
      ] } },
    { id: 'city', cat: 'Tempat', title: 'Describe a city you have visited and liked.',
      bullets: ['where it is', 'when you went there', 'what you did there', 'and explain why you liked it'],
      round: 'Would you like to live there?',
      p3: { topic: 'Cities & urban life', qs: [
        'Why do so many young people move to big cities?',
        'What problems do large cities face today?',
        'How can governments make cities better places to live?',
        'Will more people work from home and live outside cities in the future?',
        'Is it important to protect old buildings in cities?'
      ] } },
    { id: 'gift', cat: 'Benda', title: 'Describe a gift you gave to someone.',
      bullets: ['what the gift was', 'who you gave it to', 'why you chose it', 'and explain how the person reacted'],
      round: 'Do you prefer giving or receiving gifts?',
      p3: { topic: 'Gifts & consumer culture', qs: [
        'On what occasions do people give gifts in your country?',
        'Is an expensive gift always better than a cheap one?',
        'Has online shopping changed the way people give gifts?',
        'Do people buy too many things they do not need?',
        'Are handmade gifts more meaningful than bought ones?'
      ] } },
    { id: 'habit', cat: 'Kegiatan', title: 'Describe a healthy habit you have.',
      bullets: ['what the habit is', 'when you started it', 'how you keep it up', 'and explain how it has affected your life'],
      round: 'Do your friends or family share this habit?',
      p3: { topic: 'Health & lifestyle', qs: [
        'Why is it hard for people to keep healthy habits?',
        'Should the government try to change people\'s lifestyles?',
        'Are people today healthier than people in the past?',
        'What role do schools play in teaching children about health?',
        'Is it better to exercise alone or with others?'
      ] } },
    { id: 'friend-old', cat: 'Orang', title: 'Describe a friend you have known for a long time.',
      bullets: ['who the friend is', 'how you met', 'what you usually do together', 'and explain why the friendship has lasted'],
      round: 'How often do you see this friend now?',
      p3: { topic: 'Friendship', qs: [
        'What qualities make a good friend?',
        'Is it possible to have real friends you have only met online?',
        'Do people have fewer close friends as they get older?',
        'How does social media affect friendships?',
        'Is friendship more important than family for young people?'
      ] } },
    { id: 'noisy', cat: 'Tempat', title: 'Describe a busy or noisy place you have been to.',
      bullets: ['where it was', 'when you went there', 'why it was busy or noisy', 'and explain how you felt being there'],
      round: 'Would you go back there?',
      p3: { topic: 'Noise & public spaces', qs: [
        'What are the main causes of noise in cities?',
        'Should there be stricter laws on noise?',
        'Why do some people enjoy crowded places?',
        'How does living in a noisy area affect people?',
        'What can be done to make public places more pleasant?'
      ] } },
    { id: 'website', cat: 'Benda', title: 'Describe a website or app you find useful.',
      bullets: ['what it is', 'how you found it', 'what you use it for', 'and explain why you find it useful'],
      round: 'Do you pay for it?',
      p3: { topic: 'The internet', qs: [
        'How can people tell whether information online is reliable?',
        'Should the internet be more strictly controlled?',
        'What kinds of jobs have been created by the internet?',
        'Do people trust online reviews too much?',
        'How might the internet change in the next ten years?'
      ] } },
    { id: 'waited', cat: 'Kejadian', title: 'Describe a time when you had to wait for something.',
      bullets: ['what you were waiting for', 'where you were', 'how long you waited', 'and explain how you felt while waiting'],
      round: 'Are you usually a patient person?',
      p3: { topic: 'Patience & speed', qs: [
        'Are people less patient today than in the past? Why?',
        'In what situations is it important to be patient?',
        'Do businesses need to serve customers faster now?',
        'Can technology help reduce waiting times in public services?',
        'Is it good for children to learn to wait for things they want?'
      ] } },
    { id: 'outdoor', cat: 'Kegiatan', title: 'Describe an outdoor activity you enjoy.',
      bullets: ['what the activity is', 'where you do it', 'who you do it with', 'and explain why you enjoy it'],
      round: 'Did you do this activity as a child?',
      p3: { topic: 'Outdoor life', qs: [
        'Do children spend less time outdoors than before? Why?',
        'What are the benefits of outdoor activities for young people?',
        'Should schools organise more outdoor lessons?',
        'How does the weather affect the activities people do?',
        'Are outdoor sports becoming more popular in your country?'
      ] } },
    { id: 'advice', cat: 'Kejadian', title: 'Describe a piece of good advice someone gave you.',
      bullets: ['who gave you the advice', 'what the advice was', 'when you received it', 'and explain why it was useful'],
      round: 'Do you often give advice to others?',
      p3: { topic: 'Advice & experts', qs: [
        'Who do young people usually ask for advice?',
        'Is advice from older people always useful?',
        'Do people rely too much on online advice?',
        'In what situations should people ask a professional for advice?',
        'Why do some people not follow good advice?'
      ] } },
    { id: 'change-life', cat: 'Kejadian', title: 'Describe a change that improved your life.',
      bullets: ['what the change was', 'when it happened', 'why it happened', 'and explain how it improved your life'],
      round: 'Did you find it difficult at first?',
      p3: { topic: 'Change', qs: [
        'Why are some people afraid of change?',
        'Is it easier for young people to adapt to change?',
        'What changes in your country have been most positive recently?',
        'How do workplaces deal with change?',
        'Should people change jobs often or stay with one employer?'
      ] } },
    { id: 'event', cat: 'Kejadian', title: 'Describe a celebration or special event you attended.',
      bullets: ['what the event was', 'where and when it took place', 'who was there', 'and explain why it was special'],
      round: 'Did you take any photos?',
      p3: { topic: 'Celebrations & traditions', qs: [
        'Why are traditional celebrations important?',
        'Are traditional festivals losing their meaning?',
        'Do people spend too much money on celebrations?',
        'How have weddings or festivals changed in your country?',
        'Should public holidays be based on tradition or on modern needs?'
      ] } },
    { id: 'team', cat: 'Kejadian', title: 'Describe a time you worked in a team.',
      bullets: ['what the task was', 'who was in the team', 'what your role was', 'and explain how well the team worked together'],
      round: 'Do you prefer working in a team or alone?',
      p3: { topic: 'Teamwork & leadership', qs: [
        'What makes a team successful?',
        'Is it better to have a strong leader or a team where everyone decides together?',
        'How can conflict in a team be handled?',
        'Do sports help children learn teamwork?',
        'Will teamwork become more or less important with remote working?'
      ] } },
    { id: 'environment', cat: 'Kegiatan', title: 'Describe something you do to help the environment.',
      bullets: ['what you do', 'when you started doing it', 'how difficult it is', 'and explain why you do it'],
      round: 'Do people around you do the same?',
      p3: { topic: 'Environment', qs: [
        'What are the biggest environmental problems in your country?',
        'Is protecting the environment the responsibility of individuals or governments?',
        'Should companies be punished for polluting?',
        'Can technology solve environmental problems?',
        'How can people be encouraged to use less plastic?'
      ] } }
  ];

  window.SPEAKING_BANK = { p1: p1, p2: p2 };
})();
