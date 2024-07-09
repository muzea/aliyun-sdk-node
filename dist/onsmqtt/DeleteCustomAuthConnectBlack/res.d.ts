export interface DeleteCustomAuthConnectBlackResponse {
    /**
     * Id of the request
     * @example `317076B7-F946-46BC-A98F-4CF9777C****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 调用结果信息
     * @example `operation success.`
     */
    Message: string;
}
