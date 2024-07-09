export interface DescribeRdsPerformanceSummaryRequest {
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
     * RDS实例列表。
     * @example `rm-*****************`
     */
    "RdsInstanceId": string[];
}
