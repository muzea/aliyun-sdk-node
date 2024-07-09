export interface DescribeFaultDiagnosisOverallDataResponse {
    /**
     * 异常诊断的概览数据列表。
     */
    OverallData: {
        /**
         * 异常人次或异常用户数。
         * @example `20`
         */
        FaultUserCount: number;
        /**
         * 总人次或总用户数。
         * @example `40`
         */
        TotalUserCount: number;
        /**
         * 异常用户总占比。
         * @example `0.5`
         */
        FaultUserRatio: number;
    };
    /**
     * 异常指标数据。
     */
    MetricData: {
        /**
         * 指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 指标趋势图中x轴横坐标，单位时间为1分钟。
             * @example `1615824000`
             */
            X: string;
            /**
             * 指标趋势图中y轴纵坐标。
             * @example `1`
             */
            Y: string;
            /**
             * 拓展属性，ratio：单位时间内异常用户占比，totalCount：单位时间内用户总数
             */
            Ext: any;
        }[];
    };
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
