export interface GetSubscriptionResponse {
    /**
     * requestId
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    /**
     * Object
     */
    data: {
        /**
         * 订阅id
         * @example `68`
         */
        subscriptionId: number;
        /**
         * 通知订阅名称
         * @example `newTitle`
         */
        subscriptionTitle: string;
        /**
         * ALL全部 SERVICE服务 ROUTERULE 流转规则
         * @example `SERVICE`
         */
        scope: string;
        /**
         * SERVICEGROUP服务组 USER个人
         * @example `USER`
         */
        notifyObjectType: string;
        /**
         * 有效期类型 LONG_TERM长期 SHORT_TERM短期
         * @example `LONG_TERM`
         */
        expiredType: string;
        /**
         * 时间段字符串
         * @example `1个月`
         */
        period: string;
        /**
         * 时效开始时间
         * @example `2020-05-9 10:10:10`
         */
        startTime: string;
        /**
         * 时效结束时间
         * @example `2021-08-9 10:10:10`
         */
        endTime: string;
        /**
         * ENABLE启用 DISABLE禁用
         * @example `ENABLE`
         */
        status: string;
        /**
         * Array
         */
        scopeObjectList: {
            /**
             * id主键
             * @example `10`
             */
            id: number;
            /**
             * 订阅范围类型ALL全部 SERVICE服务 ROUTERULE 流转规则
             * @example `SERVICE`
             */
            scope: string;
            /**
             * 订阅范围对象关联表主键id
             * @example `10`
             */
            scopeObjectId: number;
            /**
             * 订阅范围对象名称
             * @example `阿里云`
             */
            scopeObject: string;
            isValid: number;
        }[];
        /**
         * 通知对象列表
         */
        notifyObjectList: {
            /**
             * id主键
             * @example `23`
             */
            id: number;
            /**
             * 通知对象类型SERVICEGROUP服务组 USER个人
             * @example `USER`
             */
            notifyObjectType: number;
            /**
             * 关联主键id
             * @example `19`
             */
            notifyObjectId: number;
            /**
             * 通知对象名
             * @example `TestName`
             */
            name: string;
        }[];
        /**
         * 通知策略列表
         */
        notifyStrategyList: {
            /**
             * 订阅实例类型，INCIDENT事件、ALERT报警、PROBLEM故障
             * @example `INCIDENT`
             */
            instanceType: number;
            /**
             * 策略
             */
            strategies: {
                /**
                 * 策略主键
                 * @example `12`
                 */
                id: number;
                /**
                 * 通知渠道
                 * @example `SMS`
                 */
                channels: string;
                /**
                 * 条件
                 */
                conditions: {
                    /**
                     * 影响范围
                     * @example `HIGH`
                     */
                    effection: string;
                    /**
                     * 故障通知类型
                     * @example `PROBLEM_NOTIFY`
                     */
                    problemNotifyType: string;
                    /**
                     * 等级
                     * @example `P1`
                     */
                    level: string;
                    /**
                     * 时间动作
                     * @example `INCIDENT_TRIGGER`
                     */
                    action: string;
                }[];
                /**
                 * 分时间段渠道
                 */
                periodChannel: {
                    /**
                     * 工作时间
                     * @example `DINGDING`
                     */
                    workday: string;
                    /**
                     * 非工作时间
                     * @example `DINGDING`
                     */
                    nonWorkday: string;
                };
            }[];
        }[];
    };
}
