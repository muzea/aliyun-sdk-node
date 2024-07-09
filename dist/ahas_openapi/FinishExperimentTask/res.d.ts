export interface FinishExperimentTaskResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 接口错误编码
     * @example `P_ERROR_****`
     */
    Code: string;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
}
