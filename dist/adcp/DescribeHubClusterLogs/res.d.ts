export interface DescribeHubClusterLogsResponse {
    /**
     * 请求ID。
     * @example `661192D7-25A6-54C2-B643-1129CB7D2768`
     */
    RequestId: string;
    /**
     * 操作日志简要信息数组。
     */
    Logs: {
        /**
         * 日志创建时间。格式：<i>yyyy-mm-dd</i>t<i>hh:mm:ss</i>z（utc时间）。
         * @example `2021-12-02T11:48:15+08:00`
         */
        CreationTime: string;
        /**
         * 集群ID。
         * @example `c102fe5f1ee5d4c87a68121a77d8b****`
         */
        ClusterId: string;
        /**
         * 集群日志。
         * @example `Cluster Created`
         */
        ClusterLog: string;
        /**
         * 日志级别。取值范围：
         * - error：错误。
         * - warn：警告。
         * - info：信息。
         * @example `info`
         */
        LogLevel: string;
    }[];
}
