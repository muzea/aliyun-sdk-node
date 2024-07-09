export interface ListAlertsResponse {
    /**
     * 请求ID
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 报警列表
     */
    data: {
        /**
         * 报警ID
         * @example `20000`
         */
        alertId: number;
        /**
         * 创建时间
         * @example `2020-03-05 15:53:55`
         */
        createTime: string;
        /**
         * 关联服务名称
         * @example `冲上云霄`
         */
        relatedServiceName: string;
        /**
         * 告警优先级：
         * -  1：P1
         * - 2：P2
         * - 3：P3
         * - 4：P4
         * @example `P1`
         */
        alertLevel: string;
        /**
         * 报警标题
         * @example `报警`
         */
        title: string;
        /**
         * 收敛量
         * @example `10`
         */
        sourceEventCount: number;
        /**
         * 报警源
         * @example `流转规则A`
         */
        alertSourceName: string;
        /**
         * 第一次告警上报时间
         * @example `2021-09-08 18:30:00`
         */
        firstEventTime: string;
        /**
         * 关联流转规则ID
         * @example `10000`
         */
        routeRuleId: number;
        /**
         * 报警编号
         * @example `A123123123`
         */
        alertNumber: string;
        /**
         * 流转规则名字
         * @example `流转规则`
         */
        routeRuleName: string;
        /**
         * 服务删除字段：
         * - 1正常
         * - 0删除
         * @example `1`
         */
        relServiceDeleteType: number;
        /**
         * 规则删除字段：
         * - 1正常
         * - 0删除
         * @example `1`
         */
        routeRuleDeleteType: number;
        /**
         * 原始数据名称
         * @example `name`
         */
        monitorSourceName: string;
    }[];
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
    /**
     * 当前页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 页大小
     * @example `10`
     */
    pageSize: number;
}
