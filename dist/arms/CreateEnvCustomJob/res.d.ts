export interface CreateEnvCustomJobResponse {
    /**
     * Id of the request
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回成功增加的customJob名称，或异常信息。
     * @example `cutomJob1`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
