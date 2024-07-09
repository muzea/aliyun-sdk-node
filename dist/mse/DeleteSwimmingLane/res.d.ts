export interface DeleteSwimmingLaneResponse {
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Success`
     */
    ErrorCode: string;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
}
