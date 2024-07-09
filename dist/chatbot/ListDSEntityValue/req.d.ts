export interface ListDSEntityValueRequest {
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
     * 实体ID
     * @example `123`
     */
    "EntityId": number;
    /**
     * 实体成员ID
     * @example `234`
     */
    "EntityValueId"?: number;
    /**
     * 实体成员名称搜索关键词
     * @example `书`
     */
    "Keyword"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize"?: number;
}
