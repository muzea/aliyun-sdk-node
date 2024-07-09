export interface DeleteFolderRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 数据库名称
     * @example `general`
     */
    "database": string;
    /**
     * 文件夹id
     * @example `-1`
     */
    "folderId": number;
}
