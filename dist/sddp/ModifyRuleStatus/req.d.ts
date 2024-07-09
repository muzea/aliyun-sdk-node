export interface ModifyRuleStatusRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 敏感数据识别规则的唯一标识ID。
     * > 开启或关闭敏感数据识别规则的检测功能，需要提供敏感数据识别规则的唯一标识ID。可调用**DescribeRules**接口获取该ID。
     * @example `12341`
     */
    "Id"?: number;
    /**
     * 敏感数据识别规则的唯一标识ID。多个ID用半角逗号隔开。
     * > 开启或关闭敏感数据识别规则的检测功能，需要提供敏感数据识别规则的唯一标识ID，可调用**DescribeRules**接口获取该ID。
     * @example `1,2,3,4`
     */
    "Ids"?: string;
    /**
     * 开启或关闭敏感数据识别规则的检测功能。取值：
     * - **0**：关闭。
     * - **1**：开启。
     * @example `1`
     */
    "Status": number;
}
