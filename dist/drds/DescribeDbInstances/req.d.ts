export interface DescribeDbInstancesRequest {
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 存储层实例ID或集群ID。
     * @example `pc-***************`
     */
    "Search"?: string;
    /**
     * 存储层类型，取值为POLARDB或RDS。
     * @example `POLARDB`
     */
    "DbInstType"?: string;
    /**
     * 分页页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页每页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
