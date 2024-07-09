export interface UpdateExperimentBasicInfoResponse {
    /**
     * 接口报错信息。
     * @example `null`
     */
    Message: string;
    /**
     * 请求Request ID。
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口返回Code。
     * @example `200`
     */
    Code: string;
    /**
     * 请求成功标识。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
