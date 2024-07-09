export interface AttachNasFileSystemRequest {
    /**
     * nas文件系统id。
     * @example `005494`
     */
    "FileSystemId": string;
    /**
     * nas文件系统创建时间。
     * @example `1607436917`
     */
    "CreateTime": string;
    /**
     * 跨账号备份类型。支持：
     * - SELF_ACCOUNT：本账号备份
     * - CROSS_ACCOUNT：跨账号备份
     * @example `SELF_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 被当前账号管理的跨账号备份的原账号ID。
     * @example `158975xxxxxx4625`
     */
    "CrossAccountUserId"?: number;
    /**
     * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
}
