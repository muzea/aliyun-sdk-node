export interface PutMetricRuleTargetsRequest {
    /**
     * 报警规则ID。
     * 关于如何获取报警规则ID，请参见[DescribeMetricRuleList](~~114941~~)。
     * @example `ae06917_75a8c43178ab66****`
     */
    "RuleId": string;
    /**
     * 无。
     */
    "Targets": {
        /**
         * 报警触发目标ID。
         * 关于如何获取报警触发目标ID，请参见[DescribeMetricRuleTargets](~~121592~~)。
         * @example `1`
         */
        Id: string;
        /**
         * 资源ARN。格式为`acs:{云产品缩写}:{regionId}:{userId}:/{资源类型}/{资源名称}/message`。目前支持消息服务MNS，弹性伸缩ESS，日志服务SLS，函数计算FC。例如：`acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`。消息服务的ARN参数说明如下：
         * - {云产品缩写}：mns
         * - {userId}：阿里云账号ID。
         * - {regionId}：消息队列或主题所在地域。
         * - {资源类型}`：接收报警的资源类型。取值：
         *   - **queues**：队列。
         *   - **topics**：主题。
         * - {资源名称}：资源名称。
         *   - 如果资源类型为**queues**，则资源名称为队列名称。
         *   - 如果资源类型为**topics**，则资源名称为主题名称。
         * @example `acs:mns:cn-hangzhou:120886317861****:/queues/test/message`
         */
        Arn: string;
        /**
         * 报警级别。取值：
         * - INFO：信息。
         * - WARN：警告。
         * - CRITICAL：紧急。
         * @example `["INFO", "WARN", "CRITICAL"]`
         */
        Level: string;
        /**
         * 报警回调的JSON格式参数。
         * @example `{"customField1":"value1","customField2":"$.name"}`
         */
        JsonParams: string;
    }[];
}
