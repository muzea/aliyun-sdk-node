export interface DescribeRecycleBinStatusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS上创建的数据库名称。
     * @example `test`
     */
    "DbName": string;
}
