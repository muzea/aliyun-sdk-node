export interface ConfigLayer4RemarkRequest {
    /**
     * 要设置的端口转发规则。
     * 该参数使用JSON数组转换的字符串表示。JSON数组的每个元素表示一个已创建的端口转发规则。一次最多可以设置1个端口转发规则。
     * > 您可以调用[DescribeNetworkRules](~~157484~~)查询所有已创建的端口转发规则。
     * 每个端口转发规则包含以下字段：
     * - **InstanceId**：String类型，必选，DDoS高防实例的ID。
     * - **Protocol**：String类型，必选，端口转发协议类型。取值：**tcp**、**udp**。
     * - **FrontendPort**：Integer类型，必选，转发端口。
     * - **Remark**：String类型，必选，备注。支持使用中文字符、英文大小写字符、数字及部分特殊字符，例如：`,.+-*​/_`。最长不允许超过200个字符。
     * @example `[{\"InstanceId\":\"ddosDip-sg-4hr2b3l****\",\"FrontendPort\":2020,\"Protocol\":\"udp\",\"Remark\":\"test\"}]`
     */
    "Listeners": string;
}
