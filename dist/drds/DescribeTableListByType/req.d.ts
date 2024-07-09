export interface DescribeTableListByTypeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drdshbga76p6****`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `drds_flash****`
     */
    "DbName": string;
    /**
     * 搜索字段。
     * @example `drdshbga76p61861`
     */
    "Query"?: string;
    /**
     * 每页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 表类型。
     * @example `SINGLE`
     */
    "TableType": string;
}
