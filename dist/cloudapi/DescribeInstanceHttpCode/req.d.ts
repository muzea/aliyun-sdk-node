export interface DescribeInstanceHttpCodeRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-04-14T02:12:10Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-07-21T06:05:52Z`
     */
    "EndTime": string;
    /**
     * 指定要查询的环境。
     * - **RELEASE**：线上
     * - **PRE**：预发
     * - **TEST**：测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 实例id
     * @example `apigateway-cn-m7r227yy2004`
     */
    "InstanceId": string;
}
