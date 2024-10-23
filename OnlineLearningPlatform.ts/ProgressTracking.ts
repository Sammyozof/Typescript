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
    completed?: boolean; // Track if the lesson is completed
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


const courses: Course[] = courseData; 

// Marking a lesson as complete
function markLessonAsComplete(course: Course, moduleIndex: number, lessonIndex: number): void {
    const lesson = course.modules[moduleIndex].lessons[lessonIndex];
    if (lesson) { 
        lesson.completed = true;
    } else {
        console.error(`Lesson not found at module index ${moduleIndex}, lesson index ${lessonIndex}`);
    }
}

// calculating progress
function calculateProgress(course: Course): number {
    let totalLessons = 0;
    let completedLessons = 0;

    course.modules.forEach(module => {
        totalLessons += module.lessons.length;
        completedLessons += module.lessons.filter(lesson => lesson.completed).length;
    });

    return totalLessons === 0 ? 0 : (completedLessons / totalLessons) * 100;
}

// Test Case 6: Progress percentage updates correctly when lessons are marked as complete
function testProgressUpdates() {
    
    markLessonAsComplete(courses[0], 0, 0);
    const progressAfterFirstLesson = calculateProgress(courses[0]);
    console.assert(progressAfterFirstLesson === 50, `Expected 50, but got ${progressAfterFirstLesson}`);

    // Marking second lesson as complete
    markLessonAsComplete(courses[0], 0, 1);
    const progressAfterBothLessons = calculateProgress(courses[0]);
    console.assert(progressAfterBothLessons === 100, `Expected 100, but got ${progressAfterBothLessons}`);

    console.log("Test Case 6 passed!");
}

// Test Case 7: Progress displays correctly based on completed lessons
function testProgressDisplays() {
    
    const initialProgress = calculateProgress(courses[0]);
    console.assert(initialProgress === 0, `Expected 0, but got ${initialProgress}`);

    // Mark first lesson as complete
    markLessonAsComplete(courses[0], 0, 0);
    const progressAfterCompletion = calculateProgress(courses[0]);
    console.assert(progressAfterCompletion === 50, `Expected 50, but got ${progressAfterCompletion}`);

    console.log("Test Case 7 passed!");
}

// Run tests
testProgressUpdates();
testProgressDisplays();
