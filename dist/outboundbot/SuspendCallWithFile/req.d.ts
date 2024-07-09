export interface SuspendCallWithFileRequest {
    /**
     * 实例id
     * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
     */
    "InstanceId"?: string;
    /**
     * 任务组id
     * @example `0197261b-30e6-467b-83d6-7f72af868b03`
     */
    "GroupId"?: string;
    /**
     * 文件路径
     * @example `xxxx`
     */
    "FilePath"?: string;
}
