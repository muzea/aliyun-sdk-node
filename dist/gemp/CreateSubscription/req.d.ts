export interface CreateSubscriptionRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 通知订阅名称
         * @example `testSubscription`
         */
        subscriptionTitle: string;
        /**
         * 订阅范围类型
         * @example `SERVICE`
         */
        scope: number;
        /**
         * 通知对象类型
         * @example `USER`
         */
        notifyObjectType: number;
        /**
         * 订阅时效
         * @example `LONG_TERM`
         */
        expiredType: number;
        /**
         * 短期时间段
         * @example `20天`
         */
        period: string;
        /**
         * 订阅范围列表
         */
        scopeObjectList: {
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
             * 通知对象id
             * @example `2`
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
             * 条件。json格式，包含多个条件，比如级别、影响程度 kv格式
             */
            strategies: {
                /**
                 * 通知策略条件
                 */
                conditions: {
                    /**
                     * 影响范围
                     * @example `HIGH`
                     */
                    effection: string;
                    /**
                     * 故障通知类型
                     * @example `PROBLEM_UPDATE`
                     */
                    problemNotifyType: string;
                    /**
                     * 等级
                     * @example `P1`
                     */
                    level: string;
                    /**
                     * 动作
                     * @example `INCIDENT_TRIGGER`
                     */
                    action: string;
                }[];
            }[];
            /**
             * 渠道，多个逗号分隔
             * @example `SMS,PHONE`
             */
            channels: string;
            /**
             * 分时段通知订阅渠道
             */
            periodChannel: {
                /**
                 * 工作日通知订阅渠道
                 * @example `SMS,PHONE`
                 */
                workday: string;
                /**
                 * 非工作日通知订阅渠道
                 * @example `SMS,PHONE`
                 */
                nonWorkday: string;
            };
        }[];
        /**
         * 幂等参数
         * @example `601FA6A2-AC5C-4B59-BE11-378FTOKENA11`
         */
        clientToken: string;
        /**
         * 生效开始时间
         * @example `2021-02-03 10:10:10`
         */
        startTime: string;
        /**
         * 失效时间
         * @example `2021-11-03 10:10:10`
         */
        endTime: string;
    };
}
