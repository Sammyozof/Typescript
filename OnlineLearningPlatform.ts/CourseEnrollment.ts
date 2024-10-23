import { courseData } from "./SampleJson";

interface Course {
    id: number;
    title: string;
    description: string;
    modules: Module[];
}

interface Module {
    title: string;
    lessons: Lesson[];
}

interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: LessonContent[];
}

interface LessonContent {
    type: string;
    data: string;
}

interface User {
    id: number;
    enrolledCourses: number[]; // List of course IDs the user is enrolled in
}

const user: User = {
    id: 1,
    enrolledCourses: []
};

// Enrolling user in a course
function enrollInCourse(courseId: number): void {
    if (!user.enrolledCourses.includes(courseId)) {
        user.enrolledCourses.push(courseId);
        console.log(`User enrolled in course ID: ${courseId}`);
    } else {
        console.log(`User is already enrolled in course ID: ${courseId}`);
    }
}

// Unenrolling user from a course
function unenrollFromCourse(courseId: number): void {
    const index = user.enrolledCourses.indexOf(courseId);
    if (index !== -1) {
        user.enrolledCourses.splice(index, 1);
        console.log(`User unenrolled from course ID: ${courseId}`);
    } else {
        console.log(`User is not enrolled in course ID: ${courseId}`);
    }
}

// Checking if the user is enrolled in a course
function isUserEnrolled(courseId: number): boolean {
    return user.enrolledCourses.includes(courseId);
}

// Test Case 1: User can successfully enroll in a course.
function testCase1() {
    enrollInCourse(1);
    console.assert(user.enrolledCourses.includes(1), "Test Case 1 Failed: User should be enrolled in course 1.");
    console.log("Test Case 1 Passed: User successfully enrolled in the course.");
}

// Test Case 2: User can successfully unenroll from a course.
function testCase2() {
    unenrollFromCourse(1);
    console.assert(!user.enrolledCourses.includes(1), "Test Case 2 Failed: User should not be enrolled in course 1.");
    console.log("Test Case 2 Passed: User successfully unenrolled from the course.");
}

// Test Case 3: Enrolled user should see a course marked as enrolled.
function testCase3() {
    enrollInCourse(1);
    console.assert(isUserEnrolled(1), "Test Case 3 Failed: User should see the course as enrolled.");
    console.log("Test Case 3 Passed: User sees the course as enrolled.");
}

// Run tests
testCase1();
testCase2();
testCase3();
