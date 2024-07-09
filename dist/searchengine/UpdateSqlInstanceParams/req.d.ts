export interface UpdateSqlInstanceParamsRequest {
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
         * 实例kv配置
         */
        kvpair: any;
        /**
         * 动态参数
         */
        dynamicParam: any;
        /**
         * 静态参数
         */
        staticParam: any;
        /**
         * 修改参数。
         */
        params: any;
        /**
         * 组合参数
         */
        combineParam: any;
    };
}
