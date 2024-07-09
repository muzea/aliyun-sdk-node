export interface UpdateSqlInstanceParamsResponse {
    /**
     * id of request
     * @example `022F36C7-9FB4-5D67-BEBC-3D14B0984463`
     */
    requestId: string;
    /**
     * InstanceVersionVO
     */
    result: {
        /**
         * 创建时间
         * @example `1719221186114`
         */
        gmtCreate: string;
        /**
         * 修改时间
         * @example `1719220182844`
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
         * 备注。
         * @example `确认执行`
         */
        comment: string;
        /**
         * 模版id
         * @example `1`
         */
        relatedTemplateId: number;
        /**
         * 内容
         * @example `select * from test`
         */
        content: string;
        /**
         * kv参数
         * @example `{\"trace\":\"INFO\",\"databaseName\":\"general\",\"iquan.plan.cache.enable\":true,\"iquan.plan.prepare.level\":\"jni.post.optimize\",\"urlencode_data\":false,\"formatType\":\"string\",\"timeout\":1000}`
         */
        kvpairs: string;
        /**
         * 动态参数。
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
