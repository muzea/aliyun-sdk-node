export interface DescribeVodTieringStorageDataResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 存储用量数据。
     */
    StorageData: {
        /**
         * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-05-29T01:00:00Z`
         */
        TimeStamp: string;
        /**
         * 存储地域。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 存储类型。
         * @example `IA`
         */
        StorageClass: string;
        /**
         * 存储用量数据。单位：byte。
         * @example `1234`
         */
        StorageUtilization: number;
        /**
         * 不足一月存储数据。单位：byte。
         * @example `123`
         */
        LessthanMonthDatasize: number;
    }[];
}
