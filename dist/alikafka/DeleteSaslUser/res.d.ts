export interface DeleteSaslUserResponse {
    /**
     * 状态码。返回200代表成功。
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
     * @example `3CB89F5C-CD97-4C1D-BC7C-FEDEC2F4****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
