export interface ListIncidentTimelinesResponse {
    /**
     * requestId
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 动态
         * @example `标题`
         */
        title: string;
        /**
         * 描述
         * @example `描述`
         */
        description: number;
        /**
         * 备注
         * @example `备注A`
         */
        remark: string;
        /**
         * 服务名称
         * @example `服务A`
         */
        relatedServiceName: string;
        /**
         * 创建时间
         * @example `2021-06-23 00:00:00`
         */
        createTime: string;
        /**
         * 事件标题
         * @example `事件标题`
         */
        incidentTitle: string;
        /**
         * 动态类型  触发新增 INCIDENT_ADD 响应 INCIDENT_RESPONSE 转交 INCIDENT_DELIVER 变更 INCIDENT_UPDATE 添加小计 INCIDENT_ADD_SUBTOTAL 完结 INCIDENT_FINISH 分配 INCIDENT_ASSIGN 升级 INCIDENT_UPGRAD
         * @example `INCIDENT_ADD`
         */
        action: string;
        /**
         * 事件Id
         * @example `3321`
         */
        incidentId: number;
        /**
         * 事件编号
         * @example `I13002001`
         */
        incidentNumber: string;
        /**
         * 动态快照数据
         * @example `{"userName":"小明"}`
         */
        snapshotData: string;
        relRouteRuleDeleteType: number;
    }[];
    /**
     * 总数
     * @example `132`
     */
    totalCount: number;
    /**
     * 页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 行
     * @example `10`
     */
    pageSize: number;
}
