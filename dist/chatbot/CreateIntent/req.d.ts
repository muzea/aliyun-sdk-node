export interface CreateIntentRequest {
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
     * 意图定义结构体
     */
    "IntentDefinition": {
        /**
         * 意图名称
         * @example `查天气意图`
         */
        IntentName: string;
        /**
         * 意图别名
         * @example `查天气意图`
         */
        AliasName: string;
        /**
         * 槽位信息
         */
        SlotInfos: {
            /**
             * 滑槽ID
             * @example `fg452dfg3df23`
             */
            SlotId: string;
            /**
             * 槽位名
             * @example `天气`
             */
            Name: string;
            /**
             * 关联的实体名
             * @example `天气`
             */
            Value: string;
            /**
             * 是否交互式
             * @example `false`
             */
            Interactive: boolean;
            /**
             * 是否数组
             * @example `false`
             */
            Array: boolean;
            /**
             * 是否脱敏
             * @example `false`
             */
            Encrypt: boolean;
        }[];
    };
}
