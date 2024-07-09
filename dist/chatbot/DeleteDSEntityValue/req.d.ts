export interface DeleteDSEntityValueRequest {
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
     * @example `345346223452`
     */
    "EntityId": number;
    /**
     * 实体成员ID
     * @example `3453453452`
     */
    "EntityValueId": number;
}
