export interface ModifyPartitionNumResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B7A39AE5-0B36-4442-A304-E088526****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
