export interface ListDSEntityRequest {
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 机器人ID
     * @example ` chatbot-cn-yjzbyrEvqd`
     */
    "InstanceId": string;
    /**
     * 筛选项，contains匹配，范围：实体名称（未来扩展：实体成员、同义词）
     * @example `实体`
     */
    "Keyword"?: string;
    /**
     * 为空：全量自定义实体（默认）
     * @example `synonyms
    regex
    system`
     */
    "EntityType"?: string;
    /**
     * 当前页，默认1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前页数量，默认10
     * @example `10`
     */
    "PageSize"?: number;
}
