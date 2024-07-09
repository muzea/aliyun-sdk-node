export interface UpdateRuleByIdRequest {
    /**
     * 规则ID。新增时不需要提供，修改时需要提供。
     * @example `1`
     */
    "RuleId"?: number;
    /**
     * JsonStrForlRule具体参考文档《[`规则对象说明`](https://help.aliyun.com/document_detail/453053.html)》
     * @example `{}`
     */
    "JsonStrForRule": string;
    /**
     * 返回和该规则有关联的质检方案ID名称。
     * @example `1`
     */
    "ReturnRelatedSchemes"?: boolean;
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
