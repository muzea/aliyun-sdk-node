export interface UpdateSqlInstanceNameRequest {
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
         * sql实例名称
         * @example `test`
         */
        name: string;
    };
}
