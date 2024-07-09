export interface UpdateConsumerOffsetResponse {
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `56729737-C428-4E1B-AC68-7A8C2D5****`
     */
    RequestId: string;
    /**
     * 返回码。返回 **200** 代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
}
