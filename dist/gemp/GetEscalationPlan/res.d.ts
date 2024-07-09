export interface GetEscalationPlanResponse {
    /**
     * Id of the request
     * @example `A5A1FEAE-9C47-011C-9C73-A376BC2REQUEST`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 升级计划id
         * @example `2345`
         */
        escalationPlanId: number;
        /**
         * 升级计划名称
         * @example `升级计划234`
         */
        escalationPlanName: string;
        /**
         * 升级计划描述
         * @example `描述1234`
         */
        escalationPlanDescription: string;
        /**
         * 升级计划范围对象列表
         */
        escalationPlanScopeObjects: {
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
            /**
             * 范围对象名称
             * @example `xx服务`
             */
            scopeObjectName: string;
            /**
             * 服务删除字段 1正常 0删除
             * @example `1`
             */
            escalationPlanScopeObjects: number;
            /**
             * 服务删除字段 1正常 0删除
             * @example `1`
             */
            scopeObjectDeletedType: number;
        }[];
        /**
         * 升级计划规则列表
         */
        escalationPlanRules: {
            /**
             * 升级计划id
             * @example `345`
             */
            escalationPlanRuleId: number;
            /**
             * 升级计划条件
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
             * 升级计划策略
             */
            escalationPlanStrategies: {
                /**
                 * 通知时间
                 * @example `40`
                 */
                noticeTime: number;
                /**
                 * 升级计划类型
                 * @example `UN_ACKNOWLEDGE`
                 */
                escalationPlanType: string;
                /**
                 * 通知对象列表
                 */
                noticeObjectList: {
                    /**
                     * 通知对象id
                     * @example `234`
                     */
                    noticeObjectId: number;
                    /**
                     * 通知对象名称
                     * @example `张老三`
                     */
                    noticeObjectName: string;
                }[];
                /**
                 * 通知对象渠道
                 * @example `SMS`
                 */
                noticeChannels: string;
                /**
                 * 是否支持群通知
                 * @example `true`
                 */
                enableWebhook: boolean;
                /**
                 * 服务组列表
                 */
                serviceGroups: {
                    /**
                     * 服务组id
                     * @example `343`
                     */
                    id: number;
                    /**
                     * 服务组名称
                     * @example `VCD是`
                     */
                    serviceGroupName: string;
                }[];
                noticeObjects: number[];
                noticeRoleList: number[];
                noticeRoleObjectList: {
                    id: number;
                    name: string;
                }[];
            }[];
        }[];
        /**
         * 创建时间
         * @example `2021-09-09 09:09:09`
         */
        createTime: string;
        /**
         * 是否是全局策略
         */
        isGlobal: boolean;
    };
}
