export interface RenameFolderRequest {
    /**
     * 实例id
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
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 文件夹名称
         * @example `test`
         */
        name: string;
    };
}
