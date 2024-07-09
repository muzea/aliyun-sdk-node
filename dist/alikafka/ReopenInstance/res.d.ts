export interface ReopenInstanceResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求 ID。
     * @example `252820E1-A2E6-45F2-B4C9-1056B8CE****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
}
