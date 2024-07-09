export interface DescribeTablesRequest {
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 查询条件，取值为目标实例ID。
     * @example `drds************`
     */
    "Query"?: string;
    /**
     * 每页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
