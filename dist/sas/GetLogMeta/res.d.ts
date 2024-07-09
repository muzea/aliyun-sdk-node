export interface GetLogMetaResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3956048F-9D73-5EDB-834B-4827BB48****`
     */
    RequestId: string;
    /**
     * 日志投递数据。
     */
    LogMeta: {
        /**
         * 日志服务SLS的日志项目。
         * @example `sas-log`
         */
        Project: string;
        /**
         * 日志存放的专属Logstore名称。
         * @example `aegis-log-login`
         */
        LogStore: string;
        /**
         * 日志类型的投递状态。取值：
         * - **enabled**：启用
         * - **disabled**：禁用
         * @example `enabled`
         */
        Status: string;
    };
}
