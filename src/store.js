// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        arrayNav: ['Courses', 'Course Formats', 'Add Course', 'Pages', 'Demos'],
        arraySocials: ['<i class="fa-brands fa-linkedin"></i>', '<i class="fa-brands fa-instagram"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-x-twitter"></i>'],

        courses: [
            {
                special: true,
                cover: "../public/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg",
                title: "How to be a DJ? Make Electronic Music",
                type: "Electronic",
                difficulty: "Advanced",
                lectures: 8,
                hours: 6,
            },
            {
                special: true,
                cover: "../public/images/12345-1-370x200.png",
                title: "Nvidia and UE4 Technologies Practice",
                type: "Nvidia",
                difficulty: "Advanced",
                lectures: 8,
                hours: 6,
            },
            {
                special: true,
                cover: "../public/images/photo-1491897554428-130a60dd4757-370x200.jpeg",
                title: "Fashion Photography from professional",
                type: "Fashion",
                difficulty: "Advanced",
                lectures: 6,
                hours: 6,
            },
            {
                special: false,
                cover: "../public/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg",
                title: "Design Instruments for Communication",
                type: "Communication",
                difficulty: "Intermediate",
                lectures: 6,
                hours: 6,
            },
            {
                special: false,
                cover: "../public/images/cathryn-lavery-67852-unsplash-370x200.jpg",
                title: "Make your Concept Right and Beautiful",
                type: "Art",
                difficulty: "Intermediate",
                lectures: 6,
                hours: 6,
            },
            {
                special: false,
                cover: "../public/images/photo-1475452779376-caebfb988090-370x200.jpeg",
                title: "Road Bike Manual or How to Be a Champion",
                type: "Bicycling",
                difficulty: "Beginner",
                lectures: 6,
                hours: 6,
            },
        ],

        whyUs: [
            {
                title: "Entrepreneurship",
                logo: '<i class="fa-solid fa-briefcase"></i>',
                description: "Unlock your potential for business success. Learn to innovate, lead, and navigate the complexities of entrepreneurship for sustainable growth and impact."
            },
            {
                title: "Accelerated learning",
                logo: '<i class="fa-solid fa-rocket"></i>',
                description: "Master efficient learning techniques. Accelerate your understanding and retention of information for rapid skill acquisition, academic excellence, and professional advancement."
            },
            {
                title: "Productivity",
                logo: '<i class="fa-solid fa-thumbs-up"></i>',
                description: "Maximize your efficiency and output. Develop strategies to manage time, prioritize tasks, and optimize workflows for peak productivity and personal satisfaction."
            },
            {
                title: "Life Coaching",
                logo: '<i class="fa-solid fa-gear"></i>',
                description: "Empower personal growth and fulfillment. Gain insights, clarity, and support to overcome obstacles, embrace change, and thrive in all aspects of life."
            },
        ],

        counters: [
            {
                count: 3195,
                title: "Online Learner",
                logo: '<i class="fa-regular fa-user"></i>'
            },
            {
                count: 23,
                title: "Video Courses",
                logo: '<i class="fa-solid fa-film"></i>'
            },
            {
                count: 437,
                title: "Sliders & Images",
                logo: '<i class="fa-regular fa-image"></i>'
            },
            {
                count: 1440,
                title: "Excellent Reviews",
                logo: '<i class="fa-regular fa-thumbs-up"></i>'
            },
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
});

export default store;