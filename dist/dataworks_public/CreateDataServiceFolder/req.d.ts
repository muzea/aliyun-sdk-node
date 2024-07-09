export interface CreateDataServiceFolderRequest {
    /**
     * 租户ID。
     * @example `10002`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * 文件夹的名称。
     * @example `测试文件夹`
     */
    "FolderName": string;
    /**
     * 文件夹的目标父文件夹ID。业务流程根文件夹ID等于0，用户创建的文件夹ID大于0。
     * @example `0`
     */
    "ParentId": number;
    /**
     * 文件夹的目标业务流程ID。
     * @example `1000abcd`
     */
    "GroupId": string;
}
