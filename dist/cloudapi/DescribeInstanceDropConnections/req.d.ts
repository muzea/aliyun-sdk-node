export interface DescribeInstanceDropConnectionsRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2023-01-31T06:00:09Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2023-01-31T07:00:09Z`
     */
    "EndTime": string;
    /**
     * 专享实例ID
     * @example `apigateway-cn-n6w1v1234501`
     */
    "InstanceId": string;
    /**
     * 统计指标
     * - Maximum 最大
     * - Minimum 最小
     * - Average 平均
     * @example `Maximum`
     */
    "SbcName": string;
}
