export interface UpdateSqlInstanceContentRequest {
    /**
     * 实例id。
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
     * @example `5975`
     */
    "sqlInstanceId": number;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 内容
         * @example `select * from test`
         */
        content: string;
    };
}
