export interface ListIncidentDetailTimelinesResponse {
    /**
     * Id of the request
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 主题
         * @example `标题`
         */
        title: string;
        /**
         * 描述
         * @example `描述`
         */
        description: string;
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
         * @example `创建时间`
         */
        createTime: string;
        /**
         * 事件Id
         * @example `事件Id`
         */
        incidentId: number;
        /**
         * 触发新增  INCIDENT_ADD
         * 响应  INCIDENT_RESPONSE
         * 转交 INCIDENT_DELIVER
         * 变更 INCIDENT_UPDATE
         * 添加小计 INCIDENT_ADD_SUBTOTAL
         * 完结  INCIDENT_FINISH
         * 分配 INCIDENT_ASSIGN
         * 升级  INCIDENT_UPGRADE
         * @example `INCIDENT_ADD`
         */
        action: string;
        /**
         * 快照数据
         * @example `{"userName":"小明"}`
         */
        snapshotData: string;
        relRouteRuleDeleteType: number;
    }[];
    /**
     * 总数
     * @example `总数`
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
