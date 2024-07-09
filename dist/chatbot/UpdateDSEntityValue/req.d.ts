export interface UpdateDSEntityValueRequest {
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
     * @example `223423423`
     */
    "EntityId": number;
    /**
     * 实体成员ID，创建实体成员时为空
     * @example `2342377423`
     */
    "EntityValueId": number;
    /**
     * 实体类型为synonyms时，表示实体归一化值；当实体类型为regex时，表示正则表达式文本
     * @example `书本类型`
     */
    "Content": string;
    /**
     * 同义词列表
     */
    "Synonyms"?: string[];
}
