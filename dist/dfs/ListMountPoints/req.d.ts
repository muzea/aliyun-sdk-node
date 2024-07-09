export interface ListMountPointsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 文件系统ID。
     * @example `37af8f42-2abc-4e74-889d-664f5163****`
     */
    "FileSystemId": string;
    /**
     * 指定查询起始位置。
     * 默认值：1
     * @example `10`
     */
    "StartOffset"?: number;
    /**
     * 每页返回结果的个数。
     * 取值范围：1~1000
     * 默认值：10
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 返回结果排序字段。
     * 默认值：CreateTime（按创建时间排序）
     * @example `CreateTime`
     */
    "OrderBy"?: string;
    /**
     * 返回结果排序方式。
     * 取值：
     * - ASC（默认值）：升序
     * - DESC：降序
     * @example `ASC`
     */
    "OrderType"?: string;
    "NextToken"?: string;
}
