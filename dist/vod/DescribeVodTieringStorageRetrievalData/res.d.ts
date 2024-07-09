export interface DescribeVodTieringStorageRetrievalDataResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D73936****`
     */
    RequestId: string;
    /**
     * 取回数据。
     */
    RetrievalData: {
        /**
         * 时间片起始时刻。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-06-02T10:20:00Z
        `
         */
        TimeStamp: string;
        /**
         * 存储地域。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 媒资存储类型。
         * @example `IA`
         */
        StorageClass: string;
        /**
         * 取回数据。
         * @example `1234`
         */
        RetrievalData: number;
        /**
         * 冷归档标准取回数据。
         * @example `123`
         */
        CAStdRetrievalData: number;
        /**
         * 冷归档批量取回数据。
         * @example `123`
         */
        CABulkRetrievalData: number;
        /**
         * 冷归档高优取回数据。
         * @example `123`
         */
        CAHighPriorRetrievalData: number;
    }[];
}
