export interface ListDataReportForServiceGroupResponse {
    /**
     * Id of the request
     * @example `xxxxxxx`
     */
    requestId: string;
    /**
     * 统计数据
     */
    data: {
        /**
         * 服务组名字
         * @example `服务组`
         */
        serviceGroupName: string;
        /**
         * 事件数量
         * @example `1`
         */
        incidentCount: number;
        /**
         * 升级事件数量
         * @example `100`
         */
        escalationIncidentCount: number;
        /**
         * 未响应升级事件数量
         * @example `200`
         */
        unAcknowledgedEscalationIncidentCount: number;
        /**
         * 未完成升级事件数量
         * @example `200`
         */
        unFinishEscalationIncidentCount: number;
        /**
         * 服务组ID
         * @example `100`
         */
        serviceGroupId: number;
        /**
         * MRRA
         * @example `3分19秒`
         */
        meanTimeToAcknowledge: number;
        /**
         * MTTR
         * @example `3分19秒`
         */
        meanTimeToRepair: number;
        /**
         * 完结率
         * @example `19%`
         */
        finishProportion: string;
        /**
         * 事件完结数
         * @example `111`
         */
        finishIncidentCount: number;
    }[];
    /**
     * 页大小
     * @example `10`
     */
    pageSIze: number;
    /**
     * 当前页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 总数
     * @example `100`
     */
    totalCount: number;
}
