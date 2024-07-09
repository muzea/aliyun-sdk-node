export interface DescribeDrdsShardingDbsRequest {
    /**
     * PolarDB-X的实例ID。
     * @example `drdshbgaf3c63qbo`
     */
    "DrdsInstanceId": string;
    /**
     * PolarDB-X实例的数据库名称。
     * @example `drds_test`
     */
    "DbName": string;
    /**
     * 数据库匹配格式。
     * @example `test`
     */
    "DbNamePattern"?: string;
    /**
     * 当前页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页大小。
     * @example `20`
     */
    "PageSize"?: number;
}
