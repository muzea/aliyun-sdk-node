export interface GetJMeterSampleMetricsResponse {
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 采样器聚合数据列表。
     */
    SampleMetricList: string[];
    /**
     * 采样器列表，可根据该列表传递需要查询的采样器。
     * @example `{0:"Http Request"}`
     */
    SamplerMap: any;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
