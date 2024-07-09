export interface DescribeStreamingDataServiceRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 服务ID
     * @example `1`
     */
    "ServiceId": string;
    /**
     * 实例ID。
     * @example `gp-bp10g78o9807yv9h3`
     */
    "DBInstanceId": string;
}
