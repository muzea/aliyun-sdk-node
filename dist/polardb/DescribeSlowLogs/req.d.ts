export interface DescribeSlowLogsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 查询开始日期，格式：yyyy-MM-ddZ（UTC时间）。
     * @example `2021-05-01Z`
     */
    "StartTime": string;
    /**
     * 查询结束日期，不能小于查询开始日期，与查询开始日期间隔不超过31天。格式：yyyy-MM-ddZ（UTC时间）。
     * @example `2021-05-30Z`
     */
    "EndTime": string;
    /**
     * 数据库名称。
     * @example `PolarDB_MySQL`
     */
    "DBName"?: string;
    /**
     * 每页记录数，取值：30~100。默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
}
