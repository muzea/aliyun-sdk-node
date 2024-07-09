export interface ListDataReportForUserResponse {
    /**
     * Id of the request
     * @example `xxxx`
     */
    requestId: string;
    /**
     * 个人统计数据
     */
    data: {
        /**
         * 用户名字
         * @example `wy`
         */
        userName: string;
        /**
         * 升级事件数量
         * @example `100`
         */
        escalationIncidentCount: number;
        /**
         * 分配事件数量
         * @example `100`
         */
        distributionIncidentCount: number;
        /**
         * 完结事件数量
         * @example `100`
         */
        finishIncidentNumber: number;
        /**
         * 未响应升级数
         * @example `100`
         */
        unAcknowledgedEscalationIncidentCount: number;
        /**
         * 未完结事件数
         * @example `100`
         */
        unFinishEscalationIncidentCount: number;
        /**
         * MRRA
         * @example `3分50秒`
         */
        meanTimeToAcknowledge: string;
        /**
         * MTTA
         * @example `3分50秒`
         */
        meanTimeToRepair: string;
        /**
         * 非分配完结数
         * @example `100`
         */
        unDistributionIncidentCount: number;
        /**
         * 完结率
         * @example `20%`
         */
        finishProportion: string;
        /**
         * 用户ID
         * @example `1111`
         */
        userId: number;
    }[];
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
}
