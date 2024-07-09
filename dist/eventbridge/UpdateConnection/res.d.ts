export interface UpdateConnectionResponse {
    /**
     * 本次请求的ID。
     * @example `8346BE8F-40F3-533D-A0B8-1359C31BD5BA`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：200：成功。
     * @example `200`
     */
    Code: string;
}
