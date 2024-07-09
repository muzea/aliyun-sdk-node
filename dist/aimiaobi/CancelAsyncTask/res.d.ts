export interface CancelAsyncTaskResponse {
    /**
     * 请求唯一标识
     * @example `FB698445-61DA-5361-BF73-1C5F1157E888`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 错误说明
     * @example `Success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     * @example `true`
     */
    Data: boolean;
}
