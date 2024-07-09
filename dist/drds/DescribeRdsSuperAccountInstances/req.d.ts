export interface DescribeRdsSuperAccountInstancesRequest {
    /**
     * 实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库实例类型，默认值为**RDS**。
     * @example `RDS`
     */
    "DbInstType"?: string;
    /**
     * RDS实例ID列表。
     * @example `['rm-*****************','rm-*****************']`
     */
    "RdsInstance": string[];
}
