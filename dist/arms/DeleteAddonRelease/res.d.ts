export interface DeleteAddonReleaseResponse {
    /**
     * Id of the request
     * @example `F7781D4A-2818-41E7-B7BB-79D809E9****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回消息。
     * @example `success`
     */
    Data: string;
}
