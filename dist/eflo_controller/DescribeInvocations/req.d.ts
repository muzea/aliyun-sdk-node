export interface DescribeInvocationsRequest {
    /**
     * 命令执行ID
     * @example `t-cd03crwys0lrls0`
     */
    "InvokeId": string;
    /**
     * 实例ID
     * @example `e01-cn-zvp2tgykr08`
     */
    "NodeId"?: string;
    /**
     * 是否在结果中返回命令运行的输出信息。
     * - true：返回。此时，您至少指定参数`InvokeId`或`InstanceId`。
     * - false：不返回。
     * 默认值：false。
     * @example `true`
     */
    "IncludeOutput"?: boolean;
    /**
     * 设置返回数据中`CommandContent`字段和`Output`字段的编码方式。取值范围：
     * - PlainText：返回原始命令内容和输出信息。
     * - Base64：返回Base64编码后的命令内容和输出信息。
     * 默认值：Base64。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
}
