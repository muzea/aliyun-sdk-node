export interface GetJMeterSamplingLogsResponse {
    /**
     * 日志记录总数。
     * @example `100`
     */
    TotalCount: number;
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
     * 返回日志记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回第N页日志信息。
     * @example `1`
     */
    PageNumber: number;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 采样器的采样结果
     */
    SampleResults: string[];
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
