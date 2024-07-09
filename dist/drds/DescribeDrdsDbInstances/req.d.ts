export interface DescribeDrdsDbInstancesRequest {
    /**
     * 实例ID。
     * @example `drdshbga1138****`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `dbname`
     */
    "DbName": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量。
     * @example `30`
     */
    "PageSize"?: number;
}
