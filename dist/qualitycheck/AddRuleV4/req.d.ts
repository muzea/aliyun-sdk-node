export interface AddRuleV4Request {
    /**
     * JsonStrForlRule具体参考文档《[`规则对象说明`](~~453053~~)》
     * @example `无`
     */
    "JsonStrForRule": string;
    /**
     * 是否复制。为true是等效于复制规则。
     * @example `false`
     */
    "IsCopy"?: boolean;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
