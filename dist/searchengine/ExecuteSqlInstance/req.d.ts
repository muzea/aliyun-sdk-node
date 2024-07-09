export interface ExecuteSqlInstanceRequest {
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
         * sql内容
         * @example `select * from test`
         */
        content: string;
        /**
         * kv结构体
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
         * 数据源机房
         * @example `vpc_hz_domain_1`
         */
        domain: string;
        /**
         * sql执行参数
         */
        params: any;
        /**
         * 组合参数
         */
        combineParam: any;
    };
}
