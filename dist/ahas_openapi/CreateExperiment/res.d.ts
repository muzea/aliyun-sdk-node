export interface CreateExperimentResponse {
    /**
     * 请求Request ID。
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 接口报错信息。
     * @example `无`
     */
    Message: string;
    /**
     * 故障演练ID。
     * @example `1234567890123456800`
     */
    ExperimentId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口返回Code。
     * @example `P_ERROR_****`
     */
    Code: string;
    /**
     * 请求成功标识。
     * true：成功
     * false：失败
     * @example `true`
     */
    Success: boolean;
}
