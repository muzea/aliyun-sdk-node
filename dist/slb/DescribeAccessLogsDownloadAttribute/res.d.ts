export interface DescribeAccessLogsDownloadAttributeResponse {
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
    LogsDownloadAttributes: {
        /**
         * 访问日志配置信息。
         */
        LogsDownloadAttribute: {
            /**
             * 日志服务LogProject的名称。
             * @example `test-log-project`
             */
            LogProject: string;
            /**
             * 日志服务LogStore的名称。
             * @example `test-log-store`
             */
            LogStore: string;
            /**
             * 传统型负载均衡实例的ID。
             * @example `lb-bp1b6c719dfa08ex*****`
             */
            LoadBalancerId: string;
            /**
             * 传统型负载均衡实例所在的地域ID。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 访问日志类型。仅取值**layer7**，表示七层访问日志。
             * @example `layer7`
             */
            LogType: string;
        }[];
    };
}
