export interface CreateInstanceRequest {
    /**
     * 机器人名称，不超过50个字符
     * @example `小蜜机器人`
     */
    "Name"?: string;
    /**
     * 机器人服务的语言，如zh-cn、en-us，默认值为业务空间的默认语言。可选值为业务空间支持的语言
     * @example `zh-cn`
     */
    "LanguageCode"?: string;
    /**
     * 机器人备注，不超过50字
     * @example `用于手机app的小蜜机器人`
     */
    "Introduction"?: string;
    /**
     * 机器人类型，默认为scenario_im
     * @example `scenario_im`
     */
    "RobotType"?: string;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
