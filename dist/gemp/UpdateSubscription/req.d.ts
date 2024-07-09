export interface UpdateSubscriptionRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 主键
         * @example `80002020`
         */
        subscriptionId: number;
        /**
         * 通知订阅名称
         * @example `newSubs244`
         */
        subscriptionTitle: string;
        /**
         * 订阅范围类型
         * @example `SERVICE`
         */
        scope: string;
        /**
         * 通知对象类型
         * @example `USER`
         */
        notifyObjectType: string;
        /**
         * 订阅时效
         * @example `LONG_TERM`
         */
        expiredType: string;
        /**
         * 订阅时效
         * @example `20天`
         */
        period: string;
        /**
         * 订阅范围列表
         */
        scopeObjectList: {
            /**
             * 主键id
             * @example `1`
             */
            id: number;
            /**
             * 订阅范围对象id
             * @example `1`
             */
            scopeObjectId: number;
        }[];
        /**
         * 通知对象列表
         */
        notifyObjectList: {
            /**
             * 主键id
             * @example `10`
             */
            id: number;
            /**
             * 通知对象id
             * @example `19`
             */
            notifyObjectId: number;
        }[];
        /**
         * 通知策略列表
         */
        notifyStrategyList: {
            /**
             * 订阅实例类型，事件、报警、故障
             * @example `INCIDENT`
             */
            instanceType: number;
            /**
             * 通知策略
             */
            strategies: {
                /**
                 * 报警等级
                 * @example `10`
                 */
                id: string;
                /**
                 * 故障等级
                 * @example `SMS,WEIXIN_GROUP`
                 */
                channels: string;
                /**
                 * 影响程度
                 */
                conditions: {
                    /**
                     * 等级
                     * @example `P1`
                     */
                    level: string;
                    /**
                     * 影响程度
                     * @example `HIGH`
                     */
                    effection: string;
                    /**
                     * 故障通知类型
                     * @example `PROBLEM_NOTIFY`
                     */
                    problemNotifyType: string;
                    /**
                     * 事件动作
                     * @example `INCIDENT_TRIGGER`
                     */
                    action: string;
                }[];
                /**
                 * 分时段通知订阅渠道
                 */
                periodChannel: {
                    /**
                     * 工作日通知订阅渠道
                     * @example `SMS,WEIXIN_GROUP`
                     */
                    workday: string;
                    /**
                     * 非工作日通知订阅渠道
                     * @example `SMS,WEIXIN_GROUP`
                     */
                    nonWorkday: string;
                };
            }[];
        }[];
        /**
         * 生效开始时间
         * @example `2021-04-04 10:10:11`
         */
        startTime: string;
        /**
         * 失效时间
         * @example `2022-05-09 10:10:23`
         */
        endTime: string;
    };
}
