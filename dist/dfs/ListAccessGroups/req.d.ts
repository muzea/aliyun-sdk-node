export interface ListAccessGroupsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 指定查询起始位置。
     * 默认值：1
     * @example `10`
     */
    "StartOffset"?: number;
    /**
     * 每页返回结果的行数。
     * 默认值：10
     * @example `100`
     */
    "Limit"?: number;
    /**
     * 返回结果排序字段。
     * 取值：
     * - CreateTime（默认值）：按创建时间排序。
     * - AccessGroupName：按权限组名称排序。
     * @example `CreateTime`
     */
    "OrderBy"?: string;
    /**
     * 返回结果排序方式。
     * 取值：
     * - ASC（默认值）：递增
     * - DESC：递减
     * @example `ASC`
     */
    "OrderType"?: string;
    "NextToken"?: string;
}
