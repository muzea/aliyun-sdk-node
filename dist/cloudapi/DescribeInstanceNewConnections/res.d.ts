export interface DescribeInstanceNewConnectionsResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    InstanceNewConnections: {
        /**
         * 实例新连接列表
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `16`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-10-08T02:08:00Z
            `
             */
            ItemTime: string;
        }[];
    };
}
