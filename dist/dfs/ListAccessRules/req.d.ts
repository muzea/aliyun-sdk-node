export interface ListAccessRulesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 权限组ID。
     * @example `acg-e3755fb0-358d-4286-9942-8d461048****`
     */
    "AccessGroupId": string;
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
     * - Priority（默认值）：按优先级排序。
     * - CreateTime：按创建时间排序。
     * @example `Priority`
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
