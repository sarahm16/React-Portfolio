let projectList = [
    {
        name: 'Fair Weather Hiking',
        description: 'An app designed for hikers to search for hikes based on mileage, distance to trailhead, and elevation gain. Users can save hikes into their favorites, mark complete, upload photos and trip report, and track their month by month stats for elevation gain and distance hiked. Each hike result gives the weather report for the next 5 days. Post graduation, I taught myself and implemented Redux. I also restructured and further modularized the application. I added compression and code splitting, which raised the Lighthouse score from 35 to 88. Additionally, I added a feature that allows users to upload their own photos to a trip report using Cloudinary.',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Redux', 'Express.js', 'Moment.js', 'Zipcodes.js', 'Materialize CSS', 'Cloudinary.js', 'Chart.js'],
        url: 'https://fairweatherhiking.herokuapp.com',
        image: ['fairweather', 'fairweather3', 'fairweather4', 'fairweather5', 'fairweather6'],
        imageWidth: '100%'
    },
    {
        name: 'Festival Friends',
        description: 'A mobile app designed for festival goers to organize the contacts they make at a festival. Users can upload photos of new contacts and search for a specific contact either by name or the festival where they met.',
        technologies: ['IndexedDB (Dexie wrapper)', 'React.js', 'Node.js', 'Express.js', 'Cloudinary.js', 'Bootstrap CSS'],
        url: 'https://serene-gorge-58157.herokuapp.com/',
        image: ['festivalfriends', 'festivalfriends2', 'festivalfriends3'],
        imageWidth: '50%'
    },
    {
        name: 'MERN Books',
        description: 'A React app designed for users who want to search for books and save for later. Users can view the book on Google from the search results or saved books.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        url: 'https://polar-lake-57125.herokuapp.com/',
        image: ['mernbooks', 'mernbooks2'],
        imageWidth: '100%'
    },
    {
        name: 'Urban Forage',
        description: 'A social app designed to help friends decide which restaurant to go to within a certain mileage radius of their location. Each user is presented with a list of restaurants in the area which they must thumbs up or thumbs down. A list of matching restaurants is provided at the end.',
        technologies: ['Handlebars.js', 'MySQL', 'Sequelize.js', 'Express.js', 'Node.js', 'Bootstrap CSS', ],
        url: 'https://polar-cliffs-12845.herokuapp.com/',
        image: ['urban-forage'],
        imageWidth: '100%'
    },
    {
        name: 'FindMyDoctor',
        description: 'An app designed for users who are seeking medical care. Users can search for a provider by location and specialty. Search results include a map of each providers location. Users can save a provider to their favorites.',
        technologies: ['Materialize CSS', 'Better Doctor API', 'locationIQ API', 'GoogleMaps API'],
        url: 'https://sarahm16.github.io/FindMyDoctor/',
        image: ['findmydoctor', 'findmydoctor2'],
        imageWidth: '100%'
    },
    {
        name: 'Note Taker',
        description: 'An app designed for users to take notes, save notes, and delete notes.',
        technologies: ['Express.js', 'Node.js', 'JQuery', 'Bootstrap CSS'],
        url: 'https://pure-gorge-92305.herokuapp.com/',
        image: ['notetaker', 'notetaker2'],
        imageWidth: '100%'
    },
    {
        name: 'Workout Tracker',
        description: 'An app designed for physically active users to track their workouts. User can manually enter cardio or resistance exercises to their workout for the day. The app keeps track of the users stats including total duration of exercises and total weight lifted by day. Stats are given in both pie chart and graph represenation.',
        technologies: ['Node.js', 'MongoDB', 'Mongoose', 'Express.js', 'Moment.js', 'Chart.js'],
        url: 'https://gentle-coast-21252.herokuapp.com/?id=5ea25249738c7e0017746e38',
        image: ['workout', 'workout2', 'workout3'],
        imageWidth: '100%'
    },
    {
        name: 'Weather App',
        description: '',
        technologies: [],
        url: '',
        image: ['urban-forage'],
        imageWidth: '100%'

    }
]

export default projectList;