-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `contactNo` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccessToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `expiry` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `fullname` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(50) NOT NULL,
    `created_by` INTEGER NOT NULL,
    `create_date` DATETIME(3) NOT NULL,
    `updated_by` INTEGER NOT NULL,
    `update_date` DATETIME(3) NOT NULL,
    `id_locked` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mst_user_module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `Module_id` INTEGER NOT NULL,
    `can_open` BOOLEAN NOT NULL,
    `can_add` BOOLEAN NOT NULL,
    `can_update` BOOLEAN NOT NULL,
    `can_lock` BOOLEAN NOT NULL,
    `can_unlock` BOOLEAN NOT NULL,
    `can_delete` BOOLEAN NOT NULL,
    `can_print` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_module` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `module` VARCHAR(255) NOT NULL,
    `particulars` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mst_user_module` ADD CONSTRAINT `mst_user_module_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `mst_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mst_user_module` ADD CONSTRAINT `mst_user_module_Module_id_fkey` FOREIGN KEY (`Module_id`) REFERENCES `sys_module`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
