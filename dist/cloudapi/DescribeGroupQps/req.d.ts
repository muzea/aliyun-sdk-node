export interface DescribeGroupQpsRequest {
    /**
     * 开始时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-08-12T06:09:52Z`
     */
    "StartTime": string;
    /**
     * 结束时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2022-08-23T07:27:44Z`
     */
    "EndTime": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
    /**
     * 指定的分组编号
     * @example `264c60db9f764345a13ac5c825b229b9`
     */
    "GroupId": string;
}
