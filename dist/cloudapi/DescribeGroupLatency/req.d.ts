export interface DescribeGroupLatencyRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2023-03-30T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2023-04-14T06:26:14Z`
     */
    "EndTime": string;
    /**
     * 指定要查询的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 指定要操作API所属分组ID
     * @example `d825094fdd114a869f5adb443d9b7ead`
     */
    "GroupId": string;
}
