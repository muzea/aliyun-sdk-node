export interface ListActivatedAlertsRequest {
    /**
     * 筛选条件，格式为`{"key":"value"}`。需要设置筛选条件的`key`和`value`。
     * @example `{"alertname":"容器CPU使用率大于80%"}`
     */
    "Filter"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 查询结果分页的页码。默认为`1`。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 查询结果分页的每页项目数量。默认为`10`。
     * @example `10`
     */
    "PageSize": number;
}
