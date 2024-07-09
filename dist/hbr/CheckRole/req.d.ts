export interface CheckRoleRequest {
    /**
     * 角色类型。支持：
     * - EcsRole：ECS资源访问权限
     * - CsgRole：云存储网关备份权限
     * - NasRole：NAS备份权限
     * - OssRole：OSS备份权限
     * - UdmRole：ECS整机备份权限
     * - VMwareLocalRole：本地VMWARE虚拟机备份权限
     * - VMwareCloudRole：云上VMWARE虚拟机备份全新啊
     * - EcsBackupRole：ECS备份权限
     * - OtsRole：OTS备份权限
     * - CrossAccountRole：跨账号备份权限
     * @example `OssRole`
     */
    "CheckRoleType"?: string;
    /**
     * 被当前账号管理的跨账号备份的原账号ID。
     * @example `158975xxxxx4625`
     */
    "CrossAccountUserId"?: number;
    /**
     * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
     * @example `BackupRole`
     */
    "CrossAccountRoleName"?: string;
}
