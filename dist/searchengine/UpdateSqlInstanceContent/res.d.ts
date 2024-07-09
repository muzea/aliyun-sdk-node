export interface UpdateSqlInstanceContentResponse {
    /**
     * id of request
     * @example `E45380E8-994A-5402-9806-F114B3295FCF`
     */
    requestId: string;
    /**
     * InstanceVersionVO
     */
    result: {
        /**
         * 创建时间。
         * @example `1719221186114`
         */
        gmtCreate: string;
        /**
         * 修改时间。
         * @example `1719221186114`
         */
        gmtModified: string;
        /**
         * 实例id。
         * @example `1`
         */
        instanceId: number;
        /**
         * 版本号。
         * @example `1`
         */
        version: number;
        /**
         * 备注
         * @example `确认执行`
         */
        comment: string;
        /**
         * 模版id
         * @example `1`
         */
        relatedTemplateId: number;
        /**
         * sql内容。
         * @example `select * from test`
         */
        content: string;
        /**
         * kv包含的参数。
         * @example `{\"trace\":\"INFO\",\"databaseName\":\"general\",\"iquan.plan.cache.enable\":true,\"iquan.plan.prepare.level\":\"jni.post.optimize\",\"urlencode_data\":false,\"formatType\":\"string\",\"timeout\":1000}`
         */
        kvpairs: string;
        /**
         * 动态参数
         * @example `{\"trace\":\"INFO\",\"databaseName\":\"general\",\"iquan.plan.cache.enable\":true,\"iquan.plan.prepare.level\":\"jni.post.optimize\",\"urlencode_data\":false,\"formatType\":\"string\",\"timeout\":1000}`
         */
        dynamicParams: string;
        /**
         * 模版参数
         * @example `{\"trace\":\"INFO\",\"databaseName\":\"general\",\"iquan.plan.cache.enable\":true,\"iquan.plan.prepare.level\":\"jni.post.optimize\",\"urlencode_data\":false,\"formatType\":\"string\",\"timeout\":1000}`
         */
        templateParams: string;
        /**
         * 静态参数。
         * @example `{\"trace\":\"INFO\",\"databaseName\":\"general\",\"iquan.plan.cache.enable\":true,\"iquan.plan.prepare.level\":\"jni.post.optimize\",\"urlencode_data\":false,\"formatType\":\"string\",\"timeout\":1000}`
         */
        staticParams: string;
        /**
         * 组合参数
         * @example `{\"trace\":\"INFO\",\"databaseName\":\"general\",\"iquan.plan.cache.enable\":true,\"iquan.plan.prepare.level\":\"jni.post.optimize\",\"urlencode_data\":false,\"formatType\":\"string\",\"timeout\":1000}`
         */
        combineParams: string;
    };
}
