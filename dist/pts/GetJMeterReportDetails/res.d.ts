export interface GetJMeterReportDetailsResponse {
    /**
     * 报告概览信息
     */
    ReportOverView: {
        /**
         * 报告ID
         * @example `GHB56VD`
         */
        ReportId: string;
        /**
         * 报告名
         * @example `下单场景-20220202222222`
         */
        ReportName: string;
        /**
         * 启动时间
         * @example `2023-05-03 10:35:11`
         */
        StartTime: string;
        /**
         * 停止时间
         * @example `2023-05-03 10:45:11`
         */
        EndTime: string;
        /**
         * 实际使用的引擎数
         * @example `1`
         */
        AgentCount: number;
        /**
         * 消耗的VUM
         * @example `4452`
         */
        Vum: number;
    };
    /**
     * 全场景维度的信息
     */
    SceneMetrics: {
        /**
         * 平均TPS
         * @example `78`
         */
        AvgTps: number;
        /**
         * 平均RT，单位毫秒
         * @example `23`
         */
        AvgRt: number;
        /**
         * 90分位RT，单位毫秒
         * @example `35`
         */
        Seg90Rt: number;
        /**
         * 99分位RT，单位毫秒
         * @example `56`
         */
        Seg99Rt: number;
        /**
         * 请求成功率，为小于等于100的非负数
         * @example `99.98`
         */
        SuccessRateReq: number;
        /**
         * 请求失败数
         * @example `34`
         */
        FailCountReq: number;
        /**
         * 请求总数
         * @example `717`
         */
        AllCount: number;
    };
    /**
     * 接口维度的信息
     */
    SamplerMetricsList: {
        /**
         * 接口名
         * @example `登录`
         */
        ApiName: string;
        /**
         * 平均TPS
         * @example `12`
         */
        AvgTps: number;
        /**
         * 平均RT，单位毫秒
         * @example `44.2`
         */
        AvgRt: number;
        /**
         * 75分位RT，单位毫秒
         * @example `22.4`
         */
        Seg75Rt: number;
        /**
         * 90分位RT，单位毫秒
         * @example `65`
         */
        Seg90Rt: number;
        /**
         * 99分位RT，单位毫秒
         * @example `77`
         */
        Seg99Rt: number;
        /**
         * 最大RT，单位毫秒
         * @example `78`
         */
        MaxRt: number;
        /**
         * 最小RT，单位毫秒
         * @example `11`
         */
        MinRt: number;
        /**
         * 请求成功率，为小于等于100的非负数
         * @example `100`
         */
        SuccessRateReq: number;
        /**
         * 请求失败数
         * @example `10`
         */
        FailCountReq: number;
        /**
         * 请求总数
         * @example `731`
         */
        AllCount: number;
    }[];
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 系统状态码。
     * @example `4001`
     */
    Code: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `查询报告失败`
     */
    Message: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 文档链接。
     * @example `空`
     */
    DocumentUrl: string;
    /**
     * 对应于美杜莎的key。若无此codeKey，或者codeKey对应的内容获取失败/空,则获取返回的message内容作为默认信息展示
     * @example `空`
     */
    CodeKey: string;
    /**
     * 返回的信息,动态内容,用于替换动态内容,通过&&进行分隔,顺序替换
     * @example `空`
     */
    DynamicCtx: string;
}
