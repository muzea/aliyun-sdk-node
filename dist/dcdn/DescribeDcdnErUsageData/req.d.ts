export interface DescribeDcdnErUsageDataRequest {
    /**
     * 查询指定的边缘函数ID。
     * @example `routine1.test`
     */
    "RoutineID"?: string;
    /**
     * 查询指定的边缘函数规格。取值：
     * - 5ms
     * - 50ms
     * - 100ms
     * @example `50ms`
     */
    "Spec"?: string;
    /**
     * 获取数据起始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-10-30T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2018-10-31T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 查询结果分组输出，可以按照函数ID（routine）或函数规格（spec）分组输出。
     * >若参数为空，查询结果不分组。
     * @example `routine`
     */
    "SplitBy"?: string;
}
