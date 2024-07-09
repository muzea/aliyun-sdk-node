export interface UpdateDSEntityRequest {
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
     * 实体名称，仅支持中文、大小写字母、数字、下划线
     * @example `实体名称`
     */
    "EntityName": string;
    /**
     * 实体类型：[synonyms（同义词），regex（正则）]
     * @example `synonyms`
     */
    "EntityType"?: string;
}
