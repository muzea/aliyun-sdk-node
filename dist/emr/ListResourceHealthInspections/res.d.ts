export interface ListResourceHealthInspectionsResponse {
    HealthInspections: {
        /**
         * 应用名称。
         * @example `HDFS`
         */
        ApplicationName: string;
        /**
         * 组件名称。
         * @example `DataNode`
         */
        ComponentName: string;
        /**
         * 节点ID。
         * @example `core1-1`
         */
        NodeId: string;
        /**
         * 节点名称。
         * @example `core1-1`
         */
        NodeName: string;
        /**
         * 巡检项名称。
         * @example `live_status_check`
         */
        InspectionName: string;
        /**
         * 规则名称。
         * @example `live_status_check_1`
         */
        RuleName: string;
        /**
         * 健康状态。
         * @example `GOOD`
         */
        HealthStatus: string;
        /**
         * 健康详细信息。
         * @example `Connection timeout`
         */
        HealthMessage: string;
        /**
         * 最近上报时间戳。
         * @example `1639709192940`
         */
        ReportTime: number;
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置，空代表数据已经读取完毕。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
