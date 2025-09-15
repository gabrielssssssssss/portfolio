-- CreateTable
CREATE TABLE "Music" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "artists" TEXT NOT NULL,
    "Cover" TEXT NOT NULL,
    "Redirect" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" JSONB NOT NULL,
    "repositories" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "technologie" TEXT NOT NULL,
    "redirect" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);
