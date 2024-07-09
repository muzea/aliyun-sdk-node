export interface DescribeKvUsageDataResponse {
    /**
     * 请求ID。
     * @example `9732E117-8A37-49FD-A36F-ABBB87556CA7`
     */
    RequestId: string;
    /**
     * 开始时间。
     * @example `2022-11-06T16:00:00Z`
     */
    StartTime: string;
    /**
     * 结束时间。
     * @example `2022-11-18T15:59:59Z`
     */
    EndTime: string;
    /**
     * 用量明细。
     */
    KvUsageData: {
        /**
         * 时间片起始时刻。
         * @example `2022-11-14T15:00:03Z`
         */
        TimeStamp: string;
        /**
         * Namespace ID。仅当**SplitBy**指定**namespace**时返回该字段。
         * @example `534167033424646144`
         */
        NamespaceId: string;
        /**
         * 请求类型。仅当**SplitBy**指定**type**时返回该字段。
         * @example `get`
         */
        AccessType: string;
        /**
         * 访问次数。
         * @example `1340000`
         */
        Acc: number;
    }[];
}
