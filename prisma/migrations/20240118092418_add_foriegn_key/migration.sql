/*
  Warnings:

  - You are about to drop the `accesstoken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[created_by]` on the table `mst_user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE `accesstoken`;

-- DropTable
DROP TABLE `user`;

-- CreateIndex
CREATE UNIQUE INDEX `mst_user_created_by_key` ON `mst_user`(`created_by`);

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
