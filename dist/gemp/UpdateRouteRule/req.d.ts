export interface UpdateRouteRuleRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 规则名称
         * @example `规则名称`
         */
        ruleName: string;
        /**
         * 关联服务ID
         * @example `关联服务ID`
         */
        relatedServiceId: number;
        /**
         * 规则ID
         * @example `规则ID`
         */
        routeRuleId: number;
        /**
         * 路由类型：INCIDENT 触发事件 ALERT 仅触发报警
         * @example `ALERT`
         */
        routeType: string;
        /**
         * 事件级别 P1 P2 P3 P4
         * @example `P1`
         */
        incidentLevel: string;
        /**
         * 事件分派对象ID（服务组ID 或用户ID）
         * @example `1`
         */
        assignObjectId: number;
        /**
         *  事件分派对象类型 SERVICEGROUP 服务组  USER 单个用户
         * @example `SERVICEGROUP`
         */
        assignObjectType: string;
        /**
         *  影响程度 LOW-一般 HIGH-严重
         * @example `LOW`
         */
        effection: string;
        /**
         * 时间窗口
         * @example `10`
         */
        timeWindow: number;
        /**
         * 时间窗口单位MINUTE 分钟
         *  SECOND  秒
         * @example `MINUTE`
         */
        timeWindowUnit: string;
        /**
         * 命中次数
         * @example `10`
         */
        matchCount: number;
        /**
         * 子规则
         */
        routeChildRules: {
            /**
             * 子规则ID
             * @example `1`
             */
            childRouteRuleId: number;
            /**
             * 条件
             */
            conditions: {
                /**
                 * 条件key
                 * @example `payload.summary`
                 */
                key: string;
                /**
                 * 匹配值
                 * @example `123`
                 */
                value: string;
                /**
                 * 操作符contain
                 * @example `equals`
                 */
                operationSymbol: string;
            }[];
            /**
             * 监控源ID
             * @example `1`
             */
            monitorSourceId: number;
            /**
             * 是否删除子规则
             * @example `false`
             */
            isValidChildRule: boolean;
            /**
             * 子条件计算关系，0-与，1-或
             * @example `1`
             */
            childConditionRelation: number;
            problemLevel: string;
        }[];
        /**
         * 通知渠道
         */
        notifyChannels: string[];
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 子规则关系 AND OR
         * @example `AND`
         */
        childRuleRelation: string;
        problemLevelGroup: any;
        coverageProblemLevels: string[];
        problemEffectionServices: number[];
        convergenceFields: string[];
        convergenceType: number;
    };
}
