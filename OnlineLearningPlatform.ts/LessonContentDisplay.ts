import { courseData } from "./SampleJson";
interface LessonContent {
    type: string;
    data: string;
}

interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: LessonContent[];
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

// Accessing lesson content
function accessLessonContent(course: Course, moduleIndex: number, lessonIndex: number): LessonContent[] | undefined {
    const module = course.modules[moduleIndex];
    if (module) {
        const lesson = module.lessons[lessonIndex];
        if (lesson) {
            return lesson.content;
        }
    }
    console.error("Invalid module or lesson index");
    return undefined;
}

// getting lesson title and duration
function getLessonTitleAndDuration(course: Course, moduleIndex: number, lessonIndex: number): { title: string; duration: number } | undefined {
    const module = course.modules[moduleIndex];
    if (module) {
        const lesson = module.lessons[lessonIndex];
        if (lesson) {
            return {
                title: lesson.title,
                duration: lesson.content.length 
            };
        }
    }
    console.error("Invalid module or lesson index");
    return undefined;
}

// Test Case 8: User can access lesson content
function testAccessLessonContent() {
    const content = accessLessonContent(courseData[0], 0, 0);
    if (content) {
        console.assert(content.length === 2, `Expected 2 content items, but got ${content.length}`);
        console.log("Test Case 8 passed! Content accessed successfully.");
    } else {
        console.error("Test Case 8 failed! Unable to access lesson content.");
    }
}

// Test Case 9: Correct lesson title and duration are displayed
function testLessonTitleAndDuration() {
    const result = getLessonTitleAndDuration(courseData[0], 0, 1); 
    if (result) {
        const { title, duration } = result;
        console.assert(title === "Working with Forms", `Expected "Working with Forms", but got "${title}"`);
        console.assert(duration === 2, `Expected 2, but got ${duration}`);
        console.log("Test Case 9 passed! Title and duration displayed correctly.");
    } else {
        console.error("Test Case 9 failed! Unable to get lesson title and duration.");
    }
}

// Run tests
testAccessLessonContent();
testLessonTitleAndDuration();
