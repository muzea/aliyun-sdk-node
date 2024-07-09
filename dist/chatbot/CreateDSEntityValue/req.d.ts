export interface CreateDSEntityValueRequest {
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
     * 实体ID，修改实体成员时可为空
     * @example `12`
     */
    "EntityId": number;
    /**
     * 实体值（或正则表达式）
     * @example `书类型`
     */
    "Content": string;
    /**
     * 同义词列表
     */
    "Synonyms"?: string[];
}
