export interface UpdateLgfRequest {
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 机器人ID
     * @example ` chatbot-cn-yjzbyrEvqd`
     */
    "InstanceId": string;
    /**
     * LGF ID
     * @example `12121`
     */
    "LgfId": number;
    /**
     * LGF 信息
     */
    "LgfDefinition": {
        /**
         * 意图ID
         * @example `23234523522`
         */
        IntentId: number;
        /**
         * LGF配置
         * @example `.{0,10}[天气]`
         */
        RuleText: string;
    };
}
