export interface UpdateEscalationPlanRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 升级计划id
         * @example `433`
         */
        escalationPlanId: number;
        /**
         * 升级计划名称
         * @example `xxx`
         */
        escalationPlanName: string;
        /**
         * 升级计划描述
         * @example `xxxx`
         */
        escalationPlanDescription: string;
        /**
         * 关联范围列表（服务）
         */
        escalationPlanScopeObjects: {
            /**
             * 主键
             * @example `87`
             */
            id: number;
            /**
             * 范围对象id
             * @example `234`
             */
            scopeObjectId: number;
            /**
             * 范围对象类型
             * @example `SERVICE`
             */
            scope: string;
        }[];
        /**
         * 升级计划规则
         */
        escalationPlanRules: {
            /**
             * 主键
             * @example `872`
             */
            id: number;
            /**
             * UN_ACKNOWLEDGE 未响应 UN_FINISH 未完结
             * @example `UN_ACKNOWLEDGE`
             */
            escalationPlanType: string;
            /**
             * 升级计划条件列表
             */
            escalationPlanConditions: {
                /**
                 * P1 P2 P3 P4
                 * @example `P1`
                 */
                level: string;
                /**
                 * LOW HIGH
                 * @example `LOW`
                 */
                effection: string;
            }[];
            /**
             * 升级策略列表
             */
            escalationPlanStrategies: {
                /**
                 * 通知时间
                 * @example `30`
                 */
                noticeTime: number;
                /**
                 * 通知对象id
                 */
                noticeObjects: number[];
                /**
                 * 通知渠道
                 */
                noticeChannels: string[];
                /**
                 * 服务组ID
                 */
                serviceGroupIds: number[];
                /**
                 * 是否是webhook
                 * @example `true`
                 */
                enableWebhook: boolean;
                /**
                 *
                 * @example `UN_ACKNOWLEDGE`
                 */
                escalationPlanType: string;
                noticeRoleList: number[];
            }[];
        }[];
        /**
         * clientToken
         * @example `6b404f14-77d1-4b53-a1a1-30a58bbcfc57`
         */
        clientToken: string;
        isGlobal: boolean;
    };
}
