export interface DescribeInstanceDropConnectionsResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    InstanceDropConnections: {
        /**
         * 丢失的连接
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `0.0`
             */
            ItemValue: string;
            /**
             * 时间坐标，按照ISO8601标准表示。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2023-01-31T01:11:00Z`
             */
            ItemTime: string;
        }[];
    };
}
