export interface CloneSqlInstanceRequest {
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
     * sql实例id
     * @example `1`
     */
    "sqlInstanceId": number;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 目标sql实例id
         * @example `1`
         */
        targetFolderId: number;
        /**
         * 名称
         * @example `test`
         */
        name: string;
    };
}
