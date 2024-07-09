export interface ListDoctorHiveDatabasesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 日期。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 数据库名列表。
     * @example `null`
     */
    "DatabaseNames"?: string[];
    /**
     * 排序方向。取值：
     * - ASC：升序排列
     * - DESC：降序排列
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 排序依据。取值：
     * - tableCount：表数量。
     * @example `tableCount`
     */
    "OrderBy"?: string;
}
