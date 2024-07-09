export interface GetInstancePublishTaskStateRequest {
    /**
     * 机器人唯一标识
     * @example `chatbot-cn-mp90s2lrk00050`
     */
    "InstanceId"?: string;
    /**
     * 任务ID
     * @example `8521`
     */
    "Id"?: number;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
