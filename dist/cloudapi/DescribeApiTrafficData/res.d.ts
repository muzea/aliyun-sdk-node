export interface DescribeApiTrafficDataResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ001`
     */
    RequestId: string;
    CallUploads: {
        /**
         * 由 MonitorItem 组成的格式，返回API调用上行数据流量监控信息
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `670`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2016-07-28T08:20:00Z`
             */
            ItemTime: string;
        }[];
    };
    CallDownloads: {
        /**
         * 由 MonitorItem 组成的格式，返回API调用下行数据流量监控信息
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `0`
             */
            ItemValue: string;
            /**
             * 对应时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2016-07-28T08:20:00Z`
             */
            ItemTime: string;
        }[];
    };
}
