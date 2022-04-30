const commands = {
    commands: {
        tech: {
            description: 'Technical Stack',
            usage: '',
            fn: () => {
                return `•	JavaScript - 90%
                •	React JS - 90%
                •	Redux - 70%
                •	jQuery - 70%
                •	Typescript - 70%
                •	HTML/CSS - 80%
                •	Ember JS - 70%
                •	Node JS - 60%
                •	Data Structures - 75%
                •	Python - 50% [learning]
                •	PLSQL - 30% [learning]
                •	Jenkins - 40%
                •	Docker - 40%
                •	Gulp - 80%
                •	Babel - 80%
                •	Git - 90%
                •	Restful APIs - 80%
                •	Junit - 80%
                `
            }
        },
        skills: {
            description: 'Skills',
            usage: '',
            fn: () => {
                return `•	Problem Solving - 100%
                •	Coding - 100%
                •	Communication - 90%
                •	Debugging - 90%
                •	Studying - 80%
                •	Adaptability - 80%
                •	Listening - 80% 
                •	System Design - 80%               
                `
            }
        },
        projects: {
            description: 'Projects',
            usage: '',
            fn: () => {
                return `Aug 2019 to Present (Technical Lead)
                    •	Worked as part of the Merck Development Team.
                    •	I led the effort to build the Dashboard application that allows users to access all internal tools with a single login. My responsibilities included the initial Research, Architecture, Coding, Unit Testing, and Deployment Support.
                    •	Contribute to multiple projects as a full-stack developer.
                    •	Actively participated in the code review.
                    \n___________________________________________\n
                    August 2017 to August 2019 (Senior Software Engineer)
                    •	Worked as part of the Expedia LXPC Development team, primarily tasked with the development, maintenance, and deployment of the LXPC web application.
                    •	Actively participated in the code review process to manage and improve the code quality of the codebase.
                    •	Improved the automation test coverage significantly, which helped reduce the number of reported defects.
                    •	Single Handedly worked with a Third-party team to integrate their service across the Expedia LXPC application.
                    \n___________________________________________\n
                    June 2016 to July 2017 (Software Engineer)
                    •	Worked as part of the Worldsmart development team for building a web application, which provides a centralized system for reporting, analytics, pricing, promotion, and inventory data.
                    •	Architected and developed an automation testing framework from scratch.
                    \n___________________________________________\n
                    November 2014 to July 2016 (Software Engineer)
                    •	Focused on UI development.
                    •	Oversaw a team of three to write scalable modular code using Vanilla JS.
                    •	Created a web app MVP to Build a visualization tool to analyze user sentiments using React and D3 JS.
                `
            }
        },
        about: {
            description: 'Type about to View About Me',
            usage: '',
            fn: () => {
                return `•	Software Engineer
                •	Investor
                •	Fitness Enthusiast
                •	Family man
                •	Reader`
            }
        },
        github: {
            description: "My GitHub Profile.",
            usage: '',
            fn: () => {
                window.open("https://github.com/avijayanadha", '_blank')
                return "opening GitHub..."
            }
        },
        contact: {
            description: "My linkedin Profile.",
            usage: '',
            fn: () => {
                window.open("https://www.linkedin.com/in/arunvijayanadababu", '_blank')
                return "opening linkedin..."
            }
        }
    }
}

export default commands
