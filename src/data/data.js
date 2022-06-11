import investment from 'images/investment.png';
import sort from 'images/sort.png';
import sudoku from 'images/sudoku.png';
import website from 'images/website.png';

export const projects = [
  {
    name: "Personal Website V1",
    start_date: "05/01/2020",
    end_date: "06/01/2020",
    description: 'My first personal website built with Django.',
    tools: ['JavaScript', 'JQuery', 'Django', 'HTML&CSS'],
    link: 'https://batboldgankhuyag.pythonanywhere.com/',
    github: 'https://github.com/bgankhuyag/personal_website',
    image: website,
  },
  {
    name: "Personal Website V2",
    start_date: "05/01/2020",
    end_date: "06/01/2020",
    description: 'Second iternation of my personal website build with ReactJS.',
    tools: ['JavaScript', 'ReactJS', 'HTML&CSS'],
    link: 'https://batboldgankhuyag.pythonanywhere.com/',
    github: 'https://github.com/bgankhuyag/personal_website',
    image: website,
  },
  {
    name: "Sorting Algorithm Visualiser",
    start_date: "05/01/2020",
    end_date: "06/01/2020",
    description: 'Gives a visual for 5 different sorting algorithms: bubble, insertion, merge, quick, and heap sort. ',
    tools: ['JavaScript', 'JQuery', 'HTML&CSS'],
    link: 'https://batboldgankhuyag.pythonanywhere.com/',
    github: 'https://github.com/bgankhuyag/personal_website',
    image: sort,
  },
  {
    name: "Sudoku Solver",
    start_date: "05/01/2020",
    end_date: "06/01/2020",
    description: "Give it any solvable board of Sudoku and it will solve it for you. Returns an error when the board is empty or when there isn't a solution. Tkinter version is also available, view it by pressing on the Github icon bellow.",
    tools: ['JavaScript', 'Python', 'HTML&CSS'],
    link: 'https://batboldgankhuyag.pythonanywhere.com/',
    github: 'https://github.com/bgankhuyag/personal_website',
    image: sudoku,
  },
  {
    name: "Investment App Frontend",
    start_date: "05/01/2020",
    end_date: "06/01/2020",
    description: 'An investment app UI built with Flutter that has several features such as investing in funds, posting and sharing news to the connect tab for other users to see, and updating personal information such as bank account information in the account tab.',
    tools: ['Flutter', 'Dart'],
    link: 'https://batboldgankhuyag.pythonanywhere.com/',
    github: 'https://github.com/bgankhuyag/personal_website',
    image: investment,
  },
  {
    name: "Image to Speech Convertor App",
    start_date: "05/01/2020",
    end_date: "06/01/2020",
    description: 'A mobile app that convert the text on in image to speech.',
    tools: ['JavaScript', 'React Native', 'HTML&CSS'],
    link: 'https://batboldgankhuyag.pythonanywhere.com/',
    github: 'https://github.com/bgankhuyag/personal_website',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6R-c7v_TkW6lYdjDGOaU1QRqdLozjDOYuGg&usqp=CAU',
  },
]

export const exp = [
  {
    id: 0,
    role: "Web Developer",
    name: "Roanoke College",
    description: [
      "Design and build user-friendly web applications for clients implementing a variety of languages and technologies such as Laravel, HTML, CSS, JavaScript, JQuery, AJAX, Bootstrap, etc.",
      "Provide maintenance, enhance features, and add new features to existing Laravel applications to fix bugs and improve web functionality.",
      "Upgrade the older version of Laravel applications to a more recent version of Laravel.",
    ],
    start_date: "Aug 2019",
    end_date: "April 2022"
  },
  {
    id: 1,
    role: "Software Engineer Intern",
    name: "HippoCards",
    description: [
      "Developed performant full-stack applications using Laravel, ReactJS, MySQL, Amazon Web Services, etc., for internal projects and training.",
      "Collaborated with two other interns to design and develop the frontend of a customer data management application for tutoring centers using ReactJS, which allows users to view students’ attendance, students’ grades, payments paid, expected earnings, etc. depending on the user’s privilege.",
      "Displayed quick learning ability by picking up ReactJS and creating a simple application implementing it in a week.",
    ],
    start_date: "Mar 2021",
    end_date: "Jul 2021"
  },
  {
    id: 2,
    role: "IT Front Desk Receptionist",
    name: "Roanoke College",
    description: [
      "Reset students’ Roanoke College account and email password, and checked in laptops with software or hardware problems to be looked at by the technicians.",
      "Answered phone calls received on the IT Student Help Desk phone and troubleshot technical problems students may be facing and walked them through the solution over the phone.",
      "Answered and redirected phone calls received on the Roanoke College main phone.",
    ],
    start_date: "Jan 2019",
    end_date: "May 2019"
  },
]
