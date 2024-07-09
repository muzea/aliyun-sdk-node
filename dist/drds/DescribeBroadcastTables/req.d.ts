export interface DescribeBroadcastTablesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test_db`
     */
    "DbName": string;
    /**
     * 查询内容。
     * @example `tb1`
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
}
