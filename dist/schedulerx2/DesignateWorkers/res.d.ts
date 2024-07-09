export interface DesignateWorkersResponse {
    /**
     * 请求ID
     * @example `765xxx`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `job is not existed`
     */
    Message: string;
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
