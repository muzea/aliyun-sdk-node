export interface ListRouteRulesResponse {
    /**
     * 请求ID
     * @example `C4BE3837-1A13B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 规则列表
     */
    data: {
        /**
         * 规则ID
         * @example `10000`
         */
        routeRuleId: number;
        /**
         * 租户ID
         * @example `1344383`
         */
        tenantRamId: number;
        /**
         * 规则名称
         * @example `规则名字`
         */
        ruleName: string;
        /**
         * 服务名称
         * @example `关联服务名字`
         */
        relatedServiceName: string;
        /**
         * 时间窗口
         * @example `时间窗口`
         */
        timeWindow: number;
        /**
         * 命中次数
         * @example `10`
         */
        matchCount: number;
        /**
         * 时间单位
         * MINUTE 分钟
         *  SECOND  秒
         * @example `MINUTE`
         */
        timeWindowUnit: number;
        /**
         * 关联服务ID
         * @example `1`
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
         * @example `10`
         */
        assignObjectId: number;
        /**
         * 事件分派对象类型 SERVICEGROUP 服务组  USER 单个用户
         * @example `SERVICEGROUP`
         */
        assignObjectType: string;
        /**
         * 影响程度 LOW-一般 HIGH-严重
         * @example `LOW`
         */
        effection: string;
        /**
         * 创建时间
         * @example `2020-03-05 15:53:55`
         */
        createTime: string;
        /**
         * 修改时间
         * @example `2020-03-05 15:53:55`
         */
        updateTime: string;
        /**
         * 是否启用  DISABLE禁用 ENABLE 启用
         * @example `DISABLE`
         */
        enableStatus: string;
        /**
         * 监控源名称
         * @example `zabbix`
         */
        monitorSourceNames: string;
        /**
         * 服务删除字段
         */
        relServiceDeleteType: number;
        /**
         * 是否有效 0无效 1有效
         */
        isValid: number;
    }[];
    /**
     * 总条数
     * @example `10`
     */
    totalCount: number;
    /**
     * 第几页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 分页大小
     * @example `10`
     */
    pageSize: number;
}
