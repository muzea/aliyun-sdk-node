export interface CreateSqlInstanceRequest {
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
     * 请求体参数
     */
    "body"?: {
        /**
         * sql实例名称
         * @example `test`
         */
        name: string;
        /**
         * 父项工作项唯一标识
         * @example `-1`
         */
        parent: number;
    };
}
