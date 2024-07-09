export interface UpdateInstanceRequest {
    /**
     * 机器人唯一标识
     * @example `chatbot-cn-mp90s2lrk00050`
     */
    "InstanceId"?: string;
    /**
     * 要修改的机器人名称，最多50个字符
     * @example `智能客服-小C`
     */
    "Name"?: string;
    /**
     * 要修改的机器人备注
     * @example `用于C端问答的机器人`
     */
    "Introduction"?: string;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
