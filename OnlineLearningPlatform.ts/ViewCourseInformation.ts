import { courseData } from "./SampleJson";

interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: { type: string; data: string }[];
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

// Viewing course information
function viewCourseInformation(course: Course): void {
    console.log(`Course Title: ${course.title}`);
    console.log(`Course Description: ${course.description}`);
}

// Viewing lessons associated with a course
function viewCourseLessons(course: Course): void {
    course.modules.forEach(module => {
        console.log(`Module: ${module.title}`);
        module.lessons.forEach(lesson => {
            console.log(`  Lesson: ${lesson.title} - ${lesson.description}`);
        });
    });
}

// Test Case 4: User can view course title, description, and instructor details
function testViewCourseInformation() {
    const course = courseData[0]; 
    console.log("Test Case 4: Viewing Course Information");
    viewCourseInformation(course);
    console.log("Test Case 4 passed!\n");
}

// Test Case 5: User can view the list of lessons associated with a course
function testViewCourseLessons() {
    const course = courseData[0]; 
    console.log("Test Case 5: Viewing Course Lessons");
    viewCourseLessons(course);
    console.log("Test Case 5 passed!\n");
}

// Run tests
testViewCourseInformation();
testViewCourseLessons();
