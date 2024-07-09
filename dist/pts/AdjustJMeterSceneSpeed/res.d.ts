export interface AdjustJMeterSceneSpeedResponse {
    /**
     * 错误提示消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DC4E31DDA77-6745-4925-B423-4E89VV34221A`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
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
    /**
     * 报告ID。
     * @example `DYYPZIH`
     */
    ReportId: string;
}
