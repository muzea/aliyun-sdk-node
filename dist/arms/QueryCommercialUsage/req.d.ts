export interface QueryCommercialUsageRequest {
    /**
     * 数据片的时间间隔，单位为秒，最小值为3600。
     * @example `3600`
     */
    "IntervalInSec"?: number;
    /**
     * 起始时间的时间戳，精确到毫秒。
     * @example `1699200000000`
     */
    "StartTime": number;
    /**
     * 结束时间的时间戳，精确到毫秒。
     * @example `1699286400000`
     */
    "EndTime": number;
    /**
     * 排序依据，可设为任一dimesion
     * @example `dataType`
     */
    "OrderBy"?: string;
    /**
     * 指标名称，取值：USAGEFEE.STAT
     * @example `USAGEFEE.STAT
    `
     */
    "Metric": string;
    /**
     * 排序标准。取值：
     * - `ASC`：升序。
     * - `DESC`：降序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 过滤条件数组
     */
    "AdvancedFilters"?: {
        /**
         * 过滤条件的key
         * @example `regionId`
         */
        Key: string;
        /**
         * 过滤条件的value
         * @example `cn-hangzhou`
         */
        Value: string;
        /**
         * 操作符，目前仅支持等于或者in
         * @example `eq`
         */
        OpType: string;
    }[];
    /**
     * 指标对应的维度。
     * * dataType 数据类型
     * * productType  产品类型
     * * instanceId 实例ID
     * * instanceName 实例名称
     * * instanceType 实例类型
     */
    "Dimensions"?: string[];
    /**
     * 指标对应的测量数据。
     */
    "Measures"?: string[];
    /**
     * 查询的数据返回类型：
     * * instantQuery 非时序
     * * timeSeriesQuery 时序
     * @example `instantQuery`
     */
    "QueryType": string;
}
