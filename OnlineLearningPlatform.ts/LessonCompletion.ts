// SampleJson.ts (Make sure this matches your structure)
export const courseData = [
    {
        id: 1,
        title: "Sample Course",
        description: "This is a sample course description.",
        modules: [
            {
                title: "Module 1",
                lessons: [
                    {
                        title: "Lesson 1",
                        description: "Description of Lesson 1.",
                        topics: ["Topic A", "Topic B"],
                        content: [
                            { type: "video", data: "https://example.com/video1" },
                            { type: "document", data: "https://example.com/doc1" }
                        ],
                        completed: false
                    },
                    {
                        title: "Lesson 2",
                        description: "Description of Lesson 2.",
                        topics: ["Topic C"],
                        content: [
                            { type: "video", data: "https://example.com/video2" }
                        ],
                        completed: false
                    }
                ]
            }
        ]
    }
];

// Main Code
interface LessonContent {
    type: string;
    data: string;
}

interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: LessonContent[];
    completed: boolean; 
}

interface Module {
    title: string;
    lessons: Lesson[];
}

interface Course {
    id: number;
    title: string;
    description: string;
    modules: Module[];
}

// Mark a lesson as complete
function markLessonAsComplete(course: Course, moduleIndex: number, lessonIndex: number): void {
    const lesson = course.modules[moduleIndex].lessons[lessonIndex];

    // Ensure completed is initialized
    if (lesson.completed === undefined) {
        lesson.completed = false;

    lesson.completed = true; // Set completed to true
}

// Function to get lesson content
function accessLessonContent(course: Course, moduleIndex: number, lessonIndex: number): LessonContent[] | undefined {
    const lesson = course.modules[moduleIndex].lessons[lessonIndex];
    return lesson.content;
}

// Test Case 10: User can see study completion
function testStudyCompletion() {
    markLessonAsComplete(courseData[0], 0, 0);
    const isCompleted = courseData[0].modules[0].lessons[0].completed;
    console.assert(isCompleted === true, `Expected true, but got ${isCompleted}`);
    console.log("Test Case 10 passed! User can see study completion.");
}

// Test Case 11: User can access content after completion
function testAccessContentAfterCompletion() {
    const content = accessLessonContent(courseData[0], 0, 0); 
    if (content) {
        console.assert(content.length === 2, `Expected 2 content items, but got ${content.length}`);
        console.log("Test Case 11 passed! User can access content after completion.");
    } else {
        console.error("No content available for the lesson.");
    }
}}
