export interface DescribeInstanceDropPacketRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-09-06T04:00:36Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-12-16T02:04:36Z`
     */
    "EndTime": string;
    /**
     * 实例id
     * @example `apigateway-cn-v641b9dxc00p`
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
