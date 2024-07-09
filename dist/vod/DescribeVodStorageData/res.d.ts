export interface DescribeVodStorageDataResponse {
    /**
     * 返回数据的时间颗粒度。取值：
     * - **hour**：小时数据。
     * - **day**：天数据。
     * @example `day`
     */
    DataInterval: string;
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-****-9A87633D248E`
     */
    RequestId: string;
    StorageData: {
        /**
         * 存储用量数据。
         */
        StorageDataItem: {
            /**
             * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-01T15:00:00Z`
             */
            TimeStamp: string;
            /**
             * 存储用量数据。单位：byte。
             * @example `111111`
             */
            StorageUtilization: string;
            /**
             * 存储流出流量。单位：byte。此流量指直接访问存储地址产生的流量，未经CDN加速。
             * @example `111111`
             */
            NetworkOut: string;
        }[];
    };
}
