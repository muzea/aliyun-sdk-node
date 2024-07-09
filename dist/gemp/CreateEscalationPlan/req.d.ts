export interface CreateEscalationPlanRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 升级计划名称
         * @example `name123`
         */
        escalationPlanName: string;
        /**
         * 升级计划描述
         * @example `desc2322424`
         */
        escalationPlanDescription: string;
        /**
         * 升级计划范围对象列表
         */
        escalationPlanScopeObjects: {
            /**
             * 范围对象id
             * @example `23433`
             */
            scopeObjectId: number;
            /**
             * 范围对象类型
             * @example `SERVICE`
             */
            scope: string;
        }[];
        /**
         * 升级计划规则列表
         */
        escalationPlanRules: {
            /**
             * 升级条件
             */
            escalationPlanConditions: {
                /**
                 * 事件等级
                 * @example `P1`
                 */
                level: string;
                /**
                 * 影响等级
                 * @example `LOW`
                 */
                effection: string;
            }[];
            /**
             * 升级策略
             */
            escalationPlanStrategies: {
                /**
                 * 通知时间
                 * @example `40`
                 */
                noticeTime: string;
                /**
                 * 升级通知对象id列表
                 */
                noticeObjects: number[];
                /**
                 * 升级通知策略
                 */
                noticeChannels: string[];
                /**
                 * 是否webhook
                 * @example `true`
                 */
                enableWebhook: boolean;
                /**
                 * 服务组id
                 */
                serviceGroupIds: number[];
                escalationPlanType: string;
                noticeRoleList: number[];
            }[];
            /**
             * 升级类型
             * @example `UN_FINISH`
             */
            escalationPlanType: string;
        }[];
        /**
         * clientToken
         * @example `6b404f14-77d1-4b53-a1a1-30a58bREQUEST`
         */
        clientToken: string;
        isGlobal: boolean;
    };
}
