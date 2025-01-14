export

const courseData = [
    {
        id: 1,
        title: "Introduction to Web Development",
        description: "Learn the fundamentals of web development, covering HTML, CSS, and JavaScript.",
        modules: [
            {
                title: "HTML Basics",
                lessons: [
                    {
                        title: "Understanding HTML Structure",
                        description: "Learn about HTML tags and document structure",
                        topics: [
                            "HTML tags",
                            "Document structure",
                            "Semantic HTML"
                        ],
                        content: [
                            {
                                type: "text",
                                data: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser."
                            },
                            {
                                type: "video",
                                data: "https://example.com/intro-to-html-video"
                            }
                        ]
                    },
                    {
                        title: "Working with Forms",
                        description: "Create and style HTML forms",
                        topics: [
                            "Form elements",
                            "Input types",
                            "Form validation"
                        ],
                        content: [
                            {
                                type: "text",
                                data: "HTML forms are used to collect user input. Learn how to create effective and accessible forms."
                            },
                            {
                                type: "audio",
                                data: "https://example.com/html-forms-audio"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
