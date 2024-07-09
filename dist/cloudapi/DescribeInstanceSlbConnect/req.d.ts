export interface DescribeInstanceSlbConnectRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-09-01T02:09:33Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-09-15T15:07:06Z`
     */
    "EndTime": string;
    /**
     * 实例id
     * @example `apigateway-sz-1574cc7c5a31`
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
