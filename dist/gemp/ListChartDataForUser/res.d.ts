export interface ListChartDataForUserResponse {
    /**
     * Id of the request
     * @example `1231212`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 时间
         * @example `2021-09-09`
         */
        time: string;
        /**
         * 时间总数
         * @example `32`
         */
        incidentCount: number;
        /**
         * 根据影响等级时间等级分组统计数量
         * @example `{"P1HIGH":32}`
         */
        effectionLevel: any;
        /**
         * 当日平均响应时间单位秒
         * @example `323`
         */
        meanTimeToAcknowledge: number;
        /**
         * 当日平均完结时间单位秒
         * @example `4343`
         */
        meanTimeToRepair: number;
        /**
         * 总平均响应时间
         * @example `3334`
         */
        totalMeanTimeToAcknowledge: number;
        /**
         * 总平均完结时间
         * @example `4343`
         */
        totalMeanTimeToRepair: number;
        /**
         * 升级事件数
         * @example `43`
         */
        escalationIncidentCount: number;
        /**
         * 未响应升级事件数
         * @example `23`
         */
        unAcknowledgedEscalationIncidentCount: number;
        /**
         * 未完结升级事件数
         * @example `23`
         */
        unFinishEscalationIncidentCount: number;
    }[];
}
