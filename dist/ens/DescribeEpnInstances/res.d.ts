export interface DescribeEpnInstancesResponse {
    EPNInstances: {
        /**
         * 边边网络实例。
         */
        EPNInstance: {
            /**
             * 创建时间，UTC时间格式。
             * @example `2019-11-01T06:08:46Z`
             */
            CreationTime: string;
            /**
             * 边边网络实例ID。
             * @example `epn****`
             */
            EPNInstanceId: string;
            /**
             * 边边通信实例名称。
             * @example `ens_test_epn`
             */
            EPNInstanceName: string;
            /**
             * 边边通信：EdgeToEdge。
             * @example `EdgeToEdge`
             */
            EPNInstanceType: string;
            /**
             * 结束时间，UTC时间格式。
             * @example `2019-11-01T06:08:46Z`
             */
            EndTime: string;
            /**
             * 上行限速带宽，单位Mbps。
             * @example `40`
             */
            InternetMaxBandwidthOut: number;
            /**
             * 修改时间，UTC时间格式。
             * @example `2019-11-01T06:08:46Z`
             */
            ModifyTime: string;
            /**
             * 组网模式，取值：
             * - 智能加速（外网）：SpeedUp。
             * - 内网联通（内网模式）：Connection。
             * - 智能加速及内网联通（内网模式）：SpeedUpAndConnection。
             * @example `SpeedUp`
             */
            NetworkingModel: string;
            /**
             * 开始时间，UTC时间格式。
             * @example `2019-11-01T06:08:46Z`
             */
            StartTime: string;
            /**
             * 运行状态：
             * - Running：运行中。
             * - Excuting：执行中。
             * - Stopped：已停止。
             * @example `Running`
             */
            Status: string;
        }[];
    };
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数。
     * @example `40`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A1707FC0-430C-423A-B624-284046B20399`
     */
    RequestId: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalCount: number;
}
