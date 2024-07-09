export interface QuerySlsLogStoreListResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `d6834ee9-5045-*************`
     */
    RequestId: string;
    /**
     * 日志服务配置数。
     * @example `1`
     */
    TotalSize: number;
    /**
     * 日志服务配置结果。
     */
    Result: {
        /**
         * 日志服务链接。
         * @example `https://sls.console.aliyun.com/lognext/project/k8s-log-c846f28edbd1d4c6aa9d78c0e********​/logsearch/thisisiss`
         */
        Link: string;
        /**
         * 创建时间。
         * @example `2020-05-18 22:08:46`
         */
        CreateTime: string;
        /**
         * logstore名称。
         * @example `thisisatestlogstore`
         */
        Logstore: string;
        /**
         * 日志服务类型。
         * @example `SLS日志服务`
         */
        ConsumerSide: string;
        /**
         * project名称。
         * @example `k8s-log-c846f28edbd1d4c6aa9d78c0e********`
         */
        Project: string;
        /**
         * 日志来源：
         * - 标准输出：stdout.log。
         * - 文件日志：采集路径。
         * @example `/var/log/*`
         */
        Source: string;
    }[];
}
