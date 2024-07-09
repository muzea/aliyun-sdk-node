export interface DescribeRecordsRequest {
    /**
     * 按存储记录类型查询。取值范围：
     * - record（录制）
     * - snapshot（截图）
     * @example `record`
     */
    "Type": string;
    /**
     * 按流ID查询。
     * @example `323*****997-cn-qingdao`
     */
    "StreamId": string;
    /**
     * 按开始时间查询。
     * @example `2021-11-22T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 按结束时间查询。
     * @example `2021-11-24T00:00:00Z`
     */
    "EndTime": string;
    /**
     * 是否使用私有Bucket。
     * @example `true`
     */
    "PrivateBucket"?: boolean;
    /**
     * 按给定字段排序，取值范围：
     * - Id（默认）
     * @example `Id`
     */
    "SortBy"?: string;
    /**
     * 排序方式。取值范围：
     * - asc（升序）（默认）
     * - desc（降序）
     * @example `asc`
     */
    "SortDirection"?: string;
    /**
     * 分页大小，默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认值：1。
     * @example `1`
     */
    "PageNum"?: number;
}
