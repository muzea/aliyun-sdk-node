export interface CreateRouteRuleRequest {
    /**
     * 创建流转规则参数
     */
    "body"?: {
        /**
         * 流转规则名字
         * @example `规则名称`
         */
        ruleName: string;
        /**
         * 启用状态
         * @example `启用禁用状态`
         */
        enableStatus: string;
        /**
         * 关联服务ID
         * @example `100`
         */
        relatedServiceId: number;
        /**
         * 路由类型：INCIDENT 触发事件 ALERT 仅触发报警
         * @example `INCIDENT`
         */
        routeType: string;
        /**
         * 事件级别 P1 P2 P3 P4
         * @example `P1`
         */
        incidentLevel: string;
        /**
         * 事件分派对象ID（服务组ID 或用户ID）
         * @example `65`
         */
        assignObjectId: number;
        /**
         *  事件分派对象类型 SERVICEGROUP 服务组  USER 单个用户
         * @example `SERVICEGROUP`
         */
        assignObjectType: string;
        /**
         * 影响程度 LOW-一般 HIGH-严重
         * @example `LOW`
         */
        effection: string;
        /**
         * 时间窗口
         * @example `2`
         */
        timeWindow: number;
        /**
         * 命中次数
         * @example `3`
         */
        matchCount: number;
        /**
         * 时间窗口单位
         * MINUTE 分钟
         *  SECOND  秒
         * @example `MINUTE`
         */
        timeWindowUnit: string;
        /**
         * 子规则数组
         */
        routeChildRules: {
            /**
             * 监控源ID
             * @example `1`
             */
            monitorSourceId: number;
            /**
             * 匹配条件列表
             */
            conditions: {
                /**
                 * 匹配key
                 * @example `payload.summary`
                 */
                key: string;
                /**
                 * 匹配value
                 * @example `123`
                 */
                value: string;
                /**
                 * 操作符
                 * @example `equals`
                 */
                operationSymbol: string;
            }[];
            /**
             * 0-与，1-或
             * @example `0`
             */
            childConditionRelation: number;
            /**
             * 故障级别 P1 P2 P3 P4
             * @example `P1`
             */
            problemLevel: string;
        }[];
        /**
         * 通知渠道列表
         */
        notifyChannels: string[];
        /**
         * 幂等号
         * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
         */
        clientToken: string;
        /**
         * 子规则关系AND，OR
         * @example `AND`
         */
        childRuleRelation: string;
        /**
         * 故障等级组
         */
        problemLevelGroup: any;
        /**
         * 故障等级覆盖
         */
        coverageProblemLevels: string[];
        /**
         * 故障影响服务
         */
        problemEffectionServices: number[];
        /**
         * 收敛字段集合
         */
        convergenceFields: string[];
        /**
         * 收敛类型（0：流转规则收敛，1：字段收敛）
         * @example `0`
         */
        convergenceType: number;
    };
}
