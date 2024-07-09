export interface UpdateUserSayRequest {
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
     * 用户话术ID
     * @example `34512323`
     */
    "UserSayId": number;
    /**
     * 用户话术定义信息
     */
    "UserSayDefinition"?: {
        /**
         * 意图ID
         * @example `123`
         */
        IntentId: number;
        /**
         * 用户话术
         * @example `做核酸了吗您`
         */
        Content: string;
        /**
         * 划槽信息
         */
        SlotInfos: {
            /**
             * 划槽ID
             * @example `346ffg3q23dv`
             */
            SlotId: string;
            /**
             * 槽位在意图话术中的起始下标
             * @example `1`
             */
            StartIndex: number;
            /**
             * 槽位在意图话术中的结束下标（不含）
             * @example `3`
             */
            EndIndex: number;
        }[];
    };
}
