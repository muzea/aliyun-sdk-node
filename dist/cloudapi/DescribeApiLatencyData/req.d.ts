export interface DescribeApiLatencyDataRequest {
    /**
     * API编号
     * @example `d6f679aeb3be4b91b3688e887ca1fe16    `
     */
    "ApiId": string;
    /**
     * 分组编号
     * @example `63be9002440b4778a61122f14c2b2bbb`
     */
    "GroupId"?: string;
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2016-07-23T08:28:48Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2016-07-23T09:28:48Z`
     */
    "EndTime": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName"?: string;
}
