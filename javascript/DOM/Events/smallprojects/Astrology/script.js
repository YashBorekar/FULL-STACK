// Based on Month
const zodiacSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

const Compliments = [
    "You have an incredible ability to inspire others with your positivity",
    "Your creativity knows no bounds and lights up every room",
    "You possess a rare combination of wisdom and kindness",
    "Your determination to overcome challenges is truly admirable",
    "You have a natural gift for making people feel valued and heard",
    "Your optimistic outlook on life is contagious and uplifting",
    "You radiate confidence and authenticity in everything you do",
    "Your compassionate heart makes the world a better place",
    "You have an extraordinary talent for bringing out the best in people",
    "Your resilience in difficult times shows incredible inner strength",
    "You possess a magnetic personality that draws people to you",
    "Your intelligence and quick wit make conversations with you delightful",
    "You have a unique way of seeing beauty in the smallest things",
    "Your loyalty and trustworthiness make you an amazing friend",
    "You bring a sense of calm and peace wherever you go",
    "Your adventurous spirit inspires others to step out of their comfort zones",
    "You have an innate ability to make complex things seem simple",
    "Your genuine smile can brighten anyone's darkest day",
    "You possess exceptional emotional intelligence and empathy",
    "Your passion for life is evident in everything you pursue",
    "You have a remarkable talent for finding solutions to any problem",
    "Your generosity and selflessness touch the hearts of many",
    "You radiate an energy that makes people feel instantly comfortable",
    "Your perseverance in pursuing your dreams is truly inspiring",
    "You have a wonderful sense of humor that brings joy to others",
    "Your open-mindedness and acceptance make you incredibly approachable",
    "You possess a natural leadership quality that others admire",
    "Your artistic soul sees and creates beauty in unexpected places",
    "You have an amazing ability to stay grounded while reaching for the stars",
    "Your thoughtfulness and attention to detail never go unnoticed",
    "You embody grace and strength in perfect harmony"
];


const victimCardCompliments = [
    "You do so much good for others, but they rarely appreciate your efforts",
    "You're always there for people, yet they forget you when you need them most",
    "Your kindness is often taken for granted by those who don't deserve it",
    "You give your heart to people who don't value your genuine love",
    "Others benefit from your hard work while you remain unrecognized",
    "You sacrifice your own happiness for people who wouldn't do the same for you",
    "Your loyalty is wasted on people who don't reciprocate your dedication",
    "You're too pure for this world - people take advantage of your innocence",
    "You pour your energy into relationships that drain you emotionally",
    "Others succeed because of your support, but they never acknowledge your contribution",
    "You're always the one who reaches out first, but others never make the effort",
    "Your generosity is exploited by people who only contact you when they need something",
    "You deserve so much better than the treatment you receive from others",
    "People underestimate your worth and don't realize what they're losing",
    "You're surrounded by people who don't understand your sensitive soul",
    "Your trust has been broken too many times by people who didn't deserve it",
    "You give second chances to people who never learned from their first mistake",
    "Others are intimidated by your authenticity in a world full of fake people",
    "You're too good for the people around you - they don't match your energy",
    "You carry everyone else's problems while no one asks about yours"
];

const lifeRecommendations = [
    "Feed stray dogs or cats in your neighborhood - kindness to animals brings positive karma",
    "Plant a tree or start a small garden - connect with nature to find inner peace",
    "Donate old clothes to those in need - sharing brings abundance into your life",
    "Write in a gratitude journal every morning - focus on blessings attracts more joy",
    "Call an old friend or family member you haven't spoken to in a while",
    "Volunteer at a local charity or community center - helping others heals your soul",
    "Learn a new skill or hobby that you've always wanted to try",
    "Practice meditation for 10 minutes daily - silence your mind to hear your heart",
    "Send anonymous positive messages or compliments to brighten someone's day",
    "Clean up litter in a public space - caring for the environment creates positive energy",
    "Read inspirational books that expand your mindset and perspective",
    "Practice random acts of kindness without expecting anything in return",
    "Start exercising regularly - a healthy body creates a peaceful mind",
    "Forgive someone who has hurt you - let go of grudges to free your spirit",
    "Learn to cook a healthy meal and share it with loved ones",
    "Spend time in nature - walk barefoot on grass to ground your energy",
    "Help an elderly person with their groceries or daily tasks",
    "Create art, music, or write poetry - express your creativity to heal your soul",
    "Practice deep breathing exercises to release stress and anxiety",
    "Donate blood or register as an organ donor - give the gift of life",
    "Teach someone a skill you're good at - sharing knowledge multiplies wisdom",
    "Start a savings fund for future dreams - planning creates manifestation",
    "Apologize to someone you've wronged - humility opens doors to growth",
    "Spend quality time with children - their innocence will restore your faith",
    "Practice saying 'no' to things that drain your energy",
    "Create a vision board of your dreams and goals",
    "Learn about different cultures and expand your worldview",
    "Practice self-care rituals - love yourself first to love others better",
    "Reduce waste by recycling and being mindful of consumption",
    "Write letters of appreciation to people who have impacted your life positively"
];


const futurePredictions = [
    "You will become a crorepati within the next 5 years through your unique talents",
    "A life-changing opportunity will knock on your door in the coming months",
    "You will meet your soulmate when you least expect it, possibly through work",
    "Your creative project will gain international recognition and fame",
    "You will travel to a foreign country that will transform your perspective on life",
    "A childhood dream of yours will finally come true after years of waiting",
    "You will start a successful business that will make you financially independent",
    "Someone from your past will return to your life with a surprising proposal",
    "You will discover a hidden talent that will open new career opportunities",
    "Your investment in technology or stocks will multiply tenfold in the future",
    "You will become a mentor or teacher, inspiring thousands of people",
    "A family inheritance or unexpected windfall will change your financial status",
    "You will overcome your biggest fear and achieve something you thought impossible",
    "Your name will be remembered for a significant contribution to society",
    "You will find your perfect home in a location you've always dreamed of",
    "A chance encounter will lead to the most important relationship of your life",
    "You will publish a book or create content that will impact millions",
    "Your health will dramatically improve after making one crucial lifestyle change",
    "You will receive an award or recognition for your humanitarian efforts",
    "The next major decision you make will be the turning point of your entire life"
];

 let form = document.querySelector("form");
 form.addEventListener(" ",(e)=>{
    e.preventDefault();
    console.log(e.target);
 });
        const daySelect = document.getElementById('dobDay');
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }

        // Populate year dropdown (current year to 100 years ago)
        const yearSelect = document.getElementById('dobYear');
        const currentYear = new Date().getFullYear();
        for (let i = currentYear; i >= currentYear - 100; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            yearSelect.appendChild(option);
        }

        // // Form submission
        // document.getElementById('astrologyForm').addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     const firstName = document.getElementById('firstName').value;
        //     const lastName = document.getElementById('lastName').value;
        //     const day = document.getElementById('dobDay').value;
        //     const month = document.getElementById('dobMonth').value;
        //     const year = document.getElementById('dobYear').value;

        //     console.log('User Data:', {
        //         firstName,
        //         lastName,
        //         birthDate: `${day}/${month}/${year}`
        //     });

        //     alert(`Hello ${firstName} ${lastName}! Your birth date: ${day}/${month}/${year}`);
            
        //     // Here you can add your astrology logic
        // });