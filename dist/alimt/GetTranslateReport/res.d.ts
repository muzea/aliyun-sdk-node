export interface GetTranslateReportResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回内容
     * @example `{"result":[{"time":"2021-10-21 00:00:00","total":100}]}`
     */
    Data: string;
    /**
     * 请求ID
     * @example `86D18195-D89C-4C8C-9DC4-5FCE789CE6D5`
     */
    RequestId: string;
}
