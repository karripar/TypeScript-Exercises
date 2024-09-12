/* Exercise 1: Optional Properties

Create an interface for representing a user profile. The user profile should have a username, email, and an optional bio. Write a function that displays the user's information, including the bio if provided. */

interface User {
    username: string;
    email: string;
    bio?: string;
}

const user: User = {username: "karripar", email: "didkdkdkd@nnnnn.fi", bio: "Hello there"};

const user2: User = {username: "ukkomies", email: "ukko@meaamam.fi"};

function displayUserInfo(user: User): void {
    console.log(user.username);
    console.log(user.email);
    console.log(user.bio || "No bio available")
  }

displayUserInfo(user);
displayUserInfo(user2)


/* Exercise 2: Array Types *********************************************************************************************************

Construct an interface for a blog post. Each post should have a title, content, and an array of tags. Write a function that displays the tags of a blog post. */

// TODO: Define the interface BlogPost with title, content, and tags array

interface BlogPost {
    title: string;
    content: string;
    tags: string[];
}

const blogPost: BlogPost = {
    title: "Getting Started with TypeScript",
    content: "Learn the basics of TypeScript and its powerful features.",
    tags: ["TypeScript", "Programming", "Web Development"]
  };

  // Function to display tags of a blog post
  function displayTags(post: BlogPost): void {
    console.log(`Tags: ${post.tags.join(", ")}`);
  }

  // Display tags of the blog post
  displayTags(blogPost);



/* Exercise 3: Tuple Types ***********************************************************************************************************

Develop an interface for a student's exam result. Each result should include the student's name, an array of subject scores as a tuple (subject name and score), and the total score. Write a function that calculates and displays the average score. */

// TODO: Define the interface ExamResult with name, subject scores tuple, and total score

interface ExamResult {
    name: string;
    scores: [[string, number], [string, number], [string, number]];
    totalScore: number;
}

const examResult: ExamResult = {
    name: "Alice",
    scores: [["Math", 85], ["Science", 92], ["History", 78]],
    totalScore: 255
  };

  // Function to calculate and display average score
  function displayAverageScore(result: ExamResult): void {
    const totalSubjects = result.scores.length;
    const totalScore = result.totalScore;
    const averageScore = totalScore / totalSubjects;
    console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
  }

  // Display average score
  displayAverageScore(examResult);
