export interface GetRouteRuleResponse {
    /**
     * 请求ID
     * @example `6B9347ED-FD93-42B4-B9A4-7282962F5D6A`
     */
    requestId: string;
    /**
     * 规则详情
     */
    data: {
        /**
         * 规则ID
         * @example `180000000`
         */
        routeRuleId: number;
        /**
         * 流转规则名字
         * @example `规则1`
         */
        ruleName: string;
        /**
         * 时间窗口
         * @example `3`
         */
        timeWindow: number;
        /**
         * 关联服务名称
         * @example `冲上云霄`
         */
        relatedServiceName: string;
        /**
         * 是否启用  disable禁用 enable 启用
         * @example `DISABLE`
         */
        enableStatus: string;
        /**
         * 关联服务ID
         * @example `1000`
         */
        relatedServiceId: number;
        /**
         * 路由类型：INCIDENT 触发事件 ALERT 仅触发报警
         * @example `INCIDENT`
         */
        routeType: string;
        /**
         * 事件级别 1-P1 2-P2 3-P3 4-P4
         * @example `P1`
         */
        incidentLevel: string;
        /**
         * 事件分派对象ID（服务组ID 或用户ID）
         * @example `1000`
         */
        assignObjectId: number;
        /**
         *     事件分派对象类型 SERVICEGROUP 服务组  USER 单个用户
         * @example `SERVICEGROUP`
         */
        assignObjectType: string;
        /**
         * 影响程度  LOW一般  HIGH-严重
         * @example `LOW`
         */
        effection: string;
        /**
         * 命中次数
         * @example `3`
         */
        matchCount: number;
        /**
         * 子规则关系，0与，1或
         * @example `AND、OR`
         */
        childRuleRelation: string;
        /**
         * 子规则
         */
        eventRouteChildRules: {
            /**
             * 子规则ID
             * @example `1000`
             */
            childRouteRuleId: number;
            /**
             * 是否有效得规则true有效 false无效
             * @example `false`
             */
            isValidChildRule: boolean;
            /**
             * 规则ID
             * @example `1800`
             */
            parentRuleId: number;
            /**
             * 监控源ID
             * @example `1`
             */
            monitorSourceId: number;
            /**
             * 集成配置ID
             * @example `1`
             */
            monitorIntegrationConfigId: number;
            /**
             * 监控源名称
             * @example `zabbix`
             */
            monitorSourceName: string;
            /**
             * 子条件计算关系，0-与，1-或
             * @example `1`
             */
            childConditionRelation: number;
            /**
             * 匹配条件
             */
            conditions: {
                /**
                 * 条件可以
                 * @example `alarmName`
                 */
                key: string;
                /**
                 * 匹配值
                 * @example `Zabbix server`
                 */
                value: string;
                /**
                 * 操作符
                 * @example `contain`
                 */
                operationSymbol: string;
            }[];
            /**
             * 故障等级
             * @example `1`
             */
            problemLevel: string;
        }[];
        /**
         * 创建时间
         * @example `2020-09-08 15:30:30`
         */
        createTime: string;
        /**
         * 修改时间
         * @example `2020-09-08 15:30:30`
         */
        updateTime: string;
        /**
         * 通知渠道
         */
        notifyChannels: string[];
        /**
         * 通知渠道名称
         */
        notifyChannelNames: string[];
        /**
         * 通知对象名称
         * @example `刘德华`
         */
        assignObjectName: string;
        /**
         * 服务删除字段
         * @example `1`
         */
        relServiceDeleteType: number;
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
         */
        convergenceType: number;
    };
}
