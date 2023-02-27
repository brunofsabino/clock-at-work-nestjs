/*
  Warnings:

  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "photoSelfie" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("date", "id", "latitude", "longitude", "name", "photoSelfie", "registrationNumber") SELECT "date", "id", "latitude", "longitude", "name", "photoSelfie", "registrationNumber" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_registrationNumber_key" ON "users"("registrationNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
