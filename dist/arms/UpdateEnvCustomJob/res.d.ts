export interface UpdateEnvCustomJobResponse {
    /**
     * Id of the request
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
    /**
     * 接口状态或pop错误码
     * @example `200`
     */
    Code: number;
    /**
     * 操作结果。
     * @example `success`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
