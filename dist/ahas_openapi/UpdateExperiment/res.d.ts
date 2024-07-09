export interface UpdateExperimentResponse {
    /**
     * 错误信息。
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口反馈编码。
     * @example `P_ERROR_****`
     */
    Code: string;
    /**
     * 接口请求成功标识。
     * @example `true`
     */
    Success: boolean;
}
