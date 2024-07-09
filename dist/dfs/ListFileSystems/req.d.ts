export interface ListFileSystemsRequest {
    "NextToken"?: string;
    /**
     * 指定查询起始位置。
     * 默认值：1
     * @example `10`
     */
    "StartOffset"?: number;
    /**
     * 每页返回结果的行数。
     * 默认值：10
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 返回结果排序字段。
     * 取值：
     * - CreateTime（默认值）：按创建时间排序。
     * - FileSystemName：按文件系统名称排序。
     * - SpaceCapacity：按文件系统容量预算排序。
     * - UsedSpaceSize：按文件系统使用量排序。
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
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
}
