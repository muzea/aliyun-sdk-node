export interface VerifyRouteRuleResponse {
    /**
     * Id of the request
     * @example `xxxxxx`
     */
    requestId: string;
    /**
     * 验证结果
     */
    data: {
        /**
         * 验证是否成功
         * @example `true`
         */
        isValidRule: boolean;
        /**
         * 事件或者报警
         * @example `INCIDENT、ALERT`
         */
        routeType: string;
        /**
         * 订阅名称
         */
        notifySubscriptionNames: {
            /**
             * 订阅ID
             * @example `111111`
             */
            subscriptionId: number;
            /**
             * 订阅名称
             * @example `订阅名称`
             */
            title: string;
        }[];
        /**
         * 升级策略名称
         */
        escalationPlans: {
            /**
             * 升级计划名称
             * @example `升级计划1`
             */
            escalationPlanName: string;
            /**
             * 升级计划ID
             * @example `111111`
             */
            escalationPlanId: number;
        }[];
        /**
         * 流转规则验证失败的原因
         */
        routeRuleFailReason: string[];
        /**
         * 验证失败监控源ID
         */
        monitorSourceIds: number[];
    };
}
