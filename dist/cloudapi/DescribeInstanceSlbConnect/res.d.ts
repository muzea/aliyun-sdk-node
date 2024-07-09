export interface DescribeInstanceSlbConnectResponse {
    /**
     * 请求id
     * @example `E7FE7172-AA75-5880-B6F7-C00893E9BC06`
     */
    RequestId: string;
    InstanceSlbConnect: {
        /**
         * 实例并发连接数
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `12`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-09-15T15:07:06Z
            `
             */
            ItemTime: string;
            /**
             * 指标
             * - InstanceMaxConnection 最大并发连接数
             * - InstanceInactiveConnection 非活跃连接数
             * - InstanceActiveConnection 活跃连接数
             * @example `InstanceActiveConnection`
             */
            Item: string;
        }[];
    };
}
