export interface UpdateRuleV4Request {
    /**
     * 规则ID。
     * @example `1`
     */
    "RuleId"?: number;
    /**
     * JsonStrForlRule具体参考文档《[`规则对象说明`](~~453053~~)》
     * @example `无`
     */
    "JsonStrForRule": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
