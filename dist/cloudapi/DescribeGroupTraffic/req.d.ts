export interface DescribeGroupTrafficRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2023-01-29T01:27:43Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2023-06-16T02:16:53Z`
     */
    "EndTime": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE `
     */
    "StageName": string;
    /**
     * 指定要操作API所属分组ID
     * @example `16df9d11caa04900bcafe23b38a81600`
     */
    "GroupId": string;
}
