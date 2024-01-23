/*
  Warnings:

  - A unique constraint covering the columns `[updated_by]` on the table `mst_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `mst_user_updated_by_key` ON `mst_user`(`updated_by`);

-- AddForeignKey
ALTER TABLE `mst_user` ADD CONSTRAINT `mst_user_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
