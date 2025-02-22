export const navItems = [
  { label: "Home", to: "/home" },
  { label: "Features", to: "/features" },
  { label: "Contact", to: "/contact" },
];

// axios
//   .get(url, { headers })
//   .then((response) => {
//     console.log("API 응답 데이터:", response.data); // 여기서 응답 데이터 출력
//     setData(response.data); // 데이터를 상태에 저장
//   })
//   .catch((error) => {
//     console.error("API 호출 실패:", error);
//   });

// -- Create Table: post
// CREATE TABLE "post" (
//     "post_id" SERIAL NOT NULL, -- Auto-incremented primary key
//     "author_id" INT NOT NULL,
//     "content" TEXT NULL,
//     "title" VARCHAR(100) NULL,
//     "createdAt" TIMESTAMP NULL,
//     PRIMARY KEY ("post_id")
// );

// -- Create Table: author
// CREATE TABLE "author" (
//     "author_id" SERIAL NOT NULL, -- Auto-incremented primary key
//     "name" VARCHAR(15) NULL,
//     "author_info" VARCHAR(100) NULL,
//     "createdAt" TIMESTAMP NULL,
//     PRIMARY KEY ("author_id")
// );

// -- Create Table: comment
// CREATE TABLE "comment" (
//     "comment_id" SERIAL NOT NULL, -- Auto-incremented primary key
//     "author_id" INT NOT NULL,
//     "post_id" INT NOT NULL,
//     "author_id2" INT NOT NULL,
//     "contents" TEXT NULL,
//     "createdAt" TIMESTAMP NULL,
//     PRIMARY KEY ("comment_id"),
//     CONSTRAINT "FK_author_TO_comment_1" FOREIGN KEY ("author_id")
//         REFERENCES "author" ("author_id"),
//     CONSTRAINT "FK_post_TO_comment_1" FOREIGN KEY ("post_id")
//         REFERENCES "post" ("post_id"),
//     CONSTRAINT "FK_post_TO_comment_2" FOREIGN KEY ("author_id2")
//         REFERENCES "author" ("author_id")
// );

// -- Add Foreign Key to post
// ALTER TABLE "post"
// ADD CONSTRAINT "FK_author_TO_post_1" FOREIGN KEY ("author_id")
// REFERENCES "author" ("author_id");

// ----------------------------------------------------------------------------------

// INSERT INTO "author" ("name", "author_info", "createdAt") VALUES
// ('Alice', 'Tech enthusiast', NOW()),
// ('Bob', 'Science writer', NOW()),
// ('Charlie', 'Fiction author', NOW()),
// ('Diana', 'Travel blogger', NOW()),
// ('Eve', 'Fitness expert', NOW());

// INSERT INTO "post" ("author_id", "content", "title", "createdAt") VALUES
// (1, 'Exploring the latest trends in technology.', 'Tech Trends 2024', NOW()),
// (2, 'Understanding the mysteries of the universe.', 'The Universe Unveiled', NOW()),
// (3, 'A thrilling story of adventure and bravery.', 'The Great Escape', NOW()),
// (4, 'Top destinations to visit this year.', 'Travel Goals 2024', NOW()),
// (5, 'Tips for maintaining a healthy lifestyle.', 'Healthy Living 101', NOW());

// INSERT INTO "comment" ("author_id", "post_id", "author_id2", "contents", "createdAt") VALUES
// (2, 1, 1, 'Great insights into the tech world!', NOW()),
// (3, 2, 2, 'This article made me think deeply.', NOW()),
// (4, 3, 3, 'What a fascinating story!', NOW()),
// (5, 4, 4, 'I want to visit these places!', NOW()),
// (1, 5, 5, 'Thanks for the useful tips!', NOW());
