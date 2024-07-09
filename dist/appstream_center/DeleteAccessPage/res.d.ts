export interface DeleteAccessPageResponse {
    /**
     * Id of the request
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 状态码：
     * - `200`：成功。
     * - `400`：出错。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `找不到访问页`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: string;
}
