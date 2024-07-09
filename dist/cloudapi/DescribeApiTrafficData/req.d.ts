export interface DescribeApiTrafficDataRequest {
    /**
     * API编号
     * @example `d6f679aeb3be4b91b3688e887ca1fe16`
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
     * 环境名称，取值为：
     * - **RELEASE**：线上
     * - **TEST**：测试
     * - PRE：预发
     * @example `RELEASE`
     */
    "StageName"?: string;
}
